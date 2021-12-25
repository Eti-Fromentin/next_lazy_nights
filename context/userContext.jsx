import React, { createContext, useState } from 'react';

const CurrentUserNameContext = createContext({
  userName: '',
  setUserName: () => {},
  ofAge: false, 
  setOfAge: () => {}
});

export function CurrentUserNameContextProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [ ofAge, setOfAge] = useState(false)

  return (
    <CurrentUserNameContext.Provider
      value={{
        userName,
        setUserName,
        ofAge, 
        setOfAge
      }}
    >
      {children}
    </CurrentUserNameContext.Provider>
  );
}

export default CurrentUserNameContext;
