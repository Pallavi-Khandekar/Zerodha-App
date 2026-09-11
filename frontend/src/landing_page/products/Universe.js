import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5"  >
          <img src={`${process.env.PUBLIC_URL}/media/images/smallcaseLogo.png`} alt="Smallcase" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="logo col-4 p-3 mt-5 "  style={{width:"50%", height:"20%"}}>
          <img src={`${process.env.PUBLIC_URL}/media/images/streakLogo.png`} alt="Streak" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="logo col-4 p-3 mt-5">
          <img src={`${process.env.PUBLIC_URL}/media/images/sensibullLogo.svg`} alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="logo col-4 p-3 mt-5">
          <img src={`${process.env.PUBLIC_URL}/media/images/zerodhaFundhouse.png`} alt="Zerodha Fund House" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5" >
          <img src={`${process.env.PUBLIC_URL}/media/images/goldenpiLogo.png`} alt="Golden Pi" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="logo col-4 p-3 mt-5"  >
          <img src={`${process.env.PUBLIC_URL}/media/images/dittoLogo.png`} alt="Ditto" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;