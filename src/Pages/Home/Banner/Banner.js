import React from "react";

import BannerItem from "./Banneritem";
import Carousel from "react-material-ui-carousel";

var bannerData = [
    {
        name: "Random Name #1",
        header:'"Think before you speak. Read before you think." - Fran Lebowitz',
        description: "",
        image: "https://i.ibb.co/Rjxqhtr/books-1281581-960-720.jpg",
        id:1
    },
    {
        name: "Random Name #1",
        header:'"If you dont like to read, you havent found the right book." - J.K. Rowling',
        description: "",
        image: 'https://i.ibb.co/VmK5GTw/books-1204029-960-720.jpg',
        id:2
    },
    {
        name: "Random Name #1",
        header:'"Some books leave us free and some books make us free." - Ralph Waldo Emerson',
        description: "",
        image: 'https://i.ibb.co/xJyTTz8/books-5937716-960-720.jpg',
        id:3
    },
];

const Banner = () => {
  return (
 
    <Carousel>
            {
                  bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </Carousel>

  );
};

export default Banner;
