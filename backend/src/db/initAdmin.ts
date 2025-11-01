import pool from './database.js'
import bcrypt from 'bcryptjs'
export async function ensureAdmin() {
    const hash = await bcrypt.hash('admin', 10);
    await pool.query(
        `INSERT INTO users (login, password_hash, role)
        VALUES ('admin', $1, 'admin')
        ON CONFLICT (login) DO NOTHING`,
        [hash]

)
    const userHash = await bcrypt.hash('Secure123!', 10);
    await pool.query(
        `INSERT INTO users (login, password_hash, role)
        VALUES ('bob', $1, 'user')
        ON CONFLICT (login) DO NOTHING`,
        [userHash])

console.log('👍 Compte admin vérifié ou créé');
}