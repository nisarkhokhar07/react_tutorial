const BlogList = (props) => {
  const title = props.title;
  const blogs = props.blogs;
  return (
    <div className="blogList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
