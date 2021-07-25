import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DOWNLOAD, UPLOAD } from '../../redux/actions/action';
import { FileProp } from '../../redux/reducers/reducer';
import { Button, buttonProps } from '../../util/Button';
import './Body.css';
import { commonBtnStyle } from './const';
import { DataFile } from './DataFile';
import { Download } from './Download';
import { DropZone } from './DropZone';

export const Body = () => {
    const [showFileProps, setShowFileProps] = useState<boolean>(false);
    // const [isDownload, setIsDownload] = useState<boolean>(false);
    const currentFile = useSelector((state: Array<FileProp>) => {
        if (state && state.length)
            return state.filter(el => el.toSend === true)[0];

        return undefined;
    });
    const isDownload = useSelector((state: { download: boolean }) => {
        if (state)
            return state.download;

        return false;
    });

    useEffect(() => {
        if (currentFile)
            setShowFileProps(true);

    }, [currentFile, setShowFileProps])

    const dispatch = useDispatch();

    return <div className='container-body'>
        {isDownload ? <Download />
            : showFileProps
                ? <DataFile fileName={currentFile?.fileName || ""} keyValue={currentFile?.key || ""} id={currentFile?.id || ""} />
                : <div className='container-body'>
                    <DropZone />
                    <div className='container-button-actions'>
                        <Button {...encryptBtn} onClick={() => dispatch({ type: UPLOAD })} />
                        <Button {...decryptBtn} onClick={() => dispatch({ type: DOWNLOAD })} />
                    </div>
                </div>
        }
    </div>
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