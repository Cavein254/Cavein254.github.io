import Huthub from "@/assets/huthub.png";
import Theophilus from "@/assets/theophilus.png";
import Intern from "@/assets/intern.png";
export const data = [
  {
    id: 1,
    title: "HutHub",
    tech: [
      "ReactJS",
      "Apollo GraphQl",
      "MariaDB",
      "Amazon Web Services",
      "tailwindcss",
    ],
    pic: Huthub,
    url: "https://huthub.co.ke/",
    description:
      "This site is optimised for traffic and easy scalling. Reactjs  was choosen as it is a mature javascript framework. Apollo Graphql makes it easier to use expecially when dealing with numerous queries. Finally, Amazon s3 bucket was choosen as the storage for static files as images and videos as it offers scalability options.",
  },
  {
    id: 2,
    title: "Theophilus University",
    tech: ["ReactJS", "MongoDB", "tailwindcss", "python", "PostgresSQL"],
    pic: Theophilus,
    url: "https://theophilusuniversity.ac.ke/",
    description:
      "The site was created with ReactJS utilizing a mongoDB backend. The backend also utilizes alot of python scripts that are responsible for organization of data for machine learning purposes.",
  },
  {
    id: 3,
    title: "The Intern",
    tech: ["ReactJS", "FastAPI", "MaterialUI", "Python", "PostgresSQL"],
    pic: Intern,
    url: "https://theintern.co.ke/",
    description:
      "The site stack is frontend using ReactJS and MaterialUi for styling. The backend runs on FastAPI utilizing a postgress Database.",
  },
];
