# ============================================
# Étape 1 : Build TypeScript
# compile ts en js 
# ============================================
FROM node:22-alpine AS build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie de la configuration TypeScript
COPY tsconfig.json ./

# Copie du code source <-----
COPY src ./src

# Compilation TypeScript vers JavaScript
RUN npx tsc -p tsconfig.json --pretty false --noEmitOnError false && \
    echo "Compilation TS terminée" && \
    ls -la dist

# ============================================
# Étape 2 : Exécution en production
# utilisation d'une image legere avec le code compilé 
# ============================================
FROM node:22-alpine AS runtime

WORKDIR /app

# Variable d'environnement de production
ENV NODE_ENV=production

# Copie du code compilé depuis l'étape build
COPY --from=build /app/dist ./dist

# Copie des certificats
COPY certs ./certs

# Copie des fichiers package.json
COPY package*.json ./

# Installation uniquement des dépendances de production
RUN npm ci --omit=dev

# Exposition du port
EXPOSE 4000

# Commande de démarrage
CMD ["node", "dist/server.js"]