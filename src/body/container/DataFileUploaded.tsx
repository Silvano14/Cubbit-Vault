import React, { CSSProperties, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import FileLogo from '../../icon/File-logo-white.svg';
import { DOWNLOAD } from '../../redux/actions/action';
import { Button, InputForm, Icon } from '../../util/components';
import './DataFileUploaded.css';

type KeysFile = {
    id: string,
    keyValue: string
    fileName: string
}
const commonStyleButton: CSSProperties = {
    background: '#009EFF',
    height: '36px',
    width: '116px',
    position: 'relative',
    left: '211px'
}

const commonStyleLabel: CSSProperties = {
    paddingBottom: "20px"
}

export const DataFileUploaded = ({ id, keyValue, fileName }: KeysFile) => {
    const dispatch = useDispatch();

    return <Fragment>
        <div className='container-data-file'>
            <Icon svg={FileLogo} style={{ color: 'white' }} />
            <p> {fileName} </p>
        </div>
        <InputForm
            readOnlyInput={true}
            classNameInput='id'
            valueInput={id}
            showLabel={true}
            textLbl={'Your file id:'}
            styleLbl={commonStyleLabel}
            classNameLbl='text-id'
        />
        <Button id={"btn-id"} label={'Copy'} style={{
            ...commonStyleButton,
            bottom: '42px'
        }}
            onClick={() => copyTextInCLipboard(id, "btn-id")}
        />
        <Button id={"btn-key"} label={'Copy'} style={{
            ...commonStyleButton,
            top: '88px'
        }}
            onClick={() => copyTextInCLipboard(keyValue, "btn-key")} />
        <InputForm
            readOnlyInput={true}
            classNameInput={"key"}
            valueInput={keyValue}
            showLabel={true}
            textLbl={"Your encryption key:"}
            classNameLbl={'text-key'}
            styleLbl={commonStyleLabel}
        />
        <Button
            style={{ background: commonStyleButton.background, marginTop: '50px' }}
            label={"Go to download"}
            onClick={() => dispatch({ type: DOWNLOAD, payload: true })} />
    </Fragment>
}

function copyTextInCLipboard(keyValue: string, idWithText: string) {
    document.getElementById(idWithText)!.innerHTML = "Copied";
    navigator.clipboard.writeText(keyValue);
}
