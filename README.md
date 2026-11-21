# Super Shapes

A playful, full-screen geometric artwork built with HTML, CSS, SVG, Tachyons, and Anime.js.

## Overview

Super Shapes combines bold colors, thick outlines, repeating symbols, SVG linework, and looping motion to create a dynamic generative composition.

## Features

- Responsive three-column layout
- Animated conveyor, tunnel, wave, zigzag, dots, crosses, circles, flashes, and squares
- Dynamically duplicated shapes
- Customizable CSS color palette
- Reduced-motion accessibility support
- No build step required

## Tech Stack

- HTML5 and inline SVG
- CSS3 and Tachyons 4.12
- Anime.js 4.5

## Run Locally

Open `index.html` directly, or serve the project:

```bash
python -m http.server 5500
```

Visit `http://localhost:5500`. Tachyons and Anime.js are loaded from CDNs, so an internet connection is required.

## Project Files

- `index.html` - page structure and SVG artwork
- `style.css` - layout, palette, borders, and base shapes
- `script.js` - element duplication and Anime.js animations
