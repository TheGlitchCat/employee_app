const { Pool } = require('pg');

const pool = new Pool ({
    host:'localhost',
    user:'postgres',
    password: 'admin1234',
    database:'Employees',
    port:'5432'
})

// Employees

const getEmployees = async (req, res) => {
    const response = await pool.query('SELECT * FROM employee');
    // console.log(response.rows);
    res.status(200).json(response.rows);
}


const createEmployee = async (req, res) => {
    const {name, funct} = req.body;
    const response = await pool.query('INSERT INTO employee(name, funct) VALUES ($1, $2)', [name, funct]);
    console.log(response);
    res.json({
        message: 'Employee Created',
        body:{
            employee: {name, funct}
        }
    });
}


const getEmployeeById = async (req, res) => {
    const employee_id = req.params.id;
    const response = await pool.query('SELECT * FROM employee WHERE id = $1', [employee_id]);
    res.json(response.rows);
    
}


const updateEmployeeById = async (req, res) => {
    const employee_id = req.params.id;
    const {name, funct} = req.body;
    const response = await pool.query('UPDATE employee SET name = $1, funct = $2 WHERE id = $3', [
        name,
        funct,
        employee_id]);

    res.json('Employee updated');
    
}


const deleteEmployeeById = async (req, res) => {
    const employee_id = req.params.id;
    const response = await pool.query('DELETE FROM employee WHERE id = $1', [employee_id]);
    res.json(`Employee ${employee_id} DELETED!`);
    
}


// Relations

const getRelations = async (req, res) => {
    const response = await pool.query('SELECT * FROM rela');
    res.status(200).json(response.rows);
}


const createRelation = async (req, res) => {
    const {employee_id, boss_id} = req.body;
    const response = await pool.query('INSERT INTO rela(employee_id, boss_id) VALUES ($1, $2)', [employee_id, boss_id]);
    console.log(response);
    res.json({
        message: 'Relation Created',
        body:{
            relation: {employee_id, boss_id}
        }
    });
}


const getRelationById = async (req, res) => {
    const relation_id = req.params.id;
    const response = await pool.query('SELECT * FROM rela WHERE id = $1', [relation_id]);
    res.json(response.rows);
    
}


const updateRelationById = async (req, res) => {
    const relation_id = req.params.id;
    const {employee_id, boss_id} = req.body;
    const response = await pool.query('UPDATE rela SET employee_id = $1, boss_id = $2 WHERE id = $3', [
        employee_id, 
        boss_id,
        relation_id]);

    res.json('Relation updated');
    
}


const deleteRelationById = async (req, res) => {
    const relation_id = req.params.id;
    const response = await pool.query('DELETE FROM rela WHERE id = $1', [relation_id]);
    res.json(`Relation ${relation_id} DELETED!`);
    
}




module.exports = {
    getEmployees,
    getEmployeeById,
    deleteEmployeeById,
    createEmployee,
    updateEmployeeById,
    getRelations,
    createRelation,
    getRelationById,
    updateRelationById,
    deleteRelationById
}