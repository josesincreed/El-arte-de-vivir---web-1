# E-commerce "El Arte de Vivir"

The e-commerce site is developed using HTML, CSS, JavaScript, Vite, and Tailwind CSS. It features a shopping cart system, dynamic product pages, contact forms, and user-friendly navigation, offering an accessible and elegant online shopping experience focused on handmade art.


# Project Objective

 To develop a functional and accessible e-commerce platform that allows:

- Adding products to the shopping cart 🛒

- Managing shipping forms 📦

- Integrating with a secure payment gateway 💳

- Including contact forms for customer support 📬

- User login system

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Key Features

- 🛒 Shopping Cart – Add, update, or remove products from the cart in real time.

- 📦 Shipping Form – Customers can enter their delivery details through an easy-to-use form.

- 💳 Payment Gateway Integration – Ready for integration with secure payment platforms.

- 🔐 User Authentication – Secure login and registration for users.

- 📱 Responsive Design – Fully compatible with mobile devices and tablets.

- 🧾 Order Status Tracking – Track the purchase process through multiple order states (e.g., pending, in process, approved, delivered).

- 📬 Contact Form – For customer support, questions, or custom orders.

## Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your system.

**Node.js:** (version 20 or higher recommended)
- Download from: nodejs.org

## Quick Start
Follow these steps to start working on the project:
**1. Clone the Repository:**
```sh
git clone <https://github.com/josesincreed/El-arte-de-vivir---web-1.git>
Replace <REPOSITORY_URL> with the actual URL of your repository.
```
**2. Navigate to the Project Directory:**
```sh
cd <DIRECTORY_NAME>
Replace <DIRECTORY_NAME> with the name of the directory that was created when cloning the repository.
```
**3. Install Dependencies:**
```sh
npm install
```
This command will install all the necessary dependencies defined in `package.json`.

## Development
To start the development server, run the following command:
```sh
npm run dev
```
This will start the server at `http://localhost:5173` (or the port configured in `vite.config.js`). The browser will open automatically (or you can open it manually) to display your application. Changes you make to the `src` files will be instantly reflected in the browser thanks to Vite's hot reload.

## Production Build
To build the project for production, use the following command:
```sh
npm run build
```
This command will create a `dist` folder in the project root. This folder will contain the optimized files for deployment.

## Preview Production Version
To preview the production version locally, run:
```sh
npm run preview
This command will start a local server that serves the files in the dist folder.
```

## Essential Commands
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Locally previews the production version.

## Project Structure
```Markdown

tailwind-boilerplate-master/
├── public/                 # Public static files
│   ├── favicon.ico         # Site icon
├── src/                    # Application source files
│   ├── assets/
│   │   └── css/
│   │       └── style.css   # Main CSS file
│   ├── js/                 
│   │   ├── shared/         
│   │   └── index.js        # Main JS file
│   └── index.html          # Application entry point
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## License
This project is licensed under the `BSD 3-Clause` License. See the `LICENSE` file for more details.
