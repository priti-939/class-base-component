import React, { Component } from 'react';
import ChildComponent from './ChildCompoent';

class Profile extends Component{
    state={
        name:'test student',
        address:'xyz',
        phoneno:867679895,

    }

    // handleChange  = (e) => {
    //     this.setState({
    //         [e.target.name] : [e.target.value]
    //     })

    // }

    componentDidMount(){
    }
    handleAddEmp = () => {
        console.log(this.state )
    }
    render(){
        const { name, address, phoneno} = this.state;
        return(
            <div>
                {/* <h1>Add Employee Profile</h1>
                <form>
                    <lable>Name</lable>
                    <input value={name} onChange={(e) =>this.handleAddEmp(e)}/>
                    <lable>Address</lable>
                    <input value={address} onChange={(e) =>this.handleAddEmp(e)}/>
                    <lable>Phone no</lable>
                    <input value={phoneno} onChange={(e) =>this.handleAddEmp(e)}/>
                    <button onClick={this.handleAddEmp}>Add Employee</button>
                </form> */}
                <ChildComponent data={this.state}/>
            </div>

        )
    }
};

export default Profile;