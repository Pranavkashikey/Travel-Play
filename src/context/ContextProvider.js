import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducer.js';
import { Message } from '@mui/icons-material';

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert:{open:false,severity:'info',message: ''},
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
