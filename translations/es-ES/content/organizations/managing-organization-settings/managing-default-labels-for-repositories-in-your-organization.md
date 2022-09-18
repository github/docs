---
title: Administrar etiquetas predeterminadas para los repositorios de tu organización
intro: Puedes personalizar las etiquetas que se incluirán en todos los repositorios nuevos de tu organización.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126222'
---
Los propietarios de la organización pueden administrar las etiquetas predeterminadas para los repositorios de la organización.

Las etiquetas predeterminadas se incluirán en todos los repositorios nuevos de tu organización, pero luego cualquier usuario con acceso de escritura al repositorio puede editar o eliminar las etiquetas de ese repositorio. Agregar, editar o eliminar una etiqueta predeterminada no agrega, edita o elimina la etiqueta de los repositorios existentes.

## Crear una etiqueta predeterminada

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. En "Etiquetas de repositorio", haga clic en **Nueva etiqueta**.
  ![Botón Nueva etiqueta](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Editar una etiqueta predeterminada

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Eliminar una etiqueta predeterminada

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## Información adicional

- "[Acerca de las etiquetas](/articles/about-labels)"
