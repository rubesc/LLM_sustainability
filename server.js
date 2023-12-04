const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Body parsing middleware
app.use(express.json());

// Define a route for your API endpoint
app.post('/generate-recommendations', async (req, res) => {
  try {
    // Handle GPT-3 API request here
    const locale = req.body.locale;

    // Call GPT-3 API with the 'locale' parameter and generate recommendations
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Act as a climate justice activist/expert. Generate 20 actionable sustainable initiatives and organizations for a person in ${locale}.`,
      max_tokens: 1500,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-api-key', // Replace 'your-api-key' with your actual API key
      },
    });

    // Extract recommendations from the GPT-3 API response
    const recommendations = response.data.choices[0].text;

    // Send the recommendations as the response
    res.json({ recommendations });
  } catch (error) {
    console.error('Error making GPT-3 API request:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
