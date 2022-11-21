---
title: Git LFS
intro: 'Du kannst {% data variables.large_files.product_name_long %} (LFS) für ein Repository aktivieren oder deaktivieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109767'
---
## Informationen zur {% data variables.large_files.product_name_short %}-API

Du kannst {% data variables.large_files.product_name_short %} verwenden, um große Dateien in einem Git-Repository zu speichern. Mit der {% data variables.large_files.product_name_short %}-API kannst du das Feature für ein einzelnes Repository aktivieren oder deaktivieren. Weitere Informationen zu {% data variables.large_files.product_name_short %} findest du unter [Informationen zu {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

Personen mit Administratorzugriff auf ein Repository können die {% data variables.large_files.product_name_short %}-API nutzen.

{% ifversion fpt or ghec %}

Die Verwendung von {% data variables.large_files.product_name_short %} ist kostenpflichtig. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage).

Wenn du die {% data variables.large_files.product_name_short %}-API für ein Repository nutzen möchtest, das einer Organisation angehört, musst du mit deiner Rolle auf die Abrechnung der Organisation{% ifversion ghec %} oder des Unternehmens{% endif %} zugreifen können.{% ifversion fpt %} Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners).{% endif %}

{% ifversion ghec %}

| Repositorybesitz | Erforderlicher Repositoryzugriff | Erforderliche Rolle | Weitere Informationen |
| :- | :- | :- | :- |
| Persönliches Konto | Administrator | – | – |
| <ul><li>Organisation auf {% data variables.product.prodname_team %}</li><li>Organisation auf {% data variables.product.product_name %}, aber nicht in einem Unternehmen</li></ul> | Administrator (wird geerbt, wenn du Besitzer einer Organisation bist) | Organisationsbesitzer oder Abrechnungsmanager | [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| Organisation in einem Unternehmen | Administrator (kann geerbt werden, wenn du Besitzer einer Organisation bist) | Unternehmensbesitzer oder Abrechnungsmanager | [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) |

{% endif %}

{% endif %}
