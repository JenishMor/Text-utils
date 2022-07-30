import TextUtils from './Component/TextUtils';
import Navbar from './Component/Navbar';
import { useState } from 'react';
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');

  const [alert, setAlert] = useState(null);

  // This is for only dark and light mode 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const bgColor = (clr) => {
    // console.log(clr);
    setMode(clr);

    if (clr === 'warning' || clr === 'success' || clr === 'light') {
      setTextMode('dark');
      showAlert("Mode has been changed.", "success");
    }
    else if (clr === 'secondary' || clr === 'danger') {
      setTextMode('light');
      showAlert("Mode has been changed.", "success");
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} bgColor={bgColor} textMode={textMode} />
        <hr />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextUtils title="Enter text here to analyze" mode={mode} textMode={textMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} textMode={textMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
