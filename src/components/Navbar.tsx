import { useSelector } from "react-redux";
import Header from "./Header";
import Search from "./Search";
import LogoutButton from "./LogOutButton";
import { selectUser } from "../feauters/auth/authSlice";
interface ISearch{
  onSearch:(query: string) => void
}
export default function Navbar({onSearch}:ISearch) {
  const username = useSelector(selectUser);
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Header / Logo */}
        <Header />
        <div className="bg-gray-400 p-5 rounded-lg">
          <h2 className="m-2">Username:{username}</h2>
        {username && <LogoutButton />} 
        </div>
        {/* Search Bar */}
        <Search onSearch={onSearch} />
      </div>
    </div>
  );
}
