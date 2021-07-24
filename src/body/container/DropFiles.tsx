import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import { Input } from '../component/Input';
import './DropFiles.css';

const readerFile = (file: File) => {
    const fileName = file.name;
    const reader = new FileReader();
    reader.onload = function (event) {
        if (event != null && event.target != null && event.target.result != null) {
            sendFile({ contentFile: event.target.result, fileName });
        }
    };
    reader.readAsText(file);
}

const sendFile = (obj: { contentFile: string | ArrayBuffer; fileName: string; }) => {

    axios({
        method: 'post',
        url: "http://localhost:3001/",
        headers: {},
        data: { content: "ciao", fileName: "filename" }
    });

    // axios.post("http://localhost:3001/", { content: "ciao", fileName: "filename" })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });;
}

export const DropFiles = () => {

    const [file, setFile] = useState<File>();
    const [isDropped, setIfDropped] = useState<boolean>(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (file) {
            readerFile(file);
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