<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Robot App</title>
    <link rel="stylesheet" type="text/css" href="CSS\style.css">
    <link rel="icon" href="Images\robot.png" type="image/x-icon">

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  </head>
  <body>

    <div id="bluetooth-connection">
      <button id="bluetooth-connect"><i class='bx bx-power-off'></i></button>
      <label id="bluetooth-status">Non connecté</label>
    </div>

    <div class="fieldCustom">
        <div class="input-div">
            <label for="column-input">Nombre de colonnes:</label>
            <input type="text" id="column-input">
            <label for="row-input">Nombre de lignes:</label>
            <input type="text" id="row-input">
            <button id="refresh-btn">Refresh</button>
        </div>
    </div>

    <table id="field"><tr><td></td><td style="font-weight: bold; text-align: center; vertical-align: middle;">1</td><td style="font-weight: bold; text-align: center; vertical-align: middle;">2</td><td style="font-weight: bold; text-align: center; vertical-align: middle;">3</td><td style="font-weight: bold; text-align: center; vertical-align: middle;">4</td><td style="font-weight: bold; text-align: center; vertical-align: middle;">5</td><td style="font-weight: bold; text-align: center; vertical-align: middle;">6</td></tr><tr><td style="font-weight: bold; text-align: center; vertical-align: middle;">A</td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td></tr><tr><td style="font-weight: bold; text-align: center; vertical-align: middle;">B</td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td></tr><tr><td style="font-weight: bold; text-align: center; vertical-align: middle;">C</td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td></tr><tr><td style="font-weight: bold; text-align: center; vertical-align: middle;">D</td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td><td style="text-align: center; vertical-align: middle;"></td></tr></table>

    <div class="dashboard">
        <div>
            <button id="robot">Modifier la position</button>
            <!--<input type="text" id="x" placeholder="X">
            <input type="text" id="y" placeholder="Y">-->
        </div>
        <div>
            <button id="target">Modifier la destination</button>
            <input type="text" id="x" placeholder="X">
            <input type="text" id="y" placeholder="Y">
        </div>
        <div>
            <button id="go">Aller à la destination</button>
            <button id="stop">Stop</button>
        </div>
    </div>
    
    <!-- Flag image for the target point -->
    <img id="flag" src="Images\flag.png">
    <!-- Robot image for the robot's position -->
    <img id="robot" src="Images\robot.png">
  </body>

  <script src="script.js"></script>
</html>