import React, { CSSProperties } from 'react';

const labelStyle: CSSProperties = {
    textAlign: "center",
    color: "white",
    fontSize: "16px",
    lineHeight: "26px",
    fontFamily: "Nunito"
}

export interface LabelPropI {
    classNameLbl?: string
    textLbl?: string
    htmlForLbl?: string
    styleLbl?: CSSProperties
}

export const Label = (props: LabelPropI) => <label htmlFor={props.htmlForLbl} className={props.classNameLbl} style={{ ...labelStyle, ...props.styleLbl }}>{props.textLbl}</label>
