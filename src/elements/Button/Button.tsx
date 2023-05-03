import { ButtonStyle } from "./ButtonStyle";
interface ButtonProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
    <>
        <ButtonStyle> {label} </ButtonStyle>
    </>
)

export default Button