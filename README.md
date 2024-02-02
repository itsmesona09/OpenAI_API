# OpenAI_API

## Client-Side (React App):
- The React app is a simple interface for generating SQL queries based on natural language descriptions.
- The App component is the main component containing a form with an input field for the query description and a button to trigger the query generation.
- The form submits data to the server using the generateQuery function, which makes a POST request to http://localhost:3000/generate.
- The generated SQL query is logged to the console.

## Server-Side (Express App):
- The server is built using Express, allowing it to handle requests.
- CORS middleware is used to enable cross-origin resource sharing.
- There's a single endpoint (/generate) that receives a POST request with a natural language query description.
- The server uses the OpenAI API to generate an SQL query based on the provided description.
- If successful, it sends the generated query as a JSON response; otherwise, it returns a 500 status with an error message.

## OpenAI Integration (API Key and Query Generation):
- The OpenAI API key is stored in a separate file (api.js) and is imported where needed.
- The generate.js file contains a function that uses the OpenAI API to generate an SQL query based on a provided natural language description.

## Root Component Rendering (ReactDOM):
- The main React component (App) is rendered into the root HTML element using ReactDOM.createRoot.


# Features:
Input:
  Users can describe their SQL query using natural language in the provided input field.
Output: 
  The application sends the description to the server, which utilizes the OpenAI API to convert it into an SQL query.
Visualization: 
  The generated SQL query is logged to the console on the client-side.


## Installation:
- Clone the repository.
- Install dependencies using npm install in both the client and server directories.
  
## Set Up OpenAI API Key:
- Obtain an API key from OpenAI and set it in the .env file within the server directory.
  
## Run the Application:
- Start the server by running npm start in the server directory.
- Run the React app with npm start in the client directory.
  
## Usage:
- Open the application in a web browser.
- Enter a natural language description of your SQL query.
- Click the "Generate Query" button.
- View the generated SQL query in the console.
