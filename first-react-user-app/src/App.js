import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {

  return (
    <div className="container">
      <Navbar />
      <hr />
      <AddUser/>
      <UserList />
    </div>
  );
}

export default App;
