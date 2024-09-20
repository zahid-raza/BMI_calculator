import { Link } from "react-router-dom";

const Home = () => {
  const boxStyle = {
    width: "400px",
    padding: "20px",
    border: "2px solid black",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: "8px",
    color: "white",
  };
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "black",
    color: "#fff",
    border: "1px solid",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <div
      style={{ display: " flex", justifyContent: "center", marginTop: "10%" }}
    >
      <div style={boxStyle}>
        <h1>Calculate Your Body Mass Index</h1>
        <Link to="/bmi" style={buttonStyle}>
          Let's Go
        </Link>
      </div>
    </div>
  );
};

export default Home;
