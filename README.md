# teapot-toolsjs
This is a JavaScript port of the [Python3 module](https://github.com/DismissedGuy/teapot-tools) of the same name.

In order to use this, you must have the appropriate browser driver in your path. Supported browsers are: `chrome`, `firefox`, `internet exlporer`, and `opera`.

# Usage
Usage is almost exactly the same as the Python version, but with JavaScript syntax.
An example: 

```javascript
    const TeapotTools = require('teapot-toolsjs');
    let tt = new TeapotTools('firefox'); //Make sure to use a supported browser

    tt.rotate(180);                      // Rotate the teapot to 180 degrees
    tt.pour();                           // Pour out the tea
    tt.unpour();                         // Stop pouring the tea.
```

