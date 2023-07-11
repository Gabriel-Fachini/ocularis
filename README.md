# Ocularis

## [Link to Figma](https://www.figma.com/file/JscsXqK1cnMdkIQfJeisMQ/Web-dev-online-store?type=design&node-id=2%3A5&t=45La1o0rPl0CuJ8D-1) with all mockups.

## Authors

#### Group 7

- Israel Felipe da Silva - 11796531
- Gabriel Fernando Machado Fachini - 11953481

## Requirements

Ocularis is an online optical store that sells glasses and related products. The platform has all the features for customers to view, select, and purchase products. The platform also offers an additional search bar functionality along with an integrated chatGPT feature, allowing customers to select specific eyewear specifications and receive a model recommendation based on those specifications.

In addition to the requirements defined in the project specification, the system has the following requirements:

- The platform sells glasses and other related products.
- The customer can only make a purchase if they are properly logged in.
- The customer can receive a personalized recommendation for eyewear based on selected specifications.
- The system will store data on items, user accounts, and orders.

## Project Description

### Functionality

- The user can view and search for keywords for all items available on the platform and their availability in stock.
- The user can select a specific item and view more specifications about it.
- The user can log in to the system or register if they haven't done so already.
- The user can request a personalized eyewear recommendation based on certain specifications.
- The user can select a specific item and quantity and purchase it, provided they are already logged in to the page.
- The user can view and edit their data and see their completed orders.
- The Admin can view, edit, remove, and add products.
- The Admin can view and remove user accounts.
- The Admin can view all completed orders, items, user accounts, and orders.

- ### Extra Functionality

Example to show the extra functionality with chat gpt working:
![Get The attributes](https://i.ibb.co/NFYC8rz/Captura-de-Tela-117.png)
![Get The Recommendation](https://i.ibb.co/RpFShBz/Captura-de-Tela-118.png)

### Navigation Diagram

<img src='diagrama2.png' />

### Server Connection

The system will have a connection to a server to operate with the data that will be used on the platform. The information that will be saved on the server is related to the items offered by the platform, account data, and completed orders.

- Items: Name, ID, Photos, Description, Price, Brand, Slug, Quantity in Stock, Quantities Sold
- Admin Account: Name, ID, Email, Password
- Customer Account: Name, ID, Phone Number, Email, Password, Address, ID Card (RG), Tax ID Number (CPF), Date of Birth
- Orders: ID, Customer ID, Item ID, Total Amount, Date

All requests to the server will follow CRUD operations, using the HTTP protocol to connect to the API.

# Tech Stack

![MERN stack](https://res.cloudinary.com/silenceiv/image/upload/c_fill,h_205,w_512/v1617484581/mern_sakbwj.png)

- MERN (MongoDB, Express.js, React, and Node.js) Solution stack;
- Responsive Design;
- UX & UI;
- Validation and error handling.

## Comments about the code

During the development of this project, the group used several good practices in the code, with good modularity in the front-end and back-end, dividing all the codes into folders, making it cleaner and easier to understand the purpose of each code. The code doesn't have specific comments, but we've made sure that all the folder, file, function, and variable names are informative and self-documented, to help anyone understand what each line is about.

## Test Plan

We have tested our backend by making requests to the endpoints with insomnia. After integrating the backend and frontend we tested the same functionalities, but now seeing the results in the interface.

The test procedures were mostly made manually, for example: We created a post request to create a new product by changing the fields in the body observing the status of the response, forcing some requests to return errors or success, after that we confirmed the result by seing the updates made in our database. The same Idea was made with our frontend.

These procudures were done with all routes,that is, we tested all CRUD operations with products, user and orders.

## Test Results

From the test plan discussed above, we ensure the correct functioning of our backend and frontend. All functionality has been tested with many combinations of all possible response statuses.

## Construction and execution procedures

Use the package manager [npm](https://docs.npmjs.com/) to install.

```bash
cd frontend
npm install
npm run dev
```

The app will run on http://localhost:3000/

```bash
cd backend
npm install
npm run dev
```

The server will run on http://localhost:4000/

## Problems

During the development of this project, as we expected, we faced some implementation problems, but we managed to overcome them by learning good practices and tools that help us to solve these problems

Also, another issue faced was related to extra functionality about getting recommendations with GPT chat, due to rate limit of the free key, getting error status 429 from API. From that, we've decided to implement a new feature which is the search bar to search for products based on keywords.

## Comments

The use of typescript, eslint and zod (form validator) helped us to avoid some bugs and unexpected behavior.

Also, using vite instead of CRA gave us a faster and more robust way to run our react app.

This project gave us the perspective of a real world project, making us learn all the necessary features and technologies to build our web-ecommerce from scratch.
