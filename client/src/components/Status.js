import { useState } from 'react'
import Filler from './Filler';

const Status = (props) => {
    let goal = props.goalCarbon + 420
    let max = props.maxCarbon + 420
    return (
        <div className='w-full flex flex-row justify-center items-center space-x-4'>
            <div className='flex flex-col text-center'>
                <h>{goal} ppm</h>

            </div>
            <div className='h-4 w-2/3 rounded-md border '>
                <Filler percentage={props.percentage}/>
            </div>
            <h>{max} ppm</h>

        </div>
    );
}
 
export default Status;