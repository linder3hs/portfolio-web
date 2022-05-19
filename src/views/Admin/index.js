import { useState, useEffect } from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { StoreBlog } from "../../components";
import { getData } from "../../service/firebase";

const Admin = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const data = await getData("/blogs");

    setBlogs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      sx={{
        marginTop: 5,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" fontSize={38} fontWeight="bold">
            Lista de Blogs
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "right",
          }}
        >
          <StoreBlog fetchData={fetchData} />
        </Grid>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <h4>{blog.name}</h4>
                  <p>{blog.author}</p>
                  <p>{blog.description}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Admin;
