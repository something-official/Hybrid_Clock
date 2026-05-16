# Hybrid Clock

A unique, cyberpunk-styled analog clock that displays time in a hybrid manner. Instead of traditional single-pointer clock hands, each hand (hour, minute, and second) displays repeated numerals along its length for a modern, digital-analog fusion design.

## Features

- **Analog Display**: Circular clock face with hour numbers positioned around the perimeter
- **Hybrid Hands**: Each hand displays repeated time values (hours ×6, minutes ×8, seconds ×10)
- **Smooth Animation**: Continuous rotation with smooth transitions between seconds
- **Cyberpunk Design**: Neon color scheme with glowing effects and dark gradient background
- **Responsive Layout**: Adapts to different screen sizes while maintaining proportions
- **Real-time Updates**: Updates every second with precise time calculations

## Color Scheme

- **Hour Hand**: Cyan (#00ffcc)
- **Minute Hand**: Magenta (#ff00ff)
- **Second Hand**: Yellow (#ffff00)
- **Center Dot**: Red with cyan glow (#fb100e)
- **Hour Numbers**: Magenta with glow effect (#ff0080)

## Files

- `index.html` — Main HTML structure
- `style.css` — Styling and animations
- `script.js` — Clock logic and time calculations
- `README.md` — This file

## How to Run

### Option A: Direct Browser Opening
1. Double-click `index.html` to open in your default browser

### Option B: Using a Local Server (Recommended)

**With Python:**
```bash
python -m http.server 8000
```
Then open http://localhost:8000 in your browser

**With VS Code Live Server:**
1. Install the Live Server extension
2. Right-click `index.html` and select "Open with Live Server"

## Customization

You can modify the appearance and behavior by editing:
- `style.css` — Change colors, sizes, and animations
- `script.js` — Adjust hand lengths, number repetitions, or update frequency

Refresh the page to see changes immediately.

## License

Released under the MIT License. See [LICENSE](LICENSE).
