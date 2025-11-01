# ============================================
# Étape 1 : Build Angular
# ============================================
FROM node:22-alpine AS build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie de tout le code source
COPY . .

# Build de production Angular
RUN npm run build -- --configuration production

# ============================================
# Étape 2 : Serveur Nginx
# ============================================
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Suppression du contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie du build Angular
# Pour Angular 18+, le chemin est : dist/frontend/browser/
COPY --from=build /app/dist/frontend/browser/ /usr/share/nginx/html/

# Copie de la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]