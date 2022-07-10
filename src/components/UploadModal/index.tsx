import React, { useContext } from "react";
import { Container } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import theme from "../../styles/theme";
import Modal from "../Modal";
import FileUploadProgress from "../FileUploadProgress";
import { v4 as uuidv4 } from 'uuid';
import { IFile } from "../../interfaces/IFile";
import { UploadProgressContext } from "../../contexts/uploadProgressContext";

interface IUploadModal {
    files: File[];
}

export default function UploadModal({files}: IUploadModal) {
    const { uploadProgress, setUploadProgress } = useContext(UploadProgressContext)
    return (
        <div>
            {
                files.map((file: File) => {
                    return (
                    <Container key={uuidv4()}>
                        <FileUploadProgress 
                            name={file.name} 
                            size={file.size} 
                            value={uploadProgress} />
                    </Container>
                    )
                })
            }
        </div>
    )
}