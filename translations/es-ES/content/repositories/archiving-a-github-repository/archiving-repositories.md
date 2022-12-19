---
title: Archivar repositorios
intro: Puedes archivar un repositorio para que sea de solo lectura para todos los usuarios e indicar que ya no necesita mantenerse activamente. También puedes desarchivar los repositorios que han sido archivados.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137053'
---
## Acerca del archivamiento de repositorios

{% ifversion fpt or ghec %} {% note %}

**Nota:** Si tiene un plan de facturación por repositorio heredado, se le seguirá cobrando por el repositorio archivado. Si no quieres que se te cobre por un repositorio archivado, debes actualizar a un producto nuevo. Para más información, vea "[Productos de {% data variables.product.prodname_dotcom %}](/articles/github-s-products)".

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**Nota:** Los clientes que usan {% data variables.product.prodname_GH_advanced_security %} pueden habilitar {% data variables.product.prodname_secret_scanning %} en los repositorios archivados. Para más información, vea "[Acerca de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)".

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Una vez que se archiva un repositorio, no puedes agregar ni eliminar colaboradores ni equipos. Solo los colaboradores con acceso al repositorio pueden bifurcar o iniciar tu proyecto.

Cuando se archiva un repositorio, sus propuestas, solicitudes de cambio, código, etiquetas, hitos, proyectos, wiki, lanzamientos, confirmaciones, marcadores, ramas, reacciones, alertas de escaneo de código, comentarios y permisos se convierten en de solo lectura. Para realizar cambios en un repositorio archivado, primero debes desarchivar el repositorio.

Puedes buscar repositorios archivados. Para más información, vea "[Búsqueda de repositorios](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Para obtener más información, consulta "<a href="/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived">Buscar repositorios</a>". Para más información, vea "[Búsqueda de incidencias y solicitudes de incorporación de cambios](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)".  

## Archivar un repositorio

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Zona de peligro", haga clic en **Archivar este repositorio** o **Anular el archivo de este repositorio**.
   ![Botón Archivar este repositorio](/assets/images/help/repository/archive-repository.png)
4. Lea las advertencias.
5. Escribe el nombre del repositorio que deseas archivar o desarchivar.
  ![Advertencias de archivo del repositorio](/assets/images/help/repository/archive-repository-warnings.png)
6. Haga clic en **Entiendo las consecuencias, archivar este repositorio**.
