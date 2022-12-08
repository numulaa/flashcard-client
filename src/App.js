import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <button className="deck-btn">Create Deck</button>
      </main>
    </>
  );
}

export default App;
