import { Container } from "./styles";

interface IButtonProps {
    label: string;
    isActive: boolean;
}

export default function Button({label, isActive}: IButtonProps) {
    return (
        <Container isActive={isActive}>
            {label}
        </Container>
    )
}