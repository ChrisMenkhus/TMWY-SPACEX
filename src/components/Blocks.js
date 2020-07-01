import React from 'react';
import styled from 'styled-components';

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

const BlockStyle = styled.li`
    background-color: ${props => props.darkModeEnabled ? 'white' : 'black'};
  `;

const Blocks = (props) => {

  const darkMode = props.darkModeEnabled;

  const Block = (props) => {
  	return(<BlockStyle darkModeEnabled={darkMode} />)
  }

  const GetBlocks = (returnamount) => {
  let blockarray = [];
  if (returnamount) { 
    for (let i = 0; i < returnamount; i++) {
      blockarray.push(<Block n={i} key={i}/>)
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
