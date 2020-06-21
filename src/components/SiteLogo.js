import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    position: absolute;
    top: 0; right: 0;
    display: flex; flex-direction: column;
    margin: 0.5rem 0.8rem 1rem auto; padding: 0px;

    h1 {
      font-size: 2.25rem; padding: 0px;
      margin: 0 0 0 auto;
      line-height: 2rem;  
      font-weight: bolder;
      color: rgba(0,0,0,1);
    }
    h2 {
      font-size: 2.1rem; padding: 0px;
      margin: 0rem 0 0 auto;
      line-height: 1.7rem;
      color: rgba(0,0,0,0.8);
      font-weight: bold;
    }
    h3 {
      font-size: 1.8rem; padding: 0px;
      margin: 0 0 0 auto;
      line-height: 1.5rem;
      color: rgba(0,0,0,0.6);
      font-weight: light;
    }
    h4 {
      font-size: 1rem; padding: 0px;
      margin: 0 0 0 auto;
      line-height: 1rem;
      color: rgba(0,0,0,0.38);
      font-weight: lighter;
    }
    h5 {
      font-size: 0.7rem; padding: 0px;
      margin: 0 0 0 auto;
      line-height: 0.7rem;
      color: rgba(0,0,0,0.25); 
      font-weight: lighter;     
    }
`


const SiteLogo = () => {
	return(
	<Style>
		<h1>TMWY</h1>
        <h2>Take</h2>
        <h3>Me</h3>
        <h4>With</h4>
        <h5>You</h5>
  </Style>
	)
}

export default SiteLogo;