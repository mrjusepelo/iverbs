import React, { Component } from 'react';
import { Form, Row, Col, Button, Badge, InputGroup } from 'react-bootstrap';

class ItemVerb extends React.Component {
  state = {
    verb: this.props.verb,
    class_status: "warning",
    text_status: "pending",
    validated: false
  }

  showTodo = (className, text) => {
    this.setState({class_status: className});
    this.setState({text_status: text});
  }


  handleSubmit = event => {
    const verb = this.state.verb;
    const form = event.currentTarget;
    const _translate = form[0];
    const _past = form[1];
    const _participle = form[2];

    let is_valid = true;
    console.log(verb)
    if(verb.translate.split(",").map(name => name.toLowerCase()).includes(_translate.value.toLowerCase()) === false ){
      is_valid = false
    }
    if(verb.past !== _past.value.toLowerCase()){
      is_valid = false
    }
    if(verb.participle !== _participle.value.toLowerCase()){
      is_valid = false
    }

    if (is_valid) {
      this.showTodo("success", "success")
    }else{
      this.showTodo("danger", "pending")
    }
    _translate.setAttribute("isvalid", "true")
    // _translate.setCustomValidity("Invalid field.");

    debugger
    // if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    // }

    // setValidated(true);
    // if (form.checkValidity() === false) {

    // }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // return true;
  };

  render(){
    const { verb } = this.props;
    const { validated } = this.state.validated;
    return (
      <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }

  // render(){
  //   const { verb } = this.props;
  //   const { validated } = this.state.validated;
  //   return(
  //     <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
  //       <Form.Group as={Row} controlId="formVerb">
  //         <Form.Label className="text-capitalize" column sm="2">
  //           {verb.infinitive}
  //         </Form.Label>

  //         <Col sm="2">
  //         <InputGroup>
  //           <Form.Control type="text" placeholder="Set infentive" required/>
  //           <Form.Control.Feedback type="invalid">
  //             Please review this verb.
  //           </Form.Control.Feedback>
  //           </InputGroup>

  //         </Col>
  //         <Col sm="2">
  //           <Form.Control type="text" placeholder="Set past" />
  //         </Col>
  //         <Col sm="2">
  //           <Form.Control type="text" placeholder="Set participle" />
  //         </Col>
  //         <Col sm="2">
  //           <Button variant="primary" type="submit">
  //             Validate
  //           </Button>
  //         </Col>
  //         <Col sm="2">
  //           <Badge pill variant={this.state.class_status}>{this.state.text_status}</Badge>
  //         </Col>
  //       </Form.Group>

  //     </Form>
  //   );
  // }

}

export default ItemVerb;
