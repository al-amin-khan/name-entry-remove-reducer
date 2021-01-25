import React from 'react';

const PatientList = (props) => {
  const {name, id} = props.list;
  
  return (
    <div>
      <h3>{id}: {name} 
      <button
        style={{marginLeft: '10px'}}
      >
        <small>X</small>
      </button></h3>
    </div>
  );
};

export default PatientList;