import React, { Dispatch, Fragment, SetStateAction } from 'react';
import ArrowDown from '../../icon/ArrowDown.svg';
import Divider from '../../icon/Divider.svg';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import './Input.css';

type InputProps = {
    setFile: Dispatch<SetStateAction<File | undefined>>
}

export const Input = ({ setFile }: InputProps) => {
    const commonStyleDiv: React.CSSProperties = { position: 'absolute' }

    return <Fragment>
        <div style={{
            ...commonStyleDiv,
            right: '571px',
            top: '66px'
        }}>
            <Icon svg={FileLogo} style={{
                width: '22px',
                right: '160px',
                top: '10px'
            }} />
        </div >
        <div style={{
            ...commonStyleDiv,
            right: '350px',
            top: '69px'
        }} ><Icon svg={ArrowDown} style={{}} /></div>
        <div style={{
            ...commonStyleDiv,
            right: '377px',
            top: '56px'
        }}>
            <Icon svg={Divider} style={{}} />
        </div>
        {/* In this way you avoid showing the writing for the choice of the file */}
        <input type="file" id="selectedFile" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files ? e.target.files[0] : undefined)} />
        <input className='input-file' id='input' onClick={() => document.getElementById('selectedFile')?.click()} />
    </Fragment >
}