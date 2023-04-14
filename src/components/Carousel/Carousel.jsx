import './Carousel.css';
import { carouselImages, features } from '../../constants';
import { BsPersonVcard } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { useState } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

const Icons = [
  <FaCode className='icon'/>,
  <BsPersonVcard className='icon'/>,
  <RiComputerLine className='icon'/>
]

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slideLeft = () => {
    if (current === 0) {
      setCurrent(carouselImages.length - 1);  
    } else {
      setCurrent(prevCurrent => prevCurrent - 1);
    }
  }

  const slideRight = () => {
    if (current === carouselImages.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(prevCurrent => prevCurrent + 1);
    }
  }

  return (
    <div 
      className='app__carousel' 
    >
      <div className='app__carousel-wrapper'>
        {
          carouselImages.map((image, index) => {
            return (
              <div className={index===current ? "app__carousel-card app__carousel-card_active" : "app__carousel-card"}>
                <img className="app__carousel-card_image" src={image.url} alt="Carousel Img"/>
                <div className='app__carousel-card_overlay'>
                  <h1>{image.label}</h1>
                  <p>{image.desc}</p>
                  <button className='carousel-btn'>Book Your Demo</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='app__carousel-features'>
          {
            features.map((feature, index) => {
              return (
                <div 
                  className='app__carousel-features_card' 
                  key={feature.key}
                  style={{
                    background: index%2 === 0 ? '#fff' : 'Gold',
                    border: "6px solid gold"
                  }}
                >
                    <div className='app__carousel-features_card-icon'>
                      {Icons[index]}
                    </div>
                    <h2>{feature.type}</h2>
                    <p>{feature.desc}</p>
                    <button className='feature-btn'>Premium Addons</button>  
                </div>
              )
            })
          }
      </div>
      <div className='app__carousel-arrowleft'>
          <BsArrowLeftCircle size={50} color='#ffffffd4' onClick={slideLeft}/>
      </div>
      <div className='app__carousel-arrowright'>
          <BsArrowRightCircle size={50} color='#ffffffd4' onClick={slideRight}/>
      </div>
      <div className='app__carousel-pagination'>
          {
            carouselImages.map((_ , index) => {
              return (
                <div 
                  key={index}
                  className={
                    index===current 
                    ? "pagination_dot pagination_dot-active" 
                    : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              )
            })
          }
      </div>  
    </div>
  )
}

export default Carousel;