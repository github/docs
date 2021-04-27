---
title: Configura los ajustes predeterminados para los repositorios de tareas
shortTitle: Configuración predeterminada para repositorios de tareas
intro: Puedes utilizar la app de configuración de Probot para configurar los ajustes predeterminados de los repositorios que cree {% data variables.product.prodname_classroom %} para una tarea.
permissions: Los propietarios de organizaciones pueden configurar los ajustes predeterminados para los repositorios de tareas si instalan una {% data variables.product.prodname_github_app %} para la organización.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/probot-settings
---

### Acerca de la configuración de ajustes predeterminados para los repositorios de tareas

{% data variables.product.prodname_classroom %} crea un repositorio que pertenece a cada alumno o equipo que acepte una tarea. El repositorio pertenecerá a la organización que utilizas con {% data variables.product.prodname_classroom %}. Los repositorios de tareas pueden estar vacíos, o puedes utilizar un repositorio de plantilla. Para obtener más información, consulta la sección "[Crear una tarea desde un repositorio de plantilla](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)".

{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}

Con la app de ajustes de Probot, puedes crear un archivo que se llame _.github/settings.yml_ en un repositorio que contenga una lista de ajustes para el mismo, y luego instalar una {% data variables.product.prodname_github_app %} para tu organización, la cual aplique automáticamente los ajustes al repositorio.

Puedes incluir un _.github/settings.yml_ en un repositorio de plantilla, el cual utilices para una tarea en {% data variables.product.prodname_classroom %}. Cuando una persona o un equipo acepta la tarea, {% data variables.product.prodname_classroom %} creará el repositorio para ésta, y la app de ajustes aplicará automáticamente esta configuración desde _.github/settings.yml_.

Probot es un proyecto, marco de trabajo y colección de apps gratuitas para automatizar a {% data variables.product.product_name %}. Una app de Probot puede escuchar los eventos de los repositorios, como la creación de confirmaciones, comentarios y propuestas nuevos, así como responder automáticamente al evento.

Para obtener más información, consulta el "[Sitio web de Probot](https://probot.github.io) y el [Sitio web de la app de ajustes](https://probot.github.io/apps/settings/). Para obtener más información acerca de las {% data variables.product.prodname_github_apps %}, consulta la sección "[Acerca de las apps](/developers/apps/about-apps)".

### Agregar la app de ajustes a tu organización

Después de que instalas la app de ajustes de Probot para tu organización, ésta aplicará la configuración que definiste en el _.github/settings.yml_ en cualquier repositorio de tu organización, incluyendo los repositorios de tareas nuevos que cree {% data variables.product.prodname_classroom %}.

1. Navega a la [página de la app de ajustes](https://github.com/apps/settings).
1. Da clic en **Instalar** y luego en la organización que utilizas para {% data variables.product.prodname_classroom %}. Proporciona acceso total a la app para todos los repositorios que pertenezcan a la organización. ![Instalar la app de ajustes de Probot](/assets/images/help/classroom/probot-settings.gif)

### Configurar los ajustes predeterminados para un repositorio de tareas

1. Crea un repositorio de plantilla que contenga un archivo _.github/settings.yml_. Para obtener una lista completa de ajustes, consulta el [README](https://github.com/probot/settings#github-settings) del reposiotorio `probot/settings`. Para obtener más información sobre cómo utilizar un repositorio de plantilla para el código inicial en {% data variables.product.prodname_classroom %}, consulta la sección "[Crear una tarea desde un repositorio de plantilla](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)".

    {% warning %}

    **Advertencia:** No definas `collaborators` en el archivo _.github/settings.yml_ de tu repositorio de tareas. {% data variables.product.prodname_classroom %} otorgará automáticamente a los maestros y asistentes de éstos el acceso a los repositorios de tareas.

    {% endwarning %}

1. Crea una tarea utilizando el repositorio de plantilla que contiene el _.github/settings.yml_ como código inicial. {% data reusables.classroom.for-more-information-about-assignment-creation %}

La app de ajustes de Probot para tu organización aplicará ahora los ajustes que definas en _.github/settings.yml_ dentro del repositorio de plantilla para todos los repositorios de tareas que cree {% data reusables.classroom.you-may-want-to-predefine-repository-settings %} para un alumno o equipo.

### Further reading

- [Apps de Probot](https://probot.github.io/apps/)
- [Documentación de Probot](https://probot.github.io/docs/)
