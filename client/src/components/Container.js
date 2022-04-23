import React, {useState, useEffect} from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'
import Status from './Status';

function Container() {
    const [percentage, changePercent] = useState(50);
    const updateBar = (x) => {

      changePercent(-x)
    }
    const updateCarbon = (x) => {
      
      setCurrentCarbon(currentCarbon+x)
      updateBar(50+(currentCarbon))
    }
    const gameTime =  6000*10;    //year = gameTime/(2100-2022) + 2022
    const startCarbon = 0;
    const maxCarbon = 100;
    const goalCarbon = -100;
    const treeCarbonValue = 100;
    const [deleteCarbon, setDeleteCarbon] = useState(0); //calculate delete carbon based on upgrades
    const [currentCarbon, setCurrentCarbon] = useState(0); //current carbon = sum of carbon per year - delete carbon per year
    const [clicks, setClicks] = useState(0);

  return (
    <div className='w-screen h-screen flex flex-row bg-[#121316] '>
      <Left></Left>
      <Center updateCarbon={updateCarbon} percentage={percentage}/>
      <Right></Right>
      {/* <Status /> */}
    </div>
    
  )
}

export default Container