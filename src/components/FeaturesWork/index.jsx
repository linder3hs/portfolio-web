import { Grid, Container, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "#EDF7FA",
    paddingBottom: "2rem",
  },
});

const FeaturesWork = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="light">
              Recent posts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      Making a design system from scratch
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      12 Feb 2022 | Design, Pattern
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      Creating pixel perfect icons in Figma
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      12 Feb 2022 | Design, Pattern
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeaturesWork;
