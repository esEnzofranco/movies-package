const themeReducer = (state='dark-theme',action)=> {
    switch (action.type) {
        case '@theme/dark':
            return 'dark-theme'
        case '@theme/light':
            return 'light-theme'
        default: return state
    }
}

export const dark = {
    type: '@theme/dark'
}
export const light = {
    type: '@theme/light'
}

export default themeReducer;