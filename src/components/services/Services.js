import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Services.css";
import servic_videoSrc from "../videos/services_video.mp4"

const Services = () => {

  const imageService = [
    "https://images.pexels.com/photos/6479566/pexels-photo-6479566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11543452/pexels-photo-11543452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11543452/pexels-photo-11543452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>
        <div className="videoServiceContainer">
          <video width="100%" className="video" autoPlay muted loop>
            <source
              src={servic_videoSrc}
              type="video/mp4"
            />
          </video>
          <div className="serviceVideo">
            <h1>Services</h1>
          </div>
        </div>
        <div className="hostVacations">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div className="welcomeContainerService">
                <h1>Let us make your event more perfect</h1>
              </div>
              <div className="horizontalLine"></div>
              <p className="vacationText">
                A promise etched in the delicate curl of a fern leaf and the vibrant allure of a red rose.
                With every bouquet and centerpiece, they wove dreams into reality, turning occasions into timeless stories that would be told and retold.
              </p>
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} sm={12} />
              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
                  style={{ backgroundImage: `url(${imageService[0]})` }}
                >
                  <p>
                  </p>
                  <Link to="/services">
                    <h3>Indoor Events</h3>
                  </Link>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className="service">
                <div
                  className="serviceContainer blogService"
                  style={{ backgroundImage: `url(${imageService[1]})` }}
                >
                  <p>
                  </p>
                  <Link to="/services">
                    <h3>Outdoor Events</h3>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={12} className="displayFlex">
            <Grid item md={2} sm={12} />
            <Grid item md={4} sm={12} className="service">
              <div
                className="serviceContainer blogService"
                style={{ backgroundImage: `url(${imageService[2]})` }}
              >
                <p>
                </p>
                <Link to="/services">
                  <h3></h3>
                </Link>
              </div>
            </Grid>

            <Grid item md={4} sm={12} className="service">
              <div
                className="serviceContainer blogService"
                style={{ backgroundImage: `url(${imageService[3]})` }}
              >
                <p>
                </p>
                <Link to="/services">
                  <h3></h3>
                </Link>
              </div>
              <div className="serviceLevels">
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <div className="welcomeContainerService">
                      <h1>Our Service Levels</h1>
                    </div>
                    <div className="horizontalLine"></div>
                    <p className="vacationText">
                      At our flower shop, we are committed to providing top-notch service, ensuring that every customer's floral experience is memorable,
                      whether it's for everyday joy or significant life events. Your satisfaction is our priority,
                      and we look forward to helping you celebrate life's moments with the beauty of fresh flowers.
                    </p>
                  </Grid>
                </Grid>
              </div>

              <div className="contactSectionContainer">
                <Grid container spacing={2}>
                  <Grid item md={12} className="contactSection">
                    <h3> kindly download our</h3>
                    <div className="horizontalLine"></div>
                    <h1>How we work & packages guide</h1>

                    <Grid item md={12} className="displayFlex serviceFormContainer">
                      <Grid item md={3}>
                        <TextField
                          className="nameInput"
                          color="secondary"
                          placeholder="First Name"
                        />
                      </Grid>

                      <Grid item md={3} className="lastnameInput">
                        <TextField color="secondary" placeholder="Last Name" />
                      </Grid>

                      <Grid item md={3} className="emailInput">
                        <TextField color="secondary" placeholder="Email Address" />
                      </Grid>

                      <Grid item md={3} className="subscribeForm">
                        <Button variant="contained" className="subscribeButton">
                          Subscribe
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>



              <div className="serviceSecion">
                <Grid container spacing={2}>
                  <Grid item md={12} className="displayFlex">
                    <Grid item md={2} />
                    <Grid item md={5} className="imageContainerService">
                      <div className="firstImage">
                        <img
                          src="https://images.pexels.com/photos/5272964/pexels-photo-5272964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width={490}
                          height={595}
                          alt=""
                        />
                      </div>
                      <div className="secondImage">
                        <img
                          src="https://images.pexels.com/photos/8180510/pexels-photo-8180510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width={490}
                          height={595}
                          alt=""
                        />
                      </div>
                    </Grid>

                    <Grid item md={6} className="exploreur">
                      <h1>Mabel Flowers was founded in 2020</h1>
                      <p>
                        The inception of Mabel Flowers was inspired by a deep passion for bringing nature's beauty to people's lives.
                        We believe that flowers have the remarkable ability to convey emotions, celebrate special moments, and brighten everyday life.
                        Our shop was created to share this belief and offer a place where people can access thoughtfully curated,
                        high-quality blooms to express their feelings and create lasting memories.
                      </p>
                      <h2>About Us</h2>
                      <Button variant="contained">Learn more</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>



              <div className="getAway">
                <Grid container spacing={2}>
                  <Grid item md={12} className="awayContainer">
                    <h1>Ready To Surprise Your Beloved?</h1>
                    <h4>
                      <Button variant="contained" className="subscribeButton">Choose your gift</Button>
                    </h4>
                  </Grid>
                </Grid>
              </div>

            </Grid>
            <Grid item md={2} sm={12} />
          </Grid>
        </div>

      </Box >
    </>
  );
};

export default Services;