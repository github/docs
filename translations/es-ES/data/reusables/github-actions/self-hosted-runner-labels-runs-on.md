Para especificar un ejecutor auto-hospedado para tu trabajo, configura `runs-on` en tu archivo de flujo de trabajo con las etiquetas de dicho ejecutor.

Todos los ejecutores auto-hospedados tienen la etiqueta `self-hosted`. El utilizar únicamente esta etiqueta seleccionará cualquier ejecutor auto-hospedado. Para seleccionar los ejecutores que cumplen con ciertos criterios, tales como el sistema operativo o arquitectura, proporciona un arreglo de etiquetas que comience con `self-hosted` (este se debe listar primero) y que luego incluya etiquetas adicionales conforme lo requieras.
