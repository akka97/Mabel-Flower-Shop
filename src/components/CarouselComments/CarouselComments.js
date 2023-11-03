import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import StraightIcon from "@mui/icons-material/Straight";
import "./CarouselComments.css";

const CarouselComments = () => {
  const [imagePost, setImagePost] = useState(0);
  const postCarousel = [
    {
      image:
        "https://images.pexels.com/photos/5413725/pexels-photo-5413725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postTitle: "Happy Customers",
      postDescription:
        "At Mabel Flowers, our mission is to ensure the delight of our customers. With our dedication to 'We will choose the best gift flower for you,' we've been bringing smiles to countless happy customers with our thoughtfully selected and beautifully crafted floral gifts.",
      readMore: "Read More",
    },
    {
      image:
        "https://images.pexels.com/photos/10178248/pexels-photo-10178248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postTitle: "Happy World",
      postDescription:
        "In essence, by making it a priority to satisfy customers, we participate in the collective effort to build a better world. It's a reminder that in both small and large ways, we can positively impact the world around us by valuing and prioritizing the people we serve. ",
      readMore: "Read More",
    }
  ];

  const handleBack = () => {
    setImagePost((prevState) => {
      if (prevState <= 0) {
        return (prevState = postCarousel.length - 1);
      } else {
        return prevState - 1;
      }
    });
  };

  const handleForward = () => {
    setImagePost((prevState) => {
      if (prevState >= postCarousel.length - 1) {
        return (prevState = 0);
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <>
      <Grid
        item
        md={12}
        className="displayFlex carouselPosts"
        style={{ backgroundImage: `url(${postCarousel[imagePost].image})` }}
      >
        <Grid item md={2} className="imageCarousel" />
        <Grid item md={1} sm={1} className="leftButtonContainer">
          <Button className="goBackButton" onClick={handleBack}>
            <StraightIcon className="goBack" />
          </Button>
        </Grid>

        <Grid item md={9} className="carouselContainer">
          <div className="carouselPostInfo">
              <Link to={"/"}>
                  <h1>{postCarousel[imagePost].postTitle}</h1>
              </Link>
                <p>{postCarousel[imagePost].postDescription}</p>
          </div>
        </Grid>

        <Grid item md={1} sm={1} className="rightButtonContainer">
          <Button className="goForwardButton" onClick={handleForward}>
            <StraightIcon className="goForward" />
          </Button>
        </Grid>
        <Grid item md={2} className="imageCarousel" />
        
      </Grid>
    </>
  );
};

export default CarouselComments;