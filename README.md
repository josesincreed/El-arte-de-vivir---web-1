# E-commerce "El Arte de Vivir"

El Arte de Vivir es un proyecto de emprendimiento impulsado por una madre que busca digitalizar su negocio artesanal a través de una tienda en línea. El propósito principal es brindar oportunidades de empleo a mujeres con discapacidades, fomentando así la inclusión, la independencia y el empoderamiento femenino por medio del arte y la tecnología.

# Objetivo del Proyecto

  Desarrollar un e-commerce funcional y accesible que permita:

- Añadir productos al carrito de compras 🛒

- Gestionar formularios de envío 📦

- Integrarse con una pasarela de pagos segura 💳

- Incluir formularios de contacto para atención al cliente 📬

- Inicio de sesión

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
git clone <REPOSITORY_URL>
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