import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
	height: 4rem;
	width: 100%;
	padding-bottom: 2rem;
	margin: auto;
	padding-right: -1rem;


	  min-width: 300px;
  max-width: 600px;
  width: 90%;
	.line {
		width: 100%;
		height: 2px;
		background-color: gray;
		margin-top: 4px;
	}
	.points {
		position: relative;
		top: -4px;
/*		display: flex;
		flex-direction: row; flex-wrap: none;
		width: auto;*/
	}
`;

const PointStyle = styled.div`
		margin: auto auto auto ${props => props.location + '%'};
		line-height: 0px;
		height: ${props => props ? props.size ? props.size * 10 + 'px' : '10px' : '10px'};	
		width: 2px; 
/*		width: 10px; */
/*		border-radius: 100%;*/
		background-color: ${props => props.color === 'black' ? 'rgba(10,10,10,1)' : props.color === 'red' ? 'red' : null};
		opacity: ${props => props.color === 'red' ? 1 : 0.5};
		/*transform: scale(${props => props.color==='red' ? 1.5 : null});*/
		margin-top: -${props => props ? props.size ? (props.size * 10) + 'px' : '10px' : '10px'};	

		h1 {
			display: none;
		}

		&:hover {
			cursor: pointer;
			/*transform: scale(2);*/
			h1 {
				display: flex; flex-wrap: nowrap;
				white-space: nowrap;
				position: absolute;
				margin-right: 10px;
				
				display: flex;
/*				margin-top: -40px;*/
				line-height: 1rem;
				color: white;
				font-size: 0.8rem;
				background-color: black;
				opacity: 1;
				width: auto;
				height: 1.2rem;
				
				padding: 0.2rem;
				top: 0.5rem;
				z-index: 333;
			}
		}
`;

const Point = (props) => {
	console.log(props.size);
	return (
		<PointStyle location={props.location} color={props.color} size={props.size}>
			<h1>{props.name}</h1>
		</PointStyle>
	)
}

const Timeline = (props) => {

	const GetPercent = (date) => {
		let start = new Date(props.launches[0].launch_date);
		let end = new Date(props.launches[props.launches.length -1].launch_date);
		let q = Math.abs(date-start);
		let d = Math.abs(end-start);
		return(
			//Math.round((q/d)*100)
			 (q/d)*100
		)
	}

	const percent_points = props.launches.map((r)=>{
		let color = r.mission_name === props.selectedMission.mission_name ? 'red' : 'black';
		let newdate = new Date(r.launch_date)
		let name = r.mission_name || 'noname'
		let size = r.core_flights || 1;
		return([GetPercent(newdate), color, name, size])
	});

	return(
		<Style>
			<div className='points'>
			{percent_points.map((r)=>{
				return(
					<Point location={r[0]}
						color={r[1]}
						name={r[2]}
						size={r[3]}
					/>
					)
			})}
				</div>
		
		</Style>
	)
}

export default Timeline;
