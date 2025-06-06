Expense Management System using MERN Stack

Vercel Link: https://expense-tracker-app-three-beryl.vercel.app/

Project Description:
The Expense Management System is a web-based application designed to assist users in tracking and managing their daily expenses. This system is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to create a scalable, responsive, and user-friendly application.

Objectives:
1. Simplify expense tracking for individuals and organizations.

2. Provide detailed insights into spending patterns to enable better financial management.

3. Offer a platform for users to create, update, and delete expenses and categories.

4. Generate comprehensive reports based on user-defined time periods and categories.
Features

User Authentication and Authorization:

Allow users to sign up and log in to their personal accounts using secure authentication mechanisms. Implement role-based access control for administrative tasks.

Expense and Category Management:

Enable users to create, update, and delete expense entries and categories. Track expenses by date, category, and description. Support attaching receipts or other relevant documents to expense entries.

Dashboard and Reporting:

Provide a visual dashboard displaying an overview of the user's expenses, including total expenses, expenses by category, and recent transactions.

Generate reports based on selected date ranges and categories, displaying pie charts and bar graphs to help users understand their spending patterns.

Responsive User Interface:

Design a clean, responsive user interface that works seamlessly across desktop, tablet, and mobile devices.

Utilize React.js for building reusable UI components and managing state effectively.

Technical Architecture:
Frontend:

Utilize React.js for building the user interface, tsparticle library for awesome background effect and used other libraries like unique-names-generator, react-datepicker, moment

Implement responsive design using CSS frameworks like Bootstrap and Material-Icons.

Backend:

Use Node.js and Express.js to build a RESTful API for handling client requests and serving as the application's backend.

Implement authentication and authorization using JSON Web Tokens (JWT) and middleware to protect endpoints.

Database:

Store all data, including user information, expense entries, and categories, in MongoDB, a NoSQL database.

Implement Mongoose ORM for schema definition and validation.

Deployment:

Deploy the application to a cloud provider like AWS and render. frontend has deployed on AWS and backend on Render.

Set up Continuous Integration and Continuous Deployment (CI/CD) pipelines for automated builds and deployments.

Run Locally
Clone the project

  git clone https://github.com/Lohith067/Internship
Go to the project directory

  cd Expense-Tracker-App
Go to the frontend directory and Install dependencies

  cd frontend
  npm install
Go to the backend directory and Install dependencies

  cd backend
  npm install
Start the frontend server

  npm start
Start the backend server

  npm run dev
Environment Variables
To run this project, you will need to add the following environment variables to your .env file in backend folder

create config folder and add config.env file in it and all all env variables there.

MONGO_URL : Your MongoDB Connection String

PORT: PORT number

Tech Stack
Client: React, Redux, react-bootstrap, Material Icons, tsparticles

Server: Node, Express

Database: MongoDB

Screenshots

![68747470733a2f2f692e706f7374696d672e63632f36714c5233574e742f457870656e73652d4d616e6167656d656e742d53797374656d2d42726176652d31392d30342d323032332d31312d30382d35332e706e67](https://github.com/user-attachments/assets/78b3082c-4d25-4ba4-bfdf-2446ea765b27)

![68747470733a2f2f692e706f7374696d672e63632f44796e4c4e58715a2f457870656e73652d4d616e6167656d656e742d53797374656d2d42726176652d31392d30342d323032332d31312d30382d35392e706e67](https://github.com/user-attachments/assets/d0f1cd59-dc4e-4a5b-9189-639811856872)

![68747470733a2f2f692e706f7374696d672e63632f4479364c337767632f457870656e73652d4d616e6167656d656e742d53797374656d2d42726176652d31392d30342d323032332d31312d31352d34362e706e67](https://github.com/user-attachments/assets/11a89378-4fc5-48c7-8a38-89928259ab26)

![68747470733a2f2f692e706f7374696d672e63632f313359463437626e2f457870656e73652d4d616e6167656d656e742d53797374656d2d42726176652d31392d30342d323032332d31312d31352d35342e706e67](https://github.com/user-attachments/assets/ffbe4f1a-6659-4370-918a-2e9ad003a2ea)

![68747470733a2f2f692e706f7374696d672e63632f7277705756325a322f457870656e73652d4d616e6167656d656e742d53797374656d2d42726176652d31392d30342d323032332d31312d31362d30312e706e67](https://github.com/user-attachments/assets/139db491-7b8a-42a7-91bf-774b72a5209c)






