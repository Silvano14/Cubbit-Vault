import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
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

    const handleDrop = (e: any): void => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            setFile(e.dataTransfer.files[0]);
        }
        e.stopPropagation();
    };

    const sendRequest = useCallback((fileToSend: FileProp): void => {
        axios.post(`${webServerDomain}/upload`, { ...fileToSend })
            .then((e: { data: { id: any; key: any; }; }) => dispatch({ type: UPDATE, payload: { fileName: fileToSend.fileName, id: e.data.id, key: e.data.key } }))
            .catch((e: any) => console.log("Error during the http request: ", e))
    }, [dispatch]);

    const readAndSaveFile = useCallback((file: File): void => {
        const reader = new FileReader();
        reader.onload = function (event) {
            if (event != null && event.target != null && event.target.result != null) {
                const fileParsed = { content: event.target.result, fileName: file.name, size: file.size };
                dispatch({ type: SAVE, payload: { ...fileParsed } })
            }
        };
        reader.readAsText(file);
    }, [dispatch])

    useEffect(() => {
        if (currentFile && currentFile.toSend) {
            sendRequest(currentFile)
        }
        if (file && !currentFile) {
            readAndSaveFile(file);
        }
    }, [file, readAndSaveFile, currentFile, sendRequest])

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
        onDragOver={(e: any) => handleDragOver(e)}
        onDragEnter={(e: any) => handleDragEnter(e)}
        onDragLeave={(e: any) => handleDragLeave(e)}>
        {file ?
            <div className='file-dropped'>
                <Icon svg={FileLogo} style={{ alignSelf: 'center' }} />
                <p>{file ? file.name : ""}</p>
            </div> :
            (<Fragment>
                <Input setFile={setFile} />
                <p className="text-drop">or drop file here</p>
            </Fragment>)
        }
    </div>
}