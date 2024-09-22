<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BFHL Frontend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        textarea {
            width: 100%;
            height: 100px;
        }
        button {
            margin-top: 10px;
        }
        .response {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <h1>BFHL Frontend</h1>
    <label for="json-input">Enter JSON Data:</label>
    <textarea id="json-input" placeholder='Enter JSON like {"data": ["A", "B", "1"]}'></textarea>
    <button id="submit-btn">Submit</button>

    <div>
        <label><input type="checkbox" value="Numbers" id="numbers-checkbox"> Numbers</label>
        <label><input type="checkbox" value="Alphabets" id="alphabets-checkbox"> Alphabets</label>
        <label><input type="checkbox" value="Highest lowercase alphabet" id="lowercase-checkbox"> Highest lowercase alphabet</label>
    </div>

    <div class="response" id="response-container"></div>

    <script> document.getElementById('submit-btn').addEventListener('click', async () => {
    const inputData = document.getElementById('json-input').value;
    const responseContainer = document.getElementById('response-container');

    try {
        const payload = JSON.parse(inputData);  // Parse the JSON input

        const response = await fetch('/bfhl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        let result = {};

        if (document.getElementById('numbers-checkbox').checked) {
            result.numbers = data.numbers;
        }

        if (document.getElementById('alphabets-checkbox').checked) {
            result.alphabets = data.alphabets;
        }

        if (document.getElementById('lowercase-checkbox').checked) {
            result.highest_lowercase_alphabet = data.highest_lowercase_alphabet;
        }

        responseContainer.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error:', error);
        responseContainer.innerHTML = 'Invalid JSON format or server error.';
    }
});
</script>
</body>
</html>


