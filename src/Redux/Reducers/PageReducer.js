const initialState = 1

const pageReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state=state+1
        case 'DECREMENT':
            return state=state-1
        case 'INITIAL':
            return initialState
        default: return state
    }
}

export const incrementPage = {
    type: 'INCREMENT'
}
export const decrementPage = {
    type: 'DECREMENT'
}
export const initialPage = {
    type: 'INITIAL'
}

export default pageReducer;