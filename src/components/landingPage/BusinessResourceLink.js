import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class BusinessResourceLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className="bg-primary pt-3">
        <center><p>Receive free business resources and learn more about our incredible intern program by <span><Button className="btn-success font-weight-bolder" onClick={this.toggle}>signing up</Button></span></p></center>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up!</ModalHeader>
          <ModalBody>

            <p>
              Form Goes Here
          </p>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}

export default BusinessResourceLink;
