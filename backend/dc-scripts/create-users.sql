CREATE USER authserver WITH PASSWORD 'password';
CREATE DATABASE auth;
GRANT ALL PRIVILEGES ON DATABASE auth TO authserver;