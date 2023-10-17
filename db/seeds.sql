
INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('HR'),
  ('Project Management'),
  ('Design'),
  ('Sales');


INSERT INTO role (title, salary, department_id)
VALUES
  ('Software Engineer', 80000.00, 1),
  ('HR Manager', 60000.00, 2),
  ('Project Manager', 85000.00, 3),
  ('UI Designer', 75000.00, 4),
  ('Sales Representative', 70000.00, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, NULL),
  ('Michael', 'Johnson', 3, 1),
  ('Sarah', 'Williams', 4, 2),
  ('David', 'Brown', 5, 2);
