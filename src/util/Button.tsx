import React, { Fragment } from 'react';

export type buttonProps = {
    label: string,
    style?: React.CSSProperties,
    onClick?: any
    id?: string
}

export const commonBtnStyle: React.CSSProperties = {
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

export const Button = ({ style, label, onClick, id }: buttonProps) =>
    <Fragment>
        <button style={{ ...commonBtnStyle, ...style }} onClick={onClick} id={id}>
            {label}
        </button>
    </Fragment>
