import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import './editUser.scss';


export default function EditUser() {
    const testData = {
        id: "10",
        name: "me",
        email:  "t@hotmail.com",
        mobile: "3333333333",
        updated_at: "1111-11-11",
        created_at: "2222-22-22"
     };

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:4300/backend/index').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const confirmEdit = (id) => {
        
        testData.id = id;
        axios.put(`http://localhost:4300/backend/index/${testData.id}`, testData)    
        .then(function(response){
            console.log(response.data);
            console.log(testData);
            getUsers();
        });

    }

    const editUser = (id, name) => {
        testData.id = id;
        testData.name = name;
        console.log(testData.name);
        console.log(testData.id);
      
    }
    return (


        <div className = "editUsersArea">
            <h1>Edit Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                            
                                <button onClick={() => confirmEdit(user.id)}>Edit</button>
                            </td>
                            


                        </tr>
                        


                        
                    )}


                    
                </tbody>
           
           </table>

           <table className="inputTable">
                        <thead className = "tableHeader">
                       <td>Editing: </td> 
                        </thead>
                        <tbody>
                            <tr>
                            <th><label>Name: </label></th>
                            <td>
                            <input type="text" name="name" />   
                            </td>
                            </tr>

                             <tr>    
                             <th><label>Email: </label></th>
                             <td>    
                             <input type="text" name="email" />
                             </td>
                             </tr>

                              <tr>
                              <th><label>Mobile: </label></th>
                              <td>
                              <input type="text" name="mobile" />
                              </td>
                              </tr>

                                <tr>
                                <td colSpan="2" align="right">
                                </td>
                                </tr>

                                
                        </tbody>
                    </table> 
          

        </div>
    )
}