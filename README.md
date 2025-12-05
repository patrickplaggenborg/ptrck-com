# ptrck.com

Static website for ptrck.com, migrated from WordPress.

## Structure

```
.
├── public/             # Static site files (ready to deploy)
│   ├── index.html     # Main HTML file
│   └── assets/        # CSS, JS, images, fonts
└── scripts/           # Migration scripts (gitignored)
```

## Deployment

The `/public` folder contains the static site and can be deployed to any static hosting service (Koolify, Netlify, Vercel, etc.).

### Docker Deployment

The repository includes a minimal Docker setup using nginx:alpine.

**Build and run:**
```bash
# Using Docker
docker build -t ptrck-com .
docker run -d -p 80:80 --name ptrck-com ptrck-com

# Or using Docker Compose
docker-compose up -d
```

The site will be available at `http://localhost`.

**Stop the container:**
```bash
docker stop ptrck-com
# or
docker-compose down
```

## Migration Scripts

The migration scripts used to convert the WordPress site are stored in the `scripts/` folder (gitignored). To use them:

```bash
cd scripts
pip install -r requirements.txt
python wordpress_to_static.py <url> [output_dir]
```

