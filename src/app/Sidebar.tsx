"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa" ; 

export default function Sidebar() {
  return (
    <div className="h-[640px] w-[350px] bg-[#252525] border border-gray-700 ml-32 mt-32 rounded-4xl flex flex-col items-center">
      <img className="rounded-3xl w-[150px] h-[150px] mt-8" src="/me.jpg" alt="me" />
      <h1 className="mt-4 text-amber-50 text-2xl">Benhebbadj Oussama</h1>
      <p className="mt-4 text-[#252525] bg-lime-300 p-2 rounded-xl">
        Web developer & UI/UX Designer
      </p>
      <hr className="w-[150px] border-gray-400 mt-6" />
      <ul className="space-y-4 mt-8">
        <li className="flex items-start space-x-3">
          <FaEnvelope className="text-lime-300 mt-3 w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-xl text-amber-50">Email</span>
            <span className="text-lg text-gray-400">lo_benhebbadj@esi.dz</span>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          <FaPhone className="text-lime-300 mt-3 w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-xl text-amber-50">Phone</span>
            <span className="text-lg text-gray-400">+213 796 20 10 08</span>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-lime-300 mt-3 w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-xl text-amber-50">Location</span>
            <span className="text-lg text-gray-400">Algiers, Algeria</span>
          </div>
        </li>
      </ul>
      <hr className="w-[150px] border-gray-400 mt-6" />
      <ul className="space-x-4 mt-4 flex flex-row">
        <li>
          <a 
            href="https://www.behance.net/benhebboussama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lime-300 hover:text-amber-50 transition-colors"
          >
            <FaBehance className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/OussamaBenhebbadj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lime-300 hover:text-amber-50 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/benhebbadj-oussama-37b264244/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lime-300 hover:text-amber-50 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  );
}
