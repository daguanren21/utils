/**
 * 
 * @param byteSize 
 * @returns 
 */

export const formatByteSize = (byteSize: number) => {
    let size: string
    if (byteSize > 1024 * 1024 * 1024) {
        size = `${(byteSize / 1024 / 1024 / 1024).toFixed(2)} GB`
    } else if (byteSize > 1024 * 1024) {
        size = `${(byteSize / 1024 / 1024).toFixed(2)} MB`
    } else if (byteSize > 1024) {
        size = `${(byteSize / 1024).toFixed(2)} KB`
    } else {
        size = `${byteSize} B`
    }
    return size
}

const videoExts = new Set([
    'mp4',
    'webm',
    'ogg',
    'avi',
    'mov',
    'flv',
    'wmv',
    'mkv',
])

export const isVideoExt = (ext: string) => {
    return videoExts.has(ext)
}