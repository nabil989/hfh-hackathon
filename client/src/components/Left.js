import React, {useState} from 'react'

function Left(props) {
    const [trees, updateTrees] = useState([]);
    const [treeprice, setTreePrice] = useState(2);

    const [research, updateResearch] = useState([]);
    const [researchPrice, setResearchPrice] = useState(100);

    const addtree = () => {
        
        if(props.clicks >= treeprice){
            props.setClicks(props.clicks - treeprice);
            setTreePrice(Math.floor(treeprice + trees.length));
            props.updateCarbon(-0.5);
            let temp = [...trees, 1];
            updateTrees(temp);
            props.setForestCount(trees.length);
            props.updateDelete();
        }
        
    }
    const addResearch = () => {
        
        if(props.clicks >= researchPrice){
            props.setClicks(props.clicks - researchPrice);
            setResearchPrice(Math.floor(researchPrice + research.length));
            props.updateCarbon(-1);
            let temp = [...research, 1];
            updateResearch(temp);
            props.setResearchCount(research.length);
            props.updateDelete();
        }
        
    }

  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col items-start p-10 space-y-10 text-xl'>
        <div className=' text-3xl text-center w-full'>
            Stats
        </div>
        <div>
           {` Current Carbon Reduction: ${props.deleteCarbon}`}
        </div>
        <div>
            {`Net Carbon This Year: ${props.netCarbon}`}
        </div>
        <div className='flex flex-col space-y-2 items-start'>
            <div>
            {`Buy Forest ${treeprice} Clicks`}
            </div>
            
            <div className='flex flex-row space-x-2'>
                {trees.map((id, count) => {
                    if(count < 10){
                        return <div className='text-3xl'>🌳</div>
                    }
                })}
                <div className='bg-blue-500 p-2 rounded-sm' onClick={addtree}>+</div>
            </div>
            <div>
                {`Forest ${trees.length}: -30,000 lbs of carbon/yr`}
            </div>
        </div>

        <div className='flex flex-col space-y-2 items-start'>
            <div>
            {`Buy Research ${researchPrice} Clicks`}
            </div>
            
            <div className='flex flex-row space-x-2'>
                {research.map((id, count) => {
                    if(count < 10){
                        return <div className='text-3xl'>🧪</div>
                    }
                })}
                <div className='bg-blue-500 p-2 rounded-sm' onClick={addResearch}>+</div>
            </div>
            <div>
                {`Research ${trees.length} points into technology and public awareness. -200,000 lbs of carbon/yr`}
            </div>
        </div>
        

        
        <div className='m-5 rounded-xl h-1/2'>
            
        </div>
    </div>
  )
}

export default Left