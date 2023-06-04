import { SkilIconStyle } from "./SkillIconStyle";

interface Props {
  skill: string;
  icon: React.ReactNode;
  url: string;
}
const SkillIcon: React.FC<Props> = ({ skill, icon, url}) => {
  return (
    <a href={url} target='_blank'><SkilIconStyle>
      {icon}
      <p> {skill}</p>
    </SkilIconStyle></a>
  );
};

export default SkillIcon;
