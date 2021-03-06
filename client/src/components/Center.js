import React from 'react'
import Spline from '@splinetool/react-spline';
import Status from './Status'
function Center(props) {

    const resetEarth=() => {
        document.getElementById("earth").style.transform = "scale(0.8)";
    }
    const click = () =>{
        props.updateClicks();
        props.updateCarbon(-.05)
        document.getElementById("earth").style.transform = "scale(0.85)";
        setTimeout(resetEarth, 50);
    }
  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col items-center'>
        <div className='p-6 mb-20 text-5xl font-bold font'>
            {`${props.month} ${props.year}`}
        </div>
        <div className='text-3xl pb-4'>Carbon Status Bar</div>
        
        <Status percentage={props.percentage} goalCarbon={props.goalCarbon} maxCarbon={props.maxCarbon}/>
        <div>Current Carbon: {props.currentCarbon} ppm</div>
        <div className='transition-all duration-75 scale-[0.8]' id="earth" onClick={click}>
            <div className='w-full h-full absolute'></div>
            <Spline scene="https://prod.spline.design/aZdc9n-qmGUJRoMg/scene.spline" />
        </div>

        <div className='text-3xl'>
            {`Clicks: ${props.clicks}`}
        </div>
        <div className='m-5 rounded-xl h-1/2'>
            <div className='p-6 text-3xl w-full'>
               {`Predicted Carbon Input This Year: ${props.carbonThisYear} Gigatons`} 
            </div>
            <div className='p-6 text-3xl w-full'>
                {`Current Temperature has increased by: ${5.35 * Math.log(props.currentCarbon) -31} degrees C since 1990`}
            </div>
        </div>
    </div>
  )
}

export default Center