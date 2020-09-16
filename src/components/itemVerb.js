import React from "react";
import {
  Form,
  Col,
  Button,
  Badge,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

// const ItemVerb = props => {
class ItemVerb extends React.Component {
  state = {
    verb: this.props.verb,
    class_status: "warning",
    text_status: "pending",
    validated: false,
    tradePlaces: this.props.tradePlaces,
  };

  renderTooltip = ({ infinitive, past, participle, translate }) => (
    <Tooltip id="button-tooltip">
      <b className="text-capitalize">
        {this.props.tradePlaces ? infinitive : translate}
      </b>
      <br />
      <span className="text-capitalize">past: {past}</span>
      <br />
      <span className="text-capitalize">participle: {participle}</span>
    </Tooltip>
  );

  labelName = () => {
    const { verb, tradePlaces } = this.props;
    if (tradePlaces) {
      return verb.translate;
    } else {
      return verb.infinitive;
    }
  };

  handleSubmit = (event) => {
    const { verb } = this.state;
    const { tradePlaces } = this.props;
    const form = event.currentTarget;
    const _translate = form[0];
    const _past = form[1];
    const _participle = form[2];

    let is_valid = true;
    console.log(verb);
    _translate.setAttribute("isvalid", "false");
    _translate.setCustomValidity("");
    _past.setAttribute("isvalid", "false");
    _past.setCustomValidity("");
    _participle.setAttribute("isvalid", "false");
    _participle.setCustomValidity("");

    if (tradePlaces) {
      if (
        verb.infinitive
          .toLowerCase()
          .trim()
          .includes(_translate.value.toLowerCase()) === false
      ) {
        is_valid = false;
        _translate.setAttribute("isvalid", "true");
        _translate.setCustomValidity("Invalid field.");
      }
    } else if (
      verb.translate
        .split(",")
        .map((name) => name.toLowerCase().trim())
        .includes(_translate.value.toLowerCase()) === false
    ) {
      is_valid = false;
      _translate.setAttribute("isvalid", "true");
      _translate.setCustomValidity("Invalid field.");
    }
    if (verb.past !== _past.value.toLowerCase()) {
      is_valid = false;
      _past.setAttribute("isvalid", "true");
      _past.setCustomValidity("Invalid field.");
    }
    if (verb.participle !== _participle.value.toLowerCase()) {
      is_valid = false;
      _participle.setAttribute("isvalid", "true");
      _participle.setCustomValidity("Invalid field.");
    }

    if (is_valid) {
      this.showTodo("success", "success");
    } else {
      this.showTodo("danger", "pending");
    }

    event.preventDefault();
    event.stopPropagation();

    this.setState({ validated: true });
  };

  showTodo = (className, text) => {
    this.setState({ class_status: className });
    this.setState({ text_status: text });
  };

  render() {
    const { verb } = this.state;
    return (
      <Form
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
      >
        <Form.Row className="mb-4">
          <Col sm="2  mb-2">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip(verb)}
            >
              <Form.Label className="text-capitalize d-inline" column>
                <b>{this.labelName()}</b>
              </Form.Label>
            </OverlayTrigger>
          </Col>
          <Form.Group as={Col} sm="2" controlId="validationCustom03">
            <Form.Control type="text" placeholder="Set translate" autocomplete="new-password" />
            <Form.Control.Feedback type="invalid">
              Review translate.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm="2" controlId="validationCustom04">
            <Form.Control type="text" placeholder="Set past" autocomplete="new-password" />
            <Form.Control.Feedback type="invalid">
              Review past.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} sm="2" controlId="validationCustom05">
            <Form.Control type="text" placeholder="Set participle" autocomplete="new-password" />
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
            <Badge pill variant={this.state.class_status}>
              {this.state.text_status}
            </Badge>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default ItemVerb;
