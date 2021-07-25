import React from 'react';

export type IconProp = {
    svg: string
    style?: React.CSSProperties
}

export const Icon = ({ svg, style }: IconProp) =>
    <img alt={""} src={svg} style={style} />
