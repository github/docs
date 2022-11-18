---
title: Demande d’une évaluation de demande de tirage
intro: 'Après avoir créé une demande de tirage (pull request), vous pouvez demander à une personne spécifique de regarder les changements que vous proposez. Si vous êtes membre de l’organisation, vous pouvez également demander à une équipe spécifique d’examiner vos modifications.'
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133903'
---
Les référentiels appartiennent à un compte personnel (un seul propriétaire individuel) ou un compte d’organisation (un compte partagé avec de nombreux collaborateurs ou responsables). Pour plus d’informations, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ». Les propriétaires et collaborateurs d’un référentiel appartenant à un compte personnel peuvent attribuer des revues de demande de tirage. Les membres de l’organisation disposant d’autorisations de triage peuvent également affecter un réviseur pour une demande de tirage. 

Pour affecter un réviseur à une demande de tirage, vous aurez besoin d’un accès en écriture au référentiel. Pour plus d’informations sur les rôles de référentiel, consultez « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ». Si vous disposez d’un accès en écriture, vous pouvez attribuer à toute personne qui a accès en lecture au référentiel en tant que réviseur.

Les membres de l’organisation disposant d’un accès en écriture peuvent également affecter une revue de demande de tirage à toute personne ou équipe disposant d’un accès en lecture à un référentiel. Le réviseur ou l’équipe demandé recevront une notification de votre demande d’évaluation de la demande de tirage. Si vous demandez l’avis d’une équipe et que l’attribution de révision du code est activée, des membres spécifiques seront demandés et l’équipe sera supprimée en tant que réviseur. Pour plus d’informations, consultez « [Gestion des paramètres de révision du code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team) ».

{% note %}

**Remarque :** les auteurs de demandes de tirage ne peuvent pas demander d’avis, sauf s’ils sont propriétaires ou collaborateurs du référentiel disposant d’un accès en écriture au référentiel.

{% endnote %}

Vous pouvez demander un avis d’une personne suggérée ou spécifique. Les réviseurs suggérés sont basés sur les [données de blâme Git](/articles/tracking-changes-in-a-file/). Si vous demandez un avis, d’autres personnes disposant d’un accès en lecture au référentiel peuvent toujours évaluer votre demande de tirage. Une fois que quelqu’un a examiné votre demande de tirage et que vous avez apporté les modifications nécessaires, vous pouvez re-demander un avis auprès du même réviseur. Si le réviseur demandé n’envoie pas d’avis et que la demande de tirage répond aux [exigences de fusion](/articles/defining-the-mergeability-of-pull-requests) du référentiel, vous pouvez toujours fusionner la demande de tirage.

{% data reusables.repositories.sidebar-pr %}
1. Dans la liste des demandes de tirage, cliquez sur la demande de tirage qu’une personne spécifique ou une équipe évaluera sur votre demande.
2. Accédez aux **Réviseurs** dans la barre latérale droite.  
3. Pour demander une révision à partir d’une personne suggérée sous **Réviseurs**, en regard de son nom d’utilisateur, cliquez sur **Requête**.
 ![Icône de demande des réviseurs dans la barre latérale droite](/assets/images/help/pull_requests/request-suggested-review.png)
5. Si vous le souhaitez, pour demander l’avis d’une personne autre qu’une personne suggérée, cliquez sur **Réviseurs**, puis cliquez sur un nom dans le menu déroulant.
  ![Icône d’engrenage des réviseurs dans la barre latérale droite](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. Si vous connaissez éventuellement le nom de la personne ou de l’équipe de laquelle vous souhaitez obtenir un avis, cliquez sur **Réviseurs**, puis tapez le nom d’utilisateur de la personne ou le nom de l’équipe à qui vous demandez l’évaluation de vos modifications. Cliquez sur le nom de l’équipe ou le nom d’utilisateur pour demander un avis.
  ![Champ pour entrer le nom d’utilisateur d’un réviseur et la liste déroulante avec le nom du réviseur](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Une fois votre demande de tirage évaluée et que vous avez apporté les modifications nécessaires, vous pouvez demander à un réviseur d’évaluer votre demande de tirage. Accédez à **Réviseurs** dans la barre latérale droite, puis cliquez sur {% octicon "sync" aria-label="The sync icon" %} en regard du nom du réviseur dont vous souhaitez l’avis.
  ![Icône de synchronisation de nouvel avis dans la barre latérale droite](/assets/images/help/pull_requests/request-re-review.png)

## Pour aller plus loin

- « [À propos des évaluations de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) »
