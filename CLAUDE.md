# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Nithin Prasad, deployed via Firebase Hosting at nithinprasad.github.io. The site is a static HTML/CSS/JavaScript website showcasing professional experience, skills, and projects.

## Architecture

### Multi-Version Structure

The repository contains two separate portfolio implementations:

1. **Root Version (Primary)**: FreeHTML5-based template
   - Entry point: `index.html`
   - Static site with no build step
   - Uses SASS source files in `sass/` (pre-compiled to `css/`)
   - Bootstrap 3-based responsive design
   
2. **v2/**: Start Bootstrap Resume theme
   - Entry point: `v2/index.html`
   - Has its own build system (see v2/README.md)
   - Alternative portfolio design

3. **resume-html/**: Printable resume version
   - Separate HTML-based resume for download/printing

### Key Directories

- `css/` - Compiled stylesheets (animate.css, bootstrap.css, style.css)
- `sass/` - SASS source files (style.scss contains main styles)
- `js/` - JavaScript libraries (jQuery, Bootstrap, animations, main.js)
- `images/` - Portfolio images and assets
- `fonts/` - Icon fonts (icomoon)
- `public/` - Firebase hosting public directory

## Deployment

### Firebase Hosting

- Project ID: `nithinprasad`
- Configuration: `firebase.json` (root directory is public)
- GitHub Actions workflows:
  - `.github/workflows/firebase-hosting-merge.yml` - Auto-deploy on push to main
  - `.github/workflows/firebase-hosting-pull-request.yml` - Preview deploy on PRs

### Manual Deployment

```bash
# Install Firebase CLI if needed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase Hosting
firebase deploy
```

Note: The PR workflow references `npm run build` but there is no package.json at root level. The main site is pre-built (SASS already compiled).

## Development Workflow

### Editing Styles

If modifying styles, edit SASS source files in `sass/` directory, then compile:

```bash
# Install SASS compiler
npm install -g sass

# Compile SASS to CSS
sass sass/style.scss css/style.css

# Or watch for changes
sass --watch sass/style.scss:css/style.css
```

### Local Development

Since this is a static site, simply open `index.html` in a browser, or use a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Or use Firebase local hosting
firebase serve
```

### Working with v2/

The v2 directory has its own build system. See `v2/README.md` for detailed instructions. Key commands:

```bash
cd v2
npm install
npm start  # Development server with live reload
npm run build  # Build for production
```

## Content Updates

Main portfolio content is in `index.html`:
- Lines 63-87: Header section with name, title, and social links
- Lines 89-122: About Me section with contact info and bio
- Lines 126-220: Resume timeline (work experience and education)
- Lines 316-408: Skills section with progress bars
- Lines 486-573: Projects section with detailed descriptions
- Lines 588-599: Resume download section
- Lines 620-661: Contact form

Social media links and profile information appear in multiple sections - update consistently.

## Firebase Configuration

- `.firebaserc` - Project alias configuration
- `firebase.json` - Hosting configuration (root directory as public)
- `firebase.js` - Firebase initialization (if using Firebase features)

## Important Notes

- The main version uses a free FreeHTML5.co template (see comments in index.html)
- Bootstrap 3 is used (not Bootstrap 4/5)
- jQuery and various animation libraries are loaded from local files
- Google Maps API key is embedded in index.html:693 (may need updating)
- No automated SASS compilation in CI/CD - CSS must be pre-compiled before committing
