// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import './Navbar.css'
// import logo from '/public/logo.svg'
// import Image from "next/image";

// const Navbar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//     setMenuActive(!menuActive);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Image src={logo} alt="Apple" />
//       </div>
//       <div className={`nav-items ${showSidebar ? "active" : ""}`}>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">Blog</a></li>
//         </ul>
//       </div>
//       <div className="login">
//         <button>Login</button>
//       </div>
//       <div className="menu-icon" onClick={toggleSidebar}>
//         <FontAwesomeIcon icon={faBars} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'
import logo from '/public/logo.svg'
import Image from "next/image";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Apple" />
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
      <div className="menu-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
