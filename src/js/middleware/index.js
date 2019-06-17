import fetch from 'cross-fetch';
import { requestInteractionsDoctor, requestInteractionsEpisode, receiveInteractionsDoctor, receiveInteractionsEpisode } from '../actions/index';

export function fetchInteractions(doctor, season, episode) {
    return function(dispatch) {
        let fetchedData;
        const input1Val = doctor;
        const input2Val = season;
        const input3Val = episode;
        let isDoctor = (input1Val.valueOf() !== "None") && (input2Val.valueOf() === "None") && (input3Val.valueOf() === "None");
        let isEpisode = (input1Val.valueOf() === "None") && (input2Val.valueOf() !== "None") && (input3Val.valueOf() !== "None");
        if (isDoctor) {
            dispatch(requestInteractionsDoctor(doctor));
            fetchedData = fetch(`/doctors/doctor_${doctor}.txt`);
        } else if (isEpisode) {
            dispatch(requestInteractionsEpisode(season, episode));
            fetchedData = fetch(`/episodes/ep_${season}-${episode}.txt`);
        }
        return(fetchedData)
        .then(
            response => response.json(),
            error => console.log('An error occurred.')
        ).then(json => isDoctor ? dispatch(receiveInteractionsDoctor(doctor, json)) : dispatch(receiveInteractionsEpisode(season, episode, json))
        )
    }
}