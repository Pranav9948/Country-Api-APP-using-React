import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="my-container">
      <div className="loginView lineFlex justify-between">
        <div className="loginCard">
          <h1>Sign In</h1>

          <h5>
            New user ? <span className="p-1 create"> Create an account</span>{" "}
          </h5>

          <div className="">
            <div className="py-2">
              <input
                type="text"
                placeholder="Username or email"
                className="inputClass py-1"
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                placeholder="Password"
                className="inputClass py-1"
              />
            </div>
            <div className="py-2 items-center">
              <input type="checkbox" className="checkbox" />{" "}
              <label htmlFor="checkbox" className="checkboxText pl-5">
                Keep me signed in
              </label>
            </div>

            <div className="pt-15">
              <Link to="/home">
                <button className="btnClass">
                  <h3 className="btnText">Sign In</h3>
                </button>
              </Link>
            </div>
          </div>

          <div className="lineFlex items-center pt-15">
            <hr className="line" />
            <span>Or Sign In With</span>
            <hr className="line" />
          </div>

          <div className="pt-15 lineFlex space-between">
            <div>
              <img
                src={require("../../assets/search.png")}
                alt="google"
                className="imgMap"
                style={{ width: "30px", height: "30px" }}
              />
            </div>

            <div>
              <img
                src={require("../../assets/facebook.png")}
                alt=""
                className="imgMap"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div>
              <img
                src={require("../../assets/linkedin.png")}
                alt=""
                className="imgMap"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div>
              <img
                src={require("../../assets/twitter.png")}
                alt=""
                className="imgMap"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
        </div>

        <div className="lady">
          <div className="mt-15">
            <img
              src={require("../../assets/Illustration (1).png")}
              alt=""
              style={{ width: "277px", height: "412px" }}
              className="mt-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
