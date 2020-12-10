---
title: Ver y dejar de ver repositorios
intro: Puedes ver un repositorio para recibir notificaciones por las nuevas solicitudes de extracción y propuestas que se crearon. También puedes dejar de ver un repositorio si ya no deseas recibir notificaciones de ese repositorio específico.
versions:
  enterprise-server: <2.21
---

{% if currentVersion ver_gt "enterprise-server@2.17" %}
{% data reusables.notifications.auto-watch %} Para obtener más información, consulta la sección "[Acerca de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)".
{% endif %}

You can also watch and unwatch releases in a repository. Para obtener más información, consulta la sección "[Observar y dejar de observar los lanzamientos para un repositorio](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)".

### Ver todos los repositorios a los que tienes acceso de escritura

{% data reusables.notifications.access_watching %}
2. Click **Watching**. ![Lista de repositorios observados](/assets/images/help/notifications/notifications-watching-tab.png)
3. En el lateral derecho de la página, selecciona **Automatically watch (Ver automáticamente)**. ![Una casilla de verificación para configurar ver automáticamente repositorios](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Ver un repositorio único

{% data reusables.repositories.navigate-to-repo %}
2. En el ángulo superior derecho, haz clic en **Watching (Ver)** del menú desplegable "Watch" (Ver). ![Ver opciones en un menú desplegable para un repositorio](/assets/images/help/notifications/watch-repository.png)

### Dejar de ver todos los repositorios a los que tienes acceso de escritura

{% data reusables.notifications.access_watching %}
2. Click **Watching**. ![Lista de repositorios observados](/assets/images/help/notifications/notifications-watching-tab.png)
3. En el lateral derecho de la página, deselecciona **Automatically watch (Ver automáticamente)**. ![Una casilla de verificación para configurar ver automáticamente repositorios](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Dejar de ver un repositorio único

{% data reusables.repositories.navigate-to-repo %}
2. En el ángulo superior derecho, haz clic en **Unwatch (Dejar de ver)** desde el menú desplegable "Watch" (Ver). ![Ver opciones en un menú desplegable para un repositorio](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**Nota:** también puedes elegir ignorar un repositorio. Si ignoras un repositorio, no recibirás ninguna notificación. No recomendamos ignorar repositorios ya que no se te notificará si eres mencionado. {% if currentVersion == "free-pro-team@latest" %}Si sufres abuso y deseas ignorar un repositorio, [contacta a Soporte](/contact) así podemos ayudarte. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Leer más

- "[Suscribirse y desuscribirse de las notificaciones](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[Listar los repositorios que estás observando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
