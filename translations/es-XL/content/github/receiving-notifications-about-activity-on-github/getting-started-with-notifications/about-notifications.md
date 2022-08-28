---
title: Acerca de las notificaciones
intro: 'Las notificaciones ofrecen actualizaciones acerca de las actividades y las conversaciones en las que estás interesado. Puedes recibir notificaciones en {% data variables.product.product_name %} o mediante tu cliente de correo electrónico.'
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/about-notifications
---
### Tipos de notificaciones

Las notificaciones que recibes serán notificaciones de *participación* o notificaciones de *observación*. Ambos tipos de notificaciones se pueden recibir como notificaciones web o notificaciones por correo electrónico. Para obtener más información, consulta:

- "[Acerca de las notificaciones web](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[Acerca de las notificaciones por correo electrónico](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Escoger el método de entrega para tus notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### Notificaciones de participación

{% data variables.product.product_name %} envía notificaciones de *participación* cuando estás directamente involucrado en las actividades o las conversaciones dentro de un repositorio o equipo del que eres miembro. Recibirás una notificación si:
  - Te mencionan a tí o a un equipo del que eres miembro. Para obtener más información, consulta "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".
  - Se menciona al equipo padre de un equipo hijo del que eres miembro. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".
  - Eres asignado a una propuesta o solicitud de extracción.
  - Se agrega un comentario en una conversación a la cual estás suscripto.
  - Se realiza una confirmación de una solicitud de extracción a la que estás suscripto.
  - Abres, comentas o cierras una propuesta o una solicitud de extracción.
  - Se envía una revisión que aprueba o solicita cambios en una solicitud de extracción a la que estás suscripto.
  - Se te solicita a tí o a un equipo del que eres miembro revisar una solicitud de extracción.
  - Se te designa a tí o a un equipo del que eres miembro como propietario de un archivo y alguien abre una solicitud de extracción que modifica ese archivo. Para obtener más información, consulta "[Acerca de los propietarios del código](/articles/about-code-owners)."
  - Creas o respondes a un debate de equipo.

#### Notificaciones de observación

{% data variables.product.product_name %} envía notificaciones de *observación* para actualizaciones en repositorios o debates de equipos que estés mirando. {% if currentVersion ver_gt "enterprise-server@2.17" %}{% data reusables.notifications.auto-watch %}Para obtener más información, consulta la sección "[Observar y dejar de observar los repositorios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)".

{% endif %}Recibirás una notificación si:
  - Se abre una propuesta.
  - Se agrega un comentario a una propuesta abierta.
  - Se abre una solicitud de extracción.
  - Se agrega un comentario a una solicitud de extracción abierta.
  - Se agrega un comentario a una confirmación de cambios.
  - Se publica un lanzamiento. Para obtener más información, consulta "[Acerca de los lanzamientos](/articles/about-releases)." También puedes ver solo los lanzamientos publicados en un repositorio, en lugar de todas las actualizaciones de un repositorio. Para obtener más información, consulta la sección "[Observar y dejar de observar los lanzamientos para un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)".
  - Se envía una revisión que aprueba o solicita cambios en una solicitud de extracción.
  - Se crea o se responde a una publicación de un debate de equipo para un equipo que estás mirando.
  - Se abre, se edita o se responde a una publicación de un debate de equipo para un equipo padre o un equipo del que eres miembro y estás mirando. Para obtener más información, consulta "[Equipos anidados](/articles/about-teams/#nested-teams)".

También puedes explorar las actividades de las personas que sigues, los repositorios que miras y las organizaciones de las que eres miembro en tu tablero. Para obtener más información, consulta "[Acerca de tu tablero personal](/articles/about-your-personal-dashboard)".

### Leer más

- "[Listar los repositorios que estás observando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[Observar y dejar de observar un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Observar y dejar de observar los debates de equipo](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)"
- "[Suscribirse y desuscribirse de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
