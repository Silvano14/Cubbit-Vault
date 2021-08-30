import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import FileLogo from '../../icon/File-logo-white.svg';
import { DOWNLOAD } from '../../redux/actions/action';
import { Button, Icon, InputForm } from '../../util/components';
import './DataFile.css';

type KeysFile = {
    id: string,
    keyValue: string
    fileName: string
}

export const DataFile = ({ id, keyValue, fileName }: KeysFile) => {
    const dispatch = useDispatch();

    return <Fragment>
        <div className='container-data-file'>
            <Icon svg={FileLogo} style={{ color: 'white' }} />
            <p> {fileName} </p>
        </div>
        <p className='text-id'> Your file id: </p>
        <input readOnly className='input id' value={id} />
        <Button id={"btn-id"} label={'Copy'} style={{
            background: '#009EFF',
            height: '36px',
            width: '116px',
            position: 'relative',
            left: '211px',
            bottom: '42px'
        }}
            onClick={() => copyTextInCLipboard(id, "btn-id")} />
        <p className='text-key'> Your encryption key: </p>
        <Button id={"btn-key"} label={'Copy'} style={{
            background: '#009EFF',
            height: '36px',
            width: '116px',
            position: 'relative',
            left: '211px',
            bottom: '-42px'
        }}
            onClick={() => copyTextInCLipboard(keyValue, "btn-key")} />
        <InputForm readOnlyInput={true} classNameInput={"key"} valueInput={keyValue} />
        <Button style={{ background: '#009EFF', marginTop: '50px' }} label={"Go to download"} onClick={() => dispatch({ type: DOWNLOAD, payload: true })} />
    </Fragment>
}

function copyTextInCLipboard(keyValue: string, idWithText: string) {
    document.getElementById(idWithText)!.innerHTML = "Copied";
    navigator.clipboard.writeText(keyValue);
}
