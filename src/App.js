import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Darkmode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Darkmode has been disabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route path="/Textform" element={<Textform showAlert={showAlert} mode={mode} heading="Write Something Here" />} />
          </Routes>
        </div>
        <div className="container">
          <Routes>
            <Route path="/About" element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
