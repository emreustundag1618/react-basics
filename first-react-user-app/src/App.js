import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

function App() {

  return (
    <div className="container">
      <Navbar />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
