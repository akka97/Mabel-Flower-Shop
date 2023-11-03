import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import StraightIcon from "@mui/icons-material/Straight";
import { Link } from "react-router-dom";
import "./Blog.css";
import { useState } from "react";



const Blog = () => {
  const postCarousel = [
    {
      image:
        "https://www.bloom-boom.shop/cdn/shop/files/IMG_2824.jpg?v=1695125251&width=1000",
      postTitle: "Monobouquet of gypsophiles",
      postDescription: "In a bouquet of 25 gypsophila, each flower accentuates its individual character, but together they form a harmonious composition, like notes in a musical masterpiece.This bouquet is an invitation to the world of dreams and romance. It has the power to transform any space and infuse it with delicacy and refinement."
    },
    {
      image:
        "https://www.bloom-boom.shop/cdn/shop/files/IMG_2784.jpg?v=1695126580&width=1000",
      postTitle: "MONOBOUQUET OF 51 TULIPS",
      postDescription:
        "A bouquet of 51 delicate tulips is a graceful and enchanting composition. These tulips, with their soft and gentle petals, create a soothing and elegant display of nature's beauty. The pale hues of these flowers evoke feelings of serenity and tenderness, making them a perfect choice for a wide range of occasions. This bouquet is a harmonious assembly of tulips that collectively exudes an air of refinement and natural charm.",
    },
    {
      image:
        "https://www.bloom-boom.shop/cdn/shop/files/IMG_2763.jpg?v=1695126624&width=1000",
      postTitle: "Monobouquet of 51 red ranunculus",
      postDescription:
        "A bouquet of 51 red ranunculus is a striking display of nature's artistry. Each ranunculus in this collection exhibits vibrant crimson petals that come together to form a captivating ensemble. These flowers boast a deep and passionate shade of red, creating an eye-catching arrangement that commands attention. The ranunculus blooms are complemented by their lush green foliage, adding a touch of contrast and elegance to the bouquet.",
    },
    {
      image:
        "https://www.bloom-boom.shop/cdn/shop/files/IMG_2740.jpg?v=1695121869&width=1000",
      postTitle: "Calla mono bouquet",
      postDescription:
        "This mono bouquet is crafted from the most exquisite calla lilies, which seem to have captured the magic of nature's beauty and grandeur. Calla lilies symbolize purity, elegance, and sophistication. Gift tranquility and luxury with our calla lilies.",
    },
    {
      image:
        "https://www.bloom-boom.shop/cdn/shop/files/IMG_2803_0c613ff2-d999-4590-a55a-5fa9a6758bd2.jpg?v=1695125934&width=1000",
      postTitle: "Monobouquet of 39 carnations",
      postDescription:
        "A bouquet of 39 carnations represents a remarkable blend of classic and refinement. Carnations, with their dense buds and colorful petals, create a clear and orderly composition. Each flower in the bouquet has a distinct shape and structure, giving it a strict and structured appearance. This bouquet is suitable for various occasions and interiors, adding elegance and uniqueness to them.",
    },
  ];

  const [imagePost, setImagePost] = useState(0);

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
      <Box className="mainContainer" component="main" sx={{ p: 3 }}>
        <div className="imageContainer"></div>
        <div className="posterBg"></div>

        <div className="postSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} className="imageCarousel" />

              <Grid item md={1} sm={1} className="leftButtonContainer">
                <Button className="goBackButton" onClick={handleBack}>
                  <StraightIcon className="goBack" />
                </Button>
              </Grid>

              <Grid item md={4} sm={12} className="carouselContainer">
                <div className="imageCarouselContainer">
                  <img
                    src={`${postCarousel[imagePost].image}`}
                    alt={postCarousel[imagePost].image}
                  />
                </div>
              </Grid>
              <Grid item md={3} sm={12} className="postContainer">
                <div className="postInformation">
                  <h3>RECENT POSTS</h3>
                  <Link to={"/"}>
                    <h1>{postCarousel[imagePost].postTitle}</h1>
                  </Link>
                  <p>{postCarousel[imagePost].postDescription}</p>

                  <Link to="/" className="readMore">
                    {postCarousel[imagePost].readMore}
                  </Link>
                </div>
              </Grid>
              <Grid item md={1} sm={1} className="rightButtonContainer">
                <Button className="goForwardButton" onClick={handleForward}>
                  <StraightIcon className="goForward" />
                </Button>
              </Grid>
              <Grid item md={2} className="imageCarousel" />
            </Grid>
          </Grid>
        </div>

        <div className="blogSection">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <h1 className="titleContainer">Bouquets</h1>
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://www.bloom-boom.shop/cdn/shop/files/IMG_4664.webp?v=1696859612&width=1000"
                    alt="karkalas-11086827-scaled"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Monobouquet of 75 roses</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <h5>$208.00</h5>
                  </div>
                </div>
              </Grid>
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://www.bloom-boom.shop/cdn/shop/files/IMG_2784.jpg?v=1695126580&width=1000"
                    alt="0J7A3054-1920x1000-1"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Monobouquet of 51 tulips</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <h5>180$</h5>
                  </div>
                </div>
              </Grid>
              <Grid item md={2} />
            </Grid>
            <Grid item md={12} className="displayFlex">
              <Grid item md={2} />
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://www.bloom-boom.shop/cdn/shop/files/IMG_2824.jpg?v=1695125251&width=1000"
                    alt="11086827-scaled"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Monobouquet of gypsophiles</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <h5>120$</h5>
                    </div>
                  </div>
              </Grid>
              <Grid item md={4}>
                <div className="blogPostContainer">
                  <img
                    src="https://www.bloom-boom.shop/cdn/shop/files/IMG_2763.jpg?v=1695126624&width=1000"
                    alt="0J7A3054-1920x1000"
                  />
                  <div className="blogPostDescription">
                    <h3>
                      <Link to="/">Bouquet of 51 red ranunculus</Link>
                    </h3>
                    <div className="horizontalLine"></div>
                    <h5>190$</h5>
                  </div>
                </div>
              </Grid>
              <Grid item md={2} />
            </Grid>

            <Grid item md={12}>
              <div className="paginationContainer">
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="photoSection">
          <Grid container spacing={2}>
            <Grid item md={12} className="displayFlex">
              <div className="imageSectionContainer">
                <img
                  src="https://images.pexels.com/photos/773805/pexels-photo-773805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="dne9iz1kqzk-unsplash"
                />
                <div className="backgroundCover"></div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Blog;