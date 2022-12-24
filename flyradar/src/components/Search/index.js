import React, {useState} from 'react'
import { SearchContainer, SearchWrapper, InputS } from './SearchElements'
import axios from 'axios'

const Search = () => {
  // const arr = [
  //   {id: 'SU 0029', value: "Аэрофлот;Airbus A321;22:00-23:35"},
  //   {id: 2, value: "hello1"}
  // ]
  const arr = {"su 0029": "Аэрофлот;Airbus A321;22:00;23:35"}
  var img = new Image();
  img.src = require('../../images/svg-1.svg')
  const Data = new Date();
  const year = Data.getFullYear();
  const month = Data.getMonth();
  const day = Data.getDate();
  const [show, setShow] = useState(false);
  let state = false;
  let ticket = null;
  const [inputValue, setInputValue] = useState('')
  function setState() {
    state = !state
  }
  const getTicket = () => {
    ticket = <div style={{backgroundColor: "black", color: "black"}}>Hello</div>
  }
  const changeHeight = (element, newHeight) =>  {
    var elem = document.getElementById(element);
    elem.style.height = newHeight;
  }
  return (
    <>
        <SearchContainer>
            <SearchWrapper>
              <InputS>
                <input value={inputValue} placeholder="Type fligth number..." style={{width: "80%", boxSizing: "border-box", 
                height: "50px", borderRadius: "25px", marginBottom: "16px", padding: "0 20px"}}onChange={(e) => setInputValue(e.target.value)}></input>
                {show ? ( 
                <button 
                    id="find"
                    type="button"
                    onClick={async () => {
                      // try {
                      //   await axios({
                      //     url: "https://5409-188-170-75-107.eu.ngrok.io/flight/getNearestFlight",
                      //     headers: {
                      //       "Content-Type": "application/json",
                      //       "Access-Control-Allow-Origin": "*",
                      //       "Access-Control-Allow-Methods": "GET"
                      //     },
                      //     params: {
                      //       flightNumber: inputValue,
                      //     },
                      //     method: "GET",
                      //     data: null
                      //   }).then(({data}) => {
                      //     return data;
                      //   });
                      // } catch (e) {
                      //   console.log("Error")
                      // }
                      setShow(!show)
                    }}
                    style={{ padding: 20, backgroundColor: "rgb(251, 238, 185)", cursor: "pointer", 
                  borderRadius: "50px", height: "50px", width: "100px", color: "#000", justifyContent: "center", 
                  alignItems: "center", display: "inline-flex", marginBottom: "16px", fontSize: "16px"}}
                  >Find!</button>
                ) : (
                  <>
                    {inputValue.toLowerCase() in arr ? (
                      document.getElementById("find").style.display="none",
                      <div key={inputValue.toLowerCase()} id="info" style={{padding: "20px", fontSize: "20px", background: "white", 
                                                    color: "#000", borderRadius: "5px", display: "inline-block", width: "100%", height: "130px", position: "relative"}}>
                        <hr style={{backgroundColor: "grey", height: "2px"}}></hr>
                        <div id="flight" style={{width: "100%", height: "90px", alignItems: "center", justifyContent: "center"}}>
                          <div style={{paddingBottom: "10px", paddingTop: "10px", float: "left", justifyContent: "left", 
                          alignItems: "left", display: "flex", flexDirection: "column", marginRight: "30px", fontSize: "15px"}}>
                            <div style={{float: "left", display: "flex", width: "100%", marginBottom: "12px", clear: "right"}}>
                              {arr[inputValue.toLowerCase()].split(';')[2]}
                            </div>
                            <div style={{border: "solid 2px grey", borderRadius: "6px", padding: "0 5px 0 5px", color: "grey", height: "30px", 
                                        maxWidth: "200px", fontWeight: "bold", display: "flex", alignItems: "center"}}>
                              Запланирован
                            </div>
                          </div>
                          <div style={{paddingBottom: "10px", paddingTop: "10px", float: "left", justifyContent: "left", 
                          alignItems: "left", display: "inline-block", marginRight: "30px", fontSize: "15px"}}>
                            <div style={{float: "left", display: "block", maxWidth: "100px"}}>
                              {inputValue.toUpperCase()}
                            </div>
                            <div style={{borderColor: "grey", color: "grey", height: "30px", maxWidth: "200px", fontWeight: "bold", fontSize: "18px", display: "block"}}>
                              <img src={require("../../images/logo_aeroflot.svg")} style={{maxWidth: "90px"}}></img>
                            </div>
                          </div>
                          <div style={{float: "right", maxWidth: "40px", marginTop: "28px", cursor: "pointer"}} onClick={() => {
                            setState(state);
                            console.log(state);
                            if (state) {
                              changeHeight("info", "310px");
                              document.getElementById("icon").src = require("../../images/icons_up.png");
                              document.getElementById("ticket").style.visibility = "visible"
                            } else {
                              changeHeight("info", "130px");
                              document.getElementById("icon").src = require("../../images/icons_down.png");
                              document.getElementById("ticket").style.visibility = "hidden"
                            };
                            }}>
                            <img id="icon" src={require("../../images/icons_down.png")} style={{maxWidth: "100px"}}></img>
                          </div>
                        </div>
                        <div id="ticket" style={{backgroundColor: "white", color: "white", visibility: "hidden", height: "160px", borderRadius: "5px", boxShadow: "0 0 4px 2px grey"}}>
                          <div style={{height: "30px", backgroundColor: "rgb(93, 98, 102)", borderRadius: "5px 5px 0 0", fontSize: "15px", display: "flex", alignItems: "center", paddingLeft: "5px"}}>
                            Flight status
                          </div>
                          <div style={{maxWidth: "100%"}}>
                              <div style={{float: "left", display: "block", margin: "10px", borderRight: "1px solid rgb(93, 98, 102)", paddingRight: "10px"}}>
                                <div style={{display: "flex", color: "black", fontSize: "15px", marginBottom: "5px"}}>
                                  <p>Санкт-Петербург, {day}.{month}.{year}</p>
                                </div>
                                <div style={{display: "flex", color: "rgb(93, 98, 102)", fontSize: "15px", textAlign: "left", marginBottom: "3px"}}>
                                  <p>Время вылета по <br></br>расписанию</p>
                                </div>
                                <div style={{display: "flex", color: "black", fontSize: "18px"}}>
                                  {arr[inputValue.toLowerCase()].split(';')[2]}
                                </div>
                              </div>
                              <div style={{float: "left", display: "block", margin: "10px", paddingRight: "10px"}}>
                                <div style={{display: "flex", color: "black", fontSize: "15px", marginBottom: "5px"}}>
                                  <p>Москва, {day}.{month}.{year}</p>
                                </div>
                                <div style={{display: "flex", color: "rgb(93, 98, 102)", fontSize: "15px", textAlign: "left", marginBottom: "3px"}}>
                                  <p>Время прилета по <br></br>расписанию</p>
                                </div>
                                <div style={{display: "flex", color: "black", fontSize: "18px"}}>
                                  {arr[inputValue.toLowerCase()].split(';')[3]}
                                </div>
                              </div>
                          </div>
                        </div>
                        <div style={{position: "absolute", bottom: "20px", left: "20px", width: "92%"}}><hr style={{backgroundColor: "grey", height: "2px"}}></hr></div>
                        {/* <div id="img-block" style={{justifyContent: "center", 
                          alignItems: "center", display: "inline-flex"}}>[]
                        {day}.{month}.{year}
                        &ensp;
                        {arr[inputValue].split(';')[2]}-{arr[inputValue].split(';')[3]}
                          &ensp;
                          <img src={require("../../images/logo_aeroflot.svg")} style={{maxWidth: "70px"}}></img>
                          &ensp;
                          {arr[inputValue].split(';')[1]}
                        </div> */}
                      </div>
                    ) : (
                        setShow(!show)
                    )
                    }
                  </>
                  )}
                </InputS>
            </SearchWrapper> 
        </SearchContainer>
    </>
  )
}

export default Search