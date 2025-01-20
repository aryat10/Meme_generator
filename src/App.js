import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/Home';
import EditPage from './pages/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       <div className='upper'>
       <h1> Meme Generator </h1>
       <p >Let's create your own Meme!</p>
       </div>
=======
       <h1> Meme Generator </h1>
>>>>>>> 1dabf6f8ae14e9119ea640d73fc9db37575863fd
       <Routes>
        <Route path='/'element={<HomePage/>} />
        <Route path='/edit'element={<EditPage/>} />
       </Routes>
    </div>
  );
}

export default App;
