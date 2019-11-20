#Friend Finder
## Deployed Link
 [see it here](https://murmuring-plains-79661.herokuapp.com/)
## Purpose
This APP helps the user find a friend. Using a basic survey an array of friends. This App was developed to learn about express.js server creatation and routing. 
## Overview
When the user visits the Web Site they are asked to fill out a survey. That data is then sent with an ajax post request where on the server it is added to the list of friends. Then the new user is compared to the users in the database(in this case it is just an array), and the User with the most similiar tasted is found and then rendered to the DOM in a modal. there is also access to the JSON of the entire users Array.
## Technologies Used
- Javascript
- Jquery
- Node
- Heroku
- modules 
    - [express.js](https://expressjs.com/)
    - [path](https://nodejs.org/api/path.html)
## Possible Improvements
- Add an actual database
- Add a search function
- A page to see all friends
