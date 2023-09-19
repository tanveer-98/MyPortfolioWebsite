import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    // arrowrightup
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    } 
  ];

  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  export const projects = [
    {
      id: 1, 
      name: "ANIFAV",
      description:
        "Web-based platform that allows users to view all trending anime and also save the anime in their favourite List ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "green-text-gradient",
        },
        {
          name: "emotionCSS",
          color: "pink-text-gradient",
        },
      ],
      type : "Frontend",
      image: "./img/Anifav.png",
      source_code_link: "https://anifav.netlify.app",
    },
    {
      id: 2, 
      name: "Blog Web App",
      description:
        "A blog writing web app where you can register , login and see blogs of your taste written by others as well as write your own blogs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "./img/blog.png",
      type : "Full Stack",
      source_code_link: "https://blogwiz.netlify.app/",
    },
    {
      id: 3, 
      name: "Ganasuraksha Party WebApp",
      description:
        "A web App created for a political Party to manage and view their employee data ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      type : "Full Stack",
      image: "./img/gsp.png",
      source_code_link: "https://www.ganasurakshaparty.in/",
    
    },
    {
      id: 4, 
      name: "Crystal Coaching Website",
      description:
        "A Website Created for A coaching Company that provides the customer access to their required study materials at one place",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "ExpresJS",
          color: "pink-text-gradient",
        }
      ],
      type : "Full Stack",
      image: "./img/crystal.png",
      source_code_link: "",
      site_link : "https://www.crystalcoaching.in/"
    },
    {
      id: 5, 
        name: "Apex Design & Construction",
        description:
          "A WebApp created for Booking Schedules for Construction and Design.",
        tags: [
          {
            name: "reactjs",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "expressJS",
            color: "pink-text-gradient",
          },
          {
            name: "nodeJS",
            color: "blue-text-gradient",
          },
        ],
        type : "Full Stack",
        image: "./img/apex.png",
        source_code_link: "",
        site_link:"https://www.apexconst.in"
      },
      {
        id: 6, 
          name: "Task Management Web App",
          description:
            "A TaskMangement Rest App for managing tasks",
          tags: [
            {
              name: "nodeJs",
              color: "blue-text-gradient",
            },
            {
              name: "mongodb",
              color: "green-text-gradient",
            },
            {
              name: "expressJS",
              color: "pink-text-gradient",
            },
    
          ],
          type : "Backend",
          image: "./img/noimage.png",
          source_code_link: "https://github.com/tanveer-98/TaskManagement-App",
          site_link : ""
        },

        {
          id: 7, 
            name: "Weather Forecast Web App",
            description:
              "A weather forecasting web app providing weather results for given location using 3rd party API",
            tags: [
              {
                name: "nodeJs",
                color: "blue-text-gradient",
              },
              {
                name: "mongodb",
                color: "green-text-gradient",
              },
              {
                name: "expressJS",
                color: "pink-text-gradient",
              },
      
            ],
            type : "Backend",
            image: "./img/noimage.png",
            source_code_link: "",
            site_link : "https://www.apexconst.in"
          },
          {
            id: 8, 
              name: "Chat App ",
              description:
                "A Live chat app to Transfer messages at real time using websockets  ",
              tags: [
                {
                  name: "nodeJs",
                  color: "blue-text-gradient",
                },
                {
                  name: "mongodb",
                  color: "green-text-gradient",
                },
                {
                  name: "expressJS",
                  color: "pink-text-gradient",
                },
                {
                  name: "WebSocket",
                  color: "pink-text-gradient",
                },
        
              ],
              type : "Backend",
              image: "./img/noimage.png",
              site_link : "",
              source_code_link: "https://github.com/tanveer-98/chat-app-nodejs",
            },
            {
              id: 9, 
                name: "Password Generator",
                description:
                  "Generate Password upto length 100",
                tags: [
                  {
                    name: "reactjs",
                     color: "blue-text-gradient",
                  }
                
                ],
                type : "Frontend",
                image: "./img/passgen.png",
                source_code_link: "https://github.com/tanveer-98/password-generator",
                site_link : "https://genpasswrd.netlify.app/"
              },
              {

                id: 10, 
                name: "Weatheroo",
                description:
                  "A Weather Live Forecast App with user Authentication",
                tags: [
                  {
                    name: "reactjs",
                     color: "blue-text-gradient",
                  },
                  {
                    name: "nodeJs",
                    color: "blue-text-gradient",
                  },
                  {
                    name: "mongodb",
                    color: "green-text-gradient",
                  },
                  {
                    name: "expressJS",
                    color: "pink-text-gradient",
                  },
                ],
                type : "Full Stack",
                image: "./img/weatheroo.png",
                source_code_link: "https://github.com/tanveer-98/password-generator",
                site_link : "https://weatheroo-app.netlify.app/"
              }
  ];