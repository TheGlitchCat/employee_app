CREATE DATABASE Employees;

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    funct VARCHAR(255)
);

INSERT INTO employee(name, funct) VALUES
    ('jose', 'asesor'),
    ('juan', 'Dev');


CREATE TABLE rela(
    id SERIAL PRIMARY KEY,
    employee_id INTEGER,
    boss_id INTEGER
)

INSERT INTO rela(employee_id, boss_id) VALUES
    (1, 2);