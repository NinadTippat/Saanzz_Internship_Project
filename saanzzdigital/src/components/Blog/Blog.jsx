import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
    <div>
      <h1>People:</h1>
      <ul>
        {data.map(person => (
          <li key={person.name}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog