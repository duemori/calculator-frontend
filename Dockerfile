FROM node:latest AS APP
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
VOLUME /var/cache/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=APP /app/dist/calculator-frontend /usr/share/nginx/html