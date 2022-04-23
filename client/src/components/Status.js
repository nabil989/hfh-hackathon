import { useState } from 'react'
import Filler from './Filler';

const Status = (props) => {
    return (
        <div className='h-4 w-2/3 rounded-md border '>
            <Filler percentage={props.percentage}/>
        </div>
    );
}
 
export default Status;