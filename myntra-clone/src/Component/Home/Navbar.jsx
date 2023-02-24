import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  IconButton,
  
} from "@chakra-ui/react";


import { FaSearch, FaUser, FaHeart, FaShoppingCart} from "react-icons/fa";
import { Link, Navigate} from "react-router-dom";

function Navbar() {
    const [isMensWearHover, setIsMensWearHover] = useState(false);
    const [isprofile, setIsprofile] = useState(false);
    const [iswomen,setwomen]=useState(false)


  return (
    <>
     <Flex as="nav" alignItems="center" justify="space-between" p="2" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" height="70" mb="30" position="fixed" top="0" left="0" right="0" zIndex="1" bg="white"
    
    >
      <Box>
        <Link to="/">
        <img   src="logo.png" alt="Logo" width="100" height="80" /></Link>
      </Box>
      <Box display="flex" alignItems="center" mr="10">
        <Box mr="20" onMouseEnter={() => setIsMensWearHover(true)}
          onMouseLeave={() => setIsMensWearHover(false)} bg="white">MEN
           {isMensWearHover && (
            <Box
              position="absolute"
              mt="0"
              p="20"
              bg="white"
              boxShadow="md"
              textAlign="left"
              zIndex="1"
              cursor="pointer"
              width={300}
              
              display="flex"
              
            >
              <Box mr={40}>
              <Box fontWeight="bold"  color="pink" >TOP WEAR</Box>
              <Box> <Link style={{textDecoration:"none",color:"black"}} to="/tshirt">T-SHIRTS</Link></Box>
              <Box>Shirts</Box>
              <Box>CASUAL SHIRTS</Box>
              <Box>Formal Shirts</Box>
              <Box>Swat Shirts</Box>
              <Box>Jacket</Box>
              <Box>Blazzers</Box>
              <Box>Suits</Box>
              </Box>
              <Box>
              <Box fontWeight="bold" color="pink" >Bottom WEAR</Box>
              <Box>Jeans</Box>
              <Box>Casual Trouser</Box>
              <Box>Funky Jeans</Box>
              <Box>Shorts</Box>
              <Box>Track Pants</Box>
              <Box fontWeight="bold" color="pink" >Inner wear & sleep WEAR</Box>
              <Box>Boxer</Box>
              <Box>Vest</Box>
              <Box>Sando</Box>
              <Box>Thermals</Box>
              </Box>
            </Box>
            
          )}
          </Box>
        <Box mr="20" onMouseEnter={() => setwomen(true)}
          onMouseLeave={() => setwomen(false)} bg="white"  >WOMEN
        {iswomen && (
            <Box
              position="absolute"
              mt="0"
              p="20"
              bg="white"
              boxShadow="md"
              textAlign="left"
              zIndex="1"
              cursor="pointer"
              width={300}
              
              display="flex"
              
            >
              <Box mr={40}>
              <Box fontWeight="bold"  color="red" >TOP WEAR</Box>
              <Box> <Link style={{textDecoration:"none",color:"black"}} to="/tshirt">Kurtas & Suits</Link></Box>
              <Box>Kurtis, Tunics & Tops</Box>
              <Box>Sarees</Box>
              <Box>Ethnic Wear</Box>
              <Box>Leggings, Salwars & Churidars</Box>
              <Box>Jacket</Box>
              <Box>Lehenga Cholis</Box>
              <Box>Suits</Box>
              </Box>
              <Box>
              <Box fontWeight="bold" color="red" >Westerns Wears</Box>
              <Box>Dresses</Box>
              <Box>Tops</Box>
              <Box>Tshirts</Box>
              <Box>Shorts</Box>
              <Box>Track Pants</Box>
              <Box fontWeight="bold" color="red" >Inner wear & sleep WEAR</Box>
              <Box>Boxer</Box>
              <Box>Vest</Box>
              <Box>Sando</Box>
              <Box>Thermals</Box>
              </Box>
            </Box>
            
          )}
        </Box>
        <Box mr="20">KIDS</Box>
        <Box mr="20">HOME&APPLIANCES</Box>
        <Box mr="20">BEAUTY</Box>
        <Box>Studio</Box>
        </Box>
      <Box display="flex" alignItems="center" p={10}>
        <Input variant="filled" placeholder="Search Products Brands and More" mr="2" pl={100} pr={100}  pt={15} pb={15} bg="white" 
        borderRadius={5} border="1px solid grey" />
       
      </Box>
      
      <Box display="flex" alignItems="center" mr={40}>
      
          <Box   onMouseEnter={() => setIsprofile(true)}
        onMouseLeave={() => setIsprofile(false)} >
        <IconButton
        
          aria-label="Profile"
          variant="ghost"
          icon={<FaUser />}
          mr="5"
          p={10}
          style={{border:"0px",backgroundColor:"white",fontSize:"larger"}}
        />
        {isprofile && 
            <Box
            position="absolute"
            mt="0"
            p="20"
            bg="white"
            boxShadow="md"
            textAlign="left"
            zIndex="1"
            cursor="pointer"
              
            ><Link style={{textDecoration:"none",color:"black"}} to="/signup">
              <Box>Login/signup</Box>
              </Link>
              <hr></hr>
              <Box>Orders</Box>
              <Box>WishList</Box>
              <Box>GiftCards</Box>
              <Box>Contact Us</Box>
              <Box>LogOut</Box>
              
              </Box>}
              </Box>
        <IconButton
          aria-label="Wishlist"
          variant="ghost"
          icon={<FaHeart />}
          mr="5"
          p={10}
          style={{border:"0px",backgroundColor:"white",fontSize:"larger"}}
        />
        <Link to="/cart">
        <IconButton
          aria-label="Cart"
          variant="ghost"
          p={10}
          style={{border:"0px",backgroundColor:"white",fontSize:"larger"}}
          
          icon={<FaShoppingCart />}
        />
        </Link>
      </Box>
    </Flex>
    
    </>
  );
}

export default Navbar;
