import spanishLanguage from '../../Languages/es-AR.json';
import englishLanguage from '../../Languages/en-US.json'; 

const languageReducer = (state=spanishLanguage,action)=> {
    switch (action.type) {
        case '@language/spanish':
            return state=spanishLanguage
        case '@language/english':
            return state=englishLanguage
        default: return state
    }
}

export const inEnglish = {
    type: '@language/english'
}
export const inSpanish = {
    type: '@language/spanish'
}

export default languageReducer;