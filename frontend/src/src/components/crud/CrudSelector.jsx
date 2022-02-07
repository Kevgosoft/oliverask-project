import React, { Component } from 'react';
import { CreateUser } from '..';
import { ListUser } from '..';
import { EditUser } from '..';
import './crudSelector.scss';

export default class CrudSelector extends Component {

    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.exitCreateClick = this.exitCreateClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.exitEditClick = this.exitEditClick.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
        this.exitListClick = this.exitListClick.bind(this);
        this.state = {isInCreate: false};
        this.state = {isInEdit: false};
        this.state = {isInList: false};
    }

    handleCreateClick() {
        this.setState({isInCreate: true});
    }
    exitCreateClick() {
        this.setState({isInCreate: false})
    }
    handleEditClick() {
        this.setState({isInEdit: true});
    }
    exitEditClick() {
        this.setState({isInEdit: false})
    }
    handleListClick() {
        this.setState({isInList: true});
    }
    exitListClick() {
        this.setState({isInList: false})
    }
   
    render() {
        const isInCreate = this.state.isInCreate;
        const isInEdit = this.state.isInEdit;
        const isInList = this.state.isInList;
        let button;
        if (isInCreate) {
            button = <CreateUser />;
        } else if (isInEdit) {
            button = <EditUser />
        } else if (isInList) {
            button = <ListUser />
        }
        
   
        return (
            
            <div className="crudSelect">
                <h1>Choose your CRUD operation</h1>
                <button onClick={this.handleCreateClick}>Create User</button>
                <button onClick={this.exitCreateClick}>Exit Create User</button>
                <button onClick={this.handleEditClick}>Edit User</button>
                <button onClick={this.exitEditClick}>Exit Edit User</button>
                <button onClick={this.handleListClick}>List User</button>
                <button onClick={this.exitListClick}>Exit List User</button>
                {button}           
                
            </div> 
                
        );
    }
}

