DROP TABLE if EXISTS users;
DROP TABLE if EXISTS user_list;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    password_digest VARCHAR NOT NULL
);

CREATE TABLE user_list(
    id SERIAL PRIMARY KEY,
    activity VARCHAR NOT NULL,
    finished BOOLEAN NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL
);
