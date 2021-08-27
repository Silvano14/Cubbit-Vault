import React, { Fragment } from 'react';
import { Input, InputPropI } from './Input';
import { Label, LabelPropI } from './Label';

export interface InputFormPropI extends LabelPropI, InputPropI {
}

export const InputForm = (props: InputFormPropI) =>
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
            onChangeInput={() => props.onChangeInput ? props.onChangeInput() : {}}
            classNameInput={props.classNameInput}
            styleInput={{ ...props.styleInput }}
        />
    </Fragment>