import React, { Dispatch, Fragment, SetStateAction } from 'react';
import ArrowDown from '../../icon/ArrowDown.svg';
import Divider from '../../icon/Divider.svg';
import FileLogo from '../../icon/File-logo.svg';
import { Icon } from '../../util/Icon';
import { InputForm } from '../../util';
import './InputBrowsingExplorer.css';

export type InputBrowsingExplorerProps = {
    setFile: Dispatch<SetStateAction<File | undefined>>
}

const commonStyleDiv: React.CSSProperties = { position: 'absolute' }

export const InputBrowsingExplorer = ({ setFile }: InputBrowsingExplorerProps) =>
    <Fragment>
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
            right: '352px',
            top: '70px'
        }} ><Icon svg={ArrowDown} /></div>
        <div style={{
            ...commonStyleDiv,
            right: '380px',
            top: '56px'
        }}>
            <Icon svg={Divider} />
        </div>
        {/* In this way you avoid showing the writing for the choice of the file */}
        <input type="file" id="selectedFile" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files ? e.target.files[0] : undefined)} />
        <InputForm styleInput={{
            width: "264px",
            height: "48px",
            background: "#FFFFFF",
            borderRadius: "3px",
            border: "0"
        }}
            readOnlyInput={true}
            onClickInput={() => document.getElementById('selectedFile')?.click()} />
    </Fragment >
