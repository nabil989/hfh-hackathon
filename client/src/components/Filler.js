const Filler = (props) => {
    return (
        <div className='transition-all ease-in h-full bg-[turquoise] rounded-md' style={{width: `${props.percentage}%`}}>
        </div>
    );
}
 
export default Filler;