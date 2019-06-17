import React from 'react';
import * as d3 from 'd3';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { drag } from 'd3-drag';
import { connect } from 'react-redux';
import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force';
import { zoom } from 'd3-zoom';
import {event as currentEvent} from 'd3-selection';
import { rgb } from 'd3-color';

const mapStateToProps = state => {
	let stateNodes = [];
	let stateLinks = [];
	if (state.interactionsBySpecs !== undefined) {
		if (state.selectedDoctor.toString() in state.interactionsBySpecs && state.interactionsBySpecs.isDoctor) {
			stateNodes = state.interactionsBySpecs[state.selectedDoctor.toString()].nodes;
			stateLinks = state.interactionsBySpecs[state.selectedDoctor.toString()].links;
		}
		if ((state.selectedEpisode.season.toString() + "-" + state.selectedEpisode.episode.toString()) in state.interactionsBySpecs && state.interactionsBySpecs.isEpisode) {
			stateNodes = state.interactionsBySpecs[state.selectedEpisode.season.toString() + "-" + state.selectedEpisode.episode.toString()].nodes;
			stateLinks = state.interactionsBySpecs[state.selectedEpisode.season.toString() + "-" + state.selectedEpisode.episode.toString()].links;
		}
	}

	if (state.interactionsBySpecs.isDoctor) {
		return { nodes: stateNodes, links: stateLinks, doctor: state.selectedDoctor };
	} else {
		return { nodes: stateNodes, links: stateLinks, season: state.selectedEpisode.season, episode: state.selectedEpisode.episode };
	}
	
}

function DoctorWhoGraph({ nodes = [], links = [], season = undefined, episode = undefined, doctor = undefined }) {

	function createGraph(nodes, links) {
		return <DWD3 nodes={ nodes } links={ links } id="graph" />;
	}


	if (nodes.length === 0 || links.length === 0) {
		return <div></div>;
	}
	return(
		<div style={ {textAlign: "center"} }>
			{ doctor ? <div><b>Doctor</b>: { doctor }</div> : null }
			{ season ? <div><b>Season</b>: { season }</div> : null }
			{ episode ? <div><b>Episode</b>: { episode }</div> : null }
			<br />
			{ createGraph(nodes, links) }
		</div>);
}

const ConnectedDWGraph = connect(mapStateToProps) (DoctorWhoGraph);
export default ConnectedDWGraph;

class DWD3 extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		let margin = {
			top: 20,
			bottom: 50,
			right: 30,
			left: 50,
		}
		let width = 1500 - margin.left - margin.right;
		let height = 700 - margin.top - margin.bottom;
		const node = this.node;
		let c10 = scaleOrdinal(d3.schemeCategory10);

		let svg = select(node)
			.attr("width", "100%")
			.attr("height", height + margin.top + margin.bottom);

		let g = svg
			.append("g")
			.attr("transform", "translate("+margin.left+","+margin.top+")");

		let simulation = forceSimulation(this.props.nodes)
			.force("charge", forceManyBody())
			.force("link", forceLink(this.props.links).distance(400).id(d => d.id))
			.force("center", forceCenter(width / 2, height / 2));
		simulation.stop();

		var zoomHandler = zoom()
    		.on("zoom", zoomActions);
 
		zoomHandler(svg);     
 
		function zoomActions(){
			g.attr("transform", currentEvent.transform)
		}

		function dragstart(d) {
			d3.event.sourceEvent.stopPropagation();
			simulation.stop();
		}
		 
		function dragged(d, i) {
			d.px += currentEvent.dx;
			d.py += currentEvent.dy;
			d.x += currentEvent.dx;
			d.y += currentEvent.dy;
			tick();
		}
		 
		function dragended(d, i) {
			d.fixed = true;
			tick();
			simulation.alpha(1).restart();
		}

		let dragAct = drag()
			.on("start", dragstart)
			.on("drag", dragged)
			.on("end", dragended);

		let link = g
			.selectAll(".link")
			.data(this.props.links)
			.enter()
			.append("line")
			.attr("stroke-width", function(d) { return d.weight / 7; } )
			.attr("stroke", function(d) { return rgb(d.red, d.green, d.blue, 0.5); })
			.attr("class", "link");

		g
			.selectAll(".node")
			.data(this.props.nodes)
			.enter()
			.append("g")
			.attr("class", "node")

		let label = g
			.selectAll("node")
			.data(this.props.nodes)
			.enter()
			.append("text")
			.attr("dx", 12)
			.attr("dy", "0.35em")
			.attr("font-size", function(d) { return d.influence * 1.5 > 9 ? d.influence / 2 : 9; })
			.text(function(d) { return d.character; });

		let circle = g
			.selectAll("node")
			.data(this.props.nodes)
			.enter()
			.append("circle")
			.attr("r", function(d) { return d.influence / 2 > 5 ? d.influence / 2 : 5; })
			.attr("fill", function(d) { return c10(d.zone * 10); })
			.attr("fill-opacity", 0.5)
			.call(dragAct);

		simulation.on("tick", d => {
			tick(d)
		});

		function tick(d) {
			circle.attr("r", d => d.influence)
				.attr("cx", d => d.x)
				.attr("cy", d => d.y);

			label.attr("dx", d => d.x)
				.attr("dy", d => d.y);

			link.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });
		}

		simulation.alpha(1).restart();
	}

	render(){
		return (
		<svg ref={node => this.node = node}>
		</svg>);
	}
}