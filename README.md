Coding Exersizes:
I built this as an assignment a year ago. It is a web site that has 4 assignments:

Assignment 1 Prime Numbers:
Prints out the first N prime numbers.

Assignment 2 DOM APIs
Write a routine to change every paragraph in a conteneditable div into a blockquote.

Assignment 3 Finding Pairs
Search an array for pairs that add up to Sum.

Assignment 4 Object Oriented Programming - Cargo Allocation 
 Given the following types of vehicles and their respective capacities:
 ● SportsCar small trunk w/100lb capacity 
 ● FamilyCar large trunk w/300lb capacity 
 ● Truck 2 doors, bed w/1500lb capacity
 ● MiniVan small rear storage area w/200lb capacity
 ● CargoVan large rear storage area with 800lb capacity
 
Write a page/script using object oriented coding style with a text box for each vehicle type, a textbox for the cargo to be allocated, and a calculate button. When the calculate button is clicked a div on the page should have the cargo allocation written to it.  
 
Example1: 
INPUT: SportsCar: 1 FamilyCar:3 Truck: 4 MiniVan: 2 CargoVan: 1 Cargo: 7356
OUTPUT: allocating 7356 lbs of cargo a SportsCar with 100 lbs a FamilyCar with 300 lbs a FamilyCar with 300 lbs a FamilyCar with 300 lbs a Truck with 1500 lbs  Truck with 1500 lbs a Truck with 1500 lbs a Truck with 1500 lbs a MiniVan with 200 lbs a MiniVan with 156 lbs a CargoVan with 0 lbs we have 0 lbs of cargo left over.

Approach:
I used mainly Vanilla Javascript driven by JQuery for the Client. There are Ajax calls that are made to Routes on the Node.js express server. I modularized the clientside to isolate the DOM, Events, and business logic. The page is rendered using Web Templating Dust.js engine. The scaffolding of the project was done with Kraken.js.

/config - Server Configuration files. These are wired by Kraken.js.
/controllers/index.js - Node.js Routes for Serving the Application and handling the Ajax request for calculating the cargo of assignment 4.
/locales - The Locale text file are in this directory. The Dust.js Templates will be compiled with the constants for this file. If I used a different language, then the text for each locale would be kept here. It decouples the content from the page.
These mirroe the /templates directory.
/public/components - bower dependencies 
/js/controllers - Each assignment has it's own controller. The core logic for each assignment are in the controllers. 
	They share the helper files for common functionality like accessing the DOM or registering events.
	/cargo-app-controller.js - Assignment 1
	/dom-api-app-controller.js - Assignment 2
	/prime-api-controller.js - Assignment 3
	/sum-pair-app-controller.js - Assignment 4
	
/js/helpers - The different components of the client side are kept in different modules. This abstraction makes the code
more maintainable and easier to read.
	ajax-helper.js - Ajax handling
	dom-helper.js - DOM handling
	events-helper.js - Event handling
	prime-helper.js - Prime Number specific functions.
	sum-pair-helper.js - Sum Pair specific functions.
	validation-helper.js - Validation functions.
	
/js/app.js - Entry point to the application.
/js/config.js - Require.js configuration
/templates - Web templating is used to render the page. Dust.js is the engine for rendering it on the server.
	/partials - Contains pieces of the page.
	index.dust - Page Container
/tasks - Grunt Tasks
/server.js - Node Server


********************
*Technologies      *
********************

Grunt.js
http://gruntjs.com/

Async.js
https://github.com/caolan/async

Bower
http://bower.io/docs/creating-packages/

Dust.js
http://www.dustjs.com/

Node.js
https://nodejs.org/en/

Express.js
http://expressjs.com/

Require.js
http://requirejs.org/

JQuery
https://jquery.com/

Material Design
https://www.google.com/design/spec/material-design/introduction.html

Kraken.js
http://krakenjs.com/