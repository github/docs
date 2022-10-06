---
title: Restaurando un repositorio eliminado
intro: '{% ifversion ghes or ghae %}Un propietario de la empresa puede{% elsif fpt or ghec %}Puedes{% endif %} restaurar algunos repositorios eliminados para recuperar su contenido.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 233785cc42ac6dd97a35d042186ae198dd69502a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146200102'
---
{% ifversion ghes or ghae %}

Normalmente, un propietario de la empresa puede restaurar los repositorios eliminados en un plazo de 90 días{% ifversion ghes %} en {% data variables.product.product_location %}{% endif %}. Para obtener más información, consulte "[Restauración de un repositorio eliminado](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". 

{% else %}

## Acerca de la restauración de repositorios

Un repositorio eliminado se puede restaurar en un plazo de 90 días, a menos que el repositorio haya sido parte de una red de bifurcaciones que actualmente no está vacía. Una red de bifurcaciones consiste en un repositorio padre, las bifurcaciones del repositorio y las bifurcaciones de las bifurcaciones del repositorio. Si tu repositorio forma parte de una red de bifurcaciones, no se puede restaurar a menos que se elimine cualquier otro repositorio de la red o que se haya separado de la red. Para obtener más información sobre las bifurcaciones, consulta "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

Si quieres restaurar un repositorio que era parte de una red de bifurcaciones que actualmente no está vacía, te puedes contactar con {% data variables.contact.contact_support %}.

Puede tardar hasta una hora después de que se elimine un repositorio antes de que ese repositorio esté disponible para la restauración.

Restaurar un repositorio no restaurará los archivos adjuntos de lanzamiento o los permisos de equipo. Las propuestas que se restablezcan no se etiquetarán.

## Restauración de un repositorio eliminado que le pertenecía a una cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Restaurar un repositorio eliminado que le pertenecía a una organización


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Información adicional

- "[Eliminación de un repositorio](/articles/deleting-a-repository)"

{% endif %}
