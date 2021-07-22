import React, { Fragment, useState } from 'react';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import { Input } from '../component/Input';
import './DropFiles.css';


export const DropFiles = () => {

    const [fileName, setFileName] = useState();
    const [isDropped, setIfDropped] = useState(false);

    const handleDrop = (e: { preventDefault: () => void; dataTransfer: { files: any[]; }; stopPropagation: () => void; }) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            setIfDropped(true);
            const file = e.dataTransfer.files[0];
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = function (event) {
                if (event != null && event.target != null) {
                    console.log(event.target.result);
                }
            };
            console.log(file);
            reader.readAsText(file);
            e.stopPropagation();
        }
    };

    return <div className='drag-and-drop-container'
        onDrop={(e: any) => handleDrop(e)}
    >
        {isDropped ?
            <div className='file-dropped'>
                <Icon svg={FileLogo} style={{ alignSelf: 'center' }} />
                <p>{fileName}</p>
            </div> :
            (<Fragment>
                <Input />
                <p>or drop file here</p>
            </Fragment>)}
    </div>
}