import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import "../styles/css/main.css";
// import "../styles/src/input.css";

// import "./styles/css/main.css";
// import "./styles/src/input.css";
function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col p-8 align-start justify-between">
        <button className="p-2 border-2 bg-nctDarkGrayish text-nctWhite rounded-md md:max-w-8">
          Create Deck
        </button>
      </main>
    </>
  );
}

export default App;
