<!DOCTYPE html>

<html lang="en">

<head

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SIGED INFORMACIONES Y AYUDA</title>

<link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="sys/sige.css">

<link rel="stylesheet" type="text/css" href="sys/main.css">

<link rel="stylesheet" href="sys/materialize.min.css">

<link rel="stylesheet" href="sys/chartist.min.css">

<link rel="stylesheet" href="sys/jquery-jvectormap.min.css">

</head>

<body>

<br>

<br>

<br>

<br>

<main class="page">

<div class="container">

<div class="tab-content">

<div id="home" class="container tab-pane active"><br>

<h3>Datos de consulta</h3>

<hr>

<div class="container">

<form action="" method="post">

<label for="curp" class="mb-2 mr-sm-2">CURP(s)*:</label>

<div>

<input type="text" class="form-control mb-2 mr-sm-2" id="curp" name="curp" pattern="[A-Za-z0-9]+" value="" placeholder="CURP" required>

</div>

<div style="text-align:right; margin-top:20px;">

<button type="submit" class="btn btn-primary mb-2" name="srch_btn" value="ok">Consultar</button>

</div>

</form>

</div>

<div class="container">

<div style="text-align:right">

<label style="text-align:right">(*)Campos obligatorios</label>

</div>

</div>

</div>

<div id="menu1" class="container tab-pane fade"><br>

<h3>Resultados de la busqueda</h3>

<table class="table">

<thead>

<tr>

<th></th>

<th></th>

<th></th>

<th></th>

<th></th>

</tr>

</thead>

<tbody id="tbody">

<tr>

<td colspan="5" style="text-align:center">Sistema fuera de servicio intentalo aqui <a href=""></a>...</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

<div class="container">

</div>

</main>

<script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>

<script> 

    

        function ventanaSecundaria (URL){ 

        window.open(URL,"ventana1","width=300px,height=300px,scrollbars=NO") 

        } 

        function ventanaPrimaria (URL){ 

        window.open(URL,"ventana2","width='width=300px,height=300px,scrollbars=NO") 

        }

    </script>

<script>

$(document).ready(function() { 

    

    var fcurp = document.getElementById("curp").value;

    

    

    $.get('https://cors-anywhere.herokuapp.com/api.siged.sep.gob.mx/servicios/alumno/ciclosAlum/curp='+ fcurp)

			.done((data) => {

        var t = data.response.docs;

          var k = 0;

          var shtml = "";

          for (i in t) {

              shtml += "<tr>";

              

              shtml +=  '<td>' + t[i].id + '</td>';

              shtml +=  '<td>' + t[i].nombre + '</td>';

              shtml +=  '<td>' + t[i].clave + '</td>';

              shtml +=  '</tr>';

          }

          

          $("#tbody").append(shtml);

				

				

				

		});

});

    </script>

</body>

</html>

