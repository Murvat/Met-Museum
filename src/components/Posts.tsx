import { useGetPostsQuery } from "../api/museumApi";
import Post from "./Post";
import type { IPosts } from "../api/museumApi";
import { useSelector } from "react-redux";
// import { selectPosts } from "../feauters/filtersSlice"

interface IPostProps {
  posts: IPosts[];
  isLoading: boolean;
  isError: boolean;
}

export default function Posts({ posts, isLoading, isError }: IPostProps) {
  // Use Redux to get filtered posts (if needed)
  // const filteredPosts = useSelector(selectPosts);

  // Display loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 text-lg">Loading posts...</p>
      </div>
    );
  }

  // Display error state
  if (isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 text-lg">Error loading posts. Please try again.</p>
      </div>
    );
  }

  // Display posts
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post: IPosts) => (
          <div
            key={post.id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Post data={post} />
          </div>
        ))}
      </div>
    </div>
  );
}