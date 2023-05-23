import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Nisar Khokhar");

  const handleClick = () => {
    setName("Umar Atiq")
  };

  return (
    <div className="home">
      <h1>My Home Page</h1>
      <p>{name} is human.</p>
      <p onMouseOver={handleClick}>My first Button</p>
    </div>
  );
};

export default Home;
