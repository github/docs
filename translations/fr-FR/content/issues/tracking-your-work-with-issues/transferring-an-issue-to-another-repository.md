---
title: Transfert d’un problème vers un autre référentiel
intro: 'Pour déplacer un problème vers un dépôt mieux adapté, vous pouvez transférer les problèmes ouverts vers d’autres dépôts.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: ee17296217027d2de9805a905aaec187f53e5614
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710418'
---
Pour transférer un problème ouvert vers un autre référentiel, vous devez avoir un accès en écriture au référentiel où se trouve le problème et au référentiel vers lequel vous transférez le problème. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% note %}

**Remarque** : vous pouvez uniquement transférer des problèmes entre les référentiels appartenant au même compte d’utilisateur ou d’organisation. {% ifversion fpt or ghes or ghec %}Un problème de référentiel privé ne peut pas être transféré vers un référentiel public.{% endif %}

{% endnote %}

Quand vous transférez un problème, les commentaires et les destinataires sont conservés. Les étiquettes et les jalons sont également conservés s’ils sont présents dans le dépôt cible, si leur nom correspond pour les étiquettes et si à la fois leur nom et leur date d’échéance correspondent pour les jalons. Ce problème restera sur les tableaux de projet appartenant à l’utilisateur ou à l’ensemble de l’organisation et sera supprimé des tableaux de projet de référentiel. Pour plus d’informations, consultez « [À propos des tableaux de projet](/articles/about-project-boards) ».

Les personnes ou les équipes mentionnées dans le problème recevront une notification leur indiquant que le problème a été transféré vers un nouveau référentiel. L’URL d’origine redirige vers l’URL du nouveau problème. Les personnes qui ne disposent pas d’autorisations de lecture dans le nouveau référentiel verront une bannière leur indiquant que le problème a été transféré vers un nouveau référentiel auquel ils ne peuvent pas accéder.

## Transfert d’un problème ouvert vers un autre référentiel

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Dans la liste des problèmes, cliquez sur le problème à transférer.
4. Dans la barre latérale droite, cliquez sur **Transférer le problème**.
![Bouton pour transférer le problème](/assets/images/help/repository/transfer-issue.png)
5. Utilisez le menu déroulant **Choisir un référentiel** et sélectionnez le référentiel vers lequel vous voulez transférer le problème.
![Choisir une sélection de référentiel](/assets/images/help/repository/choose-a-repository.png)
6. Cliquez sur **Transférer le problème**.
![Bouton Transférer le problème](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour transférer un problème, utilisez la sous-commande `gh issue transfer`. Remplacez le paramètre `issue` par le numéro ou l’URL du problème. Remplacez le paramètre `{% ifversion ghes %}hostname/{% endif %}owner/repo` par l’URL {% ifversion ghes %}URL{% else %}name{% endif %} du référentiel vers lequel vous souhaitez transférer le problème, par exemple `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## Pour aller plus loin

- « [À propos des problèmes](/articles/about-issues) »
- « [Examen de votre journal de sécurité](/articles/reviewing-your-security-log) »
- « [Examen du journal d’audit de votre organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization) »
