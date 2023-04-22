import { useState } from "react";
import React from "react";
import {useNavigate} from 'react-router-dom';


export default function Button( {text, icon, link} ) {
  const navigate = useNavigate();
    return(
        <button onClick={() => window.open(link)} className="bg-transparent hover:bg-[#c49d64] text-[#c49d64] font-semibold hover:text-white ease-in duration-300 py-6 px-8 w-full h-12 rounded inline-flex items-center border border-[#c49d64] hover:border-transparent rounded-full">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>{text}</span>
        </button>
    );
}