import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Contact from "../components/Contact";
import { IPosts, useGetPostsQuery } from "../api/museumApi";

export default function Home() {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();
  const [filteredPosts, setFilteredPosts] = useState<IPosts[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");

  // Update filteredPosts when posts changes
  useEffect(() => {
    if (posts.length > 0) {
         setFilteredPosts(posts);
    }
  }, [posts]);

  // Handle filter changes
  const handleFilter = (filter: string) => {
    switch (filter) {
      case "plus":
        setFilteredPosts(posts.filter((post) => post.width > 3000));
        break;
      case "minus":
        setFilteredPosts(posts.filter((post) => post.width < 3000));
        break;
      case "reset":
        setFilteredPosts(posts); // Reset to all posts
        break;
      default:
        setFilteredPosts(posts); // Default to all posts
        break;
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = posts.filter((post) =>
      post.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="flex justify-center items-start gap-8 bg-gray-100 p-6">
        {/* Filter Section */}
        <div className="w-1/2 bg-white shadow-lg rounded-lg p-4 h-auto max-h-[300px]">
          <Filter handleFilter={handleFilter} />
        </div>

        {/* Contact Section - Same Height as Filter */}
        <div className="w-1/2 bg-white shadow-lg rounded-lg p-4 h-auto max-h-[300px]">
          <Contact />
        </div>
      </div>


      {/* Display Posts */}
      {isLoading ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading posts...</p>
        </div>
      ) : isError ? (
        <div className="text-center py-8">
          <p className="text-red-600">Error loading posts. Please try again.</p>
        </div>
      ) : (
        <Posts posts={filteredPosts} isError={isError} isLoading={isLoading} />
      )}
    </>
  );
}