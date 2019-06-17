// src/js/actions/index.js

import { SELECT_DOCTOR, SELECT_EPISODE, REQUEST_INTERACTIONS_DOCTOR, REQUEST_INTERACTIONS_EPISODE, RECEIVE_INTERACTIONS_DOCTOR, RECEIVE_INTERACTIONS_EPISODE } from '../constants/action-types';

export function selectDoctor(doctor) {
	return {
		type: SELECT_DOCTOR,
		doctor
	};
}

export function selectEpisode(season, episode) {
	return {
		type: SELECT_EPISODE,
		season,
		episode
	};
}

export function requestInteractionsDoctor(doctor) {
	return {
		type: REQUEST_INTERACTIONS_DOCTOR,
		doctor
	};
}

export function requestInteractionsEpisode(season, episode) {
	return {
		type: REQUEST_INTERACTIONS_EPISODE,
		season,
		episode
	};
}

export function receiveInteractionsDoctor(doctor, json) {
	if (json === undefined || json.nodes === undefined || json.links === undefined) {
		return {
			type: RECEIVE_INTERACTIONS_DOCTOR,
			doctor,
			nodes: [],
			links: [],
			receivedAt: Date.now()
		}
	}
	return {
		type: RECEIVE_INTERACTIONS_DOCTOR,
		doctor,
		nodes: json.nodes,
		links: json.links,
		receivedAt: Date.now()
	};
}

export function receiveInteractionsEpisode(season, episode, json) {
	if (json === undefined || json.nodes === undefined || json.links === undefined) {
                return {
                        type: RECEIVE_INTERACTIONS_EPISODE,
                        season,
						episode,
                        nodes: [],
                        links: [],
                        receivedAt: Date.now()
                }
		}
        return {
                type: RECEIVE_INTERACTIONS_EPISODE,
                season,
				episode,
                nodes: json.nodes,
                links: json.links,
                receivedAt: Date.now()
        };
}
