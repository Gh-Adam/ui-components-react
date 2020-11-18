import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalAction = (isOpen) => {
    console.log('fire');
    setIsOpenModal(isOpen);
  };
  return (
    <div className="App">
      <button onClick={() => handleModalAction(true)}>Open Modal</button>
      <Modal
        isOpen={isOpenModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={true}
        onRequestClose={() => handleModalAction(false)}
        style={{
          overlay: {
            backgroundColor: 'gainsboro',
          },
          content: {
            color: 'red',
            borderRadius: '8px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h1>Modal Title Here</h1>
        <hr />
        <p>Modal Body</p>
        <div>
          <button onClick={() => handleModalAction(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
