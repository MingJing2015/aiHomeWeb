# NasShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NAS Shop
https://mingjing2015.github.io
https://github.com/MingJing2015/NAS-Shop


## Good : 
https://pacific-plains-55185.herokuapp.com    --- for NAS wallet

https://obscure-plateau-31248.herokuapp.com   --- for Angular Client API


## bad :

https://rocky-earth-60358.herokuapp.com 
https://mysterious-caverns-16146.herokuapp.com 


NAS Shop : 

https://boiling-forest-29218.herokuapp.com

    See: Mean.js word document:


    •	Copy file server.js from mongoexpress app to root of angular-express app.


    • In server.js : Change static location from client to src around line 20

            app.use(express.static(path.join(__dirname, "/dist/nas-shop/")));

    •	Copy file .bowerrc from mongoexpress app to root of angular-express app.
    
    •	Edit .bowerrc change client to src : 

    •	Copy folder db, routes and views from mongoexpress app to root of angular-express app.
    •	Edit routes/students.js and make the URLs consistent by making all endpoints /api/students
    •	( /students => /api/students )


    npm install express body-parser mongojs --save
    npm install ejs ejs-locals --save
    bower install bootstrap
    nodemon server.js

    •	http://localhost:3000
    •	http://localhost:3000/api/students
    •	http://localhost:3000/forms/list
    •	Change the “start” script in your package.json to: "start": "node server.js"

       "lint": "tslint \"src/**/*.ts\"",
        "postinstall": "ng build"


    Heroku
    Download and install Heroku-CLI from: npm install (  npm install -g heroku ) , then publish server end to Heroku  [ brew install heroku/brew/heroku     - for Mac Pro]
    1.	Git init  ( )

    git init
    git add .
    git commit -m "initial commit"
    heroku login
    heroku create	
    git push heroku master
    heroku open

## Need change before git push heroku master !!

contract.service
remote.service
student.service   

    //private contractUrl = '/api/contracts';                          // Internet 
    private contractUrl = 'http://127.0.0.1:3000/api/contracts';       // For local debug, need open CORS on Chrome 

## Notice 1

    Nonce = Number(this.nonce) + 1;   // Nonce, Can not more add 1 !!! should add 1 before use it !!!


## Notice 2

   //constructor(private http: HttpClient) { }   // Can not be used : HttpClient ?????
    constructor(private http: Http) {}

## 3.

npm install --save angular2-cookie;




