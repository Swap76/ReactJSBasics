import React, {Component} from 'react';

class Weather extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name:'',
      weather:'',
      visibility:0,
      isLoading: true
    }

  }
  componentDidMount(){
      fetch('https://cors-anywhere.herokuapp.com/https://bit.ly/fetchKaLink')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let {name ,weather ,visibility} = data;
        this.setState({
          name,
          weather: weather[0].main,
          visibility,
          isLoading: false,
        })
      })
      .catch((error) => console.log(error));
  }


  render() {
    let a;
    let {name, weather, visibility, isLoading}= this.state;
    if (isLoading) {
       a = (
        <h1> Loading...</h1>
      )
    }
    else {
       a = (
        <h1> {name} {weather} {visibility}</h1>
      )
    }
    return (
      <div>
        {a}  
      </div>
    )
  }
}

export default Weather;