# The Gallery

A simple, beautiful image gallery built with plain HTML, CSS, and JavaScript — no dependencies required.

## Features

- **Responsive grid** — adapts from 1 column on mobile to 4+ columns on wide screens
- **Lightbox viewer** — click any image to open a full-screen overlay
- **Keyboard navigation** — `←` / `→` to browse, `Esc` to close
- **Accessible** — ARIA roles and keyboard focus management
- **Lazy loading** — images load on demand for fast page performance
- **Dark theme** — clean dark UI

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/david-pulkowski/the_gallery.git
   cd the_gallery
   ```

2. Open `index.html` in your browser (no build step required):
   ```bash
   open index.html        # macOS
   xdg-open index.html    # Linux
   start index.html       # Windows
   ```

## Adding your own images

The gallery grid is defined in `index.html`. Each image tile follows this pattern:

```html
<div class="gallery-item" role="listitem" aria-label="My photo">
  <img src="images/my-photo.jpg" alt="My photo" loading="lazy" />
  <div class="overlay"><span class="overlay-caption">My photo</span></div>
</div>
```

Place your image files in the `images/` folder and update the `src` attributes accordingly.

## Project structure

```
the_gallery/
├── index.html        # Main gallery page
├── css/
│   └── style.css     # All styles (grid, lightbox, responsive)
├── js/
│   └── gallery.js    # Lightbox interaction logic
└── images/           # Place your image files here
```

## License

Apache 2.0 — see [LICENSE](LICENSE).