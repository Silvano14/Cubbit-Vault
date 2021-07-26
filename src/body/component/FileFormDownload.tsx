import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from '../../util/Button';
import { commonBtnStyle } from '../container/const';
import { webServerDomain } from '../container/DropFiles';
import './FileFormDownload.css';

const inputId = "input-id";
const inputName = "input-name";
const inputSize = "input-size";
const inputEncryptionKey = "input-encyption-key";

export type FileDownloaded = {
    fileName?: string,
    size?: number,
    id?: string
}

export const FileFormDownload = ({ fileName, size, id }: FileDownloaded) => {
    const [key, setKey] = useState<string>("");

    const sendRequest = async () =>
        axios.post(`${webServerDomain}/download`, { id, key })
            .then((e) => console.log(e))
            .catch((e) => console.log("Error during the http request: ", e))

    return <Fragment>
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
        <div className={"container-input-button"}>
            <div className={"container-encryption-key"}>
                <label className={"lbl key"} htmlFor={inputEncryptionKey}> Insert your encryption key </label>
                <input className={"input key"} style={{ width: '409px', height: '48px' }} onChange={(e) => setKey(e.target.value)} id={inputEncryptionKey} />
            </div>
            <div className={"container-btn-decrypt"}>
                <Button style={formButtonStyle} onClick={sendRequest} label={"Decrypt and download"} />
            </div>
        </div>
    </Fragment>
}


export const formButtonStyle = { ...commonBtnStyle, backgroundColor: '#FFA047' }
