---
title: Comunicarse en GitHub
intro: 'Puedes debatir cambios y proyectos específicos, así como metas de equipo o ideas más amplias, usando tipos diferentes de debates en {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests/
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
---

### Introducción

{% data variables.product.product_name %} proporciona herramientas de comunicación colaborativas que te permiten interactuar de cerca con tu comunidad. Esta guía de inicio rápido te mostrará cómo escoger la herramienta correcta para tus necesidades.

{% if currentVersion == "free-pro-team@latest" %}
Puedes crear y participar en propuestas, solicitudes de cambios, {% data variables.product.prodname_discussions %} y debates de equipo, dependiendo del tipo de conversación que te gustaría tener.
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
Puedes crear y participar de propuestas, solicitudes de extracción y debates de equipos, dependiendo del tipo de conversación que quieras tener.
{% endif %}

#### Problemas
- son útiles para debatir los detalles específicos de un proyecto, tales como los reportes de errores, mejoras planeadas y retroalimentación.
- son específicas de un repositorio y, habitualmente, es claro quién es el propietario.
- a menudo se refiere a ellas como el sistema de rastreo de errores de {% data variables.product.prodname_dotcom %}.

#### Solicitudes de cambios
- te permiten proponer cambios específicos.
- te permiten comentar directamente en los cambios propuestos que otros sugieren.
- son específicos para un repositorio.

{% if currentVersion == "free-pro-team@latest" %}
#### {% data variables.product.prodname_discussions %}
-  son como un foro y son muy útiles para ideas y debates abiertos en donde es importante la colaboración.
-  pueden abarcar muchos repositorios.
-  proporcionan una experiencia colaborativa fuera de la base de código, lo cual permite la lluvia de ideas y la creación de una base de conocimiento comunitario.
-  a menudo no se sabe quién es el propietario.
-  a menudo no dan como resultado una tarea sobre la cual se pueda actuar.
{% endif %}

