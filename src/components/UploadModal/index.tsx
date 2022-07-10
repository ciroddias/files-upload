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
    console.log('upload: ' + {files})
    return (
        <div>
            {
                files.map((file: File) => {
                    console.log(files, uploadProgress)
                    return (
                    <Container key={uuidv4()}>
                        <FileUploadProgress 
                            name={file.name.split('.')[0]} 
                            size={file.size} 
                            value={uploadProgress} />
                    </Container>
                    )
                })
            }
        </div>
    )
}