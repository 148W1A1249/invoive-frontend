import Errorpage from '../../assets/images/404_page_cover.jpg'
function Home(props){
    // console.log(props)
    return<>
    <div className="container p-md-5">
    {
        (()=>{
            if(props.client==="EP"){
               return <h2 className="text-center text-white mt-5">Your in Employee Page</h2>
            }else{
               return <h2 className="text-center text-white mt-5">Your in {props.client} Page</h2>
            }
        })()
    }
        
    </div>
    
    </>;
}

export default Home;