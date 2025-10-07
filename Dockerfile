# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Enable corepack to use pnpm
RUN corepack enable

# Install dependencies with lockfile for reproducible builds
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the source and build
COPY . .
RUN pnpm build

# ---- Runtime stage ----
FROM nginx:1.27-alpine

# Replace default nginx site config with our SPA config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


