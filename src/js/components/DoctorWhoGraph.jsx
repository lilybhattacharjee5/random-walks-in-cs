import React from 'react';
import * as d3 from 'd3';
import scale from 'd3-scale';
//import layout from 'd3-layout';
import rd3 from 'react-d3-library';

function DoctorWhoGraph({ props = {doctor: 1, season: "None", episode: "None"} }) {
	let hasError = throwError(props.doctor, props.season, props.episode);
	if (hasError) {
		return(
			<div>
				<p>
					There is an error in your inputs.
				</p>
			</div>
		);
	} else {
		return(createGraph(props.doctor, props.season, props.episode));
	}
}

function throwError(doctor, season, episode) {
	if ((doctor !== "None" && season === "None" && episode === "None") || (doctor === "None" && season !== "None" && episode !== "None")) {
		return false;
	} else {
		return true;
	}
}

function createGraph(doctor, season, episode) {
	if (doctor === "None") {
		return(createEpGraph(season, episode));
	} else {
		return(createDoctorGraph(doctor));
	}
}

function createDoctorGraph(doctor) {
	let doctorLink = "doc";
	//return(genD3(doctorLink));
	//return <BarChart />
	return <DWD3 />;
}

function createEpGraph(season, episode) {
	let epLink = "ep";
	return(<div></div>);
}

class DWD3 extends React.Component {
	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		var margin = {
			top: 20,
			bottom: 50,
			right: 30,
			left: 50
		};
		var width = 1500 - margin.left - margin.right;
		var height = 700 - margin.top - margin.bottom;
		var c10 = d3.scaleOrdinal(d3.schemeCategory10);
		var svgElement = d3.select("body")
					.append("svg").attr({"width": width + margin.left + margin.right, "height": height + margin.top + margin.bottom})
					//.append("g")
					//.attr("transform", "translate("+margin.left+", "+margin.top+")");
		let data = require("./doctor_1");
		var nodes = data.nodes;
		var links = data.links;
		console.log(svgElement);
		/*var force = d3.layout.force()
					.size([width, height])
					.nodes(nodes)
					.links(links)
					.gravity(0.1)
					.charge(-200)
					.linkDistance(400);*/
var node = svgElement.selectAll(".node")
                                        .data(nodes)
                                        .enter()
                                        .append("g")
                                        .attr("class", "node")
                                        //.call(force.drag);
var circle = node.append("circle")
                                                .attr("r", function(d){ return d.influence/2>5 ? d.influence/2 : 5; })
                                                .attr("fill", function(d){ return c10(d.zone*10); });
		/*d3.json("../doctors/doctor_1.txt", function(dataset) {
			var nodes = dataset.nodes;
			var links = dataset.links;
			console.log(dataset);
			//return(<p>hi</p>);
		});*/
	}

	render(){
    		return <p>hi</p>;
  	}
}

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    let w = 500;
    let h = 300; 
    const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}

export default DoctorWhoGraph;
