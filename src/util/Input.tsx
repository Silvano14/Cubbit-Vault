import React, { CSSProperties, Fragment } from 'react';

export type InputProp = {
    style?: CSSProperties
    className?: string
    id?: string
    onChange?: Function
    onClick?: Function
    label?: boolean
    readOnly?: boolean
    textLabel?: string
    value?: string
}


const inputStyle: CSSProperties = {
    background: "#292929",
    border: "1px solid #363636",
    boxSizing: "border-box",
    borderRadius: "3px",
    height: "48px",
    width: "552px",
    textOverflow: "ellipsis",
    paddingLeft: "30px",
    paddingRight: "148px",
    color: "white",
    fontFamily: "Nunito",
    fontWeight: "bold"
}

export const Input = ({ onChange = () => { }, onClick = () => { }, style, className = "", id, label, textLabel, readOnly = false, value }: InputProp) =>
    <Fragment>
        {label ? <label htmlFor={id} >{textLabel} </label> : <></>}
        <input readOnly={readOnly}
            value={value}
            id={id}
            onClick={() => onClick()}
            onChange={() => onChange()}
            className={`${className}`}
            style={{ ...inputStyle, ...style }} />
    </Fragment>