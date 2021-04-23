# Basic User-Activity APP

## Technologies used:

1. React JS (typescript) 
2. Node JS (typescript) 
3. MonogDB (database) 
4. GraphQL (data-query)

## App Description:

User activity tracking by different parameters (page load,mouse hover,mouse click) , all data gathered are send to the node js server through graphql and stored in database. In the app i build a simple user activity cache system using localstorage on the client side, as we dont have a lot of requests.

## About stack that I was using:

**React** is pretty awesome for single page aplication combined with `material-ui` for the style. **GraphQL** helped me to not go hard on the backend with the requests (instead of rest api) multi data `POST` and `GET` in single request. I used **MongoDB** here we don't need relations in the database and it's pretty fast. And **NodeJs** on the backend because it's pretty simple to create a server. I used **typescript** in the whole project because that helped me for data maping and data types.

## Running the project
You can run this project with `npm run start` in the server folder and in the client folder also `npm run start`. (You also need local mongo database connection)
