import React, { CSSProperties } from 'react';

export interface InputPropI {
    styleInput?: CSSProperties
    classNameInput?: string
    idInput?: string
    onChangeInput?: Function
    onClickInput?: Function
    showLabel?: boolean
    readOnlyInput?: boolean
    valueInput?: string
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

export const Input = (props: InputPropI) =>
    <input
        readOnly={props.readOnlyInput}
        value={props.valueInput}
        id={props.idInput}
        onClick={() => props.onClickInput ? props.onClickInput() : {}}
        onChange={(e) => props.onChangeInput ? props.onChangeInput(e.target.value) : {}}
        className={props.classNameInput}
        style={{ ...inputStyle, ...props.styleInput }}
    />
