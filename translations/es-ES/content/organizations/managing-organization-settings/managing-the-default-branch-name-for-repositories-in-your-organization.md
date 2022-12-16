---
title: Administrar el nombre de la rama predeterminada para los repositorios en tu organización
intro: 'Puedes configurar el nombre de la rama predeterminada para los repositorios que los miembros crean en tu organización en {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 38bd35506728f4437c9a1644235fe748c6a8a58a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886610'
---
## Acerca de la administración del nombre de la rama predeterminada

Cuadno un miembro de tu organización crea un repositorio nuevo en la misma, éste contendrá una rama que será la predeterminada. Puedes cambiar el nombre que {% data variables.product.product_name %} utiliza para dicha rama en los repositorios nuevos que creen los miembros de tu organización. Para obtener más información sobre la rama predeterminada, vea "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% data reusables.branches.change-default-branch %}

Si un propietario de la empresa requirió una política para el nombre de la rama predeterminada de tu empresa, no puedes configurar dicho nombre en tu organización. En su lugar, puedes cambiar la rama predeterminada para los repositorios individuales. Para obtener más información, vea {% ifversion fpt %}"[Aplicar directivas de administración de repositorios en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)"{% else %}"[Aplicar directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)"{% endif %} y "[Cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

## Configurar el nombre de la rama predeterminada

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. En "Repository default branch" (Rama predeterminada del repositorio), haga clic en **Change default branch name now** (Cambiar el nombre de la rama predeterminada ahora).
    ![Botón para invalidar](/assets/images/help/organizations/repo-default-name-button.png)
4. Teclea el nombre predeterminado que quisieras utilizar para las ramas nuevas.
    ![Cuadro de texto para introducir el nombre predeterminado](/assets/images/help/organizations/repo-default-name-text.png)
5. Haga clic en **Update**(Actualizar).
    ![Botón Actualizar](/assets/images/help/organizations/repo-default-name-update.png)

## Información adicional

- "[Administrar el nombre de la rama predeterminada para sus repositorios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)"
