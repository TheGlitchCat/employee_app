const { Router } = require('express');
const router = Router();

const { getEmployees, 
        createEmployee, 
        getEmployeeById, 
        deleteEmployeeById, 
        updateEmployeeById,
        getRelations,
        createRelation,
        getRelationById,
        updateRelationById,
        deleteRelationById } = require('../controller/index.controller');



// Employees

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.put('/employees/:id', updateEmployeeById);
router.delete('/employees/:id', deleteEmployeeById);
router.post('/employees', createEmployee);

// Relation

router.get('/relations', getRelations);
router.post('/relations', createRelation);
router.get('/relations/:id', getRelationById);
router.put('/relations/:id', updateRelationById);
router.delete('/relations/:id', deleteRelationById);

module.exports = router;
