CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
login TEXT UNIQUE NOT NULL,
password_hash TEXT NOT NULL,
role TEXT DEFAULT 'user'
);
SELECT 'Base de données initialisée avec succès !' AS message;
