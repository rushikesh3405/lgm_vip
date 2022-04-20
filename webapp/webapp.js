import React, { useEffect, useState } from 'react';

const App=()=>{

const [users, setUsersData] = useState([]);

const loadUsers= async()=>{
  //fetching the data
  const response= await fetch("https://reqres.in/api/users?page=1")

  //Convert the data to json format
  const api_data= await response.json()

  //set the data
  setUsersData(api_data.data)
 
}
  return(
    <>
    <div className="App">
     <div className="container">
            <header className="coffee-header">
                <div className="div-logo">
                    <span className="logo-text">COFFEE SHOP</span>
                </div>
                <nav className="coffee-nav">
                    <button className='get' onClick={loadUsers} >Get Users</button>
                </nav>
            </header>
      </div>
        <h2>Users:</h2>
        <div >
          {
            //map the data
            users.map((data,key)=>{
              return(
                <div className="card1" key={key}>
                    <img className="avatar1"src={data.avatar}></img>
                    <h1>First Name:{data.first_name}</h1>
                    <h1>Last Name:{data.last_name}</h1>
                    <h1>Email:{data.email}</h1>
                </div>
                )

              })
            }  
          </div></div></>
  )
            }
export default App;