import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import webImage from "../../assets/images/web.png";

const useStyles = makeStyles({
  media: {
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover",
    borderRadius: 6,
  },
});

const Post = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" sx={{ mt: 2, mb: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="light">
            Featured works
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Card key={index} sx={{ mt: 2 }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        image={webImage}
                        alt="green iguana"
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography variant="h5" fontWeight="bold">
                        Designing Dashboards
                      </Typography>
                      <Chip label="2022" color="warning" sx={{ mt: 2 }} />
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;
