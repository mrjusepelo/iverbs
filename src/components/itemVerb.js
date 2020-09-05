import React, { useState } from 'react';
import { Form, Row, Col, Button, Badge, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';

// const ItemVerb = props => {
class ItemVerb extends React.Component {
  state = {
    verb: this.props.verb,
    class_status: "warning",
    text_status: "pending",
    validated: false
  }

  renderTooltip = ({infinitive, past, participle, translate}) => (
    <Tooltip id="button-tooltip" >
      <b className="text-capitalize">{translate}</b>
      <br />
      <span className="text-capitalize">past: {past}</span>
      <br />
      <span className="text-capitalize">participle: {participle}</span>
    </Tooltip>
  );


  handleSubmit = (event) => {
    const verb = this.state.verb;
    const form = event.currentTarget;
    const _translate = form[0];
    const _past = form[1];
    const _participle = form[2];
debugger
    let is_valid = true;
    console.log(verb)
    _translate.setAttribute("isvalid", "false");
    _translate.setCustomValidity("");
    _past.setAttribute("isvalid", "false");
    _past.setCustomValidity("");
    _participle.setAttribute("isvalid", "false");
    _participle.setCustomValidity("");

    if(verb.translate.split(",").map(name => name.toLowerCase()).includes(_translate.value.toLowerCase()) === false ){
      is_valid = false
      _translate.setAttribute("isvalid", "true");
      _translate.setCustomValidity("Invalid field.");
    }
    if(verb.past !== _past.value.toLowerCase()){
      is_valid = false
      _past.setAttribute("isvalid", "true");
      _past.setCustomValidity("Invalid field.");
    }
    if(verb.participle !== _participle.value.toLowerCase()){
      is_valid = false
      _participle.setAttribute("isvalid", "true");
      _participle.setCustomValidity("Invalid field.");
    }

    if (is_valid) {
      this.showTodo("success", "success")
    }else{
      this.showTodo("danger", "pending")
    }

    debugger
    event.preventDefault();
    event.stopPropagation();
    // if (form.checkValidity() === false) {
    // }
    this.setState({validated: true});

  };

  showTodo = (className, text) => {
    this.setState({class_status: className});
    this.setState({text_status: text});
  }


  render(){
    const { verb } = this.state;
  return (
    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

      <Form.Row className="mb-4">
        <Col sm="2  mb-2">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip(verb)}
          >
          <Form.Label className="text-capitalize d-inline" column>
            <b>{verb.infinitive}</b>

          </Form.Label>
          </OverlayTrigger>
        </Col>
        <Form.Group as={Col} sm="2" controlId="validationCustom03">
          <Form.Control type="text" placeholder="Set translate" />
          <Form.Control.Feedback type="invalid">
            Review translate.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} sm="2" controlId="validationCustom04">
          <Form.Control type="text" placeholder="Set past" />
          <Form.Control.Feedback type="invalid">
            Review past.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} sm="2" controlId="validationCustom05">
          <Form.Control type="text" placeholder="Set participle" />
          <Form.Control.Feedback type="invalid">
            Review participle.
          </Form.Control.Feedback>
        </Form.Group>
        <Col sm="2">
             <Button variant="primary" type="submit">
               Validate
             </Button>
        </Col>
        <Col sm="2">
            <Badge pill variant={this.state.class_status}>{this.state.text_status}</Badge>
        </Col>
      </Form.Row>
    </Form>
  );
  };

}

export default ItemVerb;
