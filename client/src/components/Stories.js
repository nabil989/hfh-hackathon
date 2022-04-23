const Stories = (props) => {
    // const stories = 
    // [
    //     [470, "UPDATE: Major cities along the coast including Miami, Osaka, Hong Kong, and more have been flooded, displacing millions of people"],
    //     [500, "UPDATE: Costal cities such as Amsterdam, New Orleans, Venice, and others have gone underwater due to rising temperatures"],
    //     [370, "UPDATE:  The U.S. has shown a 100% increase in citizens using public transportation, leading to a decrease in gas emissions."],
    //     [350, "UPDATE: The E.U.'s new policy that rewards citizens based on the amount of trash they recycle shows tremendous decrease in gas emissions."],
    //     [400, "UPDATE: A record-breaking winter storm has caused a power-outage across the south of the US"],
    //     [340, "UPDATE: Changes in temperature have started to decrease, countries all around the world are starting to prosper."],
    //     [510, "UPDATE: Largest tsunami in history has hit Japan, over 500,000 people have gone missing"],
    //     [350, "UPDATE: Dodobirds, once thought to have gone extinct, have been seen again."]
    // ]
//     "UPDATE: Major cities along the coast including Miami, Osaka, Hong Kong, and more have been flooded, displacing millions of people", 
//     "UPDATE: Costal cities such as Amsterdam, New Orleans, Venice, and others have gone underwater due to rising temperatures", 
//     "UPDATE:  The U.S. has shown a 100% increase in citizens using public transportation, leading to a decrease in gas emissions.", 
//     "UPDATE: The E.U.'s new policy that rewards citizens based on the amount of trash they recycle shows tremendous decrease in gas emissions.", 
//   "UPDATE: A record-breaking winter storm has caused a power-outage across the south of the US", "UPDATE: Dodobirds, once thought to have gone extinct, have been seen again."]);
    return (
        <div className='flex flex-col'>
            {props.stories.map((val, index) => {
                    if(props.currentCarbon >= 380){
                        return <div className='text-3xl'>{props.stories[0]}</div>
                    }
                    if(props.currentCarbon >= 421) {
                        return <div className='text-3xl'>{props.stories[4]}</div>

                    }
                    if(props.currentCarbon >= 350 && props.currentCarbon < 380) {
                        return <div className='text-3xl'>{props.stories[3]}</div>

                    }
                    if(props.currentCarbon >= 380 && props.currentCarbon < 400) {
                        return <div className='text-3xl'>{props.stories[2]}</div>

                    }
                    if(props.currentCarbon >= 460) {
                        return <div className='text-3xl'>{props.stories[1]}</div>

                    }

            })}
        </div>
    );
}
 
export default Stories;