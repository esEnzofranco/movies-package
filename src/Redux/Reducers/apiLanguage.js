const initialState = 'es-MX';

const apiLanguage = (state=initialState,action) => {
    switch (action.type) {
        case 'SPANISH':
            return 'es-MX'
        case 'ENGLISH':
            return 'en-US'
        default: return state    
    }
}

export const spanishApi = {
    type: 'SPANISH'
}
export const englishApi = {
    type: 'ENGLISH'
}

export default apiLanguage;
