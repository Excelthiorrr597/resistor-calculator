import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    resistor: {
      first: undefined,
      second: undefined,
      third: undefined,
      fourth: undefined
    },
    ohms: null
  };

  calculateOhms = () => {
    const { first, second, third, fourth } = this.state.resistor;

    if (first && second && third && fourth) {
      const ohms = `That is a ${parseInt(first + second, 10) *
        third} &Omega;, ${fourth} precision resistor`;

      this.setState({ ohms });
    }
  };

  resistorColors = [
    {
      color: "none",
      value: null,
      multiplier: null,
      tolerance: "20%"
    },
    {
      color: "pink",
      value: null,
      multiplier: 0.001,
      tolerance: null
    },
    {
      color: "silver",
      value: null,
      multiplier: 0.01,
      tolernace: "10%"
    },
    {
      color: "gold",
      value: null,
      multiplier: 0.1,
      tolernace: "5%"
    },
    {
      color: "black",
      value: "0",
      multiplier: 1,
      tolerance: null
    },
    {
      color: "brown",
      value: "1",
      multiplier: 10,
      tolerance: "1%"
    },
    {
      color: "red",
      value: "2",
      multiplier: 100,
      tolerance: "2%"
    },
    {
      color: "orange",
      value: "3",
      multiplier: 1000,
      tolerance: "0.05%"
    },
    {
      color: "yellow",
      value: "4",
      multiplier: 10000,
      tolerance: "0.02%"
    },
    {
      color: "green",
      value: "5",
      multiplier: 100000,
      tolerance: "0.5%"
    },
    {
      color: "blue",
      value: "6",
      multiplier: 1000000,
      tolerance: "0.25%"
    },
    {
      color: "violet",
      value: "7",
      multiplier: 10000000,
      tolerance: "0.1%"
    },
    {
      color: "grey",
      value: "8",
      multiplier: 100000000,
      tolerance: "0.01%"
    },
    {
      color: "white",
      value: "9",
      multiplier: 1000000000,
      tolerance: null
    }
  ];
  render() {
    const { resistor } = this.state;
    return (
      <div className="App">
        <p>Resistor Calculator</p>
        {Object.keys(resistor).map((key, index) => (
          <select
            defaultValue="Choose"
            id={key}
            key={key}
            value={resistor[key]}
            onChange={event => {
              this.setState({
                resistor: {
                  ...resistor,
                  [key]: event.target.value
                },
                ohms: null
              });
            }}
          >
            <option value={null} disabled>
              Choose
            </option>
            {this.resistorColors.map(colorObj => {
              const { value, multiplier, color, tolerance } = colorObj;
              let prop;
              if (index < 2) prop = value;
              else if (index === 2) prop = multiplier;
              else prop = tolerance;
              return prop ? (
                <option key={color} value={prop}>
                  {color}
                </option>
              ) : null;
            })}
          </select>
        ))}

        <button id="submit" type="submit" onClick={this.calculateOhms}>
          Submit
        </button>
        <p id="result" dangerouslySetInnerHTML={{ __html: this.state.ohms }} />
      </div>
    );
  }
}

export default App;
