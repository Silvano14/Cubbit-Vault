import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD } from '../../redux/actions/action';
import { FileProp } from '../../redux/reducers/reducer';
import { Button, buttonProps } from '../../util/Button';
import './Body.css';
import { DataFileSent } from './DataFileSent';
import { DropZone } from './DropZone';

export const Body = () => {
    const [showFileProps, setShowFileProps] = useState<boolean>(false);
    const currentFile = useSelector((state: Array<FileProp>) => {
        if (state && state.length) {
            return state.filter(el => el.toSend === true)[0];
        }
        return undefined;
    });

    useEffect(() => {
        if (currentFile) {
            console.log("currentFile ", currentFile)
            setShowFileProps(true);
        }
    }, [currentFile, setShowFileProps])

    const dispatch = useDispatch();

    const commonBtnStyle: React.CSSProperties = {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '26px',
        width: '168px',
        height: '48px',
        border: 0,
        borderRadius: '3px',
        color: 'white',
        cursor: 'pointer'
    }

    const encryptBtn: buttonProps = {
        label: 'Encrypt and upload', style: {
            background: '#009EFF',
            marginRight: '24px',
            ...commonBtnStyle
        }
    };
    const decryptBtn: buttonProps = {
        label: 'Decrypt and download', style: {
            background: '#0065FF',
            ...commonBtnStyle
        }
    };

    return <div className='container-body'>
        {showFileProps
            ? <DataFileSent keyValue={currentFile ? currentFile.key : undefined} id={currentFile ? currentFile.id : undefined} />
            : <div className='container-body'>
                <DropZone />
                <div className='container-button-actions'>
                    <Button {...encryptBtn} onClick={() => dispatch({ type: UPLOAD })} />
                    <Button {...decryptBtn} />
                </div>
            </div>
        }
    </div>
}