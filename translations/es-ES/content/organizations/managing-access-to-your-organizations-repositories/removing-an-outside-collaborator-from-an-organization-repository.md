---
title: Eliminar un colaborador externo de un repositorio de la organización
intro: Los propietarios y los administradores del repositorio pueden eliminar el acceso a un repositorio de un colaborador externo.
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134964"
---
{% ifversion fpt or ghec %}

{% warning %}

**Advertencia**:
- Cuando se elimina un colaborador externo de un repositorio privado, el conteo de licencias pagadas no baja de categoría automáticamente. Para pagar menos licencias después de quitar usuarios de la organización, siga los pasos descritos en "[Cambio de los puestos de pago de la organización a una versión anterior](/articles/downgrading-your-organization-s-paid-seats)".

- Eres responsable de asegurar que las personas que perdieron el acceso a un repositorio borren cualquier información confidencial o propiedad intelectual.

{% endwarning %}

{% endif %}

Aunque se borren las bifurcaciones de los repositorios privados cuando se elimina un colaborador, la persona seguirá teniendo todos los clones locales de tu repositorio.

## Eliminar colaboradores externos de todos los repositorios de una organización

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Selecciona el colaborador externo o los colaboradores externos que quieres eliminar de la organización.
![Lista de colaboradores externos con dos colaboradores externos seleccionados](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Encima de la lista de colaboradores externos, use el menú desplegable y haga clic en **Quitar de todos los repositorios**.
![Menú desplegable con la opción para quitar colaboradores externos](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Revise el colaborador o colaboradores externos que se van a quitar de la organización y, después, haga clic en **Quitar colaboradores externos**.
  ![Lista de colaboradores externos que se eliminarán y botón Quitar colaboradores externos](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Eliminar un colaborador externo de un repositorio particular de una organización

Si solo quieres eliminar un colaborador externo de determinados repositorios de tu organización, puedes eliminar el acceso de esa persona a un repositorio específico por vez.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. A la derecha del nombre de la persona que quiera quitar, use el menú desplegable {% octicon "gear" aria-label="The Settings gear" %} y haga clic en **Administrar**.
  ![Botón Administrar acceso](/assets/images/help/organizations/member-manage-access.png)
6. A la derecha del repositorio del que quiera quitar al colaborador externo, haga clic en **Administrar acceso**.
![Selección del botón Administrar acceso junto al repositorio al que tiene acceso el colaborador externo](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Para quitar por completo el acceso del colaborador externo al repositorio, en la esquina superior derecha, haga clic en **Quitar acceso a este repositorio**.
![Botón Quitar acceso a este repositorio](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Para confirmarlo, haga clic en **Quitar acceso**.
![Confirmación del colaborador externo que se va a quitar del repositorio](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} También puede quitar un colaborador externo de un repositorio en la información general de acceso de la configuración del repositorio. Para más información, vea "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)".
{% endif %}
## Información adicional

- "[Adición de colaboradores externos a los repositorios en la organización](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Conversión de un miembro de la organización en un colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
