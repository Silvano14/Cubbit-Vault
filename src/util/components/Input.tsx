import React, { CSSProperties } from 'react';

export type InputProp = {
    readonly styleInput?: CSSProperties
    readonly classNameInput?: string
    readonly idInput?: string
    onChangeInput?(e: string): void
    onClickInput?(): void
    readonly showLabel?: boolean
    readonly readOnlyInput?: boolean
    readonly valueInput?: string 
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
    color: "white",
    fontFamily: "Nunito",
    fontWeight: "bold"
}

export const Input = (props: InputProp) =>
    <input
        readOnly={props.readOnlyInput}
        value={props.valueInput}
        id={props.idInput}
        onClick={() => props.onClickInput ? props.onClickInput() : {}}
        onChange={(e) => props.onChangeInput ? props.onChangeInput(e.target.value) : {}}
        className={props.classNameInput}
        style={{ ...inputStyle, ...props.styleInput }}
    />
