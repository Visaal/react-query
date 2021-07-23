import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { usePersons } from './hooks/AddPersonProvider';

export default function Section1() {

  // swNames is simply the query 'key'
  // Don't need to create three different states for loading, error, data
  // Don't need to use useEffect as this will re-render 
  const { isLoading, error, data } = useQuery('swNames', () => axios('https://swapi.dev/api/people/'));
  const { addPerson } = usePersons();

  if (error) return <h1>Error: {error.message}, try again!</h1>;
  if (isLoading) return <h1>Loading, please wait...</h1>

  const updateFormPerson = (event) => {
    addPerson(event.target.value);
  }

  return (
    <div>
      <h4>Section 1</h4>
      <label>Pick a person</label>
      <br />
      <select onChange={updateFormPerson}>
        {data.data.results && data.data.results.map(character =>
          <option key={character.name} value={character.name}>{character.name}</option>)
        }
      </select>
    </div>
  )
}