---
title: Acerca de los lanzamientos
intro: 'Puedes crear un lanzamiento para empaquetar software, junto con notas de lanzamiento y enlaces a archivos binarios, para que los usen otras personas.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881509'
---
## Acerca de los lanzamientos

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![Información general de las versiones](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![An overview of releases](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![An overview of releases](/assets/images/help/releases/releases-overview.png) {% endif %}

Los lanzamientos son iteraciones de software desplegable que puedes empaquetar y poner a disposición de una audiencia más amplia para su descarga y uso.

Las versiones se basan en [etiquetas de Git](https://git-scm.com/book/en/Git-Basics-Tagging), que marcan un punto específico en el historial del repositorio. Una fecha de etiqueta puede ser diferente a una fecha de lanzamiento ya que ambas pueden crearse en momentos diferentes. Para más información sobre cómo ver las etiquetas existentes, vea "[Visualización de las versiones y etiquetas del repositorio](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)".

Puedes recibir notificaciones cuando se publican nuevos lanzamientos en un repositorio sin recibir notificaciones sobre otras actualizaciones del repositorio. Para obtener más información, consulta "[Vista de las suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)".

Cualquiera que tenga acceso de lectura a un repositorio podrá ver y comparar los lanzamientos, pero únicamente aquellos con permisos de escritura en éste podrán administrarlos. Para más información, vea "[Administración de las versiones en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} Puede crear manualmente notas de la versión mientras administra una versión. Como alternativa, puedes generar notas de lanzamiento automáticamente desde una plantilla predeterminada o personalizar tu propia plantilla de notas de lanzamiento. Para más información, vea "[Notas de la versión generadas automáticamente](/repositories/releasing-projects-on-github/automatically-generated-release-notes)".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} Al ver los detalles de una versión, la fecha de creación de cada recurso de versión se muestra junto al recurso de versión.
{% endif %}

{% ifversion fpt or ghec %} Los usuarios con permisos administrativos en un repositorio pueden elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y .tar que {% data variables.product.product_name %} crea para cada versión. Para más información, vea "[Administración de objetos {% data variables.large_files.product_name_short %} en archivos del repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)".

Si un lanzamiento arregla una vulnerabilidad de seguridad, deberás publicar una asesoría de seguridad en tu repositorio. {% data variables.product.prodname_dotcom %} revisa cada asesoría de seguridad que se publica y podría utilizarla para enviar {% data variables.product.prodname_dependabot_alerts %} a los repositorios afectados. Para más información, vea "[Acerca de los avisos de seguridad de GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories)".

Puede ver la pestaña **Dependientes** del gráfico de dependencias a fin de ver qué repositorios y paquetes dependen del código en el repositorio y, por tanto, podrían verse afectados por una versión nueva. Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

También puedes usar la API de releases para recopilar información, como la cantidad de veces que las personas descargan un recurso de lanzamiento. Para más información, vea "[Versiones](/rest/reference/releases)".

{% ifversion fpt or ghec %}
## Cuotas de ancho de banda y de almacenamiento

 Cada archivo incluido en un lanzamiento debe ser de menos de {% data variables.large_files.max_file_size %}. No hay un límite para el tamaño total de un lanzamiento, ni para el uso de ancho de banda.

{% endif %}
