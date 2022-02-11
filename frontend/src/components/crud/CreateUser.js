import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import React from 'react';
import './createUser.scss';

export default function CreateUser() {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4300/backend/index', inputs);
        console.log(inputs);
    }

    return (
        
        <div className= "createTab">
        <div className="createTitle">

            <h1>Create User</h1>
            
        </div>
            <form onSubmit={handleSubmit}>
                    <table className="inputTable">
                        <tbody>
                            <tr>
                            <th><label>Name: </label></th>
                            <td>
                            <input type="text" name="name" onChange={handleChange} />   
                            </td>
                            </tr>

                             <tr>    
                             <th><label>Email: </label></th>
                             <td>    
                             <input type="text" name="email" onChange={handleChange}/>
                             </td>
                             </tr>

                              <tr>
                              <th><label>Mobile: </label></th>
                              <td>
                              <input type="text" name="mobile" onChange={handleChange}/>
                              </td>
                              </tr>

                                <tr>
                                <td colSpan="2" align="right">
                                <button>Save</button>
                                </td>
                                </tr>

                                
                        </tbody>
                    </table>               
            </form>
        </div>

        


    )
}