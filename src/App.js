import Home from "./pages/Home";
import AddNewDeck from "./pages/AddNewDeck";
import NewCardForm from "./pages/NewCardForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./styles/css/main.css";
// import "./styles/src/input.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/addNewDeck"} element={<AddNewDeck />}></Route>
        <Route path={"/newCardForm"} element={<NewCardForm />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
