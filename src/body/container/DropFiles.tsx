import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import { Input } from '../component/Input';
import './DropFiles.css';


export const DropFiles = () => {

    const [file, setFile] = useState<File>();
    const [isDropped, setIfDropped] = useState<boolean>(false);

    useEffect(() => {
        if (file) {
            //send file by post 
            console.log("sending...");
        }
    }, [file])

    const handleDrop = (e: any) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            setIfDropped(true);
            setFile(file);

            const reader = new FileReader();
            reader.onload = function (event) {
                if (event != null && event.target != null) {
                    console.log(event.target.result);
                }
            };
            reader.readAsText(file);
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