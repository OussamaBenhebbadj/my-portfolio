export default function Resume() {
    return (
    <div className="w-[1300] h-full mx-16 bg-[#252525] border-1 border-gray-700 rounded-4xl mt-12">
      <h1 className="ml-16 mt-6 text-3xl text-amber-50 ">Resume</h1>
      <hr className="border-2 rounded-2xl border-lime-300 w-[50] mt-2 ml-16" />
      <h5 className="ml-24 text-xl mt-6 text-lime-300">Education</h5>
      <div className="h-4 w-4 rounded-full bg-lime-300 mt-2 ml-24"></div>
      <div className="flex flex-row">
        <div className="h-32 w-1 ml-[102] mb-1 bg-lime-300 "></div>
        <div>
          <p className="ml-6 text-lg text-amber-50">
             École Nationale Supérieure d'Informatique d'Alger (ESI) <br />
             Bachelor’s Degree in Computer Science (Ongoing)<br />
             Expected Graduation : 2027<br />
             Baccalaureate Score : 17.73 in Mathematics
          </p>
        </div>
      </div>
      <h5 className="ml-24 text-xl mt-2 text-lime-300">Professional Experience</h5>
      <div className="h-4 w-4 rounded-full bg-lime-300 mt-2 ml-24"></div>
      <div className="flex flex-row">
        <div className="h-52 w-1 ml-[102] mb-1 bg-lime-300"></div>
        <div>
          <p className="ml-6 text-lg text-amber-50">
            <span className="font-bold">Web Development Intern - Khadmoney - July 2024</span>  <br />
                <span className="ml-6">- Collaborated on various web development projects and applied project management practices like Scrum.</span> <br />
                <span className="ml-6">- Improved hands-on skills with React, focusing on state management with the Context API and responsive design.</span> <br />
            <span className="font-bold">Desktop App Developer - Gym Management Application - April 2024</span>  <br />
             <span className="ml-6">- Developed a desktop application in Python for a local gym, allowing the client to manage memberships, track athlete progress, and organize class schedules.</span> <br />
             <span className="ml-6">- Worked with a team of six, enhancing collaborative skills and client interaction.</span> <br />
          </p>
        </div>
      </div>
      <h5 className="ml-24 text-xl mt-2 text-lime-300">Projects</h5>
      <div className="h-4 w-4 rounded-full bg-lime-300 mt-2 ml-24"></div>
      <div className="flex flex-row">
        <div className="h-44 w-1 ml-[102] mb-1 bg-lime-300"></div>
        <div>
          <p className="ml-6 text-lg text-amber-50">
            <span className="font-bold">E-commerce Website</span>  <br />
                <span className="ml-6">- Developed a responsive site for selling clothes featuring a fast delivery system. </span> <br />
                <span className="ml-6">- Implemented with React, tailwind, NodeJS , ExpressJS and mongooDB to ensure performance and adaptability.</span> <br />
            <span className="font-bold">Platform to manage patients</span>  <br />
             <span className="ml-6"> - Developed a responsove platform to manage patients of a clininc </span> <br />
             <span className="ml-6"> - Worked with : Angular , Django & Mysql </span> <br />
          </p>
        </div>
      </div>
      <h5 className="ml-24 text-xl mt-2 text-lime-300">Skills</h5>
      <div className="h-4 w-4 rounded-full bg-lime-300 mt-2 ml-24"></div>
      <div className="flex flex-row">
        <div className="h-52 w-1 ml-[102px] mb-1 bg-lime-300"></div>
        <div>
          <ul className="ml-16 text-lg text-amber-50 list-disc">
            <li><span className="font-bold">Frontend :</span> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS.</li>
            <li><span className="font-bold">Backend :</span> Node.js, Express.js</li>
            <li><span className="font-bold">Databases :</span> MySQL, MongoDB</li>
            <li><span className="font-bold">UI/UX :</span> Figma, Wireframing, Prototyping, Design Systems</li>
            <li><span className="font-bold">Languages :</span> Python, C, Java</li>
            <li><span className="font-bold">Tools & Practices :</span> Git/GitHub, Scrum/Agile, REST APIs, Responsive Design</li>
            <li><span className="font-bold">Soft Skills :</span> Problem-solving, Teamwork, Communication, Critical Thinking</li>
          </ul>
        </div>
      </div>
      <h5 className="ml-24 text-xl mt-2 text-lime-300">Certifications</h5>
      <div className="h-4 w-4 rounded-full bg-lime-300 mt-2 ml-24"></div>
      <div className="flex flex-row">
          <div className="h-36 w-1 ml-[102px] mb-1 bg-lime-300"></div>
          <div>
            <ul className="ml-16 text-lg text-amber-50 list-disc">
              <li>
                <span className="font-bold">Web developpement – Udemy (2024)</span>  
                <a href="/certificates/tc.pdf" target="_blank" rel="noopener noreferrer" className="text-lime-300 ml-2 underline">View Certificate</a>
              </li>
              <li>
                <span className="font-bold">Training Camp – Backend hackathon (2024)</span>  
                <a href="/certificates/tc.pdf" target="_blank" rel="noopener noreferrer" className="text-lime-300 ml-2 underline">View Certificate</a>
              </li>
              <li>
                <span className="font-bold">UI/UX Design Fundamentals – Khadmoney (2024)</span>  
                <a href="/certificates/tc.pdf" target="_blank" rel="noopener noreferrer" className="text-lime-300 ml-2 underline">View Certificate</a>
              </li>
              <li>
                 <span className="font-bold">Frontend developpement – Online training Khadmoney (2023)</span>  
                <a href="/certificates/tc.pdf" target="_blank" rel="noopener noreferrer" className="text-lime-300 ml-2 underline">View Certificate</a>
              </li>
            </ul>
          </div>
        </div>


      
    </div>
  )
}