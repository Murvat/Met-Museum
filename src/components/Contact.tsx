import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-4">
        Feel free to reach out to us for any inquiries.
      </p>
      <Link to="/contact" className="text-blue-500 hover:underline">
        Go to Contact Page
      </Link>
    </div>
  );
}
