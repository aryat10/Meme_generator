import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1> Meme Generator </h1>
       <Routes>
        <Route path='/'element={<HomePage/>} />
       </Routes>
    </div>
  );
}

export default App;
