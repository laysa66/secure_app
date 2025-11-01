// export const environment = {
// apiUrl: 'https://localhost:4000/api', // HTTPS local backend
// }
export const environment = {
  production: true,
  apiUrl: '/api' // En production, on passe par le proxy Nginx
}