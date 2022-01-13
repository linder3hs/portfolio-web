import { useState, useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { getPosts } from "../../service/blog"
import { CardPost } from "../../components"

const Post = () => {

  const [posts, setPost] = useState([])

  const fetchPosts = async () => {
    const posts = await getPosts()

    console.log('posts', posts)

    setPost(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Container maxWidth="md" style={{ marginTop: 100 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h2">Blog</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            {
              posts.length > 0 && posts.map(post => (
                <CardPost data={post} />
              ))
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Post; 
