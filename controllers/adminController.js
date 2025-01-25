const Role = require('../models/Role');
const User = require('../models/User');
const { getEnforcer } = require('../casbinEnforcer'); // Import getEnforcer function

// Create Role
const createRole = async (req, res) => {
    const { roleName } = req.body;
    if (!roleName) return res.status(400).json({ message: 'Role name is required.' });
    const newRole = await Role.create({ name: roleName });
    res.status(201).json(newRole);
};

// Create Policy
const createPolicy = async (req, res) => {
    const { role, module, action } = req.body;
    if (!role || !module || !action) return res.status(400).json({ message: 'All fields are required.' });
    
    const enforcer = await getEnforcer(); // Get the initialized enforcer
    await enforcer.addPolicy(role, module, action);
    await enforcer.savePolicy();
    res.status(201).json({ message: 'Policy added successfully.' });
};

// Create User
const createUser = async (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) return res.status(400).json({ message: 'All fields are required.' });
    const newUser = await User.create({ username, password, role });
    
    const enforcer = await getEnforcer(); // Get the initialized enforcer
    await enforcer.addGroupingPolicy(username, role);
    await enforcer.savePolicy();
    res.status(201).json(newUser);
};

module.exports = { createRole, createPolicy, createUser };
