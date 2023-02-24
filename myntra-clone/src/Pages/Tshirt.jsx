import Navbar from "../Component/Home/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";

function Tshirt() {
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState({ color: "", brand: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `http://localhost:3000/tshirts`;
    if (sortBy) {
      url += `?_sort=price&_order=${sortBy}`;
    
    if (filter.brand) {
      url += `&brand=${filter.brand}`;
    }
    if (filter.color) {
      url += `&color=${filter.color}`;
    }
    }
    else if (filter.brand) {
      url += `?brand=${filter.brand}`;
    
    if (filter.color) {
      url += `&color=${filter.color}`;
    }
  }else if(filter.color){
    url+=`?color=${filter.color}`
  }
 
  
  
 


 

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sortBy, filter]);
  
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };
const handleclick=()=>{
  
return 
}
 

  return (
    <>
      <Navbar />
      <div style={{display:"flex", marginBottom:"20px",justifyContent:"space-between",marginTop:"100px"}}>
        <div>
      <h4 style={{color:"grey"}}>Home / Clothing / Men T-Shirts</h4>

      <h4>Men T-Shirts
 - 30 items</h4>
 </div>
      <div style={{display:"flex",}}>
        
        <h2>Sorted By:</h2>
      <select  style={{borderRadius:"15px",marginLeft:"10px",height:"50px",marginTop:"10px"}}value={sortBy} onChange={handleSortByChange}>
        <option value="">Recommended</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      </div>
      </div>
      <div style={{display:"flex"}}>
        <div style={{width:"500px", textAlign:"center"}}>
      <div>
        <h1>Filters</h1>
        <label > filter By Color:</label><br></br>
        <select
        style={{padding:"10px",borderRadius:"10px",marginTop:"20px"}}
          name="color"
          value={filter.color}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Black">Black</option>
          <option value="Grey">Grey</option>
          <option value="White">White</option>
        </select>
      </div>
      <div
        style={{marginTop:"50px"}}
      >
        <label style={{ marginBottom: "30px" }}>Filter By Brand:</label>
        <br></br>
        <select
        style={{padding:"10px",borderRadius:"10px",marginTop:"30px"}}
          name="brand"
          value={filter.brand}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Puma">Puma</option>
          <option value="Adidas">Adidas</option>
          <option value="HRX by Hrithik Roshan">HRX by Hrithik Roshan</option>
        </select>
      </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          textAlign: "left",
          gap: "40px",
          padding: "50px",
          marginLeft: "60px",
          
        }}
      >
        {Array.isArray(data) &&
          data.map((item) => (
            <Link key={item.id} style= {{color:"black",textDecoration:"none"}}  to={`/tshirt/${item.id}`}>
            <div style={{width:"250px"}}   key={item.id}>
              <img
                style={{ height: "300px" }}
                src={item.image}
                alt={item.name}
              />
              <h2>{item.brand}</h2>
              <p style={{ color: "grey", width: "250px" }}>{item.name}</p>
              <h3>Rs.{item.price}</h3>
              
            </div>
            </Link>
          ))}
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Tshirt;
