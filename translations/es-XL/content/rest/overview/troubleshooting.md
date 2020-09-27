---
title: Solución de problemas
intro: Aprende cómo resolver los problemas más comunes que las personas pueden encontrar en la API de REST.
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Si estás encontrando algunas situaciones extrañas en la API, aquí hay una lista de posibles soluciones a algunos de estos problemas que podrías estar experimentando.

### ¿Por qué estoy obteniendo un error `404` en un repositorio que sí existe?

Habitualmente, enviamos un error `404` cuando tu cliente no está autenticado adecuadamente. Puede que esperes ver un `403 Forbidden` en estos casos. Sin embargo, ya que no queremos proporcionar _ningun_ tipo de información acerca de los repositorios privados, en vez de esto, la API devuelve un `404`.

Para solucionar los problemas, asegúrate de que [te estás autenticando correctamente](/guides/getting-started/), que [tu token de acceso de OAuth tenga los alcances requeridos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), y que las [restricciones de las aplicaciones de terceros][oap-guide] no estén bloqueando tu acceso.

### ¿Por qué no veo todos mis resultados?

La mayoría de las llamadas a la API que acceden a una lista de recursos (_por ejemplo_, usuarios, informes de problemas, _etc._) son compatibles con la paginación. Si estás haciendo solicitudes y recibes un conjunto de resultados incompleto, probablemente solo estás viendo la primera página. Necesitarás solicitar las páginas restantes para obtener más resultados.

Es importante que *no* intentes adivinar el formato de la URL de paginación. No todas las llamadas a la API utilizan la misma estructura. En vez de esto, extrae la información de paginación del [Encabezado de Enlace](/v3/#pagination), el cual se envía en cada solicitud.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
