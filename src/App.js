import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import IosSearch from 'react-ionicons/lib/IosSearch'
import IosMenu from 'react-ionicons/lib/IosMenu'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import IosClose from 'react-ionicons/lib/IosClose'
import IosSync from 'react-ionicons/lib/IosSync'


import bgimg from './dark.png'
import bgimg2 from './dark2.png'
import bgimginvert from './darkinvert.png'

import Typist from 'react-typist';


const Style = styled.div` 
  display: flex; flex-direction: column;
  margin: auto;
  height: auto;
  width: auto;
  padding: 0px;

  .row {
    display: flex; flex-direction: row; 
    width: 100%;
  }

  .content {
    display: flex; flex-direction: column;
    width: 100%;
    background-color: #ECECEC;
    background-image: linear-gradient(to bottom, transparent 20%, #E2E2E2 50%);
    /*background-image: url(${bgimginvert});*/
    background-size: cover;
    background-position: left bottom;
    min-height: 100vh;
    height: 100%;

    .menubtn {
      position: absolute;
      width: 35px; height: 35px;
      padding: 5px;
      border: 1px solid black;
      border-radius: 100%;
      margin: 1rem auto auto 1rem;
      /*background-color: black;*/
    }
  }

  .loadingicon {
      animation: rotation 2s infinite linear;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
`;

const SearchContainer = styled.div`
  background-color: transparent;
  height: 92vh;
  width: auto;
  margin: 0px auto 0px auto;
  padding-top: 1rem;


  @media only screen and (max-width: 600px) {
    padding-top: 5rem;
  }

  .topbar {
    width: 100%;
    display: flex; flex-direction: row;
    margin: auto;
    margin-bottom: 0px;
    height: 20px;
    input {
      width: 100%;
      background-image: linear-gradient(to bottom, transparent 50%, #2C2C2C 100%);
      background-color: transparent;
      border: 0.5px solid white; 
      outline: none;
      color: white;
      text-indent: 4px;
    }
    .searchimg {
      padding-left: 5px;
      width: 20px;    
      height: 20px;  
    }   
  }

  .scroll-container {
    -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
    margin-top: 0.8rem;
    height: 100%;
    width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none; 
    }
    
    .group {
      font-family: 'Oxygen Mono', monospace;
      margin: 0px 0rem auto 0rem; padding: 0px;
      text-align: center;
      line-height: 1.1rem;
      &:last-child {
        padding-bottom: 10vh;
      }
    }

    .item {
      cursor: pointer;
      margin: 0px; padding: 0px;
      margin-bottom: 0.2rem;
      background-color: #212121;
      height: 2.2rem;
      h1 {
        margin: 0px; padding: 0px;
        margin-left: 0.3rem;
        padding-top: 0.1rem;
        font-size: 1rem;
        font-weight: light;
        text-align: left;
        line-height: auto;
      }
      span {
        font-family: 'Oxygen', monospace;
        text-align: right;
        margin: 0 0.3rem 0 auto;
        float: right;           
      }
      h2 {
        margin: 0px; padding: 0px;
        margin-left: 0.3rem;
        font-size: 0.7rem;
        font-weight: lighter;
        text-align: left;
        line-height: 1.2rem;      
      }
    }
    .active {
      background-color: #DE0D0D;
    }
  }
`;

