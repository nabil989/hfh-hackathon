import React, {useState} from 'react'
import Stories from './Stories'

function Right(props) {
    const [stories, updateStories] = useState(["UPDATE: Major cities along the coast including Miami, Osaka, Hong Kong, and more have been flooded, displacing millions of people", "UPDATE: Costal cities such as Amsterdam, New Orleans, Venice, and others have gone underwater due to rising temperatures", "UPDATE:  The U.S. has shown a 100% increase in citizens using public transportation, leading to a decrease in gas emissions.", "UPDATE: The E.U.'s new policy that rewards citizens based on the amount of trash they recycle shows tremendous decrease in gas emissions.", 
  "UPDATE: A record-breaking winter storm has caused a power-outage across the south of the US", "UPDATE: Dodobirds, once thought to have gone extinct, have been seen again."]);
    /*
    [470, "UPDATE: Major cities along the coast including Miami, Osaka, Hong Kong, and more have been flooded, displacing millions of people"],
    [500, "UPDATE: Costal cities such as Amsterdam, New Orleans, Venice, and others have gone underwater due to rising temperatures"],
    [370, "UPDATE: The U.S. has shown a 100% increase in citizens using public transportation, leading to a decrease in gas emissions."],
    [350, "UPDATE: The E.U.'s new policy that rewards citizens based on the amount of trash they recycle shows tremendous decrease in gas emissions."],
    [400, "UPDATE: A record-breaking winter storm has caused a power-outage across the south of the US"],
    [340, "UPDATE: Changes in temperature have started to decrease, countries all around the world are starting to prosper."],
    [510, "UPDATE: Largest tsunami in history has hit Japan, over 500,000 people have gone missing"],
    [350, "UPDATE: Dodobirds, once thought to have gone extinct, have been seen again."]


    */
    // const addStory= () => {
    //     if(props.currentCarbon <= ){
    //         props.setClicks(props.clicks - treeprice);
    //         setTreePrice(Math.floor(treeprice + treeprice*trees.length/10));
    //         let temp = [...trees, 1];
    //         updateTrees(temp);
    //         props.setForestCount(trees.length);
    //     }
        
    // }
  return (
    <div className='w-1/3 h-screen text-center text-white flex flex-col p-10 space-y-10 text-xl'>
        <div>
            <div className='text-3xl'>
                Story
            </div>
            <div className='m-5 rounded-xl h-1/2 '>
                <Stories currentCarbon={props.currentCarbon} stories={stories}/>
            </div>
        </div>
        
    </div>
  )
}

export default Right