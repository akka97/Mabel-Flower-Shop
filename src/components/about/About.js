import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import StraightIcon from "@mui/icons-material/Straight";
import CarouselComments from "../CarouselComments/CarouselComments";
import "./About.css";
import vidjoSrc from "../videos/vidjo.mp4"
import { HdrOffSelect } from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>


        <div className="videoServiceContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src={vidjoSrc}
            type="video/mp4"
            />
          </video>
          <div className="aboutVideo">
            <h1>Best Flower Shop in town</h1>
          </div>
          <div className="videoDescription-explore">
            <h3>Let's explore</h3>
            <StraightIcon className="explore-icon" />
          </div>
        </div>

        <div className="vacationDestination">
          <Grid container spacing={2}>
            <Grid item md={12} className="vacationContainer">
              <div className="welcomeContainer">
                <h1>We will choose the best gift flower for you!</h1>
                <div className="horizontalLine"></div>

                <p className="vacationText">
                  "In the world of floral gifting, we take pride in our commitment to selecting the most exquisite and meaningful blooms.
                   Our promise: 'We will choose the best gift flower for you.' Trust us to deliver a floral gift that expresses your sentiment perfectly."
                </p>

                <div className="buttonContainer">
                  <Link to="/services">
                    <Button variant="contained">Learn more</Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="aboutSecion">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />

              <Grid item md={5} className="imageContainerAbout">
                <div className="firstImage">
                  <img
                    src="https://images.pexels.com/photos/2204147/pexels-photo-2204147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={490}
                    height={875}
                    alt=""
                  />
                </div>
                <div className="secondImage">
                  <img
                    src="https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={490}
                    height={875}
                    alt=""
                  />
                </div>
              </Grid>

              <Grid item md={6} className="exploreur">
                <h1>Mabel Flowers was founded in 2020</h1>
                <p>
                  The inception of Mabel Flowers was inspired by a deep passion for bringing nature's beauty to people's lives.
                   We believe that flowers have the remarkable ability to convey emotions, celebrate special moments, and brighten everyday life.
                   Our shop was created to share this belief and offer a place where people can access thoughtfully curated, high-quality blooms to express their feelings and create lasting memories.
                </p>
                <h2>About Us</h2>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className="commentSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="commentContainer">
                <CarouselComments />
                <div></div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default About;