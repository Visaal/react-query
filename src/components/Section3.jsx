import React from 'react';
import { usePersons } from './hooks/AddPersonProvider';

export default function Section3() {
  const { formData } = usePersons();

  const submit = event => {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div>
      <h5>Section 3</h5>
      <form onSubmit={submit}>
        <button >Add Person</button>
      </form>
      <p>This is the user you are going to add: {JSON.stringify(formData)}</p>
    </div>
  )
}