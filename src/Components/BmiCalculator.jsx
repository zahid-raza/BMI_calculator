import { useState } from "react";
import styles from "./BmiCalculator.module.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [calculated, setCalculated] = useState(false);

  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter valid Weight and Height!!");
    } else {
      let bmi = weight / (height * height);
      setCalculated(true);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are Healthy");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("You fall under the Obesity class");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div
      style={{ display: " flex", justifyContent: "center", marginTop: "10%" }}
    >
      <div className={styles.container}>
        <h1 style={{ textAlign: "center", marginTop: "-2px" }}>
          BMI Calculator
        </h1>
        <form onSubmit={calBmi}>
          <div>
            <h3 style={{ textAlign: "center", marginBlockEnd: "0rem" }}>
              Weight(kg)
            </h3>
            <input
              type="text"
              placeholder="Enter weight "
              style={{
                width: "80%",
                height: "30px",
                marginInline: "10%",
              }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <h3 style={{ textAlign: "center", marginBlockEnd: "0rem" }}>
              Height(m)
            </h3>
            <input
              type="text"
              placeholder="Enter Height "
              style={{
                width: "80%",
                height: "30px",
                marginInline: "10%",
              }}
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div style={{ marginTop: "20px", marginInlineStart: "110px" }}>
            <button className="btn" type="submit" style={{ margin: "10px" }}>
              Calculate
            </button>
            <button
              className="btn btn-outline"
              style={{ marginInline: "10px" }}
              onClick={reload}
            >
              Reload
            </button>
          </div>
          <div>
            {calculated && (
              <>
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>
                  Your BMI is {bmi}{" "}
                </h3>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                  {message}
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BmiCalculator;
