FROM nginx:alpine

# Copy static files to nginx html directory
COPY public/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx:alpine runs nginx automatically, no CMD needed

