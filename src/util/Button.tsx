import React, { Fragment } from 'react';

export type buttonProps = {
    label: string,
    style: React.CSSProperties,
    onClick?: any
}

export const Button = ({ style, label, onClick }: buttonProps) =>
    <Fragment>
        <button style={style} onClick={onClick}>
            {label}
        </button>
    </Fragment>
