import React, { useState } from 'react';
import Header from './components/food/Layout/Header';
import Meals from './components/food/Meals/Meals';
import Cart from './components/food/Cart/Cart';

const App = () => {
  //카트 모달의 여부 결정하는 사애 변수
  const [cartIsShown, setCartIsShown] = useState(false);

  //모달을 열어주는 헨들러
  const showCartHandler = () => setCartIsShown(true);

  //모달을 닫아주는 헨들러
  const hideCartHandler = () => setCartIsShown(false);
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  );
};

export default App;
