# PixelPainter
(c) Emily Mattlin, Matteo de Donato, John Blaney

Pixelpainter is an open-source, web-based image editting enviornment.
It uses the open-source javascript processing API [p5js](p5js.org).


###Requirements
Link to requirements sheet [here](https://trinityschoolnyc.myschoolapp.com/ftpimages/390/download/download_1789690.pdf)

> ####Part I: ​Create a basic pixel drawing experience.
>Picture the eventual evolution of your Pixel Painter program. When in doubt, mimic the behavior of MS Paint.
>Each group must implement:
> - **Pencil**: draws in color 1 or color 2 based on which mouse button is pressed
> - **Eraser**: ​draws in color2
> - **Rectangle/Ellipse**: ​draws a rectangle/ellipse outlined with color 1 and filled with color 2. Use double buffering to see the “growth”.
> - **Line**:​draws a straight line between two points. Use double buffering to see the “growth”.
> - **Thickness**: ​changes the thickness of lines, the outlines of shapes, the diameter of the pencil/brush
> - **Color**: ​color 1, color 2, default palette, custom palette, extension: option for transparency
> - **Droplet**:​​replace color 1 or color 2 with the color of the selected pixel based on which mouse button is pressed.
> Icon changes to eye droplet.
> - **Pixel Tracker**: ​outputs the current position of the mouse cursor

>#####Each group must also implement at least 3 of the following tools:
>  * brush (multiple style choices), paint bucket, stamp, triangle, Bezier curve, gridlines, text, spray can, clone tool, crop
>  * Users should be able to save their image in either the .png or .jpg format.

> ####Part II: ​Add support for photos and filters
> - **Extension**: Users should be able to open a .jpg, .png, or .gif image to add to the canvas. Incorrect file types should > output an error message and not cause the program to crash.
> - **Extension**: Implement your own image format. Save 24­bit color information for your entire canvas. Allow users to load >or save images in this format.
> - **Implement at least six non­trivial photo filters (two per person).** At least one filter per person must incorporate
> *Perlin noise*. Do not use the built­in P5 filters. Your
> filters should be significantly more advanced than the filters from the Technology: Creativity class. Feel free to add
> other basic filters (like b&W, warm/cool) to
> your project, but you won’t receive credit for implementing those filters. Allow the user to control at least two
> parameters of each filter.
> - **Possible filters include:**
> - Pixelate/Pointillize
> - steganography with Encrypt/Decrypt features­ Embed a message in the RGB values on the color
> - Noise/Grain/Speckle using Perlin noise
> - Kaleidoscope­ sophisticated symmetries
> - Blur
> - Posterize
> - Contrast
> - ASCII/Emoji filter – Change the photo into an ASCII or emoji drawing
> - Oil Paint
> - Watercolor
> - Printing Press
> - Or, create your own!
> - **Extension​**: Add professional features. (depending on time, probably optional since only one group got to it last year)
>­Select, resize, rotate, zoom, layers, canvas size

###Features

####Tools
- **Pencil**
  * default mode
  * draws simple strokes
    * works by rapidly drawing points and connecting them with lines
- **Eraser**
  * removes strokes
  * thicker than pencil

- **Brushes**
  * *Spray Can*
    * press and hold to spray
    * draws points around cursor
  * *Paintbrush*
    * simulates a paintbrush
    * pencil w/ blurred edges
 
        ```
        for (var i = 10; i > 00; i--) {
                    [...]
                    strokeCap(ROUND);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    strokeWeight(3 * i);
                    [...]
                    strokeCap(SQUARE);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    }
         ```
         
  * *Watercolor*
    * watercolor-effect brush
    * for best results, lower opacity
    * draws random, overlapping lines
   
       ```
       strokeWeight(t/50+random(3, 6));
       stroke(red(colorSelected), green(colorSelected), blue(colorSelected), random(100, 155)+o/2);
       line(pmouseX + 2 * i, pmouseY + i, mouseX + 2 * i, mouseY + i);
       ```
  * *Ribbon*
    * draws several parallel lines
    * looks like a 3D Ribbon
    * works similar to watercolor, except draws straight lines
- **Shapes**
  * *Line*
    * click to define the first point, and click again to define endpoint
    * utilizes double-buffering for growth
  * *Rectangle*
    * click to define one point and click again to define its opposite
    * utilizes double-buffering for growth
  * *Ellipse*
    * draws an ellipse
  * *Triangle*
    * draws a two-point triangle

####Color
- Dropper
  * select the dropper tool in the toolbar
  * click on the color you woul like to choose
    * left-click will set it to color 1
    * right-click will set it to color 2
  * uses built in ```pixels[]``` array and ``get()`` function
    
    ```
    loadPixels();
    var c = color(get(mouseX, mouseY));
    dropping = true;
    ```
    
- Drawing in different colors
  * left-click to draw in color 1
  * right-click to draw in color 2
  * both colors default to ```0, 0, 0```
- Color palette
  * color palette is hue on the x-axis and saturation on the y-axis

####Filters
- Tinge
  * shifts ```(r, g, b)``` values of each of the pixels
  * parameter: *intensity*
    * how many of the pixels are changed
    * the more densly the pixels are changed, will look more intense
    * if less, it will give just a slight undertone
  * parameter: *number of times values are shifted*
    * if slider is at the left, shifts values once
    * right, twice
- Speckle
  * uses *Perlin noise algorithm*
  * gives a grainy feel
  * parameter: *light or dark*
  * parameter: *contrast*
 
