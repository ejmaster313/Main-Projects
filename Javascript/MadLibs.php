<!DOCTYPe html>
<html>
  <head>
  <meta charset="utf-8">
  <title></title>
    <body>

      <form action="MadLibs.php" method="get">
        <br>
        Color: <input type="text" name="colorv">
        <br>
        Person: <input type="text" name="personv">
        <br>
        Number: <input type="text" name="numv">
        <br>
        <input type="submit">

         <?php

          echo "<br>";
          echo "Roses are {color} <br>";
          echo "{person} has 2 fingers <br>";
          echo "if you can count to {number}";

          $colorv = $_GET["colorv"];
          $personv = $_GET["personv"];
          $numv = $_GET["numv"];

          echo "<hr>";
          echo "Roses are $colorv";
          echo "<br>";

          echo "$personv has 2 fingers";
          echo "<br>";

          echo "if you can count to $numv";
          echo "<br>";
          ?>

       </form>

    </body>
  </head>
</html>
