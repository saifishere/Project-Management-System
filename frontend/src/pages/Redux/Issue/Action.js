import api from "@/config/api"
import { ASSIGNE_ISSUE_TO_USER_FAILURE, ASSIGNE_ISSUE_TO_USER_REQUEST, ASSIGNE_ISSUE_TO_USER_SUCCESS, CREATE_ISSUE_FAILURE, CREATE_ISSUE_REQUEST, CREATE_ISSUE_SUCCESS, DELETE_ISSUE_FAILURE, DELETE_ISSUE_REQUEST, DELETE_ISSUE_SUCCESS, FETCH_ISSUES_BY_ID_FAILURE, FETCH_ISSUES_BY_ID_REQUEST, FETCH_ISSUES_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS } from "./ActionType"

export const fetchIssues = (id) => {
    return async(dispatch) => {
        dispatch({type: FETCH_ISSUES_REQUEST})
        try {
            const response = await api.get(`api/issues/project/${id}`)
            console.log("fetched issues ", response.data)
            dispatch({type: FETCH_ISSUES_SUCCESS, issues: response.data})
        } catch (error) {
            console.log(error);
            dispatch({type: FETCH_ISSUES_FAILURE, error: error.message})
        }
    }
}

export const fetchIssueById = (id) => {
    return async(dispatch) => {
        dispatch({type: FETCH_ISSUES_BY_ID_REQUEST})
        try {
            const response = await api.get(`api/issues/${id}`)
            console.log("fetched issue by id ", response.data)
            dispatch({type: FETCH_ISSUES_BY_ID_SUCCESS, issues: response.data})
        } catch (error) {
            console.log(error);
            dispatch({type: FETCH_ISSUES_BY_ID_FAILURE, error: error.message})
        }
    }
}

export const updateIssueStatus = ({id, status}) => {
    return async(dispatch) => {
        dispatch({type: UPDATE_ISSUE_STATUS_REQUEST})
        try {
            const response = await api.put(`api/issues/${id}/status/${status}`)
            console.log("update issue status ", response.data)
            dispatch({type: UPDATE_ISSUE_STATUS_SUCCESS, issues: response.data})
        } catch (error) {
            console.log(error);
            dispatch({type: UPDATE_ISSUE_STATUS_FAILURE, error: error.message})
        }
    }
}


export const assignedUserToIssue = ({issueId, userId}) => {
    return async(dispatch) => {
        dispatch({type: ASSIGNE_ISSUE_TO_USER_REQUEST})
        try {
            const response = await api.put(`api/issues/${issueId}/assignee/${userId}`)
            console.log("assigned issue ", response.data)
            dispatch({type: ASSIGNE_ISSUE_TO_USER_SUCCESS, issues: response.data})
        } catch (error) {
            console.log(error);
            dispatch({type: ASSIGNE_ISSUE_TO_USER_FAILURE, error: error.message})
        }
    }
}


export const createIssue = (issueData) => {
    return async(dispatch) => {
        dispatch({type: CREATE_ISSUE_REQUEST})
        try {
            const response = await api.post(`api/issues`, issueData)
            console.log("issue ", response.data)
            dispatch({type: CREATE_ISSUE_SUCCESS, issue: response.data})
            console.log("issue created successfully")
        } catch (error) {
            console.log(error);
            dispatch({type: CREATE_ISSUE_FAILURE, error: error.message})
        }
    }
}


export const deleteIssue = (issueId) => {
    return async(dispatch) => {
        dispatch({type: DELETE_ISSUE_REQUEST})
        try {
            const response = await api.delete(`api/issues/${issueId}`)
            console.log("issue deleted ", response.data)
            dispatch({type: DELETE_ISSUE_SUCCESS, issueId})
            console.log("issue deleted successfully")
        } catch (error) {
            console.log(error);
            dispatch({type: DELETE_ISSUE_FAILURE, error: error.message})
        }
    }
}
