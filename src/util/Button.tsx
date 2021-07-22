import React, { Fragment } from 'react';

export type buttonProps = {
    label: string,
    style: React.CSSProperties,

}

export const Button = ({ style, label }: buttonProps) =>
    <Fragment>
        <button style={style}>
            {label}
        </button>
    </Fragment>
