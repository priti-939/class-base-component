import React, { Component } from 'react';

class Profile extends Component{
    state={
        name:'',
        address:'',
        phoneno:'',

    }

    handleChange  = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })

    }

    componentDidMount(){
    }
    handleAddEmp = () => {
        console.log(this.state )
    }
    render(){
        const { name, address, phoneno} = this.state;
        return(
            <div>
                <h1>Add Employee Profile</h1>
                <form>
                    <lable>Name</lable>
                    <input value={name} onChange={(e) =>this.handleAddEmp(e)}/>
                    <lable>Address</lable>
                    <input value={address} onChange={(e) =>this.handleAddEmp(e)}/>
                    <lable>Phone no</lable>
                    <input value={phoneno} onChange={(e) =>this.handleAddEmp(e)}/>
                    <button onClick={this.handleAddEmp}>Add Employee</button>
                </form>
            </div>

        )
    }
};

export default Profile;