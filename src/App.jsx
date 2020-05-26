import React from 'react';
import logo from './logo.svg';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxColor';
import CreditCard from './components/creditCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <h2>Id Cards</h2>
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={1.78}
          birth={new Date('1989-12-14')}
          picture="https://randomuser.me/api/portraits/men/40.jpg"
        />

        <IdCard
          firstName="Cristiane"
          lastName="Koshino"
          gender="female"
          height={1.6}
          birth={new Date('1989-12-05')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div className="main-box">
        <h2>Greetings</h2>
        <Greetings lang="es">Ludwig</Greetings>
        <Greetings lang="fr">Cristiane</Greetings>
      </div>

      <div className="main-box">
        <h2>Random Number</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="main-box">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="credit-card-box">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
