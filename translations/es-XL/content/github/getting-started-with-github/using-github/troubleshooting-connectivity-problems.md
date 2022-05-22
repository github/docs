---
title: Solucionar problemas de conectividad
intro: 'Si tienes problemas para conectarte a {% data variables.product.prodname_dotcom %}, puedes solucionar los problemas de conexión. Utiliza la herramienta {% data variables.product.prodname_debug %} para diagnosticar problemas.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
versions:
  free-pro-team: '*'
---
La mayoría de las veces, los problemas de conexión ocurren porque un firewall, servidor proxy, red corporativa u otra red está configurada de una forma que bloquea {% data variables.product.prodname_dotcom %}.

### Permitir las direcciones IP de {% data variables.product.prodname_dotcom %}

Asegúrate de que tu red esté configurada para permitir las direcciones IP de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Acerca de las direcciones IP de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-ip-addresses)".

### Utilizar la red de una empresa u organización

Si tienes problemas de conectividad con la red de tu empresa u organización, consulta con tu administrador de red para saber si se le aplican reglas a la red para bloquear determinados tráficos. Si ya existen reglas configuradas, consulta con tu administrador de red para permitir el tráfico hacia {% data variables.product.prodname_dotcom %}.

### Solucionar problemas de captcha

Si no puedes verificar con el captcha:
- Asegúrate de que javascript esté habilitado en tu navegador.
- Asegúrate de que tu navegador sea compatible. Si tu navegador no es compatible, actualízalo o instala un navegador compatible. Para obtener una lista de navegadores compatibles, consulta "[Navegadores compatibles](/articles/supported-browsers)".
- Asegúrate de que tu configuración de red no esté bloqueando https://octocaptcha.com/ o https://arkoselabs.com/. Si estás detrás de un cortafuegos corporativo, contacta a tu administrador de TI para que incluya esos dominios. Para verificar el acceso a estos dominios, visita https://octocaptcha.com/test y asegúrate de que se muestre el texto "¡La conexión se llevó a cabo exitosamente!", luego visita https://client-demo.arkoselabs.com/github y asegúrate de que puedes cargar el captcha.
- Asegúrate de que tu navegador no tenga plug-ins o extensiones que puedan estar interfiriendo con GitHub. En tal caso, inhabilita de manera temporal los plug-ins o extensiones durante la verificación del captcha.

### Cambiar métodos de clonación

Cambiar desde la clonación por SSH a la clonación por HTTPS, o viceversa, puede mejorar la conectividad. Para obtener más información, consulta "[Clonar un repositorio desde {% data variables.product.prodname_dotcom %}](/articles/cloning-a-repository-from-github)".

Si están ocurriendo interrupciones con SSH, consulta "[Error: Número de archivo erróneo](/articles/error-bad-file-number)".

### Solucionar problemas de descargas lentas y conexiones lentas intermitentes

{% data variables.product.prodname_dotcom %} no alterna el ancho de banda por usuario.

Si tienes conexiones lentas en determinados momentos del día, pero no en otros, las velocidades lentas normalmente se deben a la congestión de red. Ya que {% data variables.product.prodname_dotcom %} no puede resolver congestiones de red, debes escalar el problema a tu proveedor de servicio de internet.

### Solucionar problemas con {% data variables.product.prodname_debug %}

Si has seguido todas las sugerencias para solucionar problemas antes detalladas y sigues teniendo problemas de conexión, puedes seguir las indicaciones del sitio {% data variables.product.prodname_debug %} para ejecutar pruebas y enviar un informe a {% data variables.product.prodname_dotcom %} Support (Asistencia). Para obtener más información, consulta [{% data variables.product.prodname_debug %}](https://github-debug.com/).
