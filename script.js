// In your script.js file

const generateRecommendations = async () => {
    const locale = /* get the user's input */;
    
    try {
      const response = await fetch('http://localhost:3000/generate-recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale }),
      });
  
      const data = await response.json();
      // Process the data and update the HTML to display recommendations
      // ...
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }nod
  };