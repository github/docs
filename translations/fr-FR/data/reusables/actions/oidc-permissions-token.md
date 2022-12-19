---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876816"
---
L’exécution du travail ou du workflow nécessite un paramètre `permissions` avec [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Vous ne pourrez pas demander le jeton OIDC JWT ID si le paramètre `permissions` est `id-token` a la valeur `read` ou `none`.

Le paramètre `id-token: write` permet au JWT d’être demandé à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %} à l’aide de l’une des approches suivantes :

- Utilisation de variables d’environnement sur l’exécuteur (`ACTIONS_ID_TOKEN_REQUEST_URL` et `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Utilisation du `getIDToken()` issu du kit de ressources Actions.

Si vous devez extraire un jeton OIDC pour un workflow, l’autorisation peut être définie au niveau du workflow. Par exemple :

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

Si vous avez uniquement besoin d’extraire un jeton OIDC pour un seul travail, alors cette autorisation peut être définie au sein de ce travail. Par exemple :

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

Vous aurez peut-être besoin de spécifier des autorisations supplémentaires ici, en fonction des exigences de votre workflow. 
