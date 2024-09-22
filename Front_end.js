import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const parsedInput = JSON.parse(jsonInput);
            const response = await axios.post('http://localhost:5000/bfhl', parsedInput);
            setResponseData(response.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON input');
        }
    };

    return (
        <div>
            <h1>RA2111026010079</h1>
            <textarea value={jsonInput} onChange={e => setJsonInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p>{error}</p>}
            {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
        </div>
    );
}

export default App;

