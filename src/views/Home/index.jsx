import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/login">ir al login</Link>
    </>
  );
};

export default Home;
