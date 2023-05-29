import Navbar from './Navbar';
import Home from './Home';
import Create from './create'
import BlogDetails from './BlogDetails';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
