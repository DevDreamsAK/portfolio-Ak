import travel from "../assets/projects/travel.png";
import portfolio from "../assets/projects/portfolio.png";
import sales from "../assets/projects/sales.png";
import retail from "../assets/projects/retail.png"

export const HERO_CONTENT = `I am a fresh graduate in Computer Science with a passion for data analytics and turning raw data into meaningful insights. 
                            My academic journey has equipped me with a strong foundation in programming, statistics, and data visualization tools. 
                            I am eager to apply my skills in analyzing, interpreting, and presenting data to support decision-making, uncover trends, 
                            and drive business value through data-driven strategies.`;

export const ABOUT_TEXT = `I am a dedicated and aspiring Computer Science graduate with a strong passion for data analytics and innovative technology solutions. 
                          My academic journey has equipped me with hands-on experience in programming, cloud platforms, and modern development practices. 
                          I am eager to apply my analytical skills to uncover insights from data, build scalable and user-friendly applications, and support data-driven decision-making. 
                          I thrive in collaborative environments and enjoy solving complex problems to deliver impactful solutions. Beyond academics, 
                          I stay curious by exploring emerging technologies and contributing to meaningful projects that create real-world value.`;

export const EDUCATION = [
  {
    course: "Bachelor of Science in Computer Science",
    institute: "University Of Jaffna",
    year: "2021-2024",
  },
  {
    course: "ICT Technician",
    institute: "Technical College Sammanthurai",
    year: "2019",
  },

];

export const PROJECTS = [
  {
    title: "Retail sales Data Analysis Dashboard",
    image: retail,
    description:
      "This project analyzes retail sales data using Excel only.  .",
    technologies: ["Excel"],
    link: "https://github.com/DevDreamsAK/Excel_Dashboard.git", // <-- Add your actual link here
  },
  {
    title: "Blinkit Sales Analysis",
    image: sales,
    description:
      "Conducted a comprehensive sales analysis on Blinkit data to uncover revenue trends, top-performing products, and city-wise sales insights using Python.",
    technologies: ["Python"],
    link: "https://github.com/DevDreamsAK/BlinkitSalesAnalysis/blob/main/Blinkit_Analysis.ipynb", // <-- Add your actual link here
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://akashportfolio-ecru.vercel.app/", // <-- Add your actual link here
  },
  {
    title: "Travel Website",
    image: travel,
    description:
      "Academic Individual Project for a travel website that allows users to search and book hotels, and activities.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://aktravelsguide.vercel.app/", // <-- Add your actual link here
  },
];

export const CONTACT = {
  address: "No-120, Ampara road, Sammanthurai. Sri Lanka",
  phoneNo: "+94769042328",
  email: "akashahamed38@gmail.com",
};
