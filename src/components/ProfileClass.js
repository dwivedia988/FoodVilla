import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        // create state 
        
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        // console.log("constructor");
    }

    async componentDidMount () {
        // this is best place to make an api call
        const data = await fetch("https://api.github.com/users/dwivedia988");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        // console.log("component mount");
    }

    // componentDidUpdate() {
    //     console.log("component did update");
    // }

    // componentWillUnmount() {
    //     console.log("componentwillUnmount");
    // }

    render() {
        // console.log("render");
        return (
            <div className="text-center p-4">
                <h1>Adarsh Dwivedi</h1>
                <img  className="mx-auto" src={this.state.userInfo?.avatar_url}/>
                <h2>Name: {this.state.userInfo?.name}</h2>
                <h2>Location: {this.state.userInfo?.location}</h2>
            </div>
        );
    };
};

export default ProfileClass;