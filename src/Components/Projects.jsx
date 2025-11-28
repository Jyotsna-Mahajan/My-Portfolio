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
  const Projects = [
    {
      title: "LoginSignUpPage",
      description: "A Login and signup page built using HTML and CSS",
      image: "/Images/LoginAndSignUpPage.png",
      github: "https://github.com/Jyotsna-Mahajan/LoginAndSignUpPage",
    },
    {
      title: "Redux Clone Website",
      description: "A Redux Website Clone built using HTML and CSS",
      image: "/Images/ReduxCloneWebsite.png",
      github: "https://github.com/Jyotsna-Mahajan/Redux-Clone-Website",
    },
    {
      title: "KamyaFoods Clone Website",
      description: "A KamyaFoods Website Clone built using HTML and CSS",
      image: "/Images/KamyaFoodsCloneWebsite.png",
      github: "https://github.com/Jyotsna-Mahajan/KamyaFoods-Clone-Website",
    },
    {
      title: "Microsoft Clone Website",
      description: "A Microsoft Website Clone built using HTML and CSS",
      image: "/Images/MicrosoftCloneWebsite.png",
      github: "https://github.com/Jyotsna-Mahajan/Microsoft-Clone-Website",
    },
    {
      title: "Razer Clone Website",
      description: "A Razer Website Clone built using HTML and CSS",
      image: "/Images/RazerCloneWebsite.png",
      github: "https://github.com/Jyotsna-Mahajan/Razer-Clone-Website",
    },
    {
      title: "Tesla Clone Website",
      description: "A Tesla Website Clone built using HTML and CSS",
      image: "/Images/TeslaCloneWebsite.png",
      github: "https://github.com/Jyotsna-Mahajan/Tesla-Clone-Website",
    },
    {
      title: "ToDoApp Website (JS)",
      description: "A ToDo App built using HTML, CSS and JavaScript",
      image: "/Images/ToDoApp.png",
      github: "https://github.com/Jyotsna-Mahajan/ToDo-App",
    },
    {
      title: "Guessing Number Game",
      description:
        "A fun number guessing game built using HTML, CSS, and JavaScript.",
      image: "/Images/GuessingNumberGame.png",
      github: "https://github.com/Jyotsna-Mahajan/GuessingNumber-Game",
    },
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
  ];

  return (
    <>
    
    <div className={`project-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="projects-heading">My Recent Works</h2>
      {Projects.map((project, index) => (
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
