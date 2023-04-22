import { useState } from "react";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faGit } from '@fortawesome/free-brands-svg-icons';;


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const activeLink="text-teal-500 font-semibold md:text-base text-xl hover:text-teal-400 ease-in duration-300";
    const nonActiveLink="text-[#71675d] font-semibold md:text-base text-xl hover:text-gray-400 ease-in duration-300";
    const nonActiveIcon="text-[#71675d] font-semibold md:text-lg text-xl hover:text-gray-400 ease-in duration-300";

    return (
        <nav className="w-full bg-transparent">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={'/uo-new/'}>
                        <img className="object-contain object-center w-24 h-24 md:w-16 md:h-16" src={require('./Images/uo2.png')}></img>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-[#71675d] rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <li className={location.pathname=="/CentrEd/" ? activeLink : nonActiveLink}>
                            <Link to={'/CentrEd/'} >Home</Link>
                            </li>
                            <li className={location.pathname=="/CentrEd/Download/" ? activeLink : nonActiveLink}>
                            <Link to={'/CentrEd/Download/'}>Download</Link>
                            </li>
                            <li className={location.pathname=="/CentrEd/Support/" ? activeLink : nonActiveLink}>
                            <Link to={'/CentrEd/Support/'}>Donate</Link>
                            </li>
                            <li className={nonActiveLink} onClick={() => window.open('https://github.com/kaczy93/centredsharp/wiki')}>
                            <Link>FAQ</Link>
                            </li>
                            <li className={nonActiveIcon} onClick={() => window.open('https://github.com/kaczy93/centredsharp')}>
                            <Link><FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li className={nonActiveIcon} onClick={() => window.open('https://discord.gg/zpNCv36fQ8')}>
                            <Link><FontAwesomeIcon icon={faDiscord} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}