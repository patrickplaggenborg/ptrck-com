# WordPress to Static Site Converter

A Python script to convert a WordPress single-page website into a clean, self-contained static HTML site with all assets downloaded locally.

## Features

- Downloads the HTML page and all referenced assets (CSS, JavaScript, images, fonts)
- Rewrites URLs to relative paths for local hosting
- Organizes assets into subdirectories (css, js, images, fonts)
- Processes CSS files to download referenced assets (fonts, images in CSS)
- Removes WordPress-specific meta tags and admin bar elements
- Handles relative and absolute URLs automatically
- Skips external URLs (keeps them as-is)

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```bash
python wordpress_to_static.py <url> [output_dir]
```

### Examples

```bash
# Convert to default 'static_site' directory
python wordpress_to_static.py https://your-wordpress-site.com

# Convert to custom directory
python wordpress_to_static.py https://your-wordpress-site.com my_static_site
```

## Output Structure

```
static_site/
├── index.html          # Main HTML file
└── assets/
    ├── css/           # Stylesheets
    ├── js/            # JavaScript files
    ├── images/        # Images
    └── fonts/         # Web fonts
```

## Notes

- The script will skip external URLs (from different domains) and keep them as-is
- Data URLs, mailto links, and anchors are preserved
- Failed downloads will keep the original URL
- The output is ready to deploy to any static hosting service