const SelectedMissionContainer = styled.div`
  height: 100%;
  display: flex; flex-direction: column;
  margin: 1rem auto auto auto;
  color: black;
  min-width: 300px;
  max-width: 600px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    width: auto;
  }

  .row {
    display: flex; flex-direction: row; 
    flex-wrap: wrap;
    width: 100%;
  }

  .selected-mission-label {
    display: flex;
    height: auto;
    width: 200px;
    h1 {
      justify-content: center;
      height: auto;
      margin: auto auto auto auto;
      /*margin-top: 4rem;*/
      text-align: center;
    }
    @media only screen and (max-width: 800px) {
      width: 100%;
      h1 {
        margin-top: auto; margin-bottom: 1rem;
      }
    }
  }


  ul {
    padding: 0px; 
    margin: auto;
    min-width: 300px;
    max-width: 320px;
    width: 100%;
  }

  li {
    font-size: 0.8rem;
    margin: 0px; padding: 0px;
    list-style-type: none;
    text-align: left;
    margin-bottom: 0.2rem;
      font-family: 'Oxygen Mono', monospace;

    span {
      margin: 0 0 0 auto;
      float: right;

    }
  }

  p {
    margin: 1rem auto 0rem auto;
    text-align: center;
    margin-bottom: 4rem;
  }

  a {
    margin: auto; padding: 0px;
    text-align: center;
  }
`;

const SelectedVehicleContainer = styled.div`
  height: auto;
  border-bottom: 0.5px solid black;
  display: flex; 
  flex-direction: column;
  margin: auto auto auto auto;
  color: black;
  .row {
    display: flex; flex-direction: row;
    flex-wrap: wrap;
  }

  max-width: 600px;
  width: auto;

  @media only screen and (max-width: 800px) {
    
  }

  .selected-vehicle-label {
    height: auto; width: 200px;
    margin: auto;
    margin-bottom: 2rem;
    margin-top: 1rem;

    @media only screen and (max-width: 800px) {
      margin-top: 3rem;
    }
  }

  .selected-vehicle-missions {
    margin: auto;
    min-height: 40px;
    max-height: 150px;
    height: auto;
    min-width: 300px;
    width: auto;
    margin: auto 1rem 0.5rem auto;
    width: 100%;
    /*border-left: 0.5px solid black;*/
    border-right: 0.5px solid black;
    overflow: scroll;
    cursor: pointer;
    &::-webkit-scrollbar {
      display: none; 
    }

    .mission-result {
      height: 2rem;
      margin-top: 12px;
      margin-bottom: 12px;
      margin-left: 12px;
      z-index: 2;
      border-left: 4px solid gray;
      

      h5 {
        font-size: 1rem;
        font-weight: lighter;
        margin: auto;
        width: 100%;
        line-height: 2rem;
        text-align: left;
        text-indent: 5px;
        color: black;

        span {
          font-size: 1rem;
          line-height: 2rem;
          text-align: right;
          float: right;
          font-weight: lighter;
          padding-right: 5px;
        }
      }


      transition: all 0.2s;

      &:nth-child(1) {
        margin-top: 1px;
        border-left: 4px solid #DE0D0D;
        
      }
      &:nth-child(2) {
        border-left: 4px solid #081B51; 
      }
      &:nth-child(3) {
        border-left: 4px solid #1E1E1E;
      }
      &:nth-child(4) {
        border-left: 4px solid #3E3E3E;
      }

      &:hover {
        background-color: #2C2C2C;
        h5 {
          color: white;
        }
      }

    }
      .active {
        background-color: #3A3A3A;
        h5 {
          color: white;
        }
      }
  }

  h1 {
    margin: 1.3rem auto auto 0px;
    height: 4rem;
    font-family: 'Oxygen Mono', monospace;
    font-weight: lighter;
    font-size: 4rem;
    font-size: ${props => props.vehiclelabelsize ? props.vehiclelabelsize : '4rem'};
    position: relative;
    text-align: center;
    width: 10rem;
    z-index: 5;
    font-weight: bold;

    span {
      text-align: center;
      left: 6.5%;
      font-size: 3rem;
      position: absolute;
      bottom: 40%;
      z-index: -5;
      font-weight: bold;
      color: #AAAAAA;
    }
  }

  h2 {
    text-align: center;
    left: 20%;
    font-size: 2.2rem;
    position: absolute;
    bottom: 40%;
    z-index: -5;
    font-weight: bold;
    color: #323232;
  }

  h3 {
    font-size: 0.8rem;
    height: auto;
    width: fit-content;
    margin: auto 8px 8px auto;
    text-align: bottom;
    font-weight: lighter;
    span {
      color: gray;
    }
  }

  p {
    margin: auto;
    font-size: 0.7rem;
    width: 40%;
    text-align: center;
  }

`;

