import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Search from "./components/report/report";
import LoginForm from './components/LoginForm/LoginForm';
import Info from './components/Info/Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route path="/Report" element={<Search />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
