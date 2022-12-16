---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066571"
---
Vous pouvez utiliser `permissions` pour modifier les autorisations par défaut octroyées à `GITHUB_TOKEN`, en ajoutant ou en supprimant l’accès selon les besoins, afin d’autoriser uniquement l’accès minimal nécessaire. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ».

Vous pouvez utiliser `permissions` en tant que clé de niveau supérieur, à appliquer à tous les travaux du workflow ou à des travaux spécifiques. Quand vous ajoutez la clé `permissions` à un travail spécifique, toutes les actions et commandes d’exécution de ce travail qui utilisent `GITHUB_TOKEN` obtiennent les droits d’accès que vous spécifiez.  Pour plus d’informations, consultez [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### Exemple : Affectation d’autorisations à GITHUB_TOKEN

Cet exemple montre les autorisations définies pour `GITHUB_TOKEN`, qui s’appliquent à tous les travaux du workflow. Toutes les autorisations se voient octroyer un accès en lecture.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
