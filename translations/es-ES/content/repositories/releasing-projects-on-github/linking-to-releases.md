---
title: Vincular a lanzamientos
intro: Puedes compartir cada lanzamiento que crees en GitHub con una URL única.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136669'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Para copiar una URL única en tu portapapeles, encuentra el lanzamiento que quieras enlazar, haz clic derecho en el título y copia la URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Título de la versión](/assets/images/help/releases/release-title.png) {% else %} ![Release title](/assets/images/help/releases/release-title-old.png) {% endif %}
1. Como alternativa, haga clic con el botón derecho en **Versión más reciente** y copie la dirección URL para compartirla. El sufijo de esta dirección URL siempre es `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menú Comparar etiquetas de versión](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![Etiqueta de versión más reciente](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} Para vincular directamente a una descarga del recurso de versión más reciente que se ha cargado manualmente, vincule a `/owner/name/releases/latest/download/asset-name.zip`.
