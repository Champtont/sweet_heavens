import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/views/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
