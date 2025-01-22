import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import EditPage from "./pages/Edit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="upper">
        <h1> Meme Generator </h1>
        <p>Let's create your own Meme!</p>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          backgroundColor: "#333",
          color: "#fff",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          Made with ❤️ by Aryat
        </p>
        <p style={{ fontSize: "0.9rem" }}>
        Creating laughs, one meme at a time.
        </p>
      </footer>
    </div>
  );
}

export default App;
