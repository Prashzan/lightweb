import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url: "https://wallpaperaccess.com/full/2593105.jpg",
  },
  {
    name: "Photo 2",
    // url: "https://wallpaperaccess.com/full/2593143.jpg",
    url: "https://www.wallpaperuse.com/wallp/23-236967_m.jpg",
  },
  {
    name: "Photo 3",
    url: "https://sac.flipkart.net/wp-content/uploads/2018/07/Blog-Banner.png ",
  },
  {
    name: "Photo 4",
    url: "https://wallpaperaccess.com/full/2593063.jpg",
  },
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <div className="sth" style={{ padding: 24 }}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img src={photo.url} alt="" className="image" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
