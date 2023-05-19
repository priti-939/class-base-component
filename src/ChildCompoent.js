import React, { Component } from 'react';

class ChildComponent extends Component{
    render(){
        console.log('data', this.props.data)

        return(
            <div className='child-comp'>
                <div className='child-content'>Student Name: {this.props.data?.name}</div>
                <div className='child-content'>Address : {this.props.data?.address}</div>

                <div className='child-content'>Phone no: {this.props.data?.phoneno}</div>

            </div>

        )
    }
};

export default ChildComponent;