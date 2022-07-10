import { CircularProgressbar } from "react-circular-progressbar"
import theme from "../../styles/theme"
import { Container } from "./styles"
import { } from 'react-icons/fi'

interface IFileUploadProgressProps {
    name: string
    size: number
    value: number
}

export default function FileUploadProgress({name, size, value }:IFileUploadProgressProps) {
    return (
        <Container>
            <li>
                {name}
                {size}
                <div>
                    <CircularProgressbar 
                        styles={{
                            root: {width: 24}, 
                            path: {stroke: theme.colors.detail}
                        }}
                        strokeWidth={10}
                        value={value}
                    />
                </div>
            </li>
        </Container>
    )
}