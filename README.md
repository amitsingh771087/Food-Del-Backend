# Food Delivery Application

**Deployment Links:**

- **Admin Frontend:** [Admin Frontend Deployment](https://food-del-frontend-admin-61ou2vkbu-amitsingh771087s-projects.vercel.app/)
- **User Frontend:** [User Frontend Deployment](https://food-del-frontend-user-92jl.vercel.app/)
- **Backend:** [Backend Deployment](https://food-del-backend.onrender.com)  
  *Note: The backend is deployed on Render's free plan and may go to sleep mode after inactivity. It will resume after approximately 1.5 minutes.*

![MERN Stack](https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png) <!-- MERN Stack Logo -->

This repository contains the complete Food Delivery application, including the Admin Frontend, User Frontend, and Backend. The application allows users to order food online and provides an interface for administrators to manage the system.

## Project Overview

The Food Delivery application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates Stripe for payment processing.

### Admin Frontend

The admin frontend provides an interface for administrators to manage food items and orders.

- **Features:**
  - Manage food items: Add, delete, and update food items.
  - View and manage orders.
  - Update order statuses (e.g., preparing, out for delivery, delivered).
  - User authentication for secure access.

- **Installation:**
  1. Clone the repository:
     ```bash
     git clone https://github.com/amitsingh771087/food-Del-Frontend-admin.git
     ```
  2. Navigate to the project directory:
     ```bash
     cd food-Del-Frontend-admin
     ```
  3. Install dependencies:
     ```bash
     npm install
     ```
  4. Start the development server:
     ```bash
     npm start
     ```

### User Frontend

The user frontend allows users to browse food items, manage their cart, and place orders.

- **Features:**
  - Browse and view food menu.
  - Add items to the shopping cart and adjust quantities.
  - Proceed to checkout and place orders.
  - Track the status of orders.

- **Installation:**
  1. Clone the repository:
     ```bash
     git clone https://github.com/amitsingh771087/food-del-frontend-user.git
     ```
  2. Navigate to the project directory:
     ```bash
     cd food-del-frontend-user
     ```
  3. Install dependencies:
     ```bash
     npm install
     ```
  4. Start the development server:
     ```bash
     npm start
     ```

### Backend

The backend provides RESTful APIs for food management, order handling, user authentication, and payment processing.

- **Features:**
  - APIs for managing food items: Add, delete, and update.
  - Order management: Create, update, and fetch orders.
  - User authentication: Registration and login.
  - Payment integration: Stripe integration for processing payments.

- **Installation:**
  1. Clone the repository:
     ```bash
     git clone https://github.com/amitsingh771087/Food-Del-Backend.git
     ```
  2. Navigate to the project directory:
     ```bash
     cd Food-Del-Backend
     ```
  3. Install dependencies:
     ```bash
     npm install
     ```
  4. Configure environment variables:
     Create a `.env` file in the root directory and add your configuration settings (e.g., database connection string, Stripe keys).
  5. Start the server:
     ```bash
     npm start
     ```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
