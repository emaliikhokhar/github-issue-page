export const addNewIssue = (data) => {
    return {
        type: "ADD_NEW_ISSUE",
        payload: data
    }
}

export const issueFixed = (id) => {
    return {
        type: "ISSUE_FIXED",
        payload: id
    }
}

export const issueNotFixed = (id) => {
    return {
        type: "ISSUE_NOT_FIXED",
        payload: id
    }
}