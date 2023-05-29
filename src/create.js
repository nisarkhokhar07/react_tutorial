import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE, postReducer } from "./PostReducer";

const Create = () => {

  const history = useNavigate();

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "change-input",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title: state.title, body: state.body, author: state.author };
    dispatch({ type: "fetch-start" });

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      dispatch({ type: "fetch-success" });
      history("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog!</h2>
      <form onSubmit={handleSubmit}>
        <label> Add a Title:</label>
        <input
          required
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <label> Add content:</label>
        <textarea
          required
          name="body"
          value={state.body}
          onChange={handleChange}
        ></textarea>
        <label>Author name</label>
        <input 
        required
        name='author'
        value={state.author}
        onChange={handleChange}
        />

        {!state.isPending && <button>Add Blog</button>}
        {state.isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
