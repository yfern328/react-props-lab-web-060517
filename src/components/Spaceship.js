// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component{
  render(){
    return(
      <div className="spaceship-info">

        <h4>{this.props.name}</h4>
        <p>{this.props.speed}</p>

        <p>Colors</p>

        {React.createElement('ul', {},
          this.props.colors.map(color => {
            return React.createElement('li', {}, `${color}`)
          })
        )}

        <ul>
          {this.props.colors.map(color => <li>{color}</li> )}
        </ul>

        <ul>
          <li>{this.props.colors[0]}</li>
          <li>{this.props.colors[1]}</li>
        </ul>

      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship />,
  document.getElementById('root')
);

export default Spaceship;
