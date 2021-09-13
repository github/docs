Para especificar un ejecutor auto-hospedado para tu trabajo, configura `runs-on` en tu archivo de flujo de trabajo con las etiquetas de dicho ejecutor.

Todos los ejecutores auto-programados tienen la etiqueta `self-hosted` y puedes seleccionar cualquiera de ellos para proporcionar únicamente dicha etiqueta. Como alternativa, puedes utilizar `self-hosted` en un arreglo con etiquetas adicionales, tales como aquellas para un sistema operativo o arquitectura de sistema específicos, para seleccionar únicamente los tipos de ejecutor que especificas.
