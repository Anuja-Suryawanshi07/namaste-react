import "./Header.css";

const Header = () =>(
    <header className="header">
        {/* Logo */}
        <div className="logo">
            MyLogo
        </div>

        {/* Search Bar */}
        <div className="search-container">
            <input
                type="text"
                placeholder="Search here..."
                className="search-input"
            />
        </div>
            {/*User Icon */}
            <div className="user-icon">
               👨‍💼 
            </div>
    </header>
);
export default Header;