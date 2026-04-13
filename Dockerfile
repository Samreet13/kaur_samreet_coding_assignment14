# Build stage
FROM node:20-alpine AS builder

WORKDIR /kaur_samreet_final_site

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /kaur_samreet_final_site/dist /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]