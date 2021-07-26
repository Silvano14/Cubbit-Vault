import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button } from '../../util/Button';
import { webServerDomain } from '../container/DropFiles';
import { FileFormDownload, formButtonStyle } from './FileFormDownload';
import './IdFileForm.css';

export const IdFileForm = () => {
    const [showFileProp, setIfShow] = useState<boolean>(false);
    const [idFile, setIdFile] = useState<string>("");
    const [fileData, setFileData] = useState<any>();

    const sendRequest = async () =>
        axios.get(`${webServerDomain}/find/${idFile}`)
            .then((e) => { setFileData(e.data); setIfShow(true); })
            .catch((e) => console.log("Error during the http request: ", e))

    return (
        <Fragment>
            {showFileProp
                ? <FileFormDownload fileName={fileData?.fileName} size={fileData?.size} id={fileData?._id} />
                : <div className={"container-get-file"}>
                    <label htmlFor={"input-id-file"} >Insert your file id</label>
                    <input id={"input-id-file"} onChange={(e) => setIdFile(e.target.value)} className={"input"} style={{ width: '312px', height: '48px' }}></input>
                    <Button label={"Get file"} style={formButtonStyle} onClick={sendRequest} />
                </div>}
        </Fragment>)
}
