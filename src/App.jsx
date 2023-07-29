import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import SideBar from './Components/Sidebar'
import Table from './Components/Tables'

import './index.css'


// const baseApiUrl = 'http://localhost:6000/api/v1/'

const App = () => {
  const [pageTitle] = useState("ZEDDIES STORE USERS");
  
  const [users, setUsers] = useState([
    {
      id: null,
      name:{
        firstname: null,
        lastname: null
      },
      phone: null,
      email: null,
      address: {
        street: null,
        suit: null,
        city: null
      }
     
    }
  ])

 const getUsers = async() => {
   
    try{
      const response = await fetch('http://localhost:6000/api/v1/getAllUsers')
      const data = await response.json();
      
      setUsers(data)
      console.log(data);
    }catch (error){
      
      console.log(error);
    }
  }
  

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className=' h-[100svh] bg-fuchsia-50 overflow-auto'>
      <Header pageTitle={pageTitle}/>
      <section className=' h-full grid grid-cols-1 md:grid-cols-[15rem_1fr] '>
        <SideBar/>
        <Table users={users} />
      </section>
    </div>
  )
}

export default App