
FROM nginx:alpine
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY --from=0 /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]