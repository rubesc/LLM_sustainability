async function generateRecommendations() {
    const locale = document.getElementById('localeInput').value;
    
    // Perform API request (server-side recommended for security)
    const response = await fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale }),
    });

    const data = await response.json();

    // Display results
    displayResults(data);
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Create and append tables based on the data received
    for (const tableData of data) {
        const table = document.createElement('table');

        // Populate the table (adjust as per your data structure)
        // Example: table.innerHTML = ...

        resultsContainer.appendChild(table);
    }
}
