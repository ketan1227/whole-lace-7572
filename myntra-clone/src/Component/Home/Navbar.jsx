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


  return (
    <>
    <Flex as="nav" alignItems="center" justify="space-between" p="2" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" height="70" mb="30"
    
    >
      <Box>
        <img src="/logo.png" alt="Logo" width="50" height="50" />
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
              <Box> <Link to="/tshirt">T-SHIRTS</Link></Box>
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
        <Box mr="20">WOMEN</Box>
        <Box mr="20">KIDS</Box>
        <Box mr="20">HOME&APPLIANCES</Box>
        <Box mr="20">BEAUTY</Box>
        </Box>
      <Box display="flex" alignItems="center" p={10}>
        <Input variant="filled" placeholder="Search Products Brands and More" mr="2" pl={60} pr={70}  pt={15} pb={15} bg="lightgray" 
        borderRadius={5} border="0px solid white" />
        <IconButton
          aria-label="Search "
          variant="ghost"
          p={10}
          icon={<FaSearch />}
        />
      </Box>
      
      <Box display="flex" alignItems="center">
        <div>
        <IconButton
        onMouseEnter={() => setIsprofile(true)}
        onMouseLeave={() => setIsprofile(false)} 
          aria-label="Profile"
          variant="ghost"
          icon={<FaUser />}
          mr="5"
          p={10}
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
              
            >
              <Box>Login/signup</Box>
              <hr></hr>
              <Box>Orders</Box>
              <Box>WishList</Box>
              <Box>GiftCards</Box>
              <Box>Contact Us</Box>
              <Box>LogOut</Box>
              
              </Box>}
              </div>
        <IconButton
          aria-label="Wishlist"
          variant="ghost"
          icon={<FaHeart />}
          mr="5"
          p={10}
        />
        <Link to="/cart">
        <IconButton
          aria-label="Cart"
          variant="ghost"
          p={10}
          
          border="white"
          icon={<FaShoppingCart />}
        />
        </Link>
      </Box>
    </Flex>
    
    </>
  );
}

export default Navbar;
