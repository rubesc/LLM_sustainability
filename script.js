function sendPrompt() {

    const templatePrompt_1 = `
    Act as a climate justice activist/expert ###
    - Generate 5 actionable sustainable initiatives for someone based in 
   `;
  
   const templatePrompt_2 = `
       .
    - Include ideas that are national-wide or global programs with activations in the location. Make sure to filter out greenwashing programs.
    - Organize information with: title (with URL hyperlinked at the title text), summary of what to expect, effort (low/mid/high), impact (low/mid/high).
    - Format the output in HTML table
    `;
  
    const userPrompt = document.getElementById('promptInput').value;
  
    const combinedPrompt = templatePrompt_1 + userPrompt + templatePrompt_2;
  
    if (combinedPrompt.trim() === '') {
        alert('Please enter a prompt.');
        return;
    }
  
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = 'YOUR-API-KEY'; 
  
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: combinedPrompt }],
            max_tokens: 3000,
            temperature: 0.5,
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const result = data.choices[0].message.content.trim();
        document.getElementById('result').innerText = `Response: ${result}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Error fetching data. Please try again.';
    });
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: combinedPrompt }],
          max_tokens: 3000,
          temperature: 0.5,
      })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      const result = data.choices[0].message.content.trim();
      updateTable(result); // Call the updateTable function with the ChatGPT response
  })
  .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error as needed
  });
  }
  
  function updateTable(result) {
    const container = document.getElementById('tableContainer');
  
    // Apply styles to the container
    container.style.border = '1px solid #ccc'; // Border style
    container.style.padding = '10px'; // Padding for the container
    container.style.fontSize = '12px'; // Font size for the text
  
  
    // Apply styles directly to the table HTML
    const styledResult = `
          <table style="border-collapse: collapse; width: 100%;">
              <thead>
                  <tr>
                      <th style="border: 1px solid #ccc;">Title</th>
                      <th style="border: 1px solid #ccc; width: 200px;">Summary</th>
                      <th style="border: 1px solid #ccc;">Effort</th>
                      <th style="border: 1px solid #ccc;">Impact</th>
                  </tr>
              </thead>
              <tbody>
                  ${result}
              </tbody>
          </table>
          `;
  
    container.innerHTML = result;
  }
  