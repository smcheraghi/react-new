// https://github.com/reactjs/react-modal

import React from 'react'
import Modal from 'react-modal'



const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} contentLabel={props.selectedOption} onRequestClose={props.handleClearSelectedOption}>
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p> }
        <button onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
)

export default OptionModal