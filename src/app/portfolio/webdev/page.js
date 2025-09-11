"use client";

import { FaBehance , FaGithub } from "react-icons/fa" ; 

export default function WebDevProjects() {
    return ( 
    <div className="w-[1300] h-full mx-16 bg-[#252525] border-1 border-gray-700 rounded-4xl mt-12">
      <h1 className="ml-16 mt-6 text-3xl text-amber-50 ">Web developpement</h1>
      <hr className="border-2 rounded-2xl border-lime-300 w-[50] mt-2 ml-16" />

      <div>
              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[170px] mt-8 ml-16" src="/shopper.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">SHOPPER</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          SHOPPER is an e-commerce
                          website to sell clothes for men,women and kids <br />
                          It’s implemented with React , Tailwind , Nodejs , ExpressJS and Mongoodb.
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/OussamaBenhebbadj/e-commerce-web-app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
      
                      </div>
                  </div>
              </div>
      
              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[190px] mt-8 ml-16" src="/drover.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Drover</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          Drover is a car website to share details about cars with various filters <br />
                          built with ReactJS and Tailwind.
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/OussamaBenhebbadj/Drover"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-4 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
                      </div>
                  </div>
              </div>
      
              
              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[190px] mt-8 ml-16" src="/quiz.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Quiz App</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          Quiz App creatad to computer scientist , it conains various questions <br />
                          implemented with ReactJS and Tailwind.
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/OussamaBenhebbadj/quiz-app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-8 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
                      </div>
                  </div>
              </div>
      
              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[190px] mt-8 ml-16" src="/nodefarm.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Node Farm</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          Node Farm is a simple web application built with Node.js to demonstrate core server-side concepts <br />
                          without using frameworks like Express.
                          It features a basic HTTP server that serves dynamic HTML pages <br />  using template files and data stored in JSON format. 
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/OussamaBenhebbadj/node-farm/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-5 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
                      </div>
                  </div>
              </div>
      
              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[190px] mt-8 ml-16" src="/myportfolio.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">My Portfolio</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          My personal website contains my projects and my resume <br />
                          created with NextJS .<br />
                          
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/OussamaBenhebbadj/my-portfolio"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-5 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
                      </div>
                  </div>
              </div>

              <div className="flex flex-row">
                  <div>
                      <img className="w-[220px] h-[190px] mt-8 ml-16" src="/sehhatna.png" alt="sportigear" />
                  </div>
                  <div>
                      <h1 className="text-2xl text-lime-300 font-bold mt-8 ml-8">Sehhantna</h1>
                      <p className="text-xl text-amber-50 fon mt-2 ml-8">
                          Sehhatna is a modern medical center platform created to provide patients <br /> 
                          with a smooth, professional, and caring digital experience <br />
                          It is a team project created with Angular and Django where i designed the platform and the frontend side.
                          
                      </p>
                      <div className="flex flew-row">
                          <a
                              href="https://github.com/Kemer-ayoub/TP_IGL"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold flex items-center gap-2 text-[#252525] bg-lime-300 px-4 py-2 rounded-xl ml-8 mt-5 text-lg cursor-pointer hover:bg-lime-400 transition"
                              >
                              <FaGithub className="h-6 w-6 text-gray-800 mx-2" />
                              See code on Github
                          </a>
                      </div>
                  </div>
              </div>
      
      
            </div>
    
    </div>
    );
}