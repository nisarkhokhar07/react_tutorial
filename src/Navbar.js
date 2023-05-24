import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My Personal Blogs</h1>
      <div className="links">
        <Link to="/" style = {{color: 'white', backgroundColor: '#f1356d', borderRadius: '5px'}}>Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
