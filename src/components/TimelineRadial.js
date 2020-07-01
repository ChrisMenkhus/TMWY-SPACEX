import React from 'react';
import styled from 'styled-components';

const TimelineStyle = styled.div`
	width: 150px; height: 150px;
	border-radius: 100%;
	margin: auto;
	position: relative;
	margin-bottom: 3rem; margin-top: 1rem;

	h1 {
		background-color: rgba(10,10,10,0.1);
		border-radius: 100%;
		padding: 10px;
		z-index: 22;
		text-align: center;
		position: absolute;
  		top: 50%;
  		left: 50%;
  		transform: translate(-50%, -60%);
  		font-size: 0.6rem;
  		font-weight: lighter;
  		span {
  			font-size: 1rem;
  			display: block;
  			text-align: center;
  		}
	}
	
`;

const PointStyle = styled.div`
	width: 75px; height: 150px; 
	transform: rotate(${props => props.location + 'deg'});
	transition: all 1s;
	&:hover {
	}
	position: absolute;
	transform-origin: center right;

	&:after {
		content:'';
		position: absolute;
		right: 0;
		top: 0;
		width: 2px; height: ${props => props.size * 5 + 'px'}; 
		background-color: ${props => props.color};
	}
`;

const Point = (props) => {
	return (
		<PointStyle location={props.location} color={props.color} size={props.size}>

		</PointStyle>
	)
}

const Timeline = (props) => {

	const GetPercent = (i) => {
		let start = 0;
		let end = props.launches.length;
		let q = Math.abs(i-start);
		let d = Math.abs(end-start);

		return(
			//Math.round((q/d)*100)
			 // i * 3.6
			q/d * 100 * 3.6
		)
	}

	return(
		<TimelineStyle>
			<h1>total <br/>core flights<span>{props.selectedMission.reuse_count ? props.selectedMission.reuse_count + 1 : 0}</span></h1>
				{props.launches.map((r, i) => {return(
					<Point location={GetPercent(i)}
						color={r.core_serial === props.selectedMission.core_serial ? 'red' : 'black'}
						size={r.reuse_count + 1 || 1}
						></Point>
				)})}	
		</TimelineStyle>
	)
}

export default Timeline;
