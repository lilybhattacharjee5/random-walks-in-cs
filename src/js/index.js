// imports
import store from '../js/store/index';
import { selectDoctor, selectEpisode, requestInteractionsDoctor, requestInteractionsEpisode, receiveInteractionsDoctor, receiveInteractionsEpisode } from './actions/index';
import { fetchInteractions } from '../js/middleware/index';

// set window vars
window.store = store;
window.requestInteractionsDoctor = requestInteractionsDoctor;
window.requestInteractionsEpisode = requestInteractionsEpisode;
window.receiveInteractionsDoctor = receiveInteractionsDoctor;
window.receiveInteractionsEpisode = receiveInteractionsEpisode;
window.selectDoctor = selectDoctor;
window.selectEpisode = selectEpisode;
window.fetchInteractions = fetchInteractions;