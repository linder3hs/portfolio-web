import React, { useState, useEffect } from "react"
import { Banner, FeaturesWork, Post } from "../../components";
import { getPosts } from "../../service/blog"

const Home = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const posts = await getPosts()

    setPosts(posts.slice(0, 2))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Banner />
      {posts.length > 0 && <FeaturesWork posts={posts} />}
      <Post />
    </>
  );
};

export default Home;
