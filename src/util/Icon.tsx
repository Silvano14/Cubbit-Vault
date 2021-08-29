import React from 'react';

export type IconProp = {
    readonly svg: string
    readonly style?: React.CSSProperties
}

export const Icon = ({ svg, style }: IconProp) =>
    <img alt={""} src={svg} style={style} />