#### Debates de equipo
- pueden iniciarse en la página de tu equipo para tener conversaciones que abarquen varios proyectos y no pertenecen solo a una propuesta o solicitud de cambios específicas. En vez de abrir un informe de problemas en un repositorio para debatir sobre una idea, puedes incluir a todo el equipo si tienes una conversación en un debate de equipo.
- te permiten mantener debates con tu equipo sobre planeación, análisis, diseño, investigación de usuarios y toma de decisiones generales de un proyecto, todo en un solo lugar.{% if currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- proporcionan una experiencia colaborativa fuera de la base de código, lo cual permite la lluvia de ideas.
- a menudo no se sabe quién es el propietario.
- a menudo no dan como resultad una tarea sobre la cual se pueda actuar.{% endif %}

### ¿Qué debate debo utilizar?

#### Casos de las propuestas

- Quiero dar seguimiento a las tareas, ampliaciones y errores.
- Quiero emitir un reporte de errores.
- Quiero compartir retroalimentación sobre una característica específica.
- Quiero hacer una pregunta sobre los archivos del repositorio.

##### Ejemplo de propuesta

Este ejemplo demuestra cómo un usuario de {% data variables.product.prodname_dotcom %} creó una propuesta en nuestro repositorio de documentación de código abierto para concientizarnos de un error y debatir sobre cómo arreglarlo.

![Ejemplo de propuesta](/assets/images/help/issues/issue-example.png)

- Un usuario notó que el color azul del letrero en la parte superior de la página de la versión china de los documentos de {% data variables.product.prodname_dotcom %} hace que el texto contenido sea ilegible.
- El usurio creó una propuesta en el repositorio, la cual declaraba el problema y sugería un arreglo (el cual es utilizar un color de fondo diferente para el letrero).
- Se produce un debate y, periódicamente, se llega a un consenso sobre qué solución aplicar.
- Entonces, un colaborador puede crear una solicitud de cambios con la solución.

#### Escenarios para solicitudes de cambios

- Quiero arreglar un error tipográcifo en un repositorio.
- Quiero hacer cambios en un repositorio.
- Quiero hacer cambios para corregir un error.
- Quiero comentar en los cambios que otros sugieren.

##### Ejemplo de solicitud de cambios

Este ejemplo ilustra cómo un usuario de {% data variables.product.prodname_dotcom %} creó una solicitud de cambios en el repositorio de código abierto de nuestra documentación para arreglar un error tipográfico.

En la pestaña de **Conversación** de la solicitud de cambios, el autor explica por qué crearon la solicitud de cambios.

![Ejemplo de solicitud de cambios - Pestaña de conversación](/assets/images/help/pull_requests/pr-conversation-example.png)

La pestaña **Archivos que cambiaron** de la solicitud de cambios muestra la solución implementada.

![Ejemplo de solicitud de cambios - Pestaña de archivos que cambiaron](/assets/images/help/pull_requests/pr-files-changed-example.png)

- Este contribuyente nota un error tipográfico en el repositorio.
- El usuario crea una solicitud de cambios con la solución.
- Un mantenedor de repositorio revisa la solicitud de cambios, la comenta y la fusiona.

{% if currentVersion == "free-pro-team@latest" %}
#### Casos para los {% data variables.product.prodname_discussions %}

- Tengo una pregunta que no se relaciona necesariamente con los archivos específicos del repositorio.
- Quiero compartir las noticias con mis colaboradores o con mi equipo.
- Quiero comenzar o participar en una conversación abierta.
- Quiero hacer un anuncio a mi comunidad.

##### Ejemplo de {% data variables.product.prodname_discussions %}

Este ejemplo muestra la publicación de bienvenida de {% data variables.product.prodname_discussions %} para el repositorio de código abierto de los documentos de {% data variables.product.prodname_dotcom %} e ilustra cómo el equipo quiere colaborar con su comunidad.

![Ejemplo de un {% data variables.product.prodname_discussions %}](/assets/images/help/discussions/github-discussions-example.png)

El mantenedor de la comunidad inició un debate para recibir a la comunidad y para pedir a los miembros que se presentaran a sí mismos. Esta publicación fomenta un ambiente acogedor para los visitantes y contribuyentes. Esta publicación también aclara que al equipo le complace ayudar a los contribuyentes del repositorio.

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
#### Casos de debates de equipo

- Tengo una pregunta que no se relaciona necesariamente con los archivos específicos del repositorio.
- Quiero compartir las noticias con mis colaboradores o con mi equipo.
- Quiero comenzar o participar en una conversación abierta.
- Quiero anunciar algo a mi equipo.

{% if currentVersion == "free-pro-team@latest" %}
Como puedes ver, los debates de equipo son muy similares a los {% data variables.product.prodname_discussions %}. Para {% data variables.product.prodname_dotcom_the_website %}, te recomendamos utilizar los {% data variables.product.prodname_discussions %} como inicio de conversaciones. Puedes utilizar los {% data variables.product.prodname_discussions %} para colaborar con cualquier comunidad en {% data variables.product.prodname_dotcom %}. Si eres parte de una organización y te gustaría iniciar conversaciones dentro de tu organización o del equipo que está dentro de ella, debes utilizar los debates de equipo.
{% endif %}

##### Ejemplo de debates de equipo

Este ejemplo muestra una publicación de equipo para el equipo `octo-team`.

![Ejemplo de debate de equipo](/assets/images/help/projects/team-discussions-example.png)

Un miembro del equipo `octocat` publicó un debate de equipo que les informaba sobre varias cosas:
- Un miembro del equipo llamado Mona inició eventos de juego remotos.
- Hay una publicación del blog que describe cómo los equipos utilizan {% data variables.product.prodname_actions %} para producir sus documentos.
- Los materiales sobre el "All Hands" de abril está ahora disponible para que lo vean todos los miembros del equipo.

{% endif %}

### Pasos siguientes

Estos ejemplos te muestran cómo decidir cuál es la mejor herramienta para tus conversaciones en {% data variables.product.product_name %}. Pero esto es solo el inicio; puedes hacer mucho más para confeccionar estas herramientas de acuerdo con tus necesidades.

Para las propuestas, por ejemplo, puedes etiquetarlas con etiquetas para buscarlas más rápidamente y crear plantillas de propuesta para ayudar a los contribuyentes a abrir propuestas significativas. Para obtener más información, consulta la sección "[Acerca de las propuestas](/github/managing-your-work-on-github/about-issues#working-with-issues)" y "[Acerca de las plantillas de propuestas y solicitudes de cambio](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)".

Para las solicitudes de cambio, puedes crear borradores de estas si los cambios que propones aún están en curso. Los borradores de solicitudes de cambios no pueden fusionarse hasta que se marquen como listos para revisión. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)."

{% if currentVersion == "free-pro-team@latest" %}
Para el caso de los {% data variables.product.prodname_discussions %}, puedes configurar un código de conducta y fijar los debates que contengan información importante de tu comunidad. Para obtener más información, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".
{% endif %}

Para el caso de los debates de equipo, puedes editarlos o borrarlos en la página del equipo y puedes configurar las notificaciones para estos. Para obtener más información, consulta [Acerca de los debates del equipo](/organizations/collaborating-with-your-team/about-team-discussions)".
