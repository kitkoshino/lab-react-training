import React from 'react';
import logo from './logo.svg';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <h2>Id Cards</h2>
        <IdCard
          firstName="Bianca"
          lastName="Nobrega"
          gender="female"
          height={1.64}
          birth={new Date('1989-12-14')}
          picture="https://randomuser.me/api/portraits/women/40.jpg"
        />

        <IdCard
          firstName="Cristiane"
          lastName="Koshino"
          gender="female"
          height={1.60}
          birth={new Date('1989-12-05')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div className="main-box">
        <h2>Greetings</h2>
        <Greetings lang='es'>Bianca</Greetings>
        <Greetings lang='fr'>Cristiane</Greetings>
      </div>
    </div>
  );
};

export default App;
