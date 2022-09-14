---
title: Realizar una copia de seguridad de un repositorio
intro: 'Puedes usar Git {% ifversion ghes or ghae %} y {% endif %}la API{% ifversion fpt or ghec %}o una herramienta de terceros {% endif %}para realizar una copia de seguridad de tu repositorio.'
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
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883453'
---
{% ifversion fpt or ghec %}

Para descargar un archivo en tu repositorio, puedes usar la API para migraciones del usuario o la organizacion. Para obtener más información, consulta "[Migraciones](/rest/reference/migrations)".
{% else %}

Puedes descargar y realizar una copia de seguridad de tus repositorios manualmente:

- Para descargar los datos Git de un repositorio en tu máquina local, necesitarás clonar el repositorio. Para más información, vea "[Clonación de un repositorio](/articles/cloning-a-repository)".
- También puedes descargar las wiki de un repositorio. Para obtener más información, consulta "[Adición o edición de páginas wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)".

Cuando clonas un repositorio o wiki, solo se descargan los datos Git, como archivos de proyecto o historial de confirmaciones. Puedes utilizar nuestra API para exportar otros elementos de tu repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} tu máquina local:

- [Problemas](/rest/reference/issues#list-issues-for-a-repository)
- [Solicitudes de incorporación de cambios](/rest/reference/pulls#list-pull-requests)
- [Horquillas](/rest/reference/repos#list-forks)
- [Comentarios](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Hitos](/rest/reference/issues#list-milestones)
- [Etiquetas](/rest/reference/issues#list-labels-for-a-repository)
- [Watchers](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Proyectos](/rest/reference/projects#list-repository-projects) {% endif %}

Una vez que tienes {% ifversion ghes or ghae %}una versión local de todo el contenido del que quieres realizar una copia de seguridad, puedes crear un archivo ZIP y {% else %}descargar el archivo, puedes {% endif %}copiarlo en una unidad de disco duro externa y/o cargarlo a un servicio de almacenamiento o copia de seguridad basado en la nube como [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) o [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
## Herramientas de copias de seguridad de terceros

Existe un número de herramientas de autoservicio que automatizan las copias de seguridad de los repositorios. A diferencia de los proyectos de archivo, los cuales archivan _todos_ los repositorios públicos en {% data variables.product.product_name %} que no hayan optado por salir y que ponen todos los datos a disposición de cualquiera, las herramientas de copia de seguridad descargarán los datos de repositorios _específicos_ y los organizarán en una nueva rama o directorio. Para obtener más información sobre los proyectos de archivado, consulta "[Acerca del archivado de contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)". Para obtener más información sobre las herramientas de copia de seguridad de autoservicio, consulta la [categoría Utilidades de copia de seguridad en {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
