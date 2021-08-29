import React, { Fragment } from 'react';
import { Input, InputProp } from './Input';
import { Label, LabelProp } from './Label';

export type InputFormProp = LabelProp & InputProp;

export const InputForm = (props: InputFormProp) =>
    <Fragment>
        {props.showLabel
            ? <Label
                classNameLbl={props.classNameLbl}
                styleLbl={{ ...props.styleLbl }}
                textLbl={props.textLbl}
            />
            : <></>}
        <Input
            readOnlyInput={props.readOnlyInput}
            valueInput={props.valueInput}
            idInput={props.idInput}
            onClickInput={() => props.onClickInput ? props.onClickInput() : {}}
            onChangeInput={(e) => props.onChangeInput ? props.onChangeInput(e) : {}}
            classNameInput={props.classNameInput}
            styleInput={{ ...props.styleInput }}
        />
    </Fragment>