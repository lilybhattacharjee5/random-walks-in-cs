import React from 'react';
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

	return (
		<div>
			<form
			onSubmit = {e => {
				e.preventDefault()
			}}
			>
				<table style = {tableStyle}>
					<tbody>
						<tr>
							<td style = {tdStyle}>
								(Doctor:&nbsp;&nbsp;
									<FormDropdown selectName = "doctor" start = "1" end = "13" />
								)
							</td>
							<td style = {tdStyle}>
								<b>OR</b>
							</td>
							<td style = {tdStyle}>
								(Season:&nbsp;&nbsp;
									<FormDropdown selectName = "season" start = "1" end = "37" />
							</td>
							<td style = {tdStyle}>
                                                		Episode:&nbsp;&nbsp;
                                                			<FormDropdown selectName = "episode" start = "1" end = "18" />)
                                                	</td>
							<td style = {tdStyle}>
								<button type = "submit">Graph</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
}

function FormDropdown(props) {
	let input;
	let elemList = range(parseInt(props.start, 10), parseInt(props.end, 10));
	return(<select name = {props.selectName}
        	ref = {node => {
                	input = node;
                }}>
                	{elemList.map((number) => (
                        	<option value = {number} key = {number}>{number}</option>
                        ))};
        </select>);
}

//DoctorWhoForm = connect()(DoctorWhoForm);

export default DoctorWhoForm;
