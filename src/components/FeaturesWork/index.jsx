import { Grid, Container, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "#EDF7FA",
    paddingBottom: "2rem",
  },
  card: {
    minHeight: 300,
    maxHeight: 300
  },
  right: {
    textAlign: "right",
  }
});

const FeaturesWork = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <Typography variant="h6" fontWeight="light">
                  Recent posts
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} className={classes.right}>
                <Link to="/posts">
                  View all
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid item xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold">
                        {post.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {format(new Date(post.createdAt), "dd MMM Y")} |  {post.type}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {post.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeaturesWork;
