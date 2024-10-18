import React, { useState } from 'react'
import './Slider.css'

const SlidesData = [
{
    img: require('../Images/Home/h1.jpg'),
    name: 'Manufacturing & production'
},{
    img: require('../Images/Home/h2.jpg'),
    name: 'Warehouse & distribution'
},{
    img: require('../Images/Home/h3.jpg'),
    name: 'Transportation & logistics'
},{
    img: require('../Images/Home/h4.jpg'),
    name: 'Administrative & Clerical'
},{
    img: require('../Images/Home/h5.jpg'),
    name: 'Healthcare & Medical'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Finance & Accounting'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Call center & customer service'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Hospitality & Tourism'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Retail & Sales'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Engineering & Technical'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'Information Technology'
},{
    img: require('../Images/Home/h6.jpg'),
    name: 'HR & Recruitment '
},
]


const Slider = () => {

    const [prev, setPrevIndex] = useState(0);
    const [current, setCurrentIndex] = useState(1);
    const [next, setNextIndex] = useState(2);

    const callPrev = () =>{
        if(prev === 0){
            setNextIndex(current)
            setCurrentIndex(prev)
            setPrevIndex(SlidesData.length - 1);            
        }else{
            setNextIndex(current)
            setCurrentIndex(prev)
            setPrevIndex(prev - 1);
        }

    }
    const callNext = () =>{
        if(next === SlidesData.length - 1){
            setPrevIndex(current)
            setCurrentIndex(next)
            setNextIndex(0);            
        }else{
            setPrevIndex(current)
            setCurrentIndex(next)
            setNextIndex(next + 1);
        }

    }


    return (
        <div className='flex justify-center w-[100%] px-[4%] flex-col items-center text-[1.6rem] text-[#fff] bg-[#181b1e] min-h-[90vh] border-2 border-slate-50'>
           <div className='relative flex '> 
                {/* Previous Slide */}
                <div className='slide left-slide'>
                    <img src={SlidesData[prev].img} alt='Try'/>
                </div>
                {/* Current Slide */}
                <div className='slide main-slide'>
                    <img src={SlidesData[current].img} alt='Try'/>
                </div>
                {/* Next Slide */}
                <div className='slide right-slide'>
                    <img src={SlidesData[next].img} alt='Try'/>
                </div>
                {/* Carousel Btns */}
                
           </div>
           <div className='slider-btns'>
                <button class="carousel__btn" onClick={callPrev} id="leftBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"/></svg></button>
                <button class="carousel__btn" onClick={callNext} id="rightBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"/></svg></button>
            </div>
        </div>
    )
}

export default Slider