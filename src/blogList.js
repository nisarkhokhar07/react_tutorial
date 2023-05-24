const blogList = (props) => {
  const blogs = props.blogs;
  return (
    <div className="blogList">
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default blogList;
