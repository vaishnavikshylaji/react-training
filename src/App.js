import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ListedData from "./pages/ListedData";
import Export from "./pages/Export";
import Login from "./pages/auth/Login";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/listed-data" element={<ListedData />}></Route>
                  <Route path="/export" element={<Export />}></Route>
                  <Route path="/login" element={<Login />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
