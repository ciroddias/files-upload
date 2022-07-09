import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { uploadFiles } from '../../pages/api';
import { Container } from './styles';

export default function Dropzone() {
  
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
        formData.append("file", file)
    });
    await uploadFiles(formData)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, 
    accept: {
    'image/png': ['.png'],
    'text/html': ['.html', '.htm'],
  }})

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Solte os arquivos aqui ...</p> :
          <p>Arraste e solte os arquivos aqui, ou clique para selecionar os arquivos</p>
      }
    </Container>
  )
}