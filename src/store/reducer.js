const INITIAL_STATE = {
    username: "Ayan",
    todos : []
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "Update Data":
            return {
                ...state,
                username: action.username
            }
        case "GETTODOS":
            return {
                ...state,
                todos: action.todos
            }

        default:
            return state
    }
}

export default reducer;