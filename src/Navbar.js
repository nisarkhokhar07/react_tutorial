const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My Personal Blogs</h1>
      <div className="links">
        <a href="/" style = {{
            color:'white',
            backgroundColor : '#f1356d',
            borderRadius : '10px'
        }}>Home</a>
        <a href="/create">Create Blog</a>
      </div>
    </div>
  );
};

export default Navbar;
