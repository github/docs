---
title: Gestion des révisions de demande de tirage au sein de votre référentiel
intro: Vous pouvez limiter les utilisateurs qui peuvent approuver ou demander des changements sur une demande de tirage (pull request) dans un dépôt public.
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132131'
---
## À propos des limites de révision du code

Dans les référentiels publics, tous les utilisateurs peuvent par défaut envoyer des révisions pour approuver ou demander des modifications concernant des demandes de tirage.

Vous pouvez limiter les utilisateurs qui peuvent envoyer des révisions pour approuver ou demander des modifications concernant des demandes de tirage dans votre référentiel public. Quand vous activez les limites de révision du code, tout le monde peut commenter les demandes de tirage (pull requests) dans votre référentiel public. Toutefois, seules les personnes disposant d’un accès en lecture ou supérieur peuvent approuver les demandes de tirage ou demander des modifications.

Vous pouvez également activer les limites de révision du code pour une organisation. Si vous activez des limites pour une organisation, vous substituez les limites des référentiels individuels appartenant à l’organisation. Pour plus d’informations, consultez « [Gestion des révisions de demande de tirage au sein de votre organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization) ».

## Activation des limites de révision du code

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sous **Accès**, cliquez sur **Options de modération**.
![Paramètres du référentiel des options de modération](/assets/images/help/repository/access-settings-repositories.png)
1. Sous **Options de modération**, cliquez sur **Limites de révision du code**.
![Référentiels de limites de révision du code](/assets/images/help/repository/code-review-limits-repositories.png)
1. Sélectionnez ou désélectionnez **Limiter aux utilisateurs disposant d’un accès en lecture ou supérieur explicite**.
![Limiter la révision dans le référentiel](/assets/images/help/repository/limit-reviews-in-repository.png)
