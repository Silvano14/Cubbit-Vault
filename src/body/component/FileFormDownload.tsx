import React, { Fragment } from 'react';
import { FileProp } from '../../redux/reducers/reducer';
import { Button } from '../../util/Button';
import { commonBtnStyle } from '../container/const';
import './FileFormDownload.css';

const inputId = "input-id";
const inputName = "input-name";
const inputSize = "input-size";
const InputMime = "input-mime";
const inputEncryptionKey = "input-encyption-key";

export type FileDownloaded = {
    fileName?: string,
    size?: number,
    id?: string
}

export const FileFormDownload = ({ fileName, size, id }: FileDownloaded) =>
    <Fragment>
        <div>
            <label className={"lbl id"} htmlFor={inputId}> File id </label>
            <input className={"input id"} id={inputId} readOnly value={id} />
        </div>
        <div>
            <label className={"lbl name"} htmlFor={inputName}> File name </label>
            <input className={"input name"} id={inputName} readOnly value={fileName} />
        </div>
        <div>
            <label className={"lbl size"} htmlFor={inputSize}> File size </label>
            <input className={"input size"} id={inputSize} readOnly value={size} />
        </div>
        <div>
            <label className={"lbl mime"} htmlFor={inputId}> File mime </label>
            <input className={"input mime"} id={InputMime} readOnly value={size} />
        </div>
        <div className={"container-input-button"}>
            <div className={"container-encryption-key"}>
                <label className={"lbl key"} htmlFor={inputEncryptionKey}> Insert your encryption key </label>
                <input className={"input key"} style={{ width: '409px', height: '48px' }} id={inputEncryptionKey} />
            </div>
            <div className={"container-btn-decrypt"}>
                <Button style={formButtonStyle} label={"Decrypt and download"} />
            </div>
        </div>
    </Fragment>


export const formButtonStyle = { ...commonBtnStyle, backgroundColor: '#FFA047' }
