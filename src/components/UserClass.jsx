import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            count2:2
        }
        console.log('child constructor')
    }

    componentDidMount(){
        console.log('child component did mount');
    }
   
    render(){
        console.log('Child render')
        const  {name,location} = this.props

        return (
            <div className="user-card">
                <h1>Count {this.state.count}</h1>
                <h1>Count {this.state.count2}</h1>
                <button className="primary" onClick={() => {
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Increase</button>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

export default UserClass