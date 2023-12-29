# YelpCamp

YelpCamp is a Node.js web application with RESTful routing. It's a campground rating app where users can create their own campgrounds, view and comment on others' campgrounds.

## Features

- Authentication:
  - User login with username and password
  - Admin sign-up with admin code

- Authorization:
  - One cannot manage posts and view user profile without being authenticated
  - One cannot edit or delete posts and comments created by other users

- Manage campground posts with basic functionalities:
  - Create, edit and delete posts and comments
  - Upload campground photos

- Flash messages responding to users' interaction with the app

- Responsive web design

## Built with
 - Node.js
 - Express
 - MongoDB
 - Passport
 - ejs
 - Bootstrap

##Images
![image](https://github.com/sarjeetsingh-tech/yelpcamp/assets/104495979/293cd201-dd20-4866-b6c5-dbd366677109)
![image](https://github.com/sarjeetsingh-tech/yelpcamp/assets/104495979/fed38a15-abb6-49fd-9b2a-b5707047154c)
![image](https://github.com/sarjeetsingh-tech/yelpcamp/assets/104495979/5c436d2d-d85d-4f91-868c-19639db73853)
![image](https://github.com/sarjeetsingh-tech/yelpcamp/assets/104495979/a7dd9337-dfa3-4500-84c9-4b6b91d5c8fa)



## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installing

Clone the repo and install the dependencies.

```bash
git clone https://github.com/[your_username]/yelpcamp.git
cd yelpcamp
npm install


To start the express server, run the following

npm run start

Open http://localhost:3000 and take a look around.


