---
title: Acerca del tablero de tu organización
intro: 'Como miembro de una organización, puedes visitar el tablero de tu organización durante todo el día para estar actualizado sobre la actualidad reciente y hacer un seguimiento de las propuestas y las solicitudes de extracción en las que estás trabajando o siguiendo en la organización.'
redirect_from:
  - /articles/about-your-organization-dashboard
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acceder al tablero de tu organización

{% data reusables.dashboard.access-org-dashboard %}

### Encontrar tu actividad reciente

En la sección "Recent activity" (Actividad reciente) de tus noticias, rápidamente puedes buscar las propuestas y solicitud de extracción de tu organización recientemente actualizadas y hacerles el seguimiento.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Encontrar repositorios en tu organización

En la barra lateral izquierda de tu tablero, puedes acceder a los principales repositorios de tu organización en los que estás activo.

![Listado delos repositorios en los que eres más activo de tu organización](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

### Estar actualizado con la actividad desde tu organización

En la sección "All activity" (Toda la actividad) de tus noticias, puedes ver actualizaciones de otros equipos y repositorios en tu organización.

La sección "All activity" (Toda la actividad) muestra toda la actividad reciente en la organización, incluida la actividad en los repositorios a los que no estás suscrito y de las personas que no sigues. Para obtener más información, consulta las secciones {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Observar y dejar de observar los repositorios](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}" y "[Seguir a las personas](/articles/following-people)".

Por ejemplo, las noticias de la organización muestran actualizaciones cuando alguien en la organización:
 - Crea una rama nueva.
 - Comenta en una propuesta o una solicitud de extracción.
 - Envía un comentario de revisión de solicitud de extracción.
 - Bifurca un repositorio.
 - Crea una página wiki.
 - Sube las confirmaciones.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
 - Crea un repositorio público.{% endif %}

### Información adicional

- "[Acerca de tu tablero personal](/articles/about-your-personal-dashboard)"
