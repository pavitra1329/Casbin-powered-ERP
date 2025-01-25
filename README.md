# Casbin-Powered-ERP

A role-based access control (RBAC) powered ERP system built with **Node.js** and **Casbin**, allowing a **Master Admin** to manage users, roles, policies, and module permissions effectively. This project provides a flexible authorization system for multiple ERP modules such as marriage registration, birth registration, and more.

## Features

- **User Management:** Create, update, and assign roles to users.
- **Role Management:** Define roles with specific permissions.
- **Policy Management:** Assign policies to roles dynamically.
- **Module-Based Access:** Granular control over module functionalities.
- **Casbin Authorization:** Fine-grained access control with policy enforcement.
- **Secure and Scalable:** Designed for scalability and security.

## Tech Stack

- **Backend:** Node.js (Express.js)
- **Authorization:** Casbin (RBAC Model)
- **Database:** PostgreSQL (or configurable for other databases)
- **Middleware:** Express.js
- **Authentication:** JWT-based authentication (optional)

## Installation Guide

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pavitra1329/Casbin-powered-ERP.git
   cd Casbin-powered-ERP
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   DB_URL=your_database_url
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000`.

## Usage Instructions

### Running the App

- To start the application: `npm start`
- To run in development mode: `npm run dev`
- To run tests: `npm test`

## API Endpoints

| Endpoint               | Method | Description                       |
|-----------------------|--------|-----------------------------------|
| `/admin/create-role`   | POST   | Create a new role                 |
| `/admin/create-policy` | POST   | Add a policy to a role             |
| `/admin/create-user`   | POST   | Create a new user                  |
| `/admin/assign-role`   | POST   | Assign role to a user               |
| `/modules/marriage/register` | POST   | Register a marriage module          |
| `/users/list`          | GET    | Get the list of all users           |

## Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push the branch and create a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

## Contact

For any queries, feel free to reach out:
Happy coding! 🚀
