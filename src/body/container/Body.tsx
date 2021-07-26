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
    const dispatch = useDispatch();

    const currentFile = useSelector((state: Array<FileProp>) => {
        if (state && state.length)
            return state.filter(el => el.toSend === true)[0];
        return;
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


    return <div className='container-body'>
        <p className={"p-header"}>`4!!(3=s 4+3</p>

        {isDownload ? <Download />
            : showFileProps
                ? <DataFile fileName={currentFile?.fileName || ""} keyValue={currentFile?.key || ""} id={currentFile?.id || ""} />
                : <div className='container-body'>
                    <DropZone />
                    <div className='container-button-actions'>
                        <Button {...encryptBtn} onClick={() => dispatch({ type: UPLOAD })} />
                        <Button {...decryptBtn} onClick={() => dispatch({ type: DOWNLOAD, payload: true })} />
                    </div>
                </div>
        }
        <p className={"p-footer"}> q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1</p>
    </div>
}

const encryptBtn: buttonProps = {
    label: 'Encrypt and upload', style: {
        ...commonBtnStyle,
        background: '#009EFF',
        marginRight: '24px',
    }
};
const decryptBtn: buttonProps = {
    label: 'Decrypt and download', style: {
        ...commonBtnStyle,
        background: '#0065FF',
    }
};