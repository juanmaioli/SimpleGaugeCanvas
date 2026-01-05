# SimpleGaugeCanvas

SimpleGaugeCanvas is a lightweight, dependency-free, and **responsive** JavaScript library for rendering radial gauges on HTML canvases. It allows for full customization of ranges, units, colors, and scales automatically to fit any canvas size.

![Gauge Demo](https://i.imgur.com/8bSgH8C.png)

## Getting Started

### Prerequisites

All you need is a modern web browser that supports HTML5 Canvas.

### Installation

1.  Clone this repository or download the `src/gauge.js` file.
2.  Include the script in your HTML file:

    ```html
    <script type="text/javascript" src="src/gauge.js"></script>
    ```

3.  Add a canvas element to your HTML:

    ```html
    <canvas id="myGauge" width="300" height="200"></canvas>
    ```

4.  Call the `gaugeDraw` function:

    ```javascript
    gaugeDraw("myGauge", 25);
    ```

## Usage

### Syntax

```javascript
gaugeDraw(elementId, value, options);
```

*   `elementId` (String): The ID of the canvas element.
*   `value` (Number): The numerical value to display.
*   `options` (Object, optional): Configuration object.

### Configuration Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `min` | Number | `-50` | Minimum value of the gauge. |
| `max` | Number | `50` | Maximum value of the gauge. |
| `unit` | String | `°C` | Unit suffix to display next to the value. |
| `colors` | Array | `[...]` | Array of color objects defining ranges. |

### Color Configuration
The `colors` array defines ranges. The gauge picks the first color where `value <= max`.

```javascript
[
  { max: 20, color: "#007BFF" },  // Blue for values <= 20
  { max: 80, color: "#28A745" },  // Green for values <= 80
  { max: 100, color: "#DC3545" }  // Red for values <= 100 (and above)
]
```

## Examples

### 1. Default (Thermometer)
Behaves like the original version: range -50 to 50, standard temperature colors.
```javascript
gaugeDraw("gauge1", 15);
```

### 2. Percentage (0% to 100%)
```javascript
gaugeDraw("gauge2", 75, {
  min: 0,
  max: 100,
  unit: "%",
  colors: [
    { max: 50, color: "#28A745" }, // Green
    { max: 85, color: "#FFC107" }, // Yellow
    { max: 100, color: "#DC3545" } // Red
  ]
});
```

### 3. Speedometer (0 to 220 km/h)
```javascript
gaugeDraw("gauge3", 120, {
  min: 0,
  max: 220,
  unit: " km/h",
  colors: [
    { max: Infinity, color: "#6610f2" } // Solid Purple
  ]
});
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.
