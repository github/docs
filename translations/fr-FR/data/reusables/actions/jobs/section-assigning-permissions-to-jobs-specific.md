---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086319"
---
Pour un travail spécifique, vous pouvez utiliser `jobs.<job_id>.permissions` afin de modifier les autorisations par défaut octroyées à `GITHUB_TOKEN`, en ajoutant ou en supprimant l’accès selon les besoins, afin d’autoriser uniquement l’accès minimal nécessaire. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ».

En spécifiant l’autorisation dans une définition de travail, vous pouvez configurer un ensemble d’autorisations différent pour le `GITHUB_TOKEN` de chaque travail, le cas échéant. Vous pouvez également spécifier les autorisations relatives à tous les travaux du workflow. Pour plus d’informations sur la définition d’autorisations au niveau du workflow, consultez [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### Exemple : Définition d’autorisations pour un travail spécifique

Cet exemple montre les autorisations définies pour `GITHUB_TOKEN`, qui s’appliquent uniquement au travail nommé `stale`. L’accès en écriture est octroyé pour les étendues `issues` et `pull-requests`. Toutes les autres étendues sont privées d’accès.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
