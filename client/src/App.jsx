import React, { useState } from 'react';
import './index.css';

function App() {
  const [queryDescription, setQueryDescription] = useState(0);
  const [sqlQuery, setsqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const generatedQuery = await generateQuery();
      setsqlQuery(generatedQuery.trim());
    } catch (error) {
      console.error("Error fetching data from server: ", error);
    }
  }

  const generateQuery = async () => {
    try {
      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ queryDescription: queryDescription }),
      });
      const data = await response.json();
      console.log("Data from server: ", data);
      return data.response.trim();
    } catch (error) {
      console.error("Error generating query: ", error);
      throw error;
    }
  }
  return (
    <main className='styles-main'>
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input type='text' name='query-description' placeholder='Describe your query'
          onChange={(e) => setQueryDescription(e.target.value)} />

        <br />

        <input type='submit' name='query-generation' value='Generate Query' />

        {sqlQuery && (
          <pre>{sqlQuery}</pre>
        )}
      </form>
    </main>
  )
}

export default App;
