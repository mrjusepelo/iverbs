import React from 'react';
import data from './../data';
import ItemVerb from './itemVerb';
import {ButtonToolbar, Button, ButtonGroup} from "react-bootstrap"
import _ from 'lodash';
// var data = require('json!../data.json');

class Verbs extends React.Component {

    state = {
      data: data,
      verbs: [],
      group: 1
    }
  listVerbs = () => {
    var verbsList = this.state.verbs.map(function(obj, i){
      return <ItemVerb verb={obj} key={`${i}-${obj.infinitive}`} />;
    })
    return verbsList;
  }
  groups = () => {
    // var verbsList = this.state.verbs.map(function(obj, i){
      return (<ButtonToolbar aria-label="Toolbar with button groups" className="mb-5">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>Grupos</Button>
    <Button onClick={() => this.filterVerbs(1)}>1</Button> <Button onClick={() => this.filterVerbs(2)}>2</Button> <Button onClick={() => this.reorder()}>Reordenar</Button>
  </ButtonGroup>
</ButtonToolbar>)

    // })

  }

  componentDidMount(){
    this.setState({ verbs: this.state.data[this.state.group] || [] });

  }
  reorder(){
    this.setState({ verbs: _.shuffle(this.state.verbs) || [] });

  }
  filterVerbs(group){
    this.setState({group})
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
