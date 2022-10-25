const initState = {
    theme: "some"
};

export const themeReducer = (state = initState, action: ActionTypechangeTheme): any => { // fix any
    switch (action.type) {
        case "Change-theme": {
            const newState = {...state, theme: action.option}
            return newState;
        }
        default:
            return state;
    }
};

export type ActionTypechangeTheme = ReturnType<typeof changeThemeC>
export const changeThemeC = (option: string) => {
    return {
        type: "Change-theme",
        option: option

    } as const
}; // fix any