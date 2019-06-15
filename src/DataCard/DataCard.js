import React, {Component} from 'react';
import './DataCard.css';

class DataCard extends Component {
  render() {
    let { id, title, description, type, year} = this.props;
    return (
      <div>
          <h3>{id} {title} {type} {year} </h3>
          <h4> {description} </h4>
      </div>
    )
  }
}

export default DataCard;
