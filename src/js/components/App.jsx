import React from 'react';
import DoctorWhoForm from './DoctorWhoForm';
import ConnectedDWGraph from './DoctorWhoGraph';

const App = () => (
	<div className = "container">
		<h1>Interactive <i>Doctor Who</i></h1>
		<br />
		<DoctorWhoForm />
		<br />
		<ConnectedDWGraph />
	</div>
);

export default App;
