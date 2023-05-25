import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/home'>
      <h1>Nisar's Blogs</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '5px'
        }}>Create Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
