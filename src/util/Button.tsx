import React, { Fragment } from 'react';

export type buttonProps = {
    label: string,
    style?: React.CSSProperties,
    onClick?: any
    id?: string
}

export const Button = ({ style, label, onClick, id }: buttonProps) =>
    <Fragment>
        <button style={style} onClick={onClick} id={id}>
            {label}
        </button>
    </Fragment>
