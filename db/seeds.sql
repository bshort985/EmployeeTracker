use employees;

-- Department
INSERT INTO department (name)
    VALUES 
    ("Sales"),
    ("Logistics"),
    ("IT"),
    ("Procument"),
    ("Assambly");

-- Role one manager and one subordinate
    INSERT INTO role (department_id, title, salary)
    VALUES
    (1, "Account Manager", 105000),
    (1, "Salesperson", 65000),
    (2, "Transportation Manager", 100000),
    (2, "Tansportation Coordinator", 65000),
    (3, "Technology Manager", 200000),
    (3, "Database Engineer", 150000),
    (4, "Purchasing Lead", 72000),
    (4, "Procument Specialist", 52000),
    (5, "Floor Supervisor", 68000),
    (5, "Line Associate", 45000);

    -- Employee link the manager to the employee using ID's
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES
    ("William", "Butcher", 1, NULL),
    ("Hugh", "Cambell", 2, 1),
    ("Annie", "January", 3, NULL),
    ("Melvin", "Milk", 4, 3),
    ("Wade", "Wilson", 5, NULL),
    ("Dan", "Man", 6, 5),
    ("Guy", "Dude", 7, NULL),
    ("Gunther", "O'Dim", 8, 7);