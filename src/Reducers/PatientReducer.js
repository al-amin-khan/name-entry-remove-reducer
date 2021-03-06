export const initialState = {
  patient: []
};

export const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_PATIENT':{
      const updatePatient ={
        id: action.id,
        name: action.name
      }
      const newUpdatedPatient = [...state.patient, updatePatient];
      return {patient: newUpdatedPatient} ;
    }
    case 'REMOVE_PATIENT':{
      const remainPatient = state.patient.filter(pt => pt.id !== action.id);
      return {patient: remainPatient};
    }
    default: {
      return state;
    }
  }
}