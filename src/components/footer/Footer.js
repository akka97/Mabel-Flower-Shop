import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item md={12} className="footerSection">
                        <div className="footerContainer">
                            <h1>May these blooms brighten your day</h1>
                            <Link to="/" className="igContainer">
                                <Button variant="contained">@Mabel</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;