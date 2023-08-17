# Colombian Dictionary App

If you have any colombian person next to you, you can tell they speak in a very specific way. So much so there have been many attempts to capture the nuances of our Spanish.

The idea was born as there is no ressources where you could browse the colombian specific words, you can find a myriad of website listing them but you would need to find a specific word using other methods. Further more, they are considered slang there's a lack of propper explanation or even an attempt to define them. I wanted to elevate these words and give them a place among the other dictionaries there are.

This is an MVP with the idea of continue growing with features like including more words
In this repository you will find the essentials to create a Colombian dictionary app.

This is my first full stack app built using React, Node/Express, Vite and MySQL.

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
