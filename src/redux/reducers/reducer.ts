import { REMOVE, SAVE, UPDATE, UPLOAD } from '../actions/action';

export type FileProp = {
    content: string | ArrayBuffer,
    fileName: string,
    size: number,
    toSend?: boolean
    key?: string
    id?: string
}

export type State = Array<FileProp>

//initial state for redux store
export const initialState: State = [];

export const reducer = (state = initialState, action: any): any => {
    switch (action.type) {

        case UPLOAD: {
            if (state && state[0])
                return [{ ...state[0], toSend: true }]
            return state;
        }

        case SAVE: {
            if (action && action.payload) {
                if (!state.includes({ ...action.payload, toSend: false }))
                    return [...state, { ...action.payload, toSend: false }];
            }
            return state;
        }

        // handles item updates in redux store
        case UPDATE: {
            const { id, key } = action.payload;
            return [{ ...state[0], id, key }]

        }

        // //handles item deletion from redux store
        case REMOVE: {
            delete state[0]
            return state;
        }

        //returns default state, in case some unknown action type is discovered
        default: return state;
    }
}