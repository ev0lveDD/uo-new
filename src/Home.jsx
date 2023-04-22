import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function Home() {
    return(
    <div>
      <NavBar />
      <div className="App-Body">
        <div className="container w-9/12 my-8">
          <div className="container w-full md:w-2/4 my-8">
          <h1 className="text-6xl font-semibold text-[#c49d64] text-center md:text-left my-8">
            CentrEd#
          </h1>
          <p class="mb-3 text-[#71675d]">
          CentrED stands for Centralized Editing. It is a Client/Server based map editor for Ultima Online. CentrED# is a complete rewrite of original project to .NET C#
          </p>
          </div>
          <div className="flex items-center justify-center md:justify-start my-16">
            <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
            <Link to={'/CentrEd/Support/'}>
            <button className="bg-red-600 hover:bg-red-500 text-white font-semibold ease-in duration-300 py-6 px-8 w-full h-12 rounded inline-flex items-center rounded-full">
                <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
                <span>Support CentrEd# ! </span>
              </button>
            </Link>
              <button onClick={() => window.open('https://github.com/kaczy93/centredsharp/wiki/Server-setup')} className="bg-gray-800 hover:bg-gray-700 text-white font-semibold ease-in duration-300 py-6 px-8 w-30 h-12 rounded inline-flex items-center rounded-full">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Need help to install? </span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
        </div>
    </div>
    )
}