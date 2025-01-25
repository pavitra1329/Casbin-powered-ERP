// casbinEnforcer.js

const { newEnforcer } = require('casbin');

let enforcer;

const initializeEnforcer = async () => {
    try {
        enforcer = await newEnforcer('config/casbin/model.conf', 'config/casbin/policy.csv');
        console.log('Enforcer initialized successfully');
    } catch (error) {
        console.error('Error initializing enforcer:', error);
        throw error; // Rethrow so we can handle it when calling
    }
};

const getEnforcer = async () => {
    if (!enforcer) {
        await initializeEnforcer(); // Ensure enforcer is initialized
    }
    return enforcer;
};

module.exports = { getEnforcer };
