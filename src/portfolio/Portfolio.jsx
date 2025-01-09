import React, { useState } from 'react';
import { Navbar } from '../portfolio/Navbar';
import { useTheme } from '../providers/ThemeContext';

export const Portfolio = () => {
  const [showVideo, setShowVideo] = useState([false, false, false, false]);
  const { isDarkMode } = useTheme();

  const keywords = [
    "TypeScript", "JavaScript", "Tailwind CSS", "React", "Node.js", "Clothes", "Shop", "App", "URLS", "responsive","tests", "Jest",
    "Socket.io", "MongoDB", "Google API", "Giphy API", "geolocation API", "API", "REST", "Weather", "Cloudinary", "SOLID", "chart.js"
  ];

  const highlightKeywords = (text) => {
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-neutral-950'}`}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const projects = [
    {
      numberOfProject: "P R O J E C T  1",
      title: "Clothes Shop App",
      description:
        "Built with TypeScript and designed with an architecture based on SOLID principles, this application uses React for the Front End and Node.js for the Back End. The design is fully responsive, implemented using Tailwind CSS. The main functionality involves retrieving products from a MongoDB database. The images associated with the products are stored in the cloud via Cloudinary, allowing the database to only store the corresponding URLs, organized by clothing categories. This approach optimizes the application's performance by reducing server load and improving content delivery efficiency.",
      tech: "Front End And Back End",
      img: '/assets/portfolio/CLOTHES_SHOP.png',
    },
    {
      numberOfProject: "P R O J E C T  2",
      title: "Dashboard",
      description:"Developed using TypeScript, with an architecture based on SOLID principles. The frontend is implemented in React, while the backend is built with Node.js, using MongoDB as the database for data storage. For data visualization, the Chart.js library was utilized, enabling the creation of interactive charts. The application's primary functionality is to display monthly metrics for an online store, including sales, stock outflows, inflows, and the most popular products.",
      tech: "Front End And Back End",
      img: '/assets/portfolio/DASHBOARD.png',
    },
    {
      numberOfProject: "P R O J E C T 3",
      title: "Calendar App",
      description: "Developed in JavaScript, the application uses React for the Front End  and Node.js for the Back End. Its main functionality focuses on creating events within a calendar, where each event can include start and end dates, as well as detailed descriptions. To create, edit, or delete an event, the user must be authenticated, and only the event creator has the permissions to modify or remove it. While users can view events created by others, they cannot edit or delete them.",
      tech: "Front End And Back End",
      img: '/assets/portfolio/CALENDAR_APP.png'
    },
    {
      numberOfProject: "P R O J E C T 4",
      title: "Socket App",
      description: "Developed in JavaScript, the application uses React for the Front End , Node.js for the Back End, and Socket.io to manage real-time communication between users. The main functionality is based on a ticket management system, where each counter can generate its own tickets. Additionally, in a separate view, users can check the status of tickets in the queue, as well as the ticket currently being handled.",
      tech: "Front End And Back End",
      img: '/assets/portfolio/SOCKET_COLAS.png'
    },
    {
      numberOfProject: "P R O J E C T 5",
      title: "Google Sign-In",
      description: 'Developed using JavaScript and React, the application’s main functionality is the integration with the Google API, allowing users to authenticate via their Google account. This implementation is based on a REST API that was later used in the Clothes Shop App project, but coded in TypeScript, which explains the increased complexity seen in the code editor displayed in the image.',
      tech: "Back End",
      img: '/assets/portfolio/GOOGLE SIGN-IN.png'
    },
    {
      numberOfProject: "P R O J E C T 6",
      title: "Gif App",
      description: "Developed with JavaScript and React, the main functionality of the application is the integration of the Giphy API. Through a search box, users can search for and explore GIFs related to various topics. Additionally, I implemented unit tests using Jest to ensure the reliability and correctness of the application's features.",
      tech: "Front End",
      img: '/assets/portfolio/GIF APP.png'
    },
    {
      numberOfProject: "P R O J E C T 7",
      title: "Climate App",
      description: "Developed using JavaScript and Node.js, the application interacts with a Weather Geolocation API. Through an intuitive terminal interface, users can query various cities around the world and receive updated weather information along with additional relevant data.",
      tech: "Back End",
      img: '/assets/portfolio/CLIMATE APP.png'
    },
    {
      numberOfProject: "P R O J E C T 8",
      title: "Heroes App",
      description: "Developed in JavaScript with React, this application consists solely of the Front End, due to its simple and straightforward design. Its main functionality is to display heroes from their respective universes, Marvel Comics or DC Comics. Additionally, it offers a dedicated view for performing specific hero searches.",
      tech: "Front End",
      img: '/assets/portfolio/HEROES_APP.png'
    },

  ];

  return (
    <div className={`relative flex flex-col ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <Navbar />

      <div className="mt-16 mx-6 sm:mx-10 md:mx-20">
        <h1 className={`font-bold text-2xl sm:text-3xl md:text-4xl ${isDarkMode ? 'text-gray-400' : 'text-neutral-800'}`}>
          Hello! I am
        </h1>
      </div>
      <div className="mx-6 sm:mx-10 md:mx-20">
        <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${isDarkMode ? 'text-white' : 'text-gray-400'}`}>
          Alexander Arrazate
        </h1>
      </div>
      <div className="mt-2 mx-6 sm:mx-10 md:mx-20">
        <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${isDarkMode ? 'text-green-500' : 'text-neutral-800'}`}>
          This Is My Project Portfolio
        </h1>
      </div>

      <div className={`mt-24 px-6 sm:px-10 md:px-16 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center justify-center mb-20 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <div className="flex-1 sm:px-8">
              <h2 className={`text-sm font-normal ${isDarkMode ? 'text-green-400' : 'text-neutral-800'}`}>
                {project.numberOfProject}
              </h2>
              <h2 className={`mt-2 text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>
                {project.title}
              </h2>
              <h1 className={`text-xl sm:text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-400'}`}>
                {project.tech}
              </h1>
              <p className={`text-sm sm:text-base font-semibold ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {highlightKeywords(project.description)}
              </p>
            </div>

            <div className="relative flex-1 flex justify-center items-center sm:px-8 mt-6 sm:mt-0">
              <img
                src={project.img}
                alt="Project Preview"
                className="w-full h-auto max-w-full object-cover rounded shadow-lg relative"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

