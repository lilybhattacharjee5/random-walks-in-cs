import React from 'react';
import DoctorWhoForm from './DoctorWhoForm';
import ConnectedDWGraph from './DoctorWhoGraph';

const App = () => (
	<div className = "container">
		<h1>Interactive <i>Doctor Who</i></h1>
		<p><b>Directions</b>: Please select either a doctor OR a season and episode number to view a representative interaction graph between <i>Doctor Who</i> characters. The gradient from red to blue edge colors represents involvement ranging from negative sentiment dialogue to positive sentiment dialogue respectively.</p>
		<br />
		<DoctorWhoForm />
		<br />
		<ConnectedDWGraph />
	</div>
);

export default App;
