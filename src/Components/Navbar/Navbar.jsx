import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Tasks</Link>
      </li>
      <li>
        <Link to="/">Guilds</Link>
      </li>
      <li>
        <Link to="/">Achievements</Link>
      </li>
      <li>
        <Link to="/">LeaderBoards</Link>
      </li>
      <li>
        <Link to="/">News</Link>
      </li>
      <li>
        <details>
          <summary>Help</summary>
          <ul className="p-2">
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">GamersGrid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
