import React, {useState, useEffect} from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'

function Container() {
    const gameTime =  6000*10;    //year = gameTime/(2100-2022) + 2022
    const startCarbon = 0;
    const maxCarbon = 100;
    const goalCarbon = -100;
    const treeCarbonValue = 100;
    const [deleteCarbon, setDeleteCarbon] = useState(0); //calculate delete carbon based on upgrades
    const [currentCarbon, setCurrentCarbon] = useState(0); //current carbon = sum of carbon per year - delete carbon per year
    const [clicks, setClicks] = useState(0);
    

  return (
    <div className='w-screen h-screen flex flex-row bg-[#121316] font'>
       <Left></Left>
        <Center></Center>
        <Right></Right>
    </div>
    
  )
}

export default Container