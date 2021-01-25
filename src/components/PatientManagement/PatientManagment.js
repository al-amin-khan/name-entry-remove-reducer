import React, { useReducer, useRef } from 'react';
import { initialState, reducer } from '../../Reducers/PatientReducer';
import PatientList from '../PatientList/PatientList';

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

  }
  return (
    <div>
      <h2>Patient Management</h2>
      <h3>Patient Count: {state.patient.length}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef}/>
      </form>
      <br/>
      <h2>Patient List:</h2>
      {
        state.patient.map(pt => <ol 
                                  key={pt.id} 
                                  list={pt}
                                  onClick ={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                                  >
                                  <strong>{pt.id}</strong>: {pt.name}
                                  </ol> )
      }
    </div>
  );
};

export default PatientManagement;