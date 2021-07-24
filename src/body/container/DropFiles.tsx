import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import { Input } from '../component/Input';
import './DropFiles.css';

const webServerDomain = "http://localhost:3001/upload";

type FileProp = {
    content: string | ArrayBuffer,
    fileName: string,
    size: number,
}

const sendRequest = async (fileToSend: FileProp) =>
    axios.post(webServerDomain, { ...fileToSend })
        .then((e) => console.log(e.data))
        .catch((e) => console.log("Errore durante la http request: ", e))

const sendFile = (file: File, dispatch: Dispatch<any> | undefined) => {
    const reader = new FileReader();
    let fileToSend: FileProp;
    reader.onload = function (event) {
        if (event != null && event.target != null && event.target.result != null) {
            fileToSend = ({ content: event.target.result, fileName: file.name, size: file.size });
            sendRequest(fileToSend);
        }
    };
    reader.readAsText(file);
}

export const DropFiles = () => {

    const [file, setFile] = useState<File>();
    const [isDropped, setIfDropped] = useState<boolean>(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (file) {
            sendFile(file, dispatch);
        }
    }, [file, dispatch])

    const handleDrop = (e: any) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            setIfDropped(true);
            setFile(file);

            e.stopPropagation();
        }
    };

    // You need these methods otherwise the browser opens the file in a new tab
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return <div className='drag-and-drop-container'
        onDrop={(e: any) => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}>
        {isDropped ?
            <div className='file-dropped'>
                <Icon svg={FileLogo} style={{ alignSelf: 'center' }} />
                <p>{file ? file.name : ""}</p>
            </div> :
            (<Fragment>
                <Input setIfDropped={setIfDropped} setFile={setFile} />
                <p>or drop file here</p>
            </Fragment>)
        }
    </div>
}

