import { Card, CardContent, CardMedia, Grid, Typography, Chip } from "@mui/material";
import { format } from "date-fns";

const CardWork = ({ data }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <CardMedia
              component="img"
              // className={classes.media}
              image={data.image}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h5" fontWeight="bold">
              {data.type}
            </Typography>
            <Chip label={format(new Date(data.year), "Y")} color="warning" sx={{ mt: 2 }} />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {data.text}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default CardWork
