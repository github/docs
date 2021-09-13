---
title: Acerca de las plantillas de propuestas y solicitudes de extracción
intro: 'Con las plantillas de propuestas y solicitudes de extracción, puedes personalizar y estandarizar la información que quisieras que los colaboradores incluyan cuando abren propuestas y solicitudes de extracción en tu repositorio.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

Una vez que creas las plantillas de propuestas y solicitudes de extracción en tu repositorio, los colaboradores pueden usar las plantillas para abrir propuestas o describir los cambios propuestos en sus solicitudes de extracción de acuerdo con las pautas de contribución del repositorio. Para obtener más información sobre cómo agregar pautas de contribución a un repositorio, consulta "[Configurar pautas para los colaboradores de repositorios](/articles/setting-guidelines-for-repository-contributors)".

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Puedes crear plantillas predeterminadas de propuestas y solicitudes de cambios para tu cuenta de organización o de usuario. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

### Plantillas de propuestas

Cuando creas plantillas de propuestas para tu repositorio usando el creador de plantillas de propuestas, estarán disponibles para que las usen los colaboradores cuando abran nuevas propuestas en el repositorio.

![Página de la propuesta nueva que muestra las opciones de plantilla de propuesta](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Al usar el creador de plantillas, puedes especificar un título y una descripción para cada plantilla, agregar el contenido de la plantilla y asignar la plantilla a la rama por defecto o bien abrir una solicitud de extracción en el repositorio. El creador de plantillas automáticamente agrega el markup del texto preliminar de YAML que se requiere para que la plantilla aparezca en la página de la propuesta nueva. Para obtener más información, consulta "[Configurar plantillas de reporte de problemas para tu repositorio](/articles/configuring-issue-templates-for-your-repository)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.repositories.issue-template-config %} Para obtener más información, consulta "[Configurar plantillas de propuestas para tu repositorio](/github/building-a-strong-community/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)".
{% endif %}

Las plantillas de propuestas se almacenan en la rama por defecto del repositorio, en un directorio oculto `.github/ISSUE_TEMPLATE`. Si creas una plantilla en otra rama, no estará disponible para que la usen los colaboradores. Los nombres de archivo de la plantilla de propuesta no distinguen entre mayúsculas y minúsculas y necesitan una extensión *.md*. {% data reusables.repositories.valid-community-issues %}

Es posible crear de forma manual una única plantilla de propuesta en Markdown usando el flujo de trabajo de la plantilla de propuesta heredado. Los colaboradores del proyecto automáticamente ven el contenido de la plantilla en el cuerpo de la propuesta. Si embargo, recomendamos usar el creador de varias plantillas de propuestas actualizado para crear plantillas de propuestas. Para obtener más información acerca del flujo de trabajo heredado, consulta "[Crear de forma manual una plantilla de propuesta para tu repositorio](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

### Plantillas de solicitudes de extracción

Cuando agregas una plantilla de solicitud de extracción a tu repositorio, los colaboradores del proyecto verán automáticamente los contenidos de la plantilla en el cuerpo de la solicitud de extracción.

![Plantilla de solicitud de extracción de ejemplo](/assets/images/help/pull_requests/pr-template-sample.png)

Debes crear las plantillas en la rama por defecto del repositorio. Las plantillas creadas en otras ramas no están disponibles para que las usen los colaboradores. Puedes almacenar tu plantilla de solicitud de extracción en el directorio raíz visible del repositorio, la carpeta `docs` o el directorio oculto `.github`. Los nombres de archivo de la plantilla de solicitud de extracción no distinguen entre mayúsculas y minúsculas y pueden tener una extensión como *.md* o *.txt*.

Para obtener más información, consulta [Crear plantillas de solicitud de extracción para tu repositorio](/articles/creating-a-pull-request-template-for-your-repository)".
