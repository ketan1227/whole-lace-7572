import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Component/Home/Navbar';


function Product() {
  const  productId  = useParams();
 
  console.log(productId)
  const [product, setProduct] = useState({});
  
  
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
 

  useEffect(() => {
    fetch(`http://localhost:3000/tshirts/${productId.productid}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        console.log(data)

      });
  }, []);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // check if item is already in cart
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
    if (itemIndex !== -1) {
      alert('Item already present in cart');
      return;
    }
  
    // add quantity of 1 to the product before pushing to cart
    const productWithQuantity = {...product, quantity: 1};
  
    cartItems.push(productWithQuantity);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItems(cartItems);
  };
  
 
  
  return (
    <>
      <Navbar />
      <div style={{height:"auto",display:"flex",}}>
        <div style={{height:"auto",width:"60%",margin:"10px",display:"grid",gridTemplateColumns: "repeat(2,1fr)",gap:"10px"}}>
          <img src={product.image1} alt="" width="100%" style={{marginRight:"10px"}} />
          <img src={product.image2} alt="" width="100%"/>
          <img src={product.image3} alt="" width="100%"style={{marginRight:"10px"}}/>
          <img src={product.image4} alt="" width="100%"/>
        </div>
        <div style={{height:"auto",width:"40%"}}>
          <div style={{marginTop:"20px"}}>
            <h2>{product.brand}</h2>
            <h2 style={{color:"grey"}}>{product.name}</h2>
            <h3>Rating: {product.rating}</h3>
            <hr></hr>
          </div>
          <div style={{display:"flex",marginTop:"20px"}}>
            <h1>RS: {product.price}</h1>
            <h2 style={{textDecoration:"line-through",color:"grey",marginLeft:"10px"}}>MRP 3000</h2>
            <h2 style={{color:"orange",fontWeight:"bolder",marginLeft:"10px"}}>(20% OFF)</h2>
          </div>
          <hr></hr>
         
         <h2>{product.size.join(', ')}</h2> 
          <div style={{display:"flex"}}>
            <button onClick={addToCart} style={{padding:"20px 100px",backgroundColor:" #e75480",color:"white",fontSize:"larger", border:"0px", borderRadius:"10px"}}>Add To Bag</button>
           

      <button   

      style={{padding:"20px 100px",backgroundColor:"white",color:"black",fontSize:"larger",
      border:"0.5px solid grey", margin:"3px",
      borderRadius:"10px"}}
      >Wish List</button>
      </div>
      <hr></hr>
      <h3>PRODUCT DETAILS </h3>
      <h4>Product Design Details:</h4>
      <p>

      Grey Tshirt for men<br></br>
Solid<br></br>
Regular length<br></br>
Round neck<br></br>
Long, regular sleeves<br></br>
Knitted cotton fabric<br></br>
      </p>
      <h4>Size & Fit</h4>
      <p>Regular Fit<br></br>
The model (height 6') is wearing a size M</p>
<h4>Material & Care</h4>
<p>
100% Cotton<br></br>
Machine wash
</p>
<h4>Specifications</h4>
<p>

Fabric
Pure Cotton
Fit
Regular Fit
Length
Regular
Main Trend
New Basics
Multipack Set
Single
Neck
Round Neck
Occasion
Sports
Pattern
Solid
</p>
      </div>
     
      </div>
    </>
  );
}
export default Product


//json-server --watch db.json
