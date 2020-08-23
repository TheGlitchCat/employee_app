CREATE DATABASE Employees;

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    funct VARCHAR(255)
);

INSERT INTO employee(name, funct) VALUES
    ('jose', 'asesor'),
    ('juan', 'Dev');