import React from 'react'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.jpg'
import slide7 from '../assets/slide7.jpg'

const Slider = () => {
  return (
    <Glider
  slidesToShow={2}
  slidesToScroll={2}
>
  <>
  <div><img src={slide1} alt="" /></div>
  <div><img src={slide2} alt="" /></div>
  <div><img src={slide3} alt="" /></div>
  <div><img src={slide4} alt="" /></div>
  <div><img src={slide5} alt="" /></div>
  <div><img src={slide6} alt="" /></div>
  <div><img src={slide7} alt="" /></div>
  </>
</Glider>
  )
}

export default Slider