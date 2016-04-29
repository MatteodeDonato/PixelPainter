# PixelPainter
(c) 2016 Jack Blaney, Emily Mattlin, Matteo de Donato

Pixelpainter is an open-source, web-based image editting enviornment.
It uses the open-source javascript processing API [p5js](p5js.org).

**Important** Do not adjust the screen size —— it will cause the sliders to be out of place

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
- **Eraser**
  * removes strokes
  * thicker than pencil

- **Brushes**
  * *Spray Can*
    * press and hold to spray
    * draws points around cursor
  * *Paintbrush*
    * simulates a paintbrush
    * EMILY HOW DOES THIS ONE WORK AGAIN!?!?!?
  * *Watercolor*
    * watercolor-effect brush
    * for best results, lower opacity
  * *Ribbon*
    * draws several parallel lines
    * looks like a 3D Ribbon
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

####Filters
