import React, { createContext, useContext, useState } from "react";



const PersonContext = createContext();
export const usePersons = () => useContext(PersonContext);

export default function PersonProvider({ children }) {
  const [formData, setPerson] = useState({});

  const addPerson = (name) => setPerson({ ...formData, name });

  const addPersonJob = (job) => setPerson({...formData, job})

  return (
    <PersonContext.Provider value={{ formData, addPerson, addPersonJob }}>
      {children}
    </PersonContext.Provider>
  )
}
