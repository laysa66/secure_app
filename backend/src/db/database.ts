import pg from 'pg'

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://secureapp:secureapp@localhost:5432/secureapp'
})

export default pool