# FriendFinder
This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
This is a good app to start learning how to create APIs using Express.js framework, and Routing. Routing is how we design our server to handle responses when a client makes a request at a specific endpoint, or URL.

## Getting Started
* Before starting with you need to install Nodejs and have basic understanding of it and npm (node package manager) this is the official line for the documentation [Nodejs Docs](https://nodejs.org/en/docs/), also know how to clone repositories from Github to your local machine [Git Reference](https://www.git-scm.com/docs). 

## Installing and Starting the app locally

Clone the app from this repository to you local drive of you PC (previously I recomended to have knowledge of how to clone repositories and where to find the information) and go to the root directory of the project, then run the command

```
npm install
```
This will take a while, but should install node modules within the server and the client folder.

Make sure Mongodb is running, if it is not running the Express server still will run, but it will throw an error and the database for the project will not be created. 

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## Built With

### for the back end server and data persistance
* Visual Studio Code
* Nodejs 
* Express
 

### client side for the user interface.
* HTML, CSS, Javascript
* JQUERY, Bootstrap
# Author
* Wilson Linares 
