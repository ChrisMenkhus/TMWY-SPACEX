import React from 'react';
import styled from 'styled-components';

const TimelineStyle = styled.div`
	width: 100%; height: 150px;
	min-width: 280px;
	max-width: 700px;
	margin: auto;
	position: relative;
	margin-bottom: 3rem; margin-top: 1rem;
	margin: 1rem 1rem 3rem 1rem;

`;

const PointStyle = styled.div`
	position: absolute;
	width: 0.5%; height: ${props => props.size * 15 + '%'};
	background-color: ${props => props.color};
	left: ${props => props.location + '%'};
	bottom: 0;

	cursor: pointer;

`;

const Point = (props) => {
	return (
		<PointStyle location={props.location} color={props.color} size={props.size}
			onClick={()=>{props.UpdateSelectedVehicle( props.result )}}
		 />
	)
}

const Timeline = (props) => {

	const GetPercent = (i) => {
		let start = 0;
		let end = props.cores.length;
		let q = Math.abs(i-start);
		let d = Math.abs(end-start);

		return(
			//Math.round((q/d)*100)
			 // i * 3.6
			q/d * 100 
		)
	}

	return(
		<TimelineStyle>
				{props.cores.map((r, i) => {
					return(
					<Point location={GetPercent(i)}
						color={r.core_serial === props.selectedVehicle.core_serial ? 'red' : props.darkModeEnabled ? 'white' : 'black'}
						size={r.reuse_count + 1 || 1}
						result={r}
						UpdateSelectedVehicle={props.UpdateSelectedVehicle}
						key={r.core_serial + '.' + r.reuse_count}
						></Point>
				)})}	
		</TimelineStyle>
	)
}

export default Timeline;
