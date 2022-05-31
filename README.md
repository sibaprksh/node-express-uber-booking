# Minified Uber

A small express server to book a trip within threshold distance

---

## Requirements

- We only need Node.js and npm, installed in our environement.

## Enhancement

- For database we can use mongodb with mongoose (model.js file will be updated)
- For authentication, we can use jwt token

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/sibaprksh/node-express-uber-booking.git
    $ cd node-express-uber-booking
    $ npm install

## Configure app

Open `config/environment.js` then edit it with your settings. You will need:

- distance_threshold: maximum distance between user & driver;
- port (optional): express server port number

## Running the project

    $ npm start

## Running development (with nodemon)

    $ npm start-dev

## API list

- Signup: [POST] /api/users/signup
- login: [POST] /api/users/login
- driver-available-update: [PATCH] /api/users/available
- driver-unavailable-update: [PATCH] /api/users/unavailable
- booking: [POST] /api/bookings/tripEnd
