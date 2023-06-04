import { SkillsContainer } from './SkillsContainer'
import { SkillIcon } from '../../elements'
import { SiCss3, ImHtmlFive, SiTypescript, DiReact, FaNode, SiNestjs, SiMongodb, FiFigma, SiPostman, SiStyledcomponents, SiMysql, TfiGithub, SiJest, FaPython } from "react-icons/all";
import { IoLogoJavascript } from "react-icons/io5";


const Skills = () => {
  return (
    <SkillsContainer>
        <SkillIcon skill={"HTML"} icon={<ImHtmlFive/>}url='https://www.w3.org/html/'></SkillIcon>
        <SkillIcon skill={"CSS"} icon={<SiCss3/>}url='https://www.css3.com/'></SkillIcon>
        <SkillIcon skill={"JavaScript"} icon={<IoLogoJavascript/>}url='https://www.javascript.com/'></SkillIcon>
        <SkillIcon skill={"TypeScript"} icon={<SiTypescript/>}url='https://www.typescriptlang.org/'></SkillIcon>
        <SkillIcon skill={"GitHub"} icon={<TfiGithub/>}url='https://github.com/Rguzman77'></SkillIcon>
        <SkillIcon skill={"Python"} icon={<FaPython/>}url='https://www.python.org/'></SkillIcon>
        <SkillIcon skill={"Node"} icon={<FaNode/>}url='https://nodejs.org/en'></SkillIcon>
        <SkillIcon skill={"Nestjs"} icon={<SiNestjs/>}url='https://nestjs.com/'></SkillIcon>
        <SkillIcon skill={"MongoDB"} icon={<SiMongodb/>}url='https://www.mongodb.com/es'></SkillIcon>
        <SkillIcon skill={"Mysql"} icon={<SiMysql/>}url='https://www.mysql.com/'></SkillIcon>
        <SkillIcon skill={"Styled Components"} icon={<SiStyledcomponents/>}url='https://styled-components.com/'></SkillIcon>
        <SkillIcon skill={"Figma"} icon={<FiFigma/>}url='https://www.figma.com/'></SkillIcon>
        <SkillIcon skill={"React"} icon={<DiReact/>}url='https://react.dev/'></SkillIcon>
        <SkillIcon skill={"Jest"} icon={<SiJest/>}url='https://jestjs.io/es-ES/'></SkillIcon>
        <SkillIcon skill={"Postman"} icon={<SiPostman/>}url='https://www.postman.com/'></SkillIcon>
      </SkillsContainer>
  )
}

export default Skills