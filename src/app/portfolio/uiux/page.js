"use client";

import { useRouter } from "next/navigation";
import { FaBehance } from "react-icons/fa" ; 

export default function UIUXProjects() {
    const router = useRouter() ;
    
    return (
    <div className="w-[1300] h-full mx-16 bg-[#252525] border-1 border-gray-700 rounded-4xl mt-12">
      <h1 className="ml-16 mt-6 text-3xl text-amber-50 ">UI/UX</h1>
      <hr className="border-2 rounded-2xl border-lime-300 w-[50] mt-2 ml-16" />
      <div>
        <div className="flex flex-row">
            <div>
                <img className="w-[220px] h-[170px] mt-8 ml-16" src="/sporti.png" alt="sportigear" />
            </div>
            <div>
                <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">SportiGear</h1>
                <p className="text-xl text-amber-50 fon mt-2 ml-8">
                    SportiGear is an athlete e-commerce
                    website , featuring a fast delivery system . <br />
                    It’s implemented with Figma .
                </p>
                <div className="flex flew-row">
                    <a
                        href="https://www.behance.net/gallery/229227153/SportiGear-Sports-Equipment-E-commerce-Platform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer hover:bg-lime-400 transition"
                        >
                        <FaBehance className="h-6 w-6 text-gray-800 mx-2" />
                        See details on Behance
                    </a>

                </div>
            </div>
        </div>

        <div className="flex flex-row">
            <div>
                <img className="w-[220px] h-[190px] mt-8 ml-16" src="/sera.png" alt="sportigear" />
            </div>
            <div>
                <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">SERA</h1>
                <p className="text-xl text-amber-50 fon mt-2 ml-8">
                    SERA is a sleek and intuitive university transport administration dashboard <br />
                    built with Figma, designed to optimize the management of on-campus vehicle fleets—covering <br />
                    scheduling, routing, and fast delivery logistics—all within a clean, responsive interface
                </p>
                <div className="flex flew-row">
                    <a
                        href="https://www.behance.net/gallery/229227153/SportiGear-Sports-Equipment-E-commerce-Platform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer hover:bg-lime-400 transition"
                        >
                        <FaBehance className="h-6 w-6 text-gray-800 mx-2" />
                        See details on Behance
                    </a>
                </div>
            </div>
        </div>

        
        <div className="flex flex-row">
            <div>
                <img className="w-[220px] h-[190px] mt-8 ml-16" src="/nardjes.png" alt="sportigear" />
            </div>
            <div>
                <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Nardjesse</h1>
                <p className="text-xl text-amber-50 fon mt-2 ml-8">
                    Nardjesse is a refined perfume & beauty platform <br />
                    crafted with Figma, designed to offer an elegant and smooth experience for fragrance lovers.
                </p>
                <div className="flex flew-row">
                    <a
                        href="https://www.behance.net/gallery/229577843/Nardjesse-Cosmetic-Perfume-Store-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-8 text-lg cursor-pointer hover:bg-lime-400 transition"
                        >
                        <FaBehance className="h-6 w-6 text-gray-800 mx-2" />
                        See details on Behance
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-row">
            <div>
                <img className="w-[220px] h-[190px] mt-8 ml-16" src="/sehhatna.png" alt="sportigear" />
            </div>
            <div>
                <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Sehhatna</h1>
                <p className="text-xl text-amber-50 fon mt-2 ml-8">
                    Sehhatna is a modern medical center platform <br />
                    crafted with Figma, designed to provide patients with <br />
                    a smooth, professional, and caring digital experience.
                </p>
                <div className="flex flew-row">
                    <a
                        href="https://www.behance.net/gallery/230216885/Sehhatna-Medical-Center-Clinic-Website-Landing-Page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-5 text-lg cursor-pointer hover:bg-lime-400 transition"
                        >
                        <FaBehance className="h-6 w-6 text-gray-800 mx-2" />
                        See details on Behance
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-row">
            <div>
                <img className="w-[220px] h-[190px] mt-8 ml-16" src="/coding.png" alt="sportigear" />
            </div>
            <div>
                <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Coding Dojo</h1>
                <p className="text-xl text-amber-50 fon mt-2 ml-8">
                    Coding Dojo is an engaging coding competition landing page<br />
                    crafted with Figma, designed to ignite developers’ spirit<br />
                    through a dynamic, clean, and interactive digital experience.
                </p>
                <div className="flex flew-row">
                    <a
                        href="https://www.behance.net/gallery/230086395/Coding-Dojo-Coding-Competition-Landing-Page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-5 text-lg cursor-pointer hover:bg-lime-400 transition"
                        >
                        <FaBehance className="h-6 w-6 text-gray-800 mx-2" />
                        See details on Behance
                    </a>
                </div>
            </div>
        </div>


      </div>
    
    </div>
    );
}