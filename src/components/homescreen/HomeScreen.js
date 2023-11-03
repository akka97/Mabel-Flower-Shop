import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StraightIcon from "@mui/icons-material/Straight";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import videoSrc from "../videos/video.mp4"

import "./HomeScreen.css";
import { useState } from "react";

function Homescreen() {
    const imageService = [
        "https://www.thelondonflowershop.com/upload/mt/lfs232/products/lg_null-luxury-red-naomi-roses-bouquet.jpg",
        "https://www.thelondonflowershop.com/upload/mt/lfs232/products/lg_null-belle.jpg",
        "https://www.thelondonflowershop.com/upload/mt/lfs232/products/lg_20199100-crate-of-flowers-and-mo%C3%ABt-champagne.jpg",
        "https://www.thelondonflowershop.com/upload/mt/lfs232/products/lg_null-rose-posy-tribute.jpg",
    ];

    const imageBlog = [
        "https://explorateurtravel.com/wp-content/uploads/2022/04/pexels-vasilis-karkalas-11086827-scaled.jpg",
        "https://explorateurtravel.com/wp-content/uploads/2022/03/0J7A3054-1920x1000-1.jpg",
        "https://explorateurtravel.com/wp-content/uploads/2022/02/OIP28629.jpg",
    ];

    const imageData = [
        {
            imgSrc:
                "https://static.showit.co/1200/tTHV9sjSTE-4u32YtW235Q/shared/johnny-africa-_zx0s27d3fw-unsplash.jpg",
            headerTitle: "HAPPY TRAVELERS",
            paragraph:
                "My wife and I had never been to Europe prior to our trip. However, over the years we’ve talked about things we would love to see and do during our first venture across the pond. I brought those ideas to Jennifer and she took them to the next level and beyond our expectations. We spent 2 weeks in Italy (Florence and Rome) and Greece (Santorini and Athens). From coordinating all of our transportation to choosing the absolute best excursions and restaurants in each city my wife and I were able to maximize our experience in each destination. Beyond just maximizing our time, they were able to maximize every dollar spent while working within our budget on this experience we will never forget. If you’re ever considering a special trip, look no further than Explorateur Travel, you wont be disappointed!",
        },
    ];
    const [imageCarousel, setImageCarousel] = useState([0]);
    //https://player.vimeo.com/video/460051765
    return (
        <Box className="mainContainer" component="main" sx={{ p: 3 }}>

            <div className="videoContainer">
                <video width="100%" className="video" autoPlay muted loop>
                    <source
                        src={videoSrc}
                        type="video/mp4"
                    />
                </video>
                <div className="videoDescription">
                    <h4>
                        Best flowershop in town
                    </h4>
                    <h1>just because... and just for you</h1>
                </div>
                <div className="videoDescription-explore">
                </div>
            </div>

            <div className="welcomeSection">
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <div className="welcomeContainer">
                            <h1>WELCOME TO MABEL FLOWERSHOP</h1>
                        </div>

                        <div className="welcomeParagraph">
                            <p>
                                Step into a world of vibrant colors and fragrant blooms, carefully curated to elevate your moments and celebrations.
                                Whether you're expressing love, gratitude, or simply brightening someone's day,
                                our exquisite arrangements and friendly florists are here to make your floral dreams come true.
                            </p>
                        </div>

                        <div className="motoTitle">
                            <h1>Elegance. Vibes. Pasion.</h1>
                        </div>

                        <div className="buttonContainer">
                            <Link to="/services">
                                <Button variant="contained">Learn more</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className="servicesSection">
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <div className="serviceTitle">
                            <h1> Our bouquets</h1>
                        </div>

                        <div className="serviceParagraph">
                        </div>
                    </Grid>

                    <Grid item md={12} className="displayFlex">
                        <Grid item md={2} sm={12} />

                        <Grid item md={2} sm={12} className="service">
                            <div
                                className="serviceContainer"
                                style={{ backgroundImage: `url(${imageService[0]})` }}
                            >
                                <p>
                                    A stunning bouquet of red roses is a timeless and passionate declaration of
                                    love and affection. Each scarlet bloom exudes elegance and desire,
                                    making it the quintessential symbol of romance.
                                </p>
                                <Link to="/services">
                                    <h3>Luxury Romance</h3>
                                </Link>
                            </div>
                        </Grid>

                        <Grid item md={2} sm={12} className="service">
                            <div
                                className="serviceContainer"
                                style={{ backgroundImage: `url(${imageService[1]})` }}
                            >
                                <p>
                                    White lilies are a vision of purity and elegance in the world of flowers. With their pristine,
                                    ivory petals and enchanting fragrance, they symbolize a sense of innocence, virtue, and renewal.
                                </p>
                                <Link to="/services">
                                    <h3>Lilies and Roses</h3>
                                </Link>
                            </div>
                        </Grid>

                        <Grid item md={2} sm={12} className="service">
                            <div
                                className="serviceContainer"
                                style={{ backgroundImage: `url(${imageService[2]})` }}
                            >
                                <p>
                                    A "Crate of Flowers and Champagne" is a luxurious and enchanting gift
                                    that combines the timeless elegance of fresh blooms with the sparkling
                                    sophistication of champagne.
                                </p>
                                <Link to="/services">
                                    <h3>FLOWERS AND CHAMPAGNE</h3>
                                </Link>
                            </div>
                        </Grid>

                        <Grid item md={2} sm={12} className="service">
                            <div
                                className="serviceContainer"
                                style={{ backgroundImage: `url(${imageService[3]})` }}
                            >
                                <p>
                                    The "Rose Posy Tribute" is a poignant and heartfelt floral arrangement that serves as a loving
                                    and respectful gesture to commemorate and honor a cherished individual who has passed away.
                                </p>
                                <Link to="/services">
                                    <h3>ROSE POSY TRIBUTE</h3>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item md={2} sm={12} />
                    </Grid>
                    <Grid item md={12} className="SeeMore">
                        <Link to='/blog'>
                        <Button variant="contained" className="seeMoreButton">
                            See More
                        </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>

            <div className="subscribeSection">
                <Grid container spacing={2}>
                    <Grid item md={12} className="displayFlex">
                        <Grid item md={2} sm={12} className="subscribeImg">
                            <img
                                src="https://static.showit.co/800/rDK57rH3Qv-KeEwAscA4MA/shared/submark_1_9.png"
                                width={500}
                                alt=""
                            />
                        </Grid>

                        <Grid item sm={1} className="subscribeForm" />

                        <Grid item md={8} sm={12} className="subscribeForm">
                            <h3>Find out how we work!</h3>
                            <p>Access our "How we work" guide + subscribe!</p>

                            <Grid item sm={12} className="displayFlex customWidth">
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
                </Grid>
            </div>

            <div className="explorateurSecion">
                <Grid container spacing={2}>
                    <Grid item md={12} className="displayFlex">
                        <Grid item md={2} />

                        <Grid item md={5} className="imageContainerHome">
                            <div className="firstImage">
                                <img
                                    src="https://images.pexels.com/photos/1209477/pexels-photo-1209477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    width={490}
                                    height={595}
                                    alt=""
                                />
                            </div>
                            <div className="secondImage">
                                <img
                                    src="https://images.pexels.com/photos/1601505/pexels-photo-1601505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    width={490}
                                    height={595}
                                    alt=""
                                />
                            </div>
                        </Grid>

                        <Grid item md={6} className="exploreur">
                            <h1>WHY SURPRISING WITH FLOWERS?</h1>
                            <p>
                                Expressing Emotions, Instant Happiness, Thoughtfulness, Support and Comfort,
                                Connection, Surprise and Delight, Long-Lasting Reminders, Acts of Kindness!
                            </p>
                            <h2>About Us</h2>
                            <Button variant="contained">Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}

export default Homescreen;