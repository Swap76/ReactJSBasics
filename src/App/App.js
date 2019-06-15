import React, {Component} from 'react';
import DataCard from '../DataCard/DataCard';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      isLoggedIn: false,
      data:[]
    }
  }

  updateEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email:e.target.value,
    })
  }

  updatePassword = (e) => {
    console.log(e.target.value);
    this.setState({
      password:e.target.value,
    })
  }

  submit = () => {
    fetch('https://cors-anywhere.herokuapp.com/http://siesgst.edu.in/agnostech/login',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password 
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.status === true){
        this.setState({
          isLoggedIn: true,
          data: data["data"]
        })
      } else {
        console.log("error")
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    let {email, password, isLoggedIn, data} = this.state;
    if (isLoggedIn){
      return (
        <div>
          {
            data.map((value) =>{
              return <DataCard {...value} />
            } )
          }
        </div>
      )
    } else {
        return (
          <div>
          <input  value={email} placeHolder="Enter the Email" onChange={this.updateEmail} />
          <br/>
          <br/>
          <input type="password" value={password} placeHolder="Enter the Password" onChange={this.updatePassword} />
          <br/>
          <button onClick={this.submit} type="button">Login</button>
        </div>
        )
    }
  }
}

export default App;