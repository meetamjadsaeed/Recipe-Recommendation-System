<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Personalized Recipe Recommendation System

## Overview

The Personalized Recipe Recommendation System is a web application built using NestJS, MongoDB, and Typeform. It provides users with personalized recipe recommendations based on their dietary preferences, cooking habits, and ingredient availability. The system utilizes microservices architecture for scalability and integrates modern concepts like caching and machine learning for enhanced performance and user experience.

## Features

- **User Management:** Allows users to create accounts, manage profiles, and update dietary preferences.
- **Recipe Management:** Provides functionalities to add, edit, and delete recipes from the system.
- **Personalized Recommendations:** Generates recipe recommendations tailored to each user's preferences and historical interactions.
- **Ingredient Availability:** Integrates with external APIs to fetch real-time ingredient availability and prices.
- **Caching Mechanisms:** Implements caching to store frequently accessed data for faster retrieval and improved performance.
- **Scalable Architecture:** Utilizes microservices architecture for independent scaling of components based on demand.
- **Feedback Mechanisms:** Collects user ratings and feedback to continuously improve the recommendation algorithms.

## Modules

1. **User Module**
   - **Description:** Manages user profiles, authentication, and preferences.
   - **Endpoints:**
     - `POST /users`: Create a new user profile.
     - `PUT /users/:id/preferences`: Update user preferences.
2. **Recipe Module**
   - **Description:** Handles recipe management functionalities such as adding, editing, and deleting recipes.
   - **Endpoints:**
     - `GET /recipes`: Retrieve all recipes.
     - `POST /recipes`: Add a new recipe to the system.
3. **Recommendation Module**
   - **Description:** Generates personalized recipe recommendations for users based on their preferences.
   - **Endpoints:**
     - `GET /recommendations/:userId`: Get personalized recipe recommendations for a specific user.
4. **Ingredient Module**
   - **Description:** Integrates with external APIs to fetch ingredient availability and prices.
   - **Endpoints:**
     - `GET /ingredients`: Fetch available ingredients from external sources.
5. **Cache Module**
   - **Description:** Implements caching mechanisms to store frequently accessed data.
   - **Functionality:** Utilizes caching strategies like LRU (Least Recently Used) or TTL (Time-to-Live) for optimal performance.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or on a cloud provider.
- Typeform account for user data collection.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/meetamjadsaeed/Recipe-Recommendation-System.git
   ```

````

2. Install dependencies:
   ```bash
   cd recipe-recommendation-system
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and specify the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   TYPEFORM_API_KEY=your_typeform_api_key
   ```

## Installation

```bash
$ npm install
````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
