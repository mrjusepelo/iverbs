import React from "react";
import data from "./../data";
import ItemVerb from "./itemVerb";
import { ButtonToolbar, Button, ButtonGroup } from "react-bootstrap";
import _ from "lodash";
// var data = require('json!../data.json');

class Verbs extends React.Component {
  state = {
    data: data,
    verbs: [],
    group: 1,
    tradePlaces: false,
  };
  listVerbs = () => {
    const { tradePlaces } = this.state;
    var verbsList = this.state.verbs.map(function (obj, i) {
      return (
        <ItemVerb
          verb={obj}
          tradePlaces={tradePlaces}
          key={`${i}-${obj.infinitive}`}
        />
      );
    });
    return verbsList;
  };
  groups = () => {
    // var verbsList = this.state.verbs.map(function(obj, i){
    return (
      <ButtonToolbar aria-label="Toolbar with button groups" className="mb-5">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button>Grupos</Button>
          <Button onClick={() => this.filterVerbs(1)}>1</Button>{" "}
          <Button onClick={() => this.filterVerbs(2)}>2</Button>
          <Button onClick={() => this.filterVerbs(3)}>3</Button>
          <Button onClick={() => this.reorder()}>Reordenar</Button>
          <Button onClick={() => this.setTradePlace()}>Invertir</Button>
        </ButtonGroup>
      </ButtonToolbar>
    );

    // })
  };

  componentDidMount() {
    this.setState({
      verbs: _.shuffle(this.state.data[this.state.group]) || [],
    });
  }
  reorder() {
    this.setState({ verbs: _.shuffle(this.state.verbs) || [] });
  }
  setTradePlace() {
    this.setState({ tradePlaces: !this.state.tradePlaces });
  }
  filterVerbs(group) {
    this.setState({ group });
    this.setState({ verbs: this.state.data[group] || [] });
  }

  render() {
    return (
      <div>
        {this.groups()}
        {this.listVerbs()}
      </div>
    );
  }
}

export default Verbs;
