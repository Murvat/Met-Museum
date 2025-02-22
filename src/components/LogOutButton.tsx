import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../feauters/auth/authSlice"; // Import the clearUser action

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from Redux state
    dispatch(clearUser());

    // Clear user data from localStorage
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 p-2 m-2 rounded-3xl text-white hover:bg-blue-600 transition-all"
    >
      Log out
    </button>
  );
};

export default LogoutButton;