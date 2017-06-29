import React from 'react';
let {connect} = require('react-redux');
import ReactModal from 'react-modal';
let modalActions = require('actions/modalActions');
import styles from './index.css';

class Modal extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {modal, dispatch} = this.props;

    let closeModal = () => {
      dispatch(modalActions.closeModal());
    };

    let renderTemplate = (template) => {
      if (template == 'about'){
        return (
          <div className={styles.aboutModal}>
            <div className={styles.aboutImage} style={{backgroundImage: `url(${modal.image})`}}></div>
            <div className={styles.aboutInfo}>
              <h2>{modal.name}</h2>
              <h3 className={styles.aboutTitle}>{modal.title}</h3>
              {modal.title2 ? <h3 className={styles.aboutTitle}>{modal.title2}</h3> : ''}
              <p className={styles.aboutBio}>{modal.bio}</p>
            </div>
          </div>
        )
      }else{
        return (
          <div className={styles.defaultModal}>
            <h2>{modal.title}</h2>
            <p>{modal.body}</p>
          </div>
        )
      }
    };

    return (
      <div>
        <ReactModal
          isOpen={modal.show}
          onRequestClose={() => closeModal()}
          closeTimeoutMS={150}
          className={{
            base: styles.container,
            afterOpen: styles.afterOpen,
            beforeClose: styles.beforeClose
          }}
          overlayClassName={{
            base: styles.overlay,
            afterOpen: styles.overlayAfterOpen,
            beforeClose: styles.overlayBeforeClose
          }}
          contentLabel="Modal"
        >
          {renderTemplate(modal.template)}
          <div
            className={styles.closeModal}
            onClick={() => closeModal()}
          >[&mdash;]</div>
        </ReactModal>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(Modal);
