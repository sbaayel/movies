import React, { Component } from "react";
import "./Popup.css"

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  
  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    
  render() {
    return (
      <main>
        
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Sorry the movies you want to download is not available right now !!</p>
          
        </Modal>
        <button type='button' onClick={this.showModal}>Download</button>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className= "modal-main">
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};


export default Popup;