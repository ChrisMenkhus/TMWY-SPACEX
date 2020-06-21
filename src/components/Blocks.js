import React from 'react';
import styled from 'styled-components';

const Blocks = (props) => {
 const BlocksStyle = styled.div`
    margin-bottom: 1rem;
    margin-left: 0.8rem;
    ul {
      padding: 0px;
      margin: 0px;
      min-height: 0px;
      height: auto;
      list-style-type: none;
      display: flex; flex-direction: row;
    }
    li {
      height: 10px; width: 10px; 
      margin: 2px;
      border-radius: 100%;
    }
    span {
      font-size: 0.5rem;
      text-indent: 0.1rem;
    }
  `;

  const Block = (props) => {
  	let n = props.n;
  	const BlockStyle = styled.li`
  		background-color: ${props => props.color};
  	`;
  	return(<BlockStyle color={n === 0 ? '#320404' : n > 3 ? '#3E3E3E' : n > 2 ? '#081B51' : n > 1 ? '#1E1E1E' : n > 0 ? '#3E3E3E' : 'green' }/>)
  }

  const GetBlocks = (returnamount) => {
  let blockarray = [];
  if (returnamount) { 
    for (let i = 0; i < returnamount; i++) {
      blockarray.push(<Block n={i}/>)
    }
  }
  	return(blockarray)
  }

  return (
    <BlocksStyle>
      <ul>
      {GetBlocks(props.amount0)}
      {props.amount0 > 0 ? <span>*booster reflights</span> : null}
      </ul>
      <ul>
      {GetBlocks(props.amount1)}
      {props.amount1 > 0 ? <span>*launch site landing attempts</span> : null}
      </ul>
      <ul>
      {GetBlocks(props.amount2)}
      {props.amount2 > 0 ? <span>*drone ship landing attempts</span> : null}
      </ul>
    </BlocksStyle>
  )
}



export default Blocks;
