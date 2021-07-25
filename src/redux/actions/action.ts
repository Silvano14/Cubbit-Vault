//action types created and exported
export const UPLOAD = "upload file";
export const UPDATE = "update file";
export const SAVE = "save file";
export const REMOVE = "remove file";
export const DOWNLOAD = "download file";

export const uploadFile = () => ({
    type: UPLOAD
})

export const saveFile = () => ({
    type: SAVE
})

export const removeFile = () => ({
    type: REMOVE
})

export const updateFile = () => ({
    type: UPDATE
})

export const downloadFile = () => ({
    type: DOWNLOAD
})
