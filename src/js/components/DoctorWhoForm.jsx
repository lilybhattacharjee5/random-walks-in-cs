import React from 'react';
import { connect } from 'react-redux';
import { selectDoctor, selectEpisode } from '../actions/index';
import { fetchInteractions } from '../middleware';
import DoctorWhoGraph from './DoctorWhoGraph';
import ConnectedDWGraph from './DoctorWhoGraph';
//import { connect } from 'react-redux';

function range(start, end, step = 1) {
	var listIter = ["None"];
	for (var i = start; i <= end; i++) {
		listIter.push(i);
	}
	return listIter;
}

function DoctorWhoForm({ dispatch }) {
	let tableStyle = {width: "100%"};	
	let tdStyle = {padding: "10px 10px 10px 10px"};
	let input1 = React.createRef();
	let input2 = React.createRef();
	let input3 = React.createRef();

	return (
		<div>
			<form
			onSubmit = {e => {
				e.preventDefault();
				const input1Val = input1.current.state.selectValue;
				const input2Val = input2.current.state.selectValue;
				const input3Val = input3.current.state.selectValue;
				let isDoctor = (input1Val.valueOf() !== "None") && (input2Val.valueOf() === "None") && (input3Val.valueOf() === "None");
				let isEpisode = input1Val.valueOf() === "None" && input2Val.valueOf() !== "None" && input3Val.valueOf() !== "None";
				if (isDoctor) {
					dispatch(selectDoctor(input1Val));
					dispatch(fetchInteractions(input1Val, input2Val, input3Val));
				} else if (isEpisode) {
					dispatch(selectEpisode(input2Val, input3Val));
					dispatch(fetchInteractions(input1Val, input2Val, input3Val));
				} else {
					return;
				}
			}}
			>
				<table style = {tableStyle}>
					<tbody>
						<tr>
							<td style = {tdStyle}>
								(Doctor:&nbsp;&nbsp;
									<FormDropdown ref = {input1} selectName = "doctor" start = "1" end = "13" />
								)
							</td>
							<td style = {tdStyle}>
								<b>OR</b>
							</td>
							<td style = {tdStyle}>
								(Season:&nbsp;&nbsp;
									<FormDropdown ref = {input2} selectName = "season" start = "1" end = "37" />
							</td>
							<td style = {tdStyle}>
								Episode:&nbsp;&nbsp;
									<FormDropdown ref = {input3} selectName = "episode" start = "1" end = "18" />)
							</td>
							<td style = {tdStyle}>
								<button type = "submit">Graph</button>
							</td>
						</tr>
					</tbody>
				</table>
				<br /><br />
			</form>
		</div>
	);
}

class FormDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.elementList = range(parseInt(props.start, 10), parseInt(props.end, 10));
		this.state = { selectValue: 'None' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ selectValue: e.target.value });
	}

	render() {
		return(<select value = {this.state.selectValue} onChange = {this.handleChange} name = {this.props.selectName}>
                	{this.elementList.map((number) => (
                        	<option value = {number} key = {number}>{number}</option>
                        ))};
        </select>);
	}
}

DoctorWhoForm = connect()(DoctorWhoForm);

export default DoctorWhoForm;
