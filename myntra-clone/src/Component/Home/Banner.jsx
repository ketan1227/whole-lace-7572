import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../data';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Banner(){
    return <Carousel 
    responsive={responsive}
    swipeable={false}
  draggable={false}
  showDots={true}
  autoPlaySpeed={1000}
  infinite={true}
    dotListClass='custom-dot-list-style'
    containerClass='carousel-container'
  itemClass='carousel-item-padding-40-px'
  transitionDuration={500}
  
    
    >
{
    bannerData.map(item=>(
<img height={400}   src={item.url} />

    )

    )
}


    </Carousel>
}

export default Banner