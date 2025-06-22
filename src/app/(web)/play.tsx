import React from "react";
import Link  from "next/link";
// import auth from "./auth";

export default function GameStart() {
  return (
    <div>
          <h1>
          <div className="GO-info-h1" id="GO-info h1">Collisions Detect</div>
          <p className="p">Are you ready to play?</p>
          <Link href="/signin" className="buttonPA" id="buttonPA">Sign in to play</Link>
          {/* <a href="SignIn.js" class="buttonPA" id="buttonPA">Sign in to play</a> */}
          <p className="p">Or</p>
          <Link href="/play" className="buttonPA" id="buttonPA">Play as Guest</Link>
          {/* <a href="./play" class="buttonPA" id="buttonPA">Play as Guest</a> */}
          
      </h1>
    </div>
  );
}