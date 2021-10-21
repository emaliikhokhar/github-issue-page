const initialState = [
    {
       id: 0,
       issueDesctiption: "Completely isolate the error overlay script from the main app",
       issue: "",
       contribution: "",
       difficulty: "",
       status: "pending"
    },
    {
        id: 2,
        issueDesctiption: "Quitting react dev server closes browser and any open tabs",
        issue: "bug",
        contribution: "up for global",
        difficulty: "medium" ,
        status: "completed"
    },
    {
        id: 3,
        issueDesctiption: "Print process of PID for running application",
        issue: "claimed",
        contribution: "proposal",
        difficulty: "" ,
        status: "pending"
    },
    {
        id: 4,
        issueDesctiption: "main.css doesn't contain all css file when using code splitting",
        issue: "bug",
        contribution: "",
        difficulty: "",
        status: "pending" 
    }
]

const issueReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NEW_ISSUE":
            return state

        case "ISSUE_FIXED":
            return state

        case "ISSUE_NOT_FIXED":
            return state

        default: return state
    }
}

export default issueReducer