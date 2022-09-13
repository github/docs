---
title: Ver las ramas en tu repositorio
intro: 'Las ramas son centrales para la colaboración en {% data variables.product.product_name %}, y la mejor manera de verlas es en la pagina de ramas.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136932'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. Utiliza la navegación en la parte superior de la página para ver las listas de ramas específicas:
    - **Ramas**: en repositorios a los que tiene acceso de inserción, en la vista **Sus** se muestran todas las ramas en las que ha realizado inserciones, excepto la predeterminada, con las ramas más recientes primero.
    - **Ramas activas**: en la vista **Activas** se muestran todas las ramas en las que alguien ha realizado confirmaciones sen los últimos tres meses, ordenadas por las ramas con las confirmaciones más recientes primero.
    - **Ramas inactivas**: en la vista **Inactivas** se muestran todas las ramas en las que nadie ha realizado confirmaciones sen los últimos tres meses, ordenadas por las ramas con las confirmaciones más antiguas primero. Use esta lista para determinar [qué ramas se van a eliminar](/articles/creating-and-deleting-branches-within-your-repository).
    - **Todas las ramas**: en la vista **Todas** se muestra la rama predeterminada, seguida de todas las demás ordenadas por las ramas con las confirmaciones más recientes primero.

4. Opcionalmente, utiliza el campo de búsqueda en la parte superior derecha. Este proporciona una búsqueda de sub-secuencias simple y que distingue entre mayúsculas y minusculas para el nombre de rama. Esta no es compatible con ninguna sintaxis de consulta adicional.

![La página de ramas para el repositorio Atom](/assets/images/help/branches/branches-overview-atom.png)

## Información adicional

- "[Creación y eliminación de ramas en el repositorio](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Eliminación de ramas sin usar](/articles/deleting-unused-branches)"
