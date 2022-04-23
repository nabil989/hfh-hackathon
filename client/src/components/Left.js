import React, {useState} from 'react'

function Left(props) {
    const [trees, updateTrees] = useState([]);
    const [treeprice, setTreePrice] = useState(2);

    const addtree = () => {
        
        if(props.clicks >= treeprice){
            props.setClicks(props.clicks - treeprice);
            setTreePrice(Math.floor(treeprice + treeprice*trees.length/10));
            let temp = [...trees, 1];
            updateTrees(temp);
            props.setForestCount(trees.length);
        }
        
    }
  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col items-start p-10 space-y-10 text-xl'>
        <div className=' text-3xl text-center w-full'>
            Stats
        </div>
        <div>
            Current Carbon Reduction: 
        </div>
        <div>
            Net Carbon This Year:
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
        

        
        <div className='m-5 rounded-xl h-1/2'>
            
        </div>
    </div>
  )
}

export default Left