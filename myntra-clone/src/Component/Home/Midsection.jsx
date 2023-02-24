import { Flex, Box, Image } from "@chakra-ui/react";
import { DofDay, kids } from "../../data";
import { Toppicks } from "../../data";
import { Gifting } from "../../data";
import { BatSP } from "../../data";
import { BofM } from "../../data";
import { grooming } from "../../data";
import { colorseason } from "../../data";
import { stylecast } from "../../data";
import { newness } from "../../data";

function Midsection(){

return <>


    {/* top picks sec */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>TOP PICKS</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {Toppicks.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={240} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* brand at slashed price sec */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>BRANDS AT SLASHED PRICES</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {BatSP.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={4}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={200} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* gifting cards */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>GIFTING CARDS</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {Gifting.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={4}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={360} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* styledcast */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>STYLECAST HOTTEST FINDS</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {stylecast.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={210} objectFit="cover" />
        </Box>
      ))}
    </Flex>

    {/* kids wear */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>BEST OF KIDSWEAR</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {kids.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={210} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* newness */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>NEWNESS FOR EVERY OCCASION</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {newness.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={370} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* grooming */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>LATEST IN BEAUTY & GROOMING</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {grooming.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={370} objectFit="cover" />
        </Box>
      ))}
    </Flex>
    {/* colorseason */}
    <h1 style={{textAlign:"left",fontStyle:"inherit",marginTop:"40px",marginBottom:"40px",marginLeft:"30px",}}>COLOURS OF THE SEASON</h1>
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {colorseason.map((imageUrl, index) => (
        <Box
          key={index}
          boxSize={{ base: "70px", sm: "70px", md: "70px" }}
          m={1}
        >
          <Image src={imageUrl.url} alt={`Image ${index + 1}`} boxSize="100%" width={370} objectFit="cover" />
        </Box>
      ))}
    </Flex>


</>



}
export default Midsection