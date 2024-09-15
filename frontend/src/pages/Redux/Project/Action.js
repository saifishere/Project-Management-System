import api from "@/config/api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType"

export const fetchProjects = ({category, tag}) => async(dispatch) => {
    dispatch({type:FETCH_PROJECT_REQUEST})
    try {
        const {data} = await api.get('/api/projects', {params:{category, tag}})
        console.log("all projects " , data)
        dispatch({type:FETCH_PROJECT_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}

export const searchProjects = (keyword) => async(dispatch) => {
    dispatch({type:SEARCH_PROJECT_REQUEST})
    try {
        const {data} = await api.get('/api/projects/search?keyword='+keyword)
        console.log("search projects " , data)
        dispatch({type:SEARCH_PROJECT_SUCCESS, projects:data})
    } catch (error) {
        console.log(error);
    }
}


export const createProject = (projectData) => async(dispatch) => {
    dispatch({type:CREATE_PROJECT_REQUEST})
    try {
        const {data} = await api.post('/api/projects', projectData)
        console.log("create projects " , data)
        dispatch({type:CREATE_PROJECT_SUCCESS, project:data})
    } catch (error) {
        console.log(error);
    }
}


export const fetchProjectById = (id) => async(dispatch) => {
    dispatch({type:FETCH_PROJECT_BY_ID_REQUEST})
    try {
        const {data} = await api.get('/api/projects/'+id)
        console.log("fetched by id projects " , data)
        dispatch({type:FETCH_PROJECT_BY_ID_SUCCESS, project:data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = ({projectId}) => async(dispatch) => {
    dispatch({type:DELETE_PROJECT_REQUEST})
    try {
        const {data} = await api.delete('/api/projects/'+projectId)
        console.log("deleted by id projects " , data)
        dispatch({type:DELETE_PROJECT_SUCCESS, projectId})
    } catch (error) {
        console.log(error);
    }
}

export const inviteToProject = ({email, projectId}) => async(dispatch) => {
    dispatch({type:INVITE_TO_PROJECT_REQUEST})
    try {
        const {data} = await api.post('/api/projects/invite', {email, projectId})
        console.log("invite project " , data)
        dispatch({type:INVITE_TO_PROJECT_SUCCESS, payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const acceptInvitation = ({invitationToken, navigate}) => async(dispatch) => {
    dispatch({type:ACCEPT_INVITATION_REQUEST})
    try {
        const {data} = await api.get('/api/projects/accept_invitation', {
            params: {
                token: invitationToken
            }
        })
        navigate("/project/"+data.projectId)
        console.log("accept invitation " , data)
        dispatch({type:ACCEPT_INVITATION_SUCCESS, payload:data})
    } catch (error) {
        console.log(error);
    }
}

