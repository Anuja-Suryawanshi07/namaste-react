import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contact";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  //console.log(loggedInUser);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-pink-50 shadow-lg px-4 py-3 sm:bg-yellow-50 lg:bg-green-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          className="w-16 md:w-20 rounded-lg"
          src={LOGO_URL}
          alt="App Logo"
        />
        <h1 className="text-xl md:text-2xl font-bold text-orange-600">
          npmEats
        </h1>
      </div>

      {/* Navigation Section */}
      <div>
        <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-4 md:mt-0 text-sm md:text-lg font-medium">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-orange-500">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/grocery" className="hover:text-orange-500">
              Grocery
            </Link>
          </li>

          <li>Cart 🛒</li>
          <li className="px-2 font-bold">{loggedInUser}</li>

          <li>
            <button
              className="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-orange-600"
              onClick={() => {
                setbtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;