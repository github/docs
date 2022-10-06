---
title: Restringir cambios en la visibilidad de los repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para cambiar la visibilidad de los repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119249'
---
Puedes restringir quién puede cambiar la visibilidad de los repositorios de la organización, como cambiar un repositorio de privado a público. Para más información sobre la visibilidad de los repositorios, consulta "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)". 

Puedes restringir la posibilidad de cambiar la visibilidad del repositorio solo a los propietarios de la organización, o puedes permitir que cualquier persona con acceso de administrador a un repositorio cambie la visibilidad.

{% warning %}

**Advertencia**: Si está habilitada, esta opción permite a los usuarios con acceso de administrador elegir cualquier visibilidad para un repositorio existente, incluso si no permites crear ese tipo de repositorio. Para obtener más información sobre cómo restringir la visibilidad de los repositorios durante la creación, consulta "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. En "Cambio en la visibilidad de los repositorios", anula la selección de **Permitir que los miembros cambien las visibilidades de los repositorios para esta organización**.
![Casilla para permitir que los miembros cambien la visibilidad de los repositorios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Haga clic en **Save**(Guardar).
