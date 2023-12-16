# Sustainable Initiatives LLM Generator


This tool, powered by OpenAI's language model (LLM), aims to provide personalized suggestions for sustainable initiatives based on user inputs. The user provides their location (in any format such as zip code, city name, neighborhood, country, etc.), and the tool generates a prompt suggesting actionable sustainable initiatives.

## Usage

### Web Interface (Local)
1. Clone this repository to your local machine.
2. Open the script.js file and insert your ChatGPT API key.
3. Open the index.html file in a web browser.
4. Enter the user's location in the provided input field and submit.

Note: This web interface currently runs locally, and you need to provide your own ChatGPT API key.


### Example Screenshots 

New York City (NYC)
![Screenshot](example_NYC.png)

San Diego:
![Screenshot](example_SanDiego.png)



### Notebook Example
Check out the notebook example to interact with the ChatGPT API. Note that the output in the notebook might not be as legible due to formatting.

### Other Remarks
While the primary focus of this project revolves around promoting sustainable behavior, it's crucial to acknowledge that each LLM query prompt has a notable carbon footprint. Although this impact is typically invisible to end users, it remains an important consideration.

As of now, the tool operates exclusively on local servers, mitigating the carbon footprint implications due to its localized usage. However, envisioning the possibility of transforming this tool into a public service hosted on external servers prompts the need for carbon footprint optimization strategies. One potential approach involves pre-saving query results and delivering them through some form of Elasticsearch, eliminating the need to run a new API prompt for each user inquiry and thus minimizing environmental impact.
