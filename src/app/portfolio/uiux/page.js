"use client";

import { useRouter } from "next/navigation";

export default function UIUXProjects() {
    const router = useRouter() ;
    const handleClick = () => {
        router.push("/portfolio/uiux/sportigear")
    };
    const handleClickSera = () => {
        router.push("/portfolio/uiux/sera")
    };
    const handleClickCoding = () => {
        router.push("/portfolio/uiux/codingdojo")
    };
    
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
                    <button onClick={handleClick} className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer">Show details</button>
                    <a 
                        href="https://www.behance.net/gallery/229227153/SportiGear-Sports-Equipment-E-commerce-Platform" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <button className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer">See Project on Behance</button>
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
                    <button onClick={handleClickSera} className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer">Show details</button>
                    <a 
                        href="https://www.behance.net/gallery/230511111/SERA-University-Transport-Admin-Dashboard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <button className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer">See Project on Behance</button>
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
                    Coding Dojo is a landing page for coding event <br />
                    built with Figma, designed to make the registration of members easy and flexible.
                </p>
                <div className="flex flew-row">
                    <button onClick={handleClickCoding} className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-12 text-lg cursor-pointer">Show details</button>
                    <a 
                        href="https://www.behance.net/gallery/230086395/Coding-Dojo-Coding-Competition-Landing-Page" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <button className="text-[#252525] bg-lime-300 p-2 rounded-xl ml-8 mt-12 text-lg cursor-pointer">See Project on Behance</button>
                    </a>
                </div>
            </div>
        </div>


      </div>
    
    </div>
    );
}