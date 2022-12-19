---
title: Gestion du contenu signalé dans le dépôt de votre organisation
intro: 'Une fois qu’un contributeur signale un contenu perturbant dans un dépôt, les gestionnaires du dépôt peuvent afficher et gérer le rapport.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105421'
---
Toute personne disposant d’autorisations d’administrateur sur un dépôt peut voir et gérer le contenu signalé pour ce dépôt.

## À propos de la gestion du contenu signalé

Pour pouvoir voir ou gérer du contenu signalé, vous devez l’activer pour le dépôt. Pour plus d’informations, consultez « [Gestion de la façon dont les contributeurs signalent les abus dans le dépôt de votre organisation](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository) ».

Vous pouvez suivre, trier et répondre aux rapports signalant du contenu perturbateur. Dans la liste « Rapports d’abus », vous pouvez voir tous les rapports et accéder directement à chaque commentaire signalé sur {% data variables.product.prodname_dotcom %}.

{% data reusables.community.tools-for-moderating %}

Une fois que vous avez fini de modérer le contenu perturbateur, vous pouvez marquer le rapport comme étant résolu. Si vous considérez que votre tâche de modération est incomplète, vous pouvez également marquer le rapport comme étant non résolu.

## Affichage du contenu signalé par un contributeur

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. À droite du contenu signalé que vous souhaitez voir, cliquez sur {% octicon "kebab-horizontal" aria-label="The edit icon" %}, puis sur **Voir le contenu**.
  ![« Voir le contenu » dans le menu déroulant de modification du contenu signalé](/assets/images/help/repository/reported-content-report-view-content.png)

## Résolution d’un rapport

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. À droite du rapport que vous souhaitez marquer comme étant résolu, cliquez sur {% octicon "kebab-horizontal" aria-label="The edit icon" %}, puis sur **Marquer comme résolu**.
  ![« Marquer comme résolu » dans le menu déroulant de modification du contenu signalé](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## Marquage d’un rapport comme étant non résolu

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. À droite du rapport que vous souhaitez marquer comme étant non résolu, cliquez sur {% octicon "kebab-horizontal" aria-label="The edit icon" %}, puis sur **Marquer comme non résolu**.
  ![« Marquer comme non résolu » dans le menu déroulant de modification du contenu signalé](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## Pour aller plus loin

- « [À propos de la gestion et de la modération de la communauté](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation) »
