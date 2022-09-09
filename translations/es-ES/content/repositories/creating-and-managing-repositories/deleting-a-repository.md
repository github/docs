---
title: Eliminar un repositorio
intro: Puedes eliminar cualquier repositorio o bifurcación si eres un propietario de la organización o si tienes permisos de administración para el repositorio o la bifurcación. Eliminar un repositorio bifurcado no elimina el repositorio ascendente.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136884'
---
{% data reusables.organizations.owners-and-admins-can %} elimina un repositorio de la organización. Si se ha deshabilitado **Allow members to delete or transfer repositories for this organization**, solo los propietarios de la organización pueden eliminar los repositorios de la organización. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}Al eliminar un repositorio público, no se eliminarán las bifurcaciones del repositorio.{% endif %}

{% warning %}

**Advertencias**:

- Al eliminar un repositorio, se eliminarán **permanentemente** los datos adjuntos de la versión y los permisos de equipo. Esta acción **no** se puede deshacer.
- El borrar un repositorio privado{% ifversion ghes or ghec or ghae %} o interno{% endif %} borrará también todas sus bifurcaciones.

{% endwarning %}

Algunos repositorios borrados pueden restablecerse dentro de los primeros 90 días después de haberse borrado. {% ifversion ghes or ghae %}Tu administrador de sitio podría ser capaz de restablecer un repositorio borrado para ti. Para obtener más información, consulte "[Restauración de un repositorio eliminado](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". {% else %}Para obtener más información, consulte "[Restauración de un repositorio eliminado](/articles/restoring-a-deleted-repository)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. En Danger Zone, haga clic en **Delete this repository**.
   ![Botón de eliminación de repositorio](/assets/images/help/repository/repo-delete.png)
3. **Lea las advertencias**.
4. Para verificar que está eliminando el repositorio correcto, escribe el nombre del repositorio que deseas eliminar.
   ![Etiquetas de eliminación](/assets/images/help/repository/repo-delete-confirmation.png)
5. Haga clic en **I understand the consequences, delete this repository**.
