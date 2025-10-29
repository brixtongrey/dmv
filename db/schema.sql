DROP TABLE IF EXISTS persons CASCADE;
DROP TABLE IF EXISTS licenses;

-- TODO: create "persons" and "licenses" tables
CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE licenses (
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    eye_color TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    person_id INTEGER UNIQUE NOT NULL REFERENCES persons(id) ON DELETE CASCADE
);