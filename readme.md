# Digital Clock

## Overview
This project is a simple digital clock that displays the current time with hours, minutes, and seconds. The clock is designed with a modern UI, using HTML, CSS, and JavaScript. It updates every second to reflect the real-time clock.

## Features
- Displays the current time in a stylish, modern format.
- Uses a gradient background with a glassmorphic effect for the clock display.
- Updates dynamically every second using JavaScript.
- Fully responsive design for different screen sizes.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling, animations, and layout
- **JavaScript**: Logic to update the time dynamically

## File Structure
```
|-- Digital Clock Project
    |-- index.html        # Main HTML file
    |-- CSS/
        |-- clock.css     # Styling for the clock
    |-- JS/
        |-- script.js     # JavaScript file for updating the clock
```

## Setup Instructions
1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. The clock should display the current time and update every second.

## Code Explanation
### HTML (`index.html`)
- Contains the structure of the digital clock, including placeholders (`<span>`) for hours, minutes, and seconds.
- Links to the external stylesheet (`clock.css`) and JavaScript file (`script.js`).

### CSS (`clock.css`)
- Defines styles for the clock container, background, and text.
- Uses a `linear-gradient` for a dynamic background effect.
- Adds a `box-shadow` and `backdrop-filter` for a glass-like appearance.
- Ensures responsiveness by using viewport width (`vw`) for font sizes.

### JavaScript (`script.js`)
- Uses `setInterval` to update the time every second.
- Retrieves the current time using `new Date()`.
- Formats time values to always display two digits (e.g., `09` instead of `9`).
- Updates the content of `#Hours`, `#Minutes`, and `#Seconds` elements dynamically.

## Future Enhancements
- Add AM/PM format option.
- Implement a settings panel to switch themes.
- Integrate an alarm feature.

## License
This project is open-source and available under the MIT License.

## Author
Jeffrey Darlington

