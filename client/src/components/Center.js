import React from 'react'
import Spline from '@splinetool/react-spline';
import Status from './Status'
function Center(props) {

    const resetEarth=() => {
        document.getElementById("earth").style.transform = "scale(0.8)";
    }
    const click = () =>{
        props.updateCarbon(.1)
        document.getElementById("earth").style.transform = "scale(0.85)";
        setTimeout(resetEarth, 50);
    }
  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col items-center'>
        <div className='p-6 mb-20 text-5xl font-bold font'>
            {`${props.month} ${props.year}`}
        </div>
        <Status percentage={props.percentage}/>
        <div className='transition-all duration-75 scale-[0.8]' id="earth" onClick={click}>
            <div className='w-full h-full absolute'></div>
            <Spline scene="https://prod.spline.design/aZdc9n-qmGUJRoMg/scene.spline" />
        </div>
        
        <div className='m-5 rounded-xl h-1/2'>
            <div className='p-6 text-3xl w-full'>
            </div>
        </div>
    </div>
  )
}

export default Center