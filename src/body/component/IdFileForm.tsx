import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { Button, InputForm } from '../../util';
import { webServerDomain } from '../container/DropFiles';
import { FileDownloaded, FileFormDownload, formButtonStyle } from './FileFormDownload';
import './IdFileForm.css';

export const IdFileForm = () => {
    const [showFileProp, setIfShow] = useState<boolean>(false);
    const [idFile, setIdFile] = useState<string>("");
    const [fileData, setFileData] = useState<FileDownloaded & { _id: string }>();

    const sendRequest = async () =>
        axios.get(`${webServerDomain}/find/${idFile}`)
            .then((e) => { setFileData(e.data); setIfShow(true); })
            .catch((e) => console.log("Error during the http request: ", e))

    const idInput = "input-id-file";
    return (
        <Fragment>
            {showFileProp
                ? <FileFormDownload fileName={fileData?.fileName} size={fileData?.size} id={fileData?._id} />
                : <div className={"container-get-file"}>
                    {/* <label htmlFor={"input-id-file"} >Insert your file id</label>
                    <input id={idInput} onChange={(e) => setIdFile(e.target.value)} className={"input"} style={{ width: '312px', height: '48px' }}></input> */}
                    <InputForm
                        idInput={"input-id-file"}
                        onChangeInput={setIdFile}
                        classNameInput={"input"}
                        styleInput={{ width: '312px', height: '48px' }}
                        showLabel={true}
                        htmlForLbl={idInput}
                    />
                    <Button label={"Get file"} style={formButtonStyle} onClick={sendRequest} />
                </div>}
        </Fragment>)
}
