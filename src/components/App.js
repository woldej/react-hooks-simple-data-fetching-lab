import React,{useEffect,useState} from "react";

function App(){
    const [images,setImages]=useState("")
    const [isLoaded, setIsLoaded] = useState(false);

    const url="https://dog.ceo/api/breeds/image/random"
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setImages(data)
            setIsLoaded(true);

        })
    },[])
    if (!isLoaded) return <h3>Loading...</h3>;

    return(
        <div>
            <h3>Images</h3>
        <img src={images.message} alt="A Random Dog"/>
        </div>
    )
}

export default App;
