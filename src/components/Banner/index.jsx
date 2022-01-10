import {
  Avatar,
  Container,
  Grid,
  Button,
  Typography,
  Box,
} from "@mui/material";
import profile from "../../assets/images/profile.jpeg";

const Banner = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} alignItems="center" minHeight="100vh">
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" fontSize={38} fontWeight="bold">
            Hi, I'm Linder Hassinger
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Software Engineer
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Button color="primary" variant="contained" sx={{ mt: 2 }}>
            Download Resume
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="Linder Hassinger"
              src={profile}
              sx={{ width: 220, height: 220 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
