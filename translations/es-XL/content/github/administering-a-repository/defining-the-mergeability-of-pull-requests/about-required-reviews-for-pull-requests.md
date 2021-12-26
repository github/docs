---
title: Acerca de las revisiones requeridas para las solicitudes de extracción
intro: Las revisiones requeridas garantizan que las solicitudes de extracción tengan una cantidad específica de revisiones aprobadas antes de que los colaboradores puedan realizar cambios en una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Si has implementado protecciones de rama en tu repositorio, puedes configurar las revisiones requeridas. Para obtener más información acerca de la implementación de las protecciones de rama, consulta "[Configurar ramas protegidas](/articles/configuring-protected-branches/)". Para obtener más información acerca de la configuración de las revisiones requeridas, consulta "[Activar las revisiones requeridas para las solicitudes de extracción](/articles/enabling-required-reviews-for-pull-requests)".

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Si una persona con permisos de *administrador* elige la opción **Solicitar cambios** en una revisión, entonces esa persona debe aprobar la solicitud de extracción antes de que se pueda fusionar. Si un revisor que solicita los cambios en una solicitud de extracción no está disponible, cualquiera con permiso de *administrador* o de *escritura* para el repositorio puede descartar la revisión que bloquea la solicitud de extracción. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/articles/dismissing-a-pull-request-review)".

{% note %}

**Nota:** Los administradores de repositorio pueden restringir la posibilidad de descartar las revisiones de la solicitud de extracción para personas o equipos específicos. Para obtener más información, consulta "[Activar las revisiones requeridas para las solicitudes de extracción](/articles/enabling-required-reviews-for-pull-requests/)".

{% endnote %}

Si subes una confirmación de modificación de código a la rama de una solicitud de extracción aprobada, dicha aprobación podría descartarse si los administradores del repositorio han configurado el descartar las revisiones en espera. Para obtener más información, consulta "[Activar las revisiones requeridas para las solicitudes de extracción](/articles/enabling-required-reviews-for-pull-requests/)". Esto no aplica si subes confirmaciones que no modifiquen el código, como fusionar las ramas base en tu solicitud de extracción de la rama. Para obtener información acerca de las ramas base, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)."

A menos de que se configuren las revisiones requeridas para que incluyan a los administradores del repositorio, las personas con permisos de *administrador* pueden fusionar una solicitud de extracción sin importar las revisiones de otros administradores.

{% data reusables.repositories.review-policy-overlapping-commits %}

No puedes fusionar una solicitud de extracción en una rama protegida hasta que alguien con permisos de *escritura* o de *administración* la apruebe. Si hay revisiones pendientes o rechazadas, recibirás un mensaje de error:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
