import "./Internship.css";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";
import { IconButton } from "@mui/material";

export default function Internship ({darkMode}){
    const internships = [
        {
            title: "HCLTech Internship (Jan 2026 - Apr 2026)",
            description: [
                "Gained hands-on experience in Artificial Intelligence and Machine Learning, including data preprocessing, model building, training, and evaluation of ML models.",
                "Worked with machine learning workflows and algorithms to understand supervised and unsupervised learning techniques.",
                "Explored advanced AI concepts including Generative AI and Agentic AI, with focus on real-world applications and use cases.",
            ],
            link: "https://drive.google.com/file/d/1P2SxwyV7PuEdIzqwlqeEeCO3dGOMaYfQ/view?usp=sharing"


        },
        {
            title: "IBM SkillsBuild (Jun 2024 - Jul 2024)",
            description: [
                "Gained hands-on experience in Artificial Intelligence and Machine Learning concepts using IBM tools.",
                "Designed and deployed a chatbot using IBM Watson Assistant. Developed and trained a Machine Learning model using IBM Watson Studio for predictive analysis tasks."

            ],
            link: "https://drive.google.com/file/d/1JRX7aCE7CEd6YMNFwHSouWoY-lWx4gN0/view?usp=sharing"
        }
];

  return (
    <>
      <div className={`internship-section ${darkMode ? "dark" : "light"}`}>
        <h2 className="internship-heading">Internships</h2>
      {internships.map((internship,index) => (
        <Card className="internship-card" key={index}>
            <CardContent>
            <Typography variant="h6">{internship.title}</Typography>
             <ul>
        {internship.description.map((description, i) => (
          <li key={i}>
            <Typography variant="body2">{description}</Typography>
          </li>
        ))}
      </ul>
          </CardContent>
          <CardActions>
            <Button href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
                className="certificate-btn"
            >
               View Certificate 
            </Button>
          </CardActions>
        </Card>
          

      ))}


      </div>
      
      
    </>
  )
    
}

