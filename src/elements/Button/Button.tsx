import { ButtonStyle } from "./ButtonStyle";

interface ButtonProps {
    label: string;
    color: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => (
    <ButtonStyle color={color} onClick={onClick}>
      {label}
    </ButtonStyle>
  );
  
  export default Button;