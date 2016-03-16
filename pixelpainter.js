<html>
<head>
  <meta charset="UTF-8">
  <script language="javascript" type="text/javascript" src="p5.min.js"></script>
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="dist/css/flat-ui.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css">
      <script language="javascript" type="text/javascript" src="pixelpainter.js"></script>

  <title> Pixel Painter</title>
  </head>

<body oncontextmenu ="return false">
 
<nav class="navbar navbar-default" role="navigation">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
<span class="sr-only">Toggle navigation</span>
</button>
<a class="navbar-brand" href="index.html">Pixel Painter</a></div>
<div class="collapse navbar-collapse" id="navbar-collapse-01">
    
     <ul class="nav navbar-nav">
      <li><a onclick = "makeMarker()" id = "marker" href="#marker">Marker</a></li>
         <li><a onclick = "makePencil()" id = "pencil" href="#pencil">Pencil</a></li>
         <li><a onclick = "makeEraser()" id = "eraser" href="#eraser">Eraser</a></li>
         <li><a onclick="makeSpray()" id = "spraycan" href="#spraycan">Spray Can</a></li>
         <li><a onclick="makePaint()" id = "paintbrush" href="#paintbrush">Paint Brush</a></li>
         <li><a onclick="makeLine()" id = "line" href="#line">Line</a></li>
    </ul>
</nav>
<div id="slider"></div>

 

    
    
</body>
</html>
