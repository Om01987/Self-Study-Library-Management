const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-white text-2xl font-bold">Library Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/login" className="text-white hover:text-gray-200">
                Login
              </a>
            </li>
            <li>
              <a href="/notices" className="text-white hover:text-gray-200">
                Notices
              </a>
            </li>
            <li>
              <a href="/dashboard" className="text-white hover:text-gray-200">
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
