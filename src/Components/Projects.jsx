import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";


import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export default function Projects({ darkMode }) {
  const projects = [

    {
      title: "Dictionary App",
      description:
        "Find meaning of the words using an API . Built using HTML, CSS and JavaScript",
      image: "/Images/DictionaryApi.png",
      github: "https://github.com/Jyotsna-Mahajan/Dictionary-App",
    },
    {
      title: "ToDo List App (React)",
      description: "A React-based to-do list app with CRUD features.",
      image: "/Images/TodoList.png",
      github: "https://github.com/Jyotsna-Mahajan/Todo-List",
    },
    {
      title: "Recipe Finder App",
      description: "Find recipes using an API. Built with React.",
      image: "/Images/RecipeFinder.png",
      github: "https://github.com/Jyotsna-Mahajan/Recipe-Finder",
    },
    {
      title: "Country Info App",
      description: "Fetches country details using API. Built with React.",
      image: "/Images/CountryInfo.png",
      github: "https://github.com/Jyotsna-Mahajan/Country-Info",
    },
    {
      title: "CPU Scheduling Visualizer",
      description: "A CPU Scheduling Visualizer built using React. Supports both Preemptive and Non-Preemptive algorithms. It is a multipage Application made using React Router.",
      image: "/Images/CPUScheduling.png",
      github: "https://github.com/Jyotsna-Mahajan/CPU-Scheduling-Visualizer",
    },
    {
      title: "Password Generator",
      description: "This project is a Password Generator built using Python. It generates a random and secure password based on user preferences such as including numbers and symbols.",
      image: "/Images/python.avif",
      github: "https://github.com/Jyotsna-Mahajan/Password-Generator"
    },
    {
      title: "Smart Calculator",
      description: "A Python-based advanced command-line calculator that evaluates mathematical expressions and stores calculation history both in memory and in a file.",
      image: "/Images/python.avif",
      github: "https://github.com/Jyotsna-Mahajan/Smart-Calculator"
    },
    {
      title: "QR Code Generator",
      description: "A simple Python-based Command Line Interface (CLI) application that generates QR codes for website URLs. Users can input a URL and get a QR code image that can be scanned to open the website.",
      image: "/Images/python.avif",
      github: "https://github.com/Jyotsna-Mahajan/QR-Generator"
    }
  ];

  return (
    <>
    
    <div className={`project-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="projects-heading">My Projects</h2>
      {projects.map((project, index) => (
        <Card className="project-card" key={index}>
          <CardMedia
            component="img"
            height="170"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              style={{fontWeight: "bolder"}}
              size="small"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
            <GitHubIcon style={{ marginRight: "6px" }} />
              View on GitHub
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </>
  );
}
