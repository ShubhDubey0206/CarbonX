import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to=".about">About</Link></li>
        <li><Link to="/trade">Trade</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/form">Create Account</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

// function Navbar({ onAboutClick }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">Arbor</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         {/* Call the scroll function on click instead of navigating */}
//         <li><button className="link-btn" onClick={onAboutClick}>About</button></li>
//         <li><Link to="/trade">Trade</Link></li>
//         <li><Link to="/features">Features</Link></li>
//         <li><Link to="/form">Create Account</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
