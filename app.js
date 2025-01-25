const express = require('express');
const sequelize = require('./db');
const adminRoutes = require('./routes/adminRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const { getEnforcer } = require('./casbinEnforcer'); // Import the function

const app = express();
app.use(express.json());

// Dummy authentication middleware (for now)
app.use((req, res, next) => {
    req.user = { role: 'master_admin' }; // Example
    next();
});

// Use routes
app.use('/admin', adminRoutes);
app.use('/modules', moduleRoutes);

const startServer = async () => {
    try {
        await getEnforcer(); // Ensure enforcer is initialized before starting the server
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    } catch (error) {
        console.error('Failed to initialize enforcer:', error);
        process.exit(1); // Exit if enforcer fails to initialize
    }
};

startServer(); // Start the server after enforcer is ready
