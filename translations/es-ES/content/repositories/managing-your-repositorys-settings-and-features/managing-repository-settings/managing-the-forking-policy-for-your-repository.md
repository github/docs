---
title: Administrar la política de ramificación para tu repositorio
intro: 'Puedes permitir o evitar la bifurcación de un repositorio privado específico{% ifversion ghae or ghes or ghec %} o interno{% endif %} propiedad de una organización.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136698'
---
Un propietario de la organización debe permitir bifurcaciones de repositorios privados{% ifversion ghae or ghes or ghec %} e internos{% endif %} en el nivel de organización para poder permitir o denegar bifurcaciones para un repositorio específico. Para más información, vea "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Características", seleccione **Permitir bifurcación**.
  ![Casilla para permitir o impedir la bifurcación de un repositorio privado](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Información adicional

- "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
