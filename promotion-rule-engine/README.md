# Promotion Rule Engine

## Overview
The Promotion Rule Engine is a REST microservice designed to evaluate player attributes against configurable business rules defined in a YAML file. It provides endpoints for promotion evaluation and metrics retrieval.

## Features
- Configurable promotion rules defined in a YAML file.
- RESTful API for evaluating promotions based on player attributes.
- Metrics endpoint for retrieving statistics.

## Project Structure
```
promotion-rule-engine
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── promotions.js     # Routes related to promotions
│   ├── controllers
│   │   └── promotionController.js # Logic for handling promotions
│   ├── services
│   │   └── ruleEngine.js     # Rule engine for evaluating promotions
│   ├── config
│   │   └── rules.yaml        # Configurable business rules
│   └── utils
│       └── yamlLoader.js     # Utility for loading YAML files
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd promotion-rule-engine
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```

## API Endpoints
- **POST /promotion**
  - Description: Evaluates player attributes against the promotion rules.
  - Request Body: JSON object containing player attributes.
  - Response: Selected promotion or null.

- **GET /metrics**
  - Description: Retrieves statistics related to promotions.
  - Response: JSON object containing metrics data.

## Example
### Evaluate Promotion
```json
POST /promotion
{
  "playerAttributes": {
    "age": 25,
    "score": 1500
  }
}
```

### Retrieve Metrics
```json
GET /metrics
```

## License
This project is licensed under the MIT License.