const { Router } = require('express');
const router = Router();

const { getEmployees, 
        createEmployee, 
        getEmployeeById, 
        deleteEmployeeById, 
        updateEmployeeById } = require('../controller/index.controller');

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployeeById)
router.put('/employees/:id', updateEmployeeById)
router.delete('/employees/:id', deleteEmployeeById)
router.post('/employees', createEmployee)

module.exports = router;
