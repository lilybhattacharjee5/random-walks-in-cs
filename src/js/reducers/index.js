import { combineReducers } from 'redux';
import {
    SELECT_DOCTOR,
    SELECT_EPISODE,
    REQUEST_INTERACTIONS_DOCTOR,
    REQUEST_INTERACTIONS_EPISODE,
    RECEIVE_INTERACTIONS_DOCTOR,
    RECEIVE_INTERACTIONS_EPISODE
} from '../constants/action-types';

function selectedDoctor(state = "1", action) {
    switch (action.type) {
        case SELECT_DOCTOR:
            return action.doctor;
        default:
            return state;
    }
}

function selectedEpisode(state = { season: "1", episode: "1" }, action) {
    switch (action.type) {
        case SELECT_EPISODE:
            return { season: action.season, episode: action.episode };
        default:
            return state;
    }
}

function interactions(state = { isFetching: false, nodes: [], links: [] }, action) {
    switch (action.type) {
        case REQUEST_INTERACTIONS_DOCTOR:
            return {
                ...state,
                isFetching: true
            }
        case REQUEST_INTERACTIONS_EPISODE:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_INTERACTIONS_DOCTOR:
            return {
                ...state,
                isFetching: false,
                nodes: action.nodes,
                links: action.links,
                lastUpdated: action.receivedAt
            }
        case RECEIVE_INTERACTIONS_EPISODE:
            return {
                ...state,
                season: action.season,
                episode: action.episode,
                isFetching: false,
                nodes: action.nodes,
                links: action.links,
                lastUpdated: action.receivedAt
            }
        default:
            return state;
    }
}

function interactionsBySpecs(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INTERACTIONS_DOCTOR:
            return { 
                ...state,
                [action.doctor]: interactions(state[action.doctor], action)
            }
        case RECEIVE_INTERACTIONS_EPISODE:
            return {
                ...state,
                [`${action.season}-${action.episode}`]: interactions({ "season": state[action.season], "episode": state[action.episode] }, action),
            }
        case REQUEST_INTERACTIONS_DOCTOR:
            return { 
                ...state,
                isEpisode: false,
                isDoctor: true,
                [action.doctor]: interactions(state[action.doctor], action)
            }
        case REQUEST_INTERACTIONS_EPISODE:
            return {
                ...state,
                isEpisode: true,
                isDoctor: false,
                [action.season.toString() + "-" + action.episode.toString()]: interactions({ "season": state[action.season], "episode": state[action.episode] }, action),
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    interactionsBySpecs,
    selectedDoctor,
    selectedEpisode
});

export default rootReducer;