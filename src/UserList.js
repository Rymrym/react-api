import axios from 'axios';
import React, {useState, useEffect} from 'react'

const UserList = ()=>{
const [userList, setUserList] = useState([])
        

useEffect(()=>{
    axios({
        method : 'GET',
        url: `https://jsonplaceholder.typicode.com/users`}).then(res=> {
        setUserList(res.data)
            })}, [])
       
    return (
        <>
       {userList.map(user=>{<h1>{user.id}</h1>
       console.log(user)
      
})}
        </>
    )
}

export default UserList;