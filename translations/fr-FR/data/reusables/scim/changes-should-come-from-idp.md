---
ms.openlocfilehash: dbc37853f288c92b80e2858c0e94b9a07ca9b60f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128446"
---
Si l’approvisionnement de SCIM est implémenté pour votre organisation, toutes les modifications apportées à l’appartenance à l’organisation d’un utilisateur devraient être déclenchées à partir du fournisseur d’identité. Si un utilisateur est invité à une organisation manuellement plutôt que par une intégration de SCIM existante, il se peut que son compte d’utilisateur ne soit pas correctement lié à son identité SCIM. Cela peut empêcher le déprovisionnement du compte d’utilisateur via SCIM à l’avenir. Si un utilisateur est supprimé manuellement plutôt que par une intégration SCIM existante, une identité liée obsolète subsiste, qui peut occasionner des problèmes si l’utilisateur a besoin de rejoindre à nouveau l’organisation.
