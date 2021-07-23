import React from 'react';
import { usePersons } from './hooks/AddPersonProvider';

export default function Section2() {
  const { addPersonJob } = usePersons();
  const updateFormPerson = (event) => {
    addPersonJob(event.target.value);
  }
  return (
    <div>
      <h4>Section 2</h4>
      <label>What's their job:</label>
      <br />
      <input onChange={updateFormPerson} type="text" />
    </div>
  )
}