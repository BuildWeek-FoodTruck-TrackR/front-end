import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./Components/LoginForm"
import SignUpForm from "./Components/SignUpForm"

function App() {
  return (
    <div className="App">
      <LoginForm  />
      <SignUpForm />
    </div>
  );
}

export default App;
