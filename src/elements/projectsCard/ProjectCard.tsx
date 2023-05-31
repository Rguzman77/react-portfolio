import { Link } from "react-router-dom";
import { ProjectCardStyle } from "./ProjectCardStyle";


interface ProjectProps {
    background: string;
    logo: string;
    description: string;
    url: string;
}

const ProjectCard:React.FC<ProjectProps> = ({description, background,logo,url}) => {
  return (
    <ProjectCardStyle>
        <Link to={url}> 
        <article>
          <img src={background} alt="Enlace Urbano Background" />
          <img src={logo} alt="Enlace Urbano Logo" />
        </article>
        <p>{description}</p>
      </Link>
    </ProjectCardStyle>
  )
}

export default ProjectCard