---
title: Permitir que personas eliminen propuestas en tu organización
intro: Los propietarios de la organización pueden permitir que determinadas personas eliminen propuestas en repositorios que pertenecen a tu organización.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878444'
---
Por defecto, las propuestas no pueden eliminarse en los repositorios de una organización. El propietario de la organización debe habilitar esta característica para todos los repositorios de la organización en primer lugar.

Una vez habilitada, los propietarios de la organización y las personas con acceso administrativo a un repositorio que pertenezca a la organización podrán borrar las propuestas. Entre las personas con acceso administrativo en un repositorio se incluyen los miembros de la organización y colaboradores externos que obtuvieron acceso administrativo. Para obtener más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" y "[Eliminar una incidencia](/articles/deleting-an-issue)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. En "Issue deletion" (Eliminación de la incidencia), seleccione **Allow members to delete issues for this organization** (Permitir que los miembros eliminen incidencias para esta organización).
![Casilla de verificación para permitir que las personas eliminen incidencias](/assets/images/help/settings/issue-deletion.png)
6. Haga clic en **Save**(Guardar).
