import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import FileLogo from '../../icon/File-logo-white.svg';
import { DOWNLOAD } from '../../redux/actions/action';
import { Button } from '../../util/Button';
import { Icon } from '../../util/Icon';
import { commonBtnStyle } from './const';
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
            ...commonBtnStyle,
            background: '#009EFF',
            height: '36px',
            width: '116px',
            position: 'relative',
            left: '211px',
            bottom: '42px'
        }}
            onClick={(e: any) => {
                document.getElementById("btn-id")!.innerHTML = "Copied"; navigator.clipboard.writeText(id)
            }} />
        <p className='text-key'> Your encryption key: </p>
        <Button id={"btn-key"} label={'Copy'} style={{
            ...commonBtnStyle,
            background: '#009EFF',
            height: '36px',
            width: '116px',
            position: 'relative',
            left: '211px',
            bottom: '-42px'
        }}
            onClick={(e: any) => {
                document.getElementById("btn-key")!.innerHTML = "Copied"; navigator.clipboard.writeText(keyValue)
            }} />
        <input readOnly className='input key' value={keyValue} />

        <Button style={{ ...commonBtnStyle, background: '#009EFF', marginTop: '50px' }} label={"Go to download"} onClick={() => dispatch({ type: DOWNLOAD, payload: true })} />

    </Fragment>
}