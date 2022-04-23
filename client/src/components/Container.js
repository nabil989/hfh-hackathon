import React, {useState, useEffect, useRef} from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'
import Status from './Status';

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  
function Container() {
    const [percentage, changePercent] = useState(50);
    const updateBar = (x) => {

      changePercent(-x)
    }
    const updateCarbon = (x) => {
      
      setCurrentCarbon(currentCarbon+x)
      updateBar(50+(currentCarbon))
    }
    const gameTime =  1000*60*20;    //year = gameTime/(2100-2022) + 2022
    const startCarbon = 0;
    const maxCarbon = 100;
    const goalCarbon = -100;
    const treeCarbonValue = 100;
    const [deleteCarbon, setDeleteCarbon] = useState(0); //calculate delete carbon based on upgrades
    const [currentCarbon, setCurrentCarbon] = useState(0); //current carbon = sum of carbon per year - delete carbon per year
    const [clicks, setClicks] = useState(0);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);

    useInterval(() => {
        let temp = month + 1;
        if(temp === 12){
            temp = 0;
            setYear(year+1);
        }
        setMonth(temp);
        console.log(month);
        console.log(year);
      }, gameTime/(2100-2022)/12);
    

  return (
    <div className='w-screen h-screen flex flex-row bg-[#121316] font'>
       <Left></Left>
        <Center updateCarbon={updateCarbon} percentage={percentage} year = {year} month = {months[month]}></Center>
        <Right></Right>
    </div>
    
  )
}

export default Container