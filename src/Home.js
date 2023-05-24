import { useEffect, useState } from "react";
import BlogList from './blogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch data from resource');
      }
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsPending(false);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  return (
    <div className="home">
      {isPending && <div>Loading..</div> }
      {blogs && <BlogList blogs={ blogs } title = {'All Blogs!'}  />}
    </div>
  );
};

export default Home;
