
# MERN Todo App

A simple Todo application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Users can create, edit, update, and delete(CRUD) their todo lists.Used Tailwind for Styling,responsive design.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Create Todo:** Users can create a new todo item with a title and description.
- **Edit Todo:** Modify the title and description of an existing todo.
- **Update Todo:** Mark a todo as completed or reopen it.
- **Delete Todo:** Remove a todo from the list.
- **Responsive Design:** The app is designed to work seamlessly on various devices and screen sizes.

## Prerequisites

Make sure you have the following installed before running the application:

- Node.js and npm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Piyush5784/todoApp.git
2. Change into the project directory:
 ``cd server && npm install 
 ``
 ``
 cd client && npm install
 ``
 ## Usage
 ----- Start Client & Server
 ``npm run dev ``
 ``npx nodemon app.js``

#### Use concurrently for running client and server in the same terminal for that just install concurrently in main folder using command(optional)
``npm init -y``
``npm install concurrently ``
#### Change scripts in client,server and main 
1. Main
``"client": "cd Client && npm start",``
``"server": "cd Server && npm start",``
``"dev": "concurrently \"npm run Client\"  \"npm run Server\""``
2. client
``"start": "vite"``
3. server 
 ``"start": "npx nodemon app.js"``
 4. Run client and server in one terminal
	 ``npm run dev``
## License

This project is licensed under the MIT License.
