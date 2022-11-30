---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086292"
---
Pour ajouter une intégration OIDC à vos workflows de déploiement cloud, vous avez besoin d’ajouter les changements de code suivants :

- Accordez l’autorisation d’extraire le jeton à partir du fournisseur OIDC {% data variables.product.prodname_dotcom %} :
  - Le workflow a besoin d’un paramètre `permissions` avec une valeur `id-token` définie. Cela vous permet d’extraire le jeton OIDC de chaque travail dans le workflow. Si vous avez uniquement besoin d’extraire un jeton OIDC pour un seul travail, alors cette autorisation peut être définie au sein de ce travail.
- Demandez le JSON Web Token (JWT) auprès du fournisseur OIDC {% data variables.product.prodname_dotcom %} et présentez-le à votre fournisseur de cloud pour recevoir un jeton d’accès :
  - Vous pouvez utiliser le kit de ressources Actions pour extraire les jetons dans votre travail ou utiliser l’action officielle créée par votre fournisseur de cloud pour extraire le JWT et recevoir le jeton d’accès à partir du cloud.
