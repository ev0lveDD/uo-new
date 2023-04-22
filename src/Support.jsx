import React from "react";
import NavBar from "./NavBar";
import Button from './Button';
import Footer from "./Footer";
import {Link} from "react-router-dom";


export default function Support() {
  return (
    <div>
      <NavBar />
      <div className="App-Body">
        <div className="container w-9/12 m-40 mx-8 my-8">
        <div className="container w-full md:w-2/4 my-8">
          <h1 className="text-6xl font-semibold text-[#c49d64] text-center md:text-left my-8">
          Support ClassicUO!
          </h1>
          <p class="mb-3 text-[#71675d]">
          ClassicUO still here and in active development since 3 years thanks to our passion to this amazing game, but as all important open source projects it needs financial support to sustain its continued improvements. Your contributions keep this project alive.</p>
          </div>
          <div className="flex items-center justify-center md:justify-start my-8">
            <div className="flex md:gap-x-4 flex-col gap-y-2">
              <Button text={"Ko-Fi"} link={"https://ko-fi.com/kaczy"}/>
              <Button text={"Github sponsorship"} link={"https://github.com/sponsors/kaczy93"}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}