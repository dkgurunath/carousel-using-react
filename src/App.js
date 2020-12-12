import React from 'react';
import Carousel from './components/Carousel';
import Items from './components/ItemsClass'
import CarouselClass from './components/CarouselClass'
import ItemsClass from './components/ItemsClass'


class App extends React.Component {
  render(){
    return (
      <div>
        <h2>PayPal Initial Code Test -- Gurunath DK</h2>
        <h3> Carousel using functions</h3>
        <Carousel />
        <Items />

        <h3>Carousel using Class</h3>
        <CarouselClass />
        <ItemsClass />
      </div>
    )
  }
}

export default App;