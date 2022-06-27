use employees;

-- Department Table
INSERT INTO department (name)
    VALUES 
    ("Sales"),
    ("Logistics"),
    ("IT"),
    ("Procument"),
    ("Assambly")

-- Role table
    INSERT INTO role (dept_id, title, salary)
    VALUES
    (1, "Account Manager", 105000),
    (2, "Transportation Coordinator", 65000),
    (3, "Database Engineer", 150000),
    (4, "Purchasing Lead", 72000),
    (5, "Floor Supervisor", 68000)