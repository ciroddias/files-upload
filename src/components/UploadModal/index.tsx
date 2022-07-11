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
    uploadProgress: number;
}

export default function UploadModal({files, uploadProgress}: IUploadModal) {
    files.map(file => console.log(file))
    return (
        <Container>
            {
                files.map((file: File) => {
                    return (
                        <FileUploadProgress 
                            key={uuidv4()}
                            name={file.name.split('.')[0]} 
                            size={file.size} 
                            value={uploadProgress} />
                    )
                            
                })
            }
        </Container>    
    )
}