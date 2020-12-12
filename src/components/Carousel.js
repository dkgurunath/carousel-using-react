import React , {useState, useEffect} from 'react';
import './carousel.css'
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpeg';
import img6 from '../assets/image6.jpg';

function Carousel (){

  const [images, setImages]= useState(()=>[
         {image: img1, category:'Vegetables', price :'100', name : 'Capsicum'},
         {image: img2, category:'Mobile', price :'43,900', name : 'Smart Phone'}, 
        {image: img3, category:'Clothes', price :'499', name : 'T-shirt'}, 
        {image: img4, category:'Sports', price :'899', name : 'FootBall'},
        {image: img5, category:'Books', price :'299', name : 'Books'}, 
        {image: img6, category:'Electronics', price :'25,999', name : 'Washing Machine'}
  ])
  const [imagePos , setPositions] = useState(
      {imageCenter:1, imageRight:2,  imageLeft:0}
  )
    
    function moveLeft(){
        let centerImage = imagePos.imageRight;
        let leftImage = imagePos.imageCenter;
        let rightImage = centerImage+1 >= 5?1:centerImage+1;
        setPositions(() => {
            return {imageCenter:centerImage, imageLeft:leftImage, imageRight:rightImage}
        })
    }

     /* useEffect(()=> {
         setInterval(() => {
            moveRight();
        }, 5*1000); 
      } ,[setInterval]) */

    function moveRight(){
        let centerImage = imagePos.imageLeft;
        let leftImage = centerImage-1< 0?5:centerImage-1;
        let rightImage = imagePos.imageCenter;
        setPositions(() => {
            return {imageCenter:centerImage, imageLeft:leftImage, imageRight:rightImage}
        })
    }
        return(
            <div class="carousal-for-paypal">
                <div class="button-icon-left partition1 navigation" onClick={moveLeft}>
                    <span class="left-arrow " ></span>
                </div> 
                <div class="carousal-content partition2">
                    <div class="small-image-left container">
                        <img src={images[imagePos.imageLeft].image} /> 
                    </div>
                    <div class="center-image slideshow container" >
                         <img src={images[imagePos.imageCenter].image} /> 
                         <div className="text-content">
                             <label>Category : </label> {images[imagePos.imageCenter].category}, &nbsp;
                             <label>Name : </label> {images[imagePos.imageCenter].name}, &nbsp;
                             <label>Price : </label> {images[imagePos.imageCenter].price} &nbsp;
                         </div>
                    </div>
                    <div class="small-image-right container">
                        <img src={images[imagePos.imageRight].image} /> 
                    </div>
                </div>
                 <div class="button-icon-right partition3 navigation" onClick={moveRight}>
                    <span class="right-arrow" ></span>
                </div> 
            </div>
        )
}

export default Carousel;