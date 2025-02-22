import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { FormEvent, useEffect, useState } from "react";
import { addUser } from "../feauters/auth/authSlice"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [surname, setSurname] = useState<string | null>(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  // Update local storage when surname changes
  useEffect(() => {
    if (surname) {
     setSurname('')
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (surname) {
      dispatch(addUser({ surname })); // Dispatch the addUser action
      localStorage.setItem("user", JSON.stringify(surname)); // Update local storage
      setSurname(null); // Reset the surname state
      navigate("/"); // Redirect to the home page
    } else {
      alert("Please enter your surname!"); // Show an alert if surname is empty
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>

        {/* Input Field */}
        <div className="mb-4">
          <label htmlFor="surname" className="block text-gray-600 font-medium">
            Surname
          </label>
          <input
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="surname"
            type="text"
            placeholder="Enter your surname"
            value={surname || ""}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}