FROM nginx:alpine

# Default nginx HTML folder
WORKDIR /usr/share/nginx/html

COPY index.html .
COPY style.css .
COPY script.js .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
