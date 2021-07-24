import React, { useReducer } from 'react';
import { DropZone } from './DropZone';
import './Body.css';
import { Button, buttonProps } from '../../util/Button';
import { initialState, reducer } from '../../redux/reducers/reducer';

export const Body = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

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
        color: 'white'
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
        body
        <DropZone />
        <div className='container-button-actions'>
            <Button {...encryptBtn} />
            <Button {...decryptBtn} />
        </div>
    </div>
}