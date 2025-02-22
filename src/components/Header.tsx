
export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        {/* Logo / Title */}
        <h1 className="text-4xl font-bold tracking-wide">Met Museum</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li className="hover:text-gray-300 transition-all cursor-pointer">Home</li>
            <li className="hover:text-gray-300 transition-all cursor-pointer">Contact</li>
            <li className="hover:text-gray-300 transition-all cursor-pointer">About</li>
          </ul>
        </nav>

       
      </div>
    </header>
  );
}
