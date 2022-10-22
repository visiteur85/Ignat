export type InType = {
    isLoading: boolean
}
const initState: InType = {
    isLoading: false
}


export const loadingReducer = (state = initState, action: ActionType): InType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOAD': {
            const newState = {...state, isLoading: action.payload.load}
            return newState
        }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof changeLoadAC>
export const changeLoadAC = (load: boolean) => {
    return {
        type: "CHANGE-LOAD",
        payload: {
            load: load
        }
    } as const
}