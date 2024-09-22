const express = require('express');
const app = express();
const multer = require('multer'); // for file handling
const upload = multer(); // for parsing multipart/form-data

app.use(express.json());

app.post('/bfhl', upload.single('file'), (req, res) => {
    const { data, file_b64 } = req.body;

    // Process data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(char => char === char.toLowerCase()).sort().slice(-1);
    
    // File handling
    const file_valid = !!file_b64; // Check if file is present
    const file_mime_type = file_valid ? 'application/octet-stream' : null; // Simplified, replace with actual check
    const file_size_kb = file_valid ? (Buffer.byteLength(file_b64, 'base64') / 1024).toFixed(2) : 0;

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase,
        file_valid,
        file_mime_type,
        file_size_kb
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

