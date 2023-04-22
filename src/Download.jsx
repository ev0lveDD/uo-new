import React from "react";
import NavBar from "./NavBar";
import Button from './Button';
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function Download() {
    return(
    <div>
      <NavBar />
      <div className="App-Body">
        <div className="container w-9/12 my-8">
        <div className="container w-full md:w-2/4 my-8">
          <h1 className="text-6xl font-semibold text-[#c49d64] text-center md:text-left my-8">
            Download
          </h1>
          <p class="mb-3 text-[#71675d]">
            An open source implementation of the Ultima Online Classic Client. Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          </div>
          <div className="flex items-center justify-center md:justify-start my-8">
            <div className="flex md:gap-x-4 flex-col gap-y-2">
              <Button text={"Server Windows x64"}/>
              <Button text={"Server Linux x64"}/>
              <Button text={"Server macOS x64"}/>
            </div>
          </div>
        </div>
        <Footer />
        </div>
    </div>
    )
}