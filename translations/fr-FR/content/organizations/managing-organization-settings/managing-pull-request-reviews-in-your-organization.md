---
title: Gestion des révisions de demande de tirage au sein de votre organisation
intro: Vous pouvez limiter les utilisateurs qui peuvent approuver ou demander des changements sur une demande de tirage (pull request) dans votre organisation.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109454'
---
## À propos des limites de révision du code

Par défaut, dans les dépôts publics, tous les utilisateurs peuvent envoyer des révisions qui approuvent ou demandent des changements sur une demande de tirage.

Vous pouvez limiter les personnes autorisées à approuver ou demander des changements sur les demandes de tirage dans les dépôts publics appartenant à votre organisation. Après avoir activé les limites de révision du code, tout le monde peut commenter les demandes de tirage dans vos dépôts publics, mais seules les personnes avec un accès explicite sur un dépôt peuvent approuver une demande de tirage ou demander des changements.

Vous pouvez également activer les limites de révision de code pour des dépôts individuels. Si vous activez des limites au niveau de votre organisation, vous remplacez les limites des dépôts individuels appartenant à l’organisation. Pour plus d’informations, consultez « [Gestion des révisions de demande de tirage dans votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository) ».

## Activation des limites de révision de code

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Accès » de la barre latérale, cliquez sur **{% octicon "report" aria-label="The report icon" %} Modération**.
1. Sous « {% octicon "report" aria-label="The report icon" %} Modération », cliquez sur **Limites de révision du code**.
![Capture d’écran de l’élément de la barre latérale pour les limites de révision de code dans les organisations](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Passez en revue les informations à l’écran. Cliquez sur **Limiter la révision sur tous les dépôts** pour limiter les révisions à ceux qui ont un accès explicite, ou cliquez sur **Supprimer les limites de révision sur tous les dépôts** pour supprimer les limites de chaque dépôt public de votre organisation.
![Capture d’écran des paramètres de limite de révision du code pour les organisations](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
