import { useState } from "react";
import blogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How to build a website",
      author: "Nisar",
      body: "loremipsum34",
      id: 1,
    },
    {
      title: "How to build a mobile application",
      author: "Umar shah",
      body: "loremipsum34",
      id: 2,
    },
    {
      title: "How to clone a remote repo to local repo",
      author: "Umar atiq",
      body: "loremipsum34",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <blogList blogs={blogs} />
    </div>
  );
};

export default Home;
