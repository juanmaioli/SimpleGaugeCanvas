# SimpleGaugeCanvas

SimpleGaugeCanvas is a lightweight, dependency-free JavaScript library for rendering radial gauges on HTML canvases. It's a simple and effective solution for visualizing data in a gauge format.

![Gauge Demo](https://i.imgur.com/8bSgH8C.png)

## Getting Started

### Prerequisites

All you need is a modern web browser that supports HTML5 Canvas.

### Installation

1.  Clone this repository or download the `gauge.js` file.
2.  Include the `gauge.js` script in your HTML file:

    ```html
    <script type="text/javascript" src="gauge.js"></script>
    ```

3.  Add a canvas element to your HTML where you want the gauge to appear:

    ```html
    <canvas id="myGauge" width="240" height="140"></canvas>
    ```

4.  In your JavaScript, call the `gaugeDraw` function with the ID of your canvas and the data you want to display:

    ```javascript
    gaugeDraw("myGauge", 25);
    ```

## Usage

The `gaugeDraw` function takes two arguments:

*   `id` (String): The ID of the canvas element.
*   `data` (Number): The numerical value to display on the gauge. The range of the gauge is from -50 to 50.

The color of the gauge will change based on the value:

*   **Blue:** -50 to 8
*   **Green:** 8 to 27
*   **Yellow:** 27 to 30
*   **Red:** 30 to 50

## Example

Here's a simple example of how to use SimpleGaugeCanvas:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Gauge Canvas - Example</title>
</head>
<body>

    <canvas id="gauge1" width="240" height="140"></canvas>

    <script type="text/javascript" src="gauge.js"></script>
    <script type="text/javascript">
        // Draw the gauge with a value of 15
        gaugeDraw("gauge1", 15);
    </script>

</body>
</html>
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.