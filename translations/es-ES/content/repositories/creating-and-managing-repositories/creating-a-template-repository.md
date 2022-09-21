---
title: Crear un repositorio desde una plantilla
intro: 'Puedes convertir un repositorio existente en una plantilla para que tanto tú como otros usuarios puedan generar nuevos repositorios con la misma estructura de directorio, las mismas ramas y los mismos archivos.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136915'
---
{% note %}

**Nota**: El repositorio de plantilla no puede incluir archivos que se almacenen mediante {% data variables.large_files.product_name_short %}.

{% endnote %}

Para crear un repositorio de plantilla, debes crear un repositorio y luego convertirlo en una plantilla. Para más información sobre cómo crear un repositorio, vea "[Creación de un repositorio](/articles/creating-a-new-repository)".

Una vez que conviertas tu repositorio en una plantilla, cualquier usuario con acceso al repositorio podrá generar un nuevo repositorio con la misma estructura de directorio y los mismos archivos que la rama predeterminada. También puede elegir incluir todas las demás ramas en tu repositorio. Las ramas creadas a partir de una plantilla tienen historiales no relacionados, por lo que no puedes crear solicitudes de incorporación de cambios ni combinar entre las ramas. Para obtener más información, consulte "[Creación de un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Seleccione **Template repository**.
  ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
