import React from 'react';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxColor';
import CreditCard from './components/creditCard';
import Rating from './components/rating';
import LikeButton from './components/likeButton';
import ClickablePicture from './components/clickablePicture';
import Dice from './components/dice';
import Carousel from './components/carousel';
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
      <div className="main-box">
        <h2>Like Button</h2>
        <div className="like-buttons">
          <LikeButton />
          <LikeButton />
        </div>
      </div>
      <div className="main-box">
        <h2>Clickable Picture</h2>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgOne="/img/persons/maxence-glasses.png"
        />
      </div>
      <div className="main-box">
        <h2>Dice</h2>
        <Dice />
      </div>
      <div className="carousel-box">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="rating-box">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
    </div>
  );
}

export default App;
