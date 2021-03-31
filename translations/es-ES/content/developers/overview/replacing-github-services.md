---
title: Reemplazar los GitHub Services
intro: 'Si aún estás dependiendo de los {% data variables.product.prodname_dotcom %} Services obsoletizados, aprende cómomigrar los ganchos de tu servicio a webhooks.'
redirect_from:
  - /guides/replacing-github-services/
  - /v3/guides/automating-deployments-to-integrators/
  - /v3/guides/replacing-github-services
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - api
---


Hemos obsoletizado los GitHub Services para favorecer la integración con los webhooks. Esta guía te ayuda a hacer la transición hacia los webhooks de GitHub Services. Para obtener más información acerca de este anuncio, consulta la [Publicación del blog](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Como una alternativa al servicio de correo electrónico, ahora puedes comenzar a utilizar las notificaciones para las cargas de información a tu repositorio. Consulta la sección "[Acerca de las notificaciones de correo electrónico para las cargas a tu repositorio](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para aprender cómo configurar las notificaciones por correo electrónico de las confirmaciones.

{% endnote %}

### Línea del tiempo de la obsoletización

- **1 de octubre de 2018**: GitHub descontinuó el permitir que los usuarios instalen servicios. Eliminamos los GitHub Services de la interface de usuario de GitHub.com.
- **29 de enero de 2019**: Como alternativa al servicio de correo electrónico, ahora puedes comenzar a utilizar las notificaciones por correo electrónico para las cargas a tu repositorio. Consulta la sección "[Acerca de las notificaciones de correo electrónico para las cargas a tu repositorio](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para aprender cómo configurar las notificaciones por correo electrónico de las confirmaciones.
- **31 de enero de 2019**: GitHub dejará de entregar los eventos de los servicios instalados en GitHub.com.

### Antecedentes de GitHub Services

GitHub Services (a veces conocido como Ganchos de Servicio) es el método tradicional de integración en donde GitHub hospedó una porción de los servicios de nuestros integradores a través [del repositorio`github-services`](https://github.com/github/github-services). Las acciones que se realizan en GitHub activan estos servicios, y puedes utilizarlos a su vez para activar acciones fuera de GitHub.

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
### Encontrar los repositorios que utilizan GitHub Services
Proporcionamos un script de línea de comandos que te ayuda a identificar los repositorios de tu aplicativo que utilizan GitHub Services. Para obtener más información, consulta [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

### GitHub Services vs webhooks

Las diferencias clave entre GitHub Services y los webhooks son:
- **Configuración**: Los GitHub Services tienen opciones de configuración específicas para los servicioes, mientras que los webhooks se configuran simplemente especificando una URL y un conjunto de eventos.
- **Lógica personalizada**: Los GitHub Services pueden tener una lógica personalizada para responder con acciones múltiples como parte de procesar solo un evento, mientras que los webhooks no tienen lógica personalizada.
- **Tipos de solicitudes**: Los GitHub Services pueden hacer solicitudes tanto de HTTP como no-HTTP, mientras que los webhooks solo hacen solicitudes HTTP.

### Reemplazar los Servicios con webhooks

Para reemplazar los GitHub Services con Webhooks:

1. Identifica los eventos de webhook relevantes a los que necesitas suscribirte desde [esta lista](/webhooks/#events).

2. Cambia tu configuración dependiendo de cómo utilizas los GitHub Services actualmente:

   - Para las **GitHub Apps**: Actualiza los permisos y eventos suscritos de tu app para configurarla para recibir los eventos de webhook reelevantes.
   - Para las **Apps de OAuth**: Solicita ya sea el(los) alcance(s) `repo_hook` y/o `org_hook` para administrar los eventos relevantes a nombre de los usuarios.
   - Para los **proveedores de GitHub Services**: solicita que los usuarios configuren manualmente un webhook con los eventos relevantes que se te envían, o aprovecha esta oportunidad para crear una app para administrar esta funcionalidad. Para obtener más información, consulta "[Acerca de las apps](/apps/about-apps/)."

3. Migra las configuraciones adicionales desde fuera de GitHub. Algunos GitHub Services necesitan configuraciones personalizadas adicionales en la página de configuración dentro de GitHub. Si tu servicio hace esto, necesitarás migrar esta funcionalidad en tu aplicación o depender de GitHub o de las Apps de OAuth conforme esto aplique.

### Compatibilidad con {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: El {% data variables.product.prodname_ghe_server %} con lanzamiento 2.17 y superior descontinuará el permitir que los administradores instalen servicios. Los aministradores podrán seguir modificando los ganchos de servicio existentes y recibiendo ganchos en el {% data variables.product.prodname_ghe_server %} con lanzamiento 2.17 hasta el 2.19. Como una alternativa al servicio de correo electrónico, podrás utilizar las notificaciones de correo electrónico para las cargas de información a tu repositorio en el {% data variables.product.prodname_ghe_server %} 2.17 y superior. Consulta [esta publicación del blog](https://developer.github.com/changes/2019-01-29-life-after-github-services) para conocer más al respecto.
- **{% data variables.product.prodname_ghe_server %} 2.20**: El {% data variables.product.prodname_ghe_server %} con lanzamiento 2.20 y superior dejará de entregar cualquier evento de los servicios instalados.

El lanzamiento 2.17 de {% data variables.product.prodname_ghe_server %} será el primer lanzamiento que no permite a los administradores instalar GitHub Services. Únicamente admitiremos los GitHub Services existentes hasta el lanzamiento 2.20 de {% data variables.product.prodname_ghe_server %}. También aceptaremos cualquier parche crítico para tu Github Service que se ejecute en el {% data variables.product.prodname_ghe_server %} hasta el 1 de octubre de 2019.

### Migrarte con nuestra ayuda

Por favor [contáctanos](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation) si tienes cualquier pregunta.

Como un resumen de alto nivel, el proceso de migración involucra habitualmente:
  - Identificar cómo y dónde tu producto está utilizando los GitHub Services.
  - Identificar los eventos de webhook correspondientes que necesites configurar para poder migrarlos a webhooks sencillos.
  - Implementar el diseño utilizando ya sea [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/) o [{% data variables.product.prodname_github_app %}. Se prefieren las {% data variables.product.prodname_github_app %}](/apps/building-github-apps/). Para aprender más acerca del porqué se prefieren las {% data variables.product.prodname_github_app %}, consulta la sección "[Razones para cambiar a {% data variables.product.prodname_github_app %}](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)".
