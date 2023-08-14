# Colombian Dictionary App

In this repository you will find the essentials to create a Colombian dictionary app.

We will be using Read, Node/Express and MySQL.

# Set - up

You'll have to clone the repository.

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=colombian_dictionary
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

You have a Colombian dictionary database sql with the prompts to create a DB with 30 colombian words. Each has a word, category, definition_es, definition_en and 2 examples.The definition_en is not nullable however if you set it to null you can then use another API to autotranslate it.

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`
