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

    const gameTime =  1000*60*20;    //year = gameTime/(2100-2022) + 2022
    const startCarbon = 0;
    const maxCarbon = 100;
    const goalCarbon = -100;
    const forestCarbonValue = 100;
    const [forestCount, setForestCount] = useState(0);
    const [deleteCarbon, setDeleteCarbon] = useState(0); //calculate delete carbon based on upgrades
    const [currentCarbon, setCurrentCarbon] = useState(0); //current carbon = sum of carbon per year - delete carbon per year
    const [clicks, setClicks] = useState(0);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(2022);
    const carbonArray = [7.72105,8.08517,8.1864,8.53648,8.68733,8.9737,9.25988,9.6896,9.61627,9.7903,9.99249,9.83695,9.88611,10.081,9.68749,9.61459,9.9279,10.1461,10.124,9.64922,10.2369,9.95994,10.1438,10.6952,10.7515,10.8207,10.8081,11.3616,11.4093,11.862,11.7971,11.3885,10.6604,10.8621,11.1792,11.3984,11.895,12.1734,11.9188,12.2112,12.622,12.7745,12.9426,13.1887,13.2394,12.3953,13.2337,14.0166,14.4361,14.2677,15.1283,16.6344,16.931,17.1865,17.6151,18.601,19.4291,19.9369,20.4768,20.5436,21.1158,21.652,22.1765,23.0189,23.8382,24.6342,25.5112,26.1197,26.779,27.9179,29.2509,28.9959,30.0417,30.9854,30.8474,31.0271,32.4536,33.308,34.0199,34.8079,34.6377,33.9303,35.2381,35.3898,35.8773,36.7489,37.372,38.6859,39.2844,39.9081,39.9539,40.7695,40.3535,39.8946,40.2212,40.5536,41.1754,42.1954,41.1657,41.1582,41.54,41.8078,43.083,44.546,46.4957,47.4133,47.96,48.9497,49.1355,49.1382,50.7118,52.1069,53.2092,54.1858,55.6712,57.1566,58.3418,59.5269,60.712,61.8972,63.0823,64.0979,65.1134,66.129,67.1445,68.16,69.1755,70.191,71.2066,72.2221,73.2375,74.6107,75.9838,77.3569,78.73,80.1031,81.4762,82.8494,84.2224,85.5956,86.9686,88.4972,90.0257,91.5542,93.0827,94.6112,96.1397,97.6682,99.1968,100.725,102.254,103.702,105.15,106.597,108.045,109.493,110.941,112.389,113.837,115.285,116.732,117.696,118.66,119.624,120.588,121.552,122.516,123.48,124.444,125.407,126.371,127.014,127.656,128.299,128.941,129.583,130.226,130.868,131.511,132.153,132.796,133.271,133.746,134.221,134.696,135.172,135.647,136.122,136.597,137.072,137.547,137.727,137.906,138.086,138.265,138.445,138.624,138.803,138.983,139.162,139.342];

    const updateBar = (x) => {
        changePercent(-x)
      }
      const updateCarbon = (x) => {
        setClicks(clicks+1);
        setCurrentCarbon(currentCarbon+x)
        updateBar(50+(currentCarbon))
      }

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
       <Left clicks = {clicks} setForestCount={setForestCount} setClicks={setClicks}></Left>
        <Center updateCarbon={updateCarbon} percentage={percentage} year = {year} month = {months[month]} carbonThisYear = {carbonArray[year-1900]} clicks={clicks}></Center>
        <Right></Right>
    </div>
    
  )
}

export default Container