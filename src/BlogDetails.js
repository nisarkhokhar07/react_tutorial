import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const history = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: 'DELETE'
    }).then(() => history('/home'))
  }

  return (
    <div className="blog-details">
      <h2 className="heading">Blog Details: </h2>
      {error && <div>{error}</div>}
      {isPending && <div>{isPending}</div>}
      {blog && (
        <article>
          <h3>Title: {blog.title}</h3>
          <h4>Authored by: {blog.author.toUpperCase()}</h4>
          <p>{blog.body}</p>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
