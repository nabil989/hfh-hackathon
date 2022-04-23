import React, {useState} from 'react'

function Left() {
    const [trees, updateTrees] = useState([1,2]);
    const addtree = () => {
        let temp = [...trees, 1];
        updateTrees(temp);
    }
  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col items-start p-10 space-y-10 text-xl'>
        <div className=' text-3xl text-center w-full'>
            Stats
        </div>
        <div>
            Current Carbon Reduction:
        </div>
        <div className='flex flex-row space-x-2'>
            {trees.map((id) => {
                return <div className='text-3xl'>🌳</div>
            })}
            <div className='bg-blue-500 p-2 rounded-sm' onClick={addtree}>+</div>
        </div>

        
        <div className='m-5 rounded-xl h-1/2'>
            
        </div>
    </div>
  )
}

export default Left