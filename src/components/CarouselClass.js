import React from 'react';
import './carousel.css'
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpeg';
import img6 from '../assets/image6.jpg';

class CarouselClass extends React.Component{

    
    constructor(props) {
        super(props);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.state = {
            images : {
                1: {image: img1, category:'Vegetables', price :'100', name : 'Capsicum'},
                2: {image: img2, category:'Mobile', price :'43,900', name : 'Smart Phone'}, 
                3: {image: img3, category:'Clothes', price :'499', name : 'T-shirt'}, 
                4: {image: img4, category:'Sports', price :'899', name : 'FootBall'},
                5: {image: img5, category:'Books', price :'299', name : 'Books'}, 
                6: {image: img6, category:'Electronics', price :'25,999', name : 'Washing Machine'}
            },
            imageCenter:2,
            imageLeft : 1,
            imageRight: 3
        }
    }
    
    moveLeft(){
        let centerImage = this.state.imageRight;
        this.setState({
            imageLeft : this.state.imageCenter,
            imageCenter : centerImage,
            imageRight : centerImage+1 >= 6?1:centerImage+1
        });
    }

    componentDidMount() {
         this.timeoutId = setInterval(() => {
            this.moveRight();
        }, 5*1000); 
      }

    moveRight(){
        let centerImage = this.state.imageLeft;
        this.setState({
            imageRight : this.state.imageCenter,
            imageCenter : this.state.imageLeft,
            imageLeft : centerImage-1 < 1?6:centerImage-1
        });
    }
   
    render(){
        return(
            <div class="carousal-for-paypal">
                <div class="button-icon-left partition1 navigation" onClick={this.moveLeft}>
                    <span class="left-arrow " ></span>
                </div> 
                <div class="carousal-content partition2">
                    {/* <span class="small-image-left navigator left-arrow partition1" onClick={this.moveLeft}> 
                    <span class="center-image navigator partition2"> 
                    <span class="small-image-right navigator right-arrow partition3" onClick={this.moveRight}> 
                     */}
                    <div class="small-image-left container">
                        <img src={this.state.images[this.state.imageLeft].image} /> 
                    </div>
                    <div class="center-image slideshow container" >
                         <img src={this.state.images[this.state.imageCenter].image} /> 
                         <div className="text-content">
                             <label>Category : </label> {this.state.images[this.state.imageCenter].category}, &nbsp;
                             <label>Name : </label> {this.state.images[this.state.imageCenter].name}, &nbsp;
                             <label>Price : </label> {this.state.images[this.state.imageCenter].price} &nbsp;
                         </div>
                    </div>
                    <div class="small-image-right container">
                        <img src={this.state.images[this.state.imageRight].image} /> 
                    </div>
                </div>
                 <div class="button-icon-right partition3 navigation" onClick={this.moveRight}>
                    <span class="right-arrow" ></span>
                </div> 
            </div>
        )
    }
}

export default CarouselClass;