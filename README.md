# Starter kit with Apollo server and client

The goals of this starter kit are to:

1.  Help jump start a GraphQL project (fullstack, server, or client). The instructions below wire up a fullstack GraphQL project. The `server` and `client` folders can also stand alone.
1.  Provide an example of a scalable GraphQL architecture/folder structure

## Demo

http://apollo-fullstack-starter-kit.herokuapp.com/

## Features

1.  Node/Express server with apollo-server-express
1.  apollo-link-http, apollo-link-error, and apollo-link-state wired up on client
1.  Starter code for http and state link
1.  Schemas and resolvers organized by model/module
1.  create-react-app for client
1.  Easy deployment to Heroku

## Getting Started

#### Install yarn

1.  `npm i -g yarn`

#### Clone repository

2.  `git clone git@github.com:michaelcheng924/apollo-fullstack-starter-kit.git`

#### Install dependencies for server and client

3.  `yarn install:all`

#### Start server

4.  `yarn start:server`

#### In another terminal tab - Start client (React app)

5.  `yarn start:client`
6.  App should open in browser at `localhost:3000`. If not, go to `localhost:3000`

#### Edit code

6.  Edit the code in src/server and src/client

## Deploying to Heroku

1.  Download Heroku CLI and log in
1.  `heroku create app-name`
1.  `git push heroku master`

## Apollo/GraphQL Examples

https://github.com/michaelcheng924/apollo-graphql-examples

The repository above contains examples for:

1. Subscriptions
2. Authentication (WIP)
3. Pagination (WIP)
4. React Native (WIP)

## Todos/Contributing

1.  If you have an idea or want to contribute, simply create an issue and/or submit a pull request!
