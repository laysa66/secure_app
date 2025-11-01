import 'dotenv/config'

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET manquant dans .env')
}

export const JWT_SECRET: string = process.env.JWT_SECRET
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '15m'
export const REFRESH_EXPIRATION = process.env.REFRESH_EXPIRATION || '7d'