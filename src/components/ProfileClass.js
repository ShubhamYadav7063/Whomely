import React from "react";
import UserContext from "../utils/userContext";
// Class Base Components

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ShubhamYadav7063");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //     if (this.state.count !== prevState.count) {

  //     }
  // }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        {/* <h3>{this.props}</h3> */}
        <img src={this.state.userInfo?.avatar_url} />
        <h2>Name: {this.state.userInfo?.name}</h2>
        <h2>Location: {this.state.userInfo?.location}</h2>

        <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profile;
