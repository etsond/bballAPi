# Basketball Player API
This is a simple API that returns statistics for various basketball players. The API is built using Node.js and the Express.js framework. The API has two endpoints, one for the root path (/) and one for a dynamic endpoint (/api/:playerName).

## Installation
To use this API, you will need to have Node.js and NPM installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository to your machine.
2. Open a terminal window and navigate to the project directory.
3. Run npm install to install the necessary dependencies.
## Usage
To start the API, run the command node server.js from the project directory. The API will start listening on port 3000 by default, but you can change the port by setting the PORT environment variable. For example, to start the API on port 8080, run the command PORT=8080 node server.js.

Once the API is running, you can access it by opening a web browser and navigating to http://localhost:3000 or the port number you specified. The root path will return an HTML file, while the /api/:playerName endpoint will return a JSON object containing the statistics for the player specified in the playerName parameter.

## Example
To retrieve statistics for Kobe Bryant, navigate to http://localhost:3000/api/kobe bryant. This will return a JSON object containing his ratings, strengths, birth location, and killer instinct.

```json
{
    "ratings": 93,
    "strength":"natural feels,IQ,speed,explosiveness,will,want it more",
    "birthLocation": "Italy, England",
    "Killer instinct": "yes"
}
```
If you enter an invalid player name, the API will return an error message.

```json
{
    "Not valid": "The name you have entered is not considered a great haha"
}
```
