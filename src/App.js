import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    console.log("toggle");
    if (mode === "light") {
      setMode("dark"); //dark was not spelled right
      document.body.style.backgroundColor = "#13376d";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils-Dark";
      //title chamkane ke liye blink
      // setInterval(() => {
      //   document.title='TextUtils-Dark'
      // }, 200);
      // setInterval(() => {
      //   document.title='install TextUtils'
      // }, 150);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils-Light";
    }
  };
  return (
    <>
      <Router>      
        <Navbar tittle="textUtils" abouttext="About" mode={mode} toggle={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm/> */}
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={<TextForm heading="Enter your text here" showAlert={showAlert} mode={mode} />} />
            </Routes> 
            {/* component inside route should be at element props  */}
        </div>
      </Router>
    </>
  );
}

export default App;
