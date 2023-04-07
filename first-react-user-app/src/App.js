import './App.css';
import Navbar from './layout/Navbar';
import UserList from './components/UserList';
import AddUser from './forms/AddUser';
import PageNotFound from "./pages/NotFound";
import About from "./pages/About";
import Contribute from './pages/Contribute';
import UpdateUser from './forms/UpdateUser';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/about"loader="rootLoader" element={<About />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/github" element={<Contribute/>}></Route>
          <Route path="/edit/:id" element={<UpdateUser/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
      </div>

    </Router>

  );
}

export default App;
