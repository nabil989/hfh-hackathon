import React from 'react'
import Center from './Center'
import Left from './Left'
import Right from './Right'

function Container() {
  return (
    <div className='w-screen h-screen flex flex-row bg-[#121316] font'>
       <Left></Left>
        <Center></Center>
        <Right></Right>
    </div>
    
  )
}

export default Container