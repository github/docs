---
title: Administración de sugerencias para actualizar ramas de solicitudes de incorporación de cambios
intro: Puedes proporcionar a los usuarios la capacidad de actualizar siempre una rama de solicitud de incorporación de cambios cuando no esté actualizada con la rama base.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578614'
---
## Acercan de las sugerencias para actualizar una solicitud de incorporación de cambios

Si habilita la configuración para sugerir siempre la actualización de ramas de solicitudes de incorporación de cambios en el repositorio, los usuarios con permisos de escritura siempre tendrán la capacidad, en la página de la solicitud de incorporación de cambios, de actualizar la rama principal de una solicitud de incorporación de cambios cuando no esté actualizada con la rama base. Cuando no está habilitada, la capacidad de actualización solo está disponible cuando la rama base necesita que las ramas estén actualizadas antes de la combinación y la rama no esté actualizada. Para más información, vea "[Mantenimiento de la solicitud de incorporación de cambios sincronizada con la rama base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)".

{% data reusables.enterprise.3-5-missing-feature %}

## Administración de sugerencias para actualizar una rama de solicitud de incorporación de cambios

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Solicitudes de incorporación de cambios", seleccione o anule la selección de **Sugerir siempre la actualización de ramas de solicitudes de incorporación de cambios**.
  ![Casilla para habilitar o deshabilitar la sugerencia de actualización de la rama](/assets/images/help/repository/always-suggest-updating-branches.png)
