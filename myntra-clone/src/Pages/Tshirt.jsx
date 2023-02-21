import Navbar from "../Component/Home/Navbar"
import { useState,useEffect } from "react"

function Tshirt(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/tshirts")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return <>
    <Navbar />

    <h1>t shirt</h1>
    <div style={{
        display:"grid",
        gridTemplateColumns: "repeat(4,1fr)",
        textAlign:"left",
        
        
        gap:"30px",
        padding:"20px",
        margin:"30px"
        


}}>
    {
        data?.map((item)=>
        <div >
            
            <img  style={{height:"300px"}}  src={item.image} />
            <h2>{item.brand}</h2>
            <p style={{color:"grey",width:"250px"}}>{item.name}</p>
            <p>{item.price}</p>
            </div>

        )
        
    }
    </div>
    
    
    </>
}

export default Tshirt