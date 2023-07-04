import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        avatar_url: "null",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/ArtTwis");
    const data = await response.json();

    this.setState({
      userInfo: data,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React OP :)");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.userInfo) {
      // code...
    }
  }

  componentWillUnmount() {
    // when you unmount your component this method will be triggred.
    clearInterval(this.timer);
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div>
        <br />
        <br />
        <h5>Profile Class Component</h5>
        <img src={userInfo?.avatar_url} alt="Avatar" />
        <br />
        <h5>
          Name : {userInfo?.name} - {this.props.name}
        </h5>
        <h5>Location : {userInfo?.location}</h5>
      </div>
    );
  }
}

export default Profile;
