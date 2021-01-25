import React, { useReducer, useRef } from 'react';
import { initialState, reducer } from '../../Reducers/PatientReducer';

const PatientManagement = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PATIENT', 
      name: nameRef.current.value, 
      id: state.patient.length + 1,
    });
    nameRef.current.value = '';

    console.log(state);
  }
  return (
    <div>
      <h2>Patient Management</h2>
      <h3>Patient Count: {state.patient.length}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef}/>
      </form>
    </div>
  );
};

export default PatientManagement;