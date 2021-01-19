# vbi-music-app

The app is divided in two main parts

1. vbi-backend -> Nodejs + Expressjs based REST apis
1. vbi-ui -> react SPA (CSR)

## Tech stack

1. Front end

- React - View library
- React-dom - View renderer
- zustand - state management
- normalise.css - css
- react-bootstrap - component library

2. Back end

- Nodejs + expressjs - server
- express-router - api routing
- express-session - session management
- postgressql - database
- sequelise - ORM tool
- auth0 - Authentication
- JWT - Authorization

## How to run

### Front end

1. open terminal
1. cd vbi-ui
1. npm ci
1. Create .env file and add proper content to it
1. npm start
1. front end will start running on port http://localhost:3000

### back end

1. open terminal
1. cd vbi-backend
1. npm ci
1. Create .env file and add proper content to it
1. npm start
1. back end will start running on http://localhost:2000
