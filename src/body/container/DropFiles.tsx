import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileLogo from '../../icon/File-logo.svg';
import { SAVE, UPDATE } from '../../redux/actions/action';
import { FileProp } from '../../redux/reducers/reducer';
import { Icon } from '../../util/Icon';
import { Input } from '../component/Input';
import './DropFiles.css';

export const webServerDomain = "http://localhost:3001";

export const DropFiles = () => {
    const [file, setFile] = useState<File>();
    const dispatch = useDispatch();
    const currentFile = useSelector((state: Array<FileProp>) => state[0]);

    const handleDrop = (e: any) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            setFile(e.dataTransfer.files[0]);
        }
        e.stopPropagation();
    };

    const sendRequest = async (fileToSend: FileProp) =>
        axios.post(`${webServerDomain}/upload`, { ...fileToSend })
            .then((e: any) => dispatch({ type: UPDATE, payload: { fileName: fileToSend.fileName, id: e.data.id, key: e.data.key } }))
            .catch((e) => console.log("Error during the http request: ", e))

    const readAndSaveFile = (file: File): any => {
        const reader = new FileReader();
        reader.onload = function (event) {
            if (event != null && event.target != null && event.target.result != null) {
                const fileParsed = { content: event.target.result, fileName: file.name, size: file.size };
                dispatch({ type: SAVE, payload: { ...fileParsed } })
            }
        };
        reader.readAsText(file);
    }

    useEffect(() => {
        if (currentFile && currentFile.toSend) {
            console.log("sending request", currentFile)
            sendRequest(currentFile)
        }
        if (file && !currentFile) {
            readAndSaveFile(file);
        }
    }, [file, readAndSaveFile, dispatch, currentFile, sendRequest])

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
        {file ?
            <div className='file-dropped'>
                <Icon svg={FileLogo} style={{ alignSelf: 'center' }} />
                <p>{file ? file.name : ""}</p>
            </div> :
            (<Fragment>
                <Input setFile={setFile} />
                <p>or drop file here</p>
            </Fragment>)
        }
    </div>
}

