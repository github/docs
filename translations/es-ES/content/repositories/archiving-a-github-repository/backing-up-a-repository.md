---
title: Realizar una copia de seguridad de un repositorio
intro: 'You can use{% ifversion ghes or ghae %} Git and{% endif %} the API {% ifversion fpt or ghec %}or a third-party tool {% endif %}to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion fpt or ghec %}

Para descargar un archivo en tu repositorio, puedes usar la API para migraciones del usuario o la organizacion. Para obtener más información, consulta la sección "[Migraciones](/rest/reference/migrations)".
{% else %}

Puedes descargar y realizar una copia de seguridad de tus repositorios manualmente:

- Para descargar los datos Git de un repositorio en tu máquina local, necesitarás clonar el repositorio. Para obtener más información, consulta "[Clonar un repositorio](/articles/cloning-a-repository)".
- También puedes descargar las wiki de un repositorio. Para obtener más información, consulta "[Agregar o editar páginas wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)".

Cuando clonas un repositorio o wiki, solo se descargan los datos Git, como archivos de proyecto o historial de confirmaciones. You can use our API to export other elements of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} to your local machine:

- [Problemas](/rest/reference/issues#list-issues-for-a-repository)
- [Solicitudes de cambios](/rest/reference/pulls#list-pull-requests)
- [Bifurcaciones](/rest/reference/repos#list-forks)
- [Comentarios](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Hitos](/rest/reference/issues#list-milestones)
- [Etiquetas](/rest/reference/issues#list-labels-for-a-repository)
- [Observadores](/rest/reference/activity#list-watchers)
- [Fans](/rest/reference/activity#list-stargazers)
- [Proyectos](/rest/reference/projects#list-repository-projects)
{% endif %}

Once you have {% ifversion ghes or ghae %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Herramientas de copias de seguridad de terceros

Existe un número de herramientas de autoservicio que automatizan las copias de seguridad de los repositorios. A diferencia de los proyectos de archivo, los cuales archivan _todos_ los repositorios públicos en {% data variables.product.product_name %} que no hayan optado por salir y que ponen todos los datos a disposición de cualquiera, las herramientas de respaldo descargarán los datos de repositorios _específicos_ y los organizarán en una nueva rama o directorio. Para obtener más información acerca de los proyectos de archivo, consulta la sección "[Acerca de archivar contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)". Para obtener más información acerca de las herramientas de respaldo de autoservicio, consulta la [Categoría de utilidades de respaldo en {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
