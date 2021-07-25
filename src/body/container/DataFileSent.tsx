import React, { Fragment } from 'react';

type KeysFile = {
    id?: string,
    keyValue?: string
}

export const DataFileSent = ({ id, keyValue }: KeysFile) =>
    <Fragment>
        <div className='container-data-file'>
            <input value={id} />
            <input value={keyValue} />
        </div>

    </Fragment>