const SideBar = styled.div`
  width: 20rem;
  height: auto;
  //background-color: #131313;
  background-image: url(${bgimg2});
  background-size: cover;
  display: ${props => props.toggled ? 'flex' : 'none'};
  position: relative;
  z-index: 255;
  box-sizing: border-box;
  top: 0; left: 0; right: 0;

  .menubtn {
    display: none;
    position: absolute;
    width: 35px; height: 35px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 100%;
    margin: 1rem auto auto 1rem;
  }

  @media only screen and (max-width: 600px) {
    position: fixed; 
    height: 100vh;
    width: 14rem;
    top: 0;
    .menubtn {
      display: flex;   
    }
  }
`;

const TopBar = styled.div`
  position: relative;
  width: 100%;
  height: 3.5rem;

  display: flex;
  padding-bottom: 0.3rem;
  background-image: url(${bgimg});
  background-size: cover;

  .img {
    display: ${props => props.toggled ? 'none' : 'flex'};
    width: 25px; height: 25px;
    border: 0.5px solid white;
    margin: 1rem auto auto 1rem;
  }
`;

const SiteLogo = styled.div`
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

const Blocks = (props) => {
  const BlockStyle = styled.div`
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
      height: 10px; width: 10px; background-color: black;
      margin: 2px;
    }
    span {
      font-size: 0.5rem;
      text-indent: 0.1rem;
    }
  `;

  const GetBlocks = (returnamount) => {
  let blockarray = [];

  if (returnamount) { 
    for (let i = 0; i < returnamount; i++) {
      blockarray.push(<li></li>)
    }
  }

  return(blockarray)
  }

  return (
    <BlockStyle>
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
    </BlockStyle>
  )
}

const AnimatedTypingComponent = (props) => {
  return(
  <Typist avgTypingDelay={150}>
    {props.children}
  </Typist>
  )
};

const App = () => {
  const [allLaunches, setAllLaunches] = useState([]);
  const [allCores, setAllCores] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([0]);
  const [filteredCores, setFilteredCores] = useState([0]);
  const [search, setSearch] = useState('');
  const [searchFilterLaunches, setSearchFilterLaunches] = useState([]);
  const [displayVehicles] = useState(true);
  const [listofVehicles, setListOfVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('00000');
  const [selectedMission, setSelectedMission] = useState('00000');
  const [sideBarToggled, setSideBarToggled] = useState(true);

  const SearchLaunches = (searchstring, myLaunches) => {
    let tempLaunches = myLaunches.filter((result)=>{return(
      result.mission_name.toLowerCase().includes(searchstring.toLowerCase()) ||
      result.core_serial.toLowerCase().includes(searchstring.toLowerCase())
    )})
    setSearchFilterLaunches(tempLaunches)
    //UpdateSelectedVehicle(tempLaunches[0] ? tempLaunches[0] : '00000')
    console.log(tempLaunches);
  }

  const SearchCores = (searchstring, myCores) => {
    let tempLaunches = myCores.filter((result)=>{return(
      result.core_serial.toLowerCase().includes(searchstring.toLowerCase())
    )})

    return(tempLaunches[0] ? tempLaunches[0] : '00000')

  }


  const filterLaunches = (targetLaunch, myLaunches) => {
    setAllLaunches(myLaunches);
    setFilteredLaunches(myLaunches.filter((result)=>{return(result.core_serial.toLowerCase().includes(targetLaunch.toLowerCase()) )}))
    let selectedMissions = myLaunches.filter((result)=>{return(result.core_serial.toLowerCase().includes(targetLaunch.toLowerCase()))})   
    let mySelectedMission = selectedMissions[selectedMissions.length - 1];
    //setSelectedMission(mySelectedMission ? mySelectedMission : '00000')

    SearchLaunches('', myLaunches);

  }

  const filterCores = (targetCore, myCores) => {
    setAllCores(myCores);
    let tempCores = myCores.filter((result)=>{return(
      result.core_serial.toLowerCase().includes(targetCore.toLowerCase()) ||
      result.missions.filter((result2)=>{
        if (result2.name.toLowerCase().includes(targetCore.toLowerCase())) {
         return(result2)
        }
      })[0]
    )})
    setFilteredCores(tempCores)
    UpdateSelectedVehicle(tempCores[0] ? tempCores[0] : '00000')
  }



  const UpdateSelectedVehicle = (result) => {
    setSelectedVehicle(result);
    filterLaunches(result.core_serial, allLaunches)
  }

  const UpdateSelectedMission = (target) => {
    setSelectedMission(allLaunches.filter((result)=>{return(result.mission_name.toLowerCase().includes(target.toLowerCase()))})[0]);
  }

  useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/cores')
    .then(res => res.json())
    .then((result) => {        
          filterCores(search, result.map((core, i) => {
            return(
              {
              'core_serial' : core.core_serial,
              'status' : core.status,
              'details' : core.details,
              'block' : core.block || 'X',
              'reuse_count' : core.reuse_count,
              'rtls_attempts' : core.rtls_attempts,
              'asds_attempts': core.asds_attempts,
              'missions': core.missions
              }
            )
          }
      ) )
    }) 

    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then((result) => {        
          filterLaunches(selectedVehicle, result.map((launch, i) => {
            return(
              {
              'mission_name' : launch.mission_name,
              'flight_number' : launch.flight_number,
              'rocket_name' : launch.rocket.rocket_name,
              'launch_success' : launch.upcoming ? 'not yet launched' : launch.launch_success ? 'SUCCESS' : 'FAILURE',
              'core_serial' : launch.rocket.first_stage.cores[0].core_serial || 'NO CORE',
              'was_reused' : launch.rocket.first_stage.cores[0].reused ? 'TRUE' : 'FALSE',
              'fairing_recovered' : launch.rocket.fairings !== null ? launch.rocket.fairings.recovery_attempt ? launch.rocket.fairings.recovered ? 'SUCCESS' : 'FAILURE' : 'NO ATTEMPT' : 'N/A',
              'mission_patch' : launch.links.mission_patch_small,
              'details' : launch.details,
              'launch_date' : launch.launch_date_utc.split('T')[0],
              'launch_site' : launch.launch_site.site_name,
              'landing_success' : launch.upcoming ? 'N/A' : launch.rocket.first_stage.cores[0].land_success ? 'SUCCESS' : 'FAILURE',
              'video_link' : launch.links.video_link,
              'core_flights' : launch.rocket.first_stage.cores[0].flight
              }
            )
          }))
    })
  }, [])

  return(
    <Style>

      <div className='row'>

      <SideBar toggled={sideBarToggled}>   
        <IosClose className='menubtn' color='white' onClick={()=>{ setSideBarToggled(!sideBarToggled)}}/>

        <SearchContainer>
          <div className='topbar'>
            <input onChange={(e)=>{ setSearch(e.target.value); }}
              value={search} 
              onKeyDown={(e)=>{
                if(e.keyCode == 13){
                  SearchLaunches(search, allLaunches)
                }
                }}
             ></input>
            <IosSearch className='searchimg' onClick={()=>{ SearchLaunches(search, allLaunches) }} color='white'/>
          </div>
          <div className='scroll-container'>
            <div className='group'>
            {!searchFilterLaunches.length > 0 ? 
              <IosSync color='white' className='loadingicon' /> : null
            }
            {searchFilterLaunches.map((result, i) => { 
            return(
              <div className={result.mission_name === selectedMission.mission_name ? 'item active' : 'item'} onClick={()=>{ 
                  UpdateSelectedVehicle(SearchCores(result.core_serial, allCores));
                  setSelectedMission(result);
                }}>
                <h1>
                {result.mission_name ? result.mission_name.length > 10 ? result.mission_name.slice(0, -result.mission_name.length + 10) : result.mission_name : null} 
                <span>
                {result.core_serial}
                </span>
                </h1>
                <h2>
                  {result.launch_date}
                </h2>
              </div>
              )
            })}
            </div>
          </div>
        </SearchContainer>
      </SideBar>


      <div className='content'>

      <IosMenu className='menubtn' color='black' onClick={()=>{ setSideBarToggled(!sideBarToggled)}}/>

      <AnimatedTypingComponent>              
      <SiteLogo>       
          <h1>TMWY</h1>
          <h2>Take</h2>
          <h3>Me</h3>
          <h4>With</h4>
          <h5>You</h5>
      </SiteLogo>
      </AnimatedTypingComponent>

      <SelectedVehicleContainer vehiclelabelsize={selectedVehicle.core_serial ? selectedVehicle.core_serial.length > 5 ? '2.5rem' : '4rem' : '4rem'}>       
        <div className='row'>
          <div className='selected-vehicle-label' onClick={()=>{console.log(allCores)}}>
            <h1>{selectedVehicle.core_serial || '00000'}
               <span>BLOCK{selectedVehicle.block ? selectedVehicle.block : 0}</span> 
            </h1>        
          </div>

          <div className='selected-vehicle-missions'>
          {selectedVehicle.missions ? selectedVehicle.missions.map((result, i) => { 
          return(
            <div            
              className={result.name === selectedMission.mission_name ? 'mission-result active' : 'mission-result'} 
              onClick={()=>{UpdateSelectedMission(result.name)}}>
              <h5>
              {result.name ? result.name.length > 22 ? result.name.slice(0, -result.name.length + 22) + '...' : result.name : null }
              {/* <span>{result.launch_date ? result.launch_date.split('T')[0] : '00/00/00'}</span> */}
              </h5>
            </div>
            )
          }) : null}
          </div>
        </div>   

        <p>{selectedVehicle.details}</p>

        <div className='row'>   
        <Blocks
          amount0={selectedVehicle.reuse_count ? selectedVehicle.reuse_count : 0}
          amount1={selectedVehicle.rtls_attempts ? selectedVehicle.rtls_attempts : 0} 
          amount2={selectedVehicle.asds_attempts ? selectedVehicle.asds_attempts : 0} 

        />
        <h3><span>status: </span>{selectedVehicle.status || 'UNKNOWN'}</h3>    
        </div>
      </SelectedVehicleContainer>

      <SelectedMissionContainer>
        
        <div className='row'>

        <div className='selected-mission-label'>
          <h1>{selectedMission.mission_name || '00000'}
            {/* <span>FLIGHT{selectedMission.flight_number ? selectedMission.flight_number : 0}</span>  */}
          </h1>        
        </div>

        <ul>
          <li>Launch Date<span>{selectedMission.launch_date ? selectedMission.launch_date.split('T')[0] : '00/00/00'}</span></li>
          <li>Location<span>{selectedMission.launch_site}</span></li>
          <li>Launch Status<span>{selectedMission.launch_success}</span></li>
          <li>Fairing Recovery<span>{selectedMission.fairing_recovered}</span></li>
          <li>Landing Status<span>{selectedMission.landing_success}</span></li>
          <li>Flight #<span>{selectedMission.flight_number}</span></li>
          <li>Core Flights<span>{selectedMission.core_flights}</span></li>

        </ul>
        
        </div>

         <p>{selectedMission.details}</p> 

        {selectedMission.video_link ? 
        <a href={selectedMission.video_link} target="_blank">
          <LogoYoutube color='black'/>
        </a> : null }


      </SelectedMissionContainer>
      </div>

      </div>
    </Style>
  )
}

export default App;
