import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a, b) => b.age - a.age)
          return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            const newstate = state.filter(f => f.age > 18)
            return newstate
        }
        default:
            return state
    }
}

export type ActionType = {
    type:'sort', payload: 'up' | 'down'} | {type:'check'}



