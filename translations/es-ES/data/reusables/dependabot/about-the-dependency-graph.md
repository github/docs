La gráfica de dependencias es un resumen de los archivos de bloqueo y manifiesto que se almacenan en un repositorio{% ifversion dependency-submission-api %} y de cualquier dependencia que se emita para dicho repositorio utilizando la API de emisión de dependencias (beta){% endif %}. Para cada repositorio, muestra{% ifversion fpt or ghec %}:

- Las dependencias, ecosistemas y paquetes de los cuales depende
- Los dependientes, repositorios y paquetes que dependen de ella{% else %} dependencias, es decir, los ecosistemas y los paquetes de los cuales depende. {% data variables.product.product_name %} no calcula información alguna sobre los dependientes, repositorios y paquetes que dependen de un repositorio.{% endif %}
