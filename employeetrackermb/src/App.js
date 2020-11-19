import React from "react";
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
