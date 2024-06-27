//import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove ExtraSpaces" mode={mode} />
    </>
  );
}

export default App;
