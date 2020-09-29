---
title: Realizar una copia de seguridad de un repositorio
intro: 'Puedes usar Git {% if currentVersion != "free-pro-team@latest" %} y {% endif %}la API{% if currentVersion == "free-pro-team@latest" %}o una herramienta de terceros {% endif %}para realizar una copia de seguridad de tu repositorio.'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

Para descargar un archivo en tu repositorio, puedes usar la API para migraciones del usuario o la organizacion. Para obtener más información, consulta la sección "[Migraciones](/v3/migrations/)".
{% else %}

Puedes descargar y realizar una copia de seguridad de tus repositorios manualmente:

- Para descargar los datos Git de un repositorio en tu máquina local, necesitarás clonar el repositorio. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".
- También puedes descargar las wiki de un repositorio. Para obtener más información, consulta "[Agregar o editar páginas wiki](/articles/adding-or-editing-wiki-pages)".

Cuando clonas un repositorio o wiki, solo se descargan los datos Git, como archivos de proyecto o historial de confirmaciones. Puedes usar nuestra API para exportar otros elementos de tu repositorio {% data variables.product.product_name %} en tu máquina local:

- [Problemas](/v3/issues/#list-issues-for-a-repository)
- [Solicitudes de extracción](/v3/pulls/#list-pull-requests)
- [Bifurcaciones](/v3/repos/forks/#list-forks)
- [Comentarios](/v3/issues/comments/#list-comments-in-a-repository)
- [Hitos](/v3/issues/milestones/#list-milestones-for-a-repository)
- [Etiquetas](/v3/issues/labels/#list-all-labels-for-this-repository)
- [Observadores](/v3/activity/watching/#list-watchers)
- [Stargazers](/v3/activity/starring/#list-stargazers)
- [Proyectos](/v3/projects/#list-repository-projects)
{% endif %}

Una vez que tienes una versión local{% if currentVersion != "free-pro-team@latest" %} de todo el contenido del que deseas realizar una copia de seguridad, puedes crear un archivo zip y {% else %}una vez descargado tu archivo, puedes{% endif %}copiarlo en un disco duro externo o cargarlo en un servicio de copia de seguridad basado en la nube, como [Google Drive](https://www.google.com/drive/) o [Dropbox](https://www.dropbox.com/).

{% if currentVersion == "free-pro-team@latest" %}
### Herramientas de copias de seguridad de terceros

Existe un número de herramientas de autoservicio que automatizan las copias de seguridad de los repositorios. A diferencia de los proyectos de archivo, los cuales archivan _todos_ los repositorios públicos en {% data variables.product.product_name %} que no hayan optado por salir y que ponen todos los datos a disposición de cualquiera, las herramientas de respaldo descargarán los datos de repositorios _específicos_ y los organizarán en una nueva rama o directorio. Para obtener más información acerca de los proyectos de archivo, consulta la sección "[Acerca de archivar contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".

Puedes realizar una copia de seguridad de todos los datos Git de un repositorio (como archivos de proyecto e historial de confirmaciones), así como tanta información de {% data variables.product.product_name %} (como propuestas y solicitudes de extracción), con [BackHub](https://github.com/marketplace/backhub), que crea copias de seguridad diarias recurrentes de tus repositorios con instantáneas de hasta 30 días. BckHub está disponible en {% data variables.product.prodname_marketplace %}.
{% endif %}
