---
title: À propos des discussions
intro: 'Utilisez des discussions pour poser des questions et y répondre, partager des informations, faire des annonces et participer à des conversations sur un projet dans {% data variables.product.product_name %}.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886949'
---
## À propos de {% data variables.product.prodname_discussions %}

Avec {% data variables.product.prodname_discussions %}, la communauté de votre projet peut créer des conversations dans le référentiel ou l’organisation du projet et y participer. Les discussions permettent aux chargés de maintenance, aux contributeurs et aux visiteurs d’un projet de se réunir et d’atteindre les objectifs suivants dans un même emplacement central, sans outils tiers.

- Partager des annonces et des informations, recueillir des commentaires, planifier et prendre des décisions
- Poser des questions, discuter et répondre aux questions, et marquer les discussions comme répondues
- Créer des sondages pour évaluer l’opinion de la communauté
- Favoriser une atmosphère accueillante pour les visiteurs et les contributeurs afin de discuter des objectifs, du développement, de l’administration et des workflows

![Onglet Discussions d’un dépôt](/assets/images/help/discussions/hero.png)

Vous pouvez utiliser des discussions de référentiel pour discuter de sujets spécifiques au référentiel. Si votre projet s’étend sur plusieurs référentiels, vous pouvez utiliser des discussions d’organisation pour discuter des sujets qui ne sont pas spécifiques à un référentiel unique dans votre organisation.

Vous n’avez pas besoin de fermer une discussion comme un problème ou une demande de tirage.

Si un administrateur de dépôt ou un chargé de maintenance de projet active {% data variables.product.prodname_discussions %} pour un dépôt, toute personne ayant accès au dépôt peut créer des discussions pour le dépôt et y participer. Si un propriétaire d’organisation active {% data variables.product.prodname_discussions %} pour une organisation, toute personne pouvant afficher le référentiel source peut créer une discussion d’organisation.

Les administrateurs de dépôt et les chargés de maintenance de projet peuvent gérer les discussions et les catégories de discussion dans un dépôt, et épingler des discussions pour en améliorer la visibilité. Les modérateurs et les collaborateurs peuvent marquer les commentaires comme des réponses, verrouiller les discussions et convertir les problèmes en discussions. De même, pour les discussions de l’organisation, le rôle d’un utilisateur dans le référentiel source détermine comment un utilisateur peut interagir avec les discussions de l’organisation. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

Pour plus d’informations sur la gestion des discussions, consultez « [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions) ».

## À propos des sondages

Vous pouvez créer des sondages dans la catégorie des sondages pour évaluer l’intérêt pour les nouvelles idées et la direction du projet. Toute personne avec un accès en lecture à votre dépôt peut créer des sondages, voter dans des sondages et voir ses résultats. {% ifversion fpt or ghec %} Les utilisateurs déconnectés peuvent voir les résultats des sondages dans les dépôts publics.{% endif %}

Les sondages nécessitent une question et au moins deux options. Vous pouvez ajouter un maximum de huit options, et les options peuvent contenir un maximum de 128 caractères. 

Les votants ne peuvent pas modifier leur vote. La modification d’un sondage réinitialise tous les votes qui ont déjà été exprimés.

Pour plus d’informations sur la création de sondages, consultez [Création d’un sondage](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll).

## À propos de l’organisation des discussions

Vous pouvez organiser des discussions avec des catégories et des étiquettes.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

Pour les discussions au format question/réponse, un commentaire individuel au sein de la discussion peut être marqué comme une réponse de la discussion. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

Pour plus d’informations, consultez « [Gestion des catégories de discussion](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) ».

{% data reusables.discussions.you-can-label-discussions %}

## Bonnes pratiques de {% data variables.product.prodname_discussions %}

En tant que membre de la communauté ou chargé de maintenance, commencez une discussion pour poser une question ou pour discuter des informations qui affectent la communauté. Pour plus d’informations, consultez « [Collaboration avec les chargés de maintenance à travers les discussions](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions) ».

Participez à une discussion pour poser des questions et y répondre, fournissez des commentaires et entrez en contact avec la communauté du projet. Pour plus d’informations, consultez « [Participation à une discussion](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) ».

Vous pouvez mettre en évidence les discussions qui contiennent des conversations importantes, utiles ou exemplaires entre les membres de la communauté. Pour plus d’informations, consultez [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).

{% data reusables.discussions.you-can-convert-an-issue %} Pour plus d’informations, consultez « [Modération des discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion) ».

## Partage de commentaires

Vous pouvez partager vos commentaires sur {% data variables.product.prodname_discussions %} avec {% data variables.product.company_short %}. Pour prendre part à la conversation, consultez les [discussions de la {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/discussions).

## Pour aller plus loin

- « [À propos de l’écriture et de la mise en forme sur {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github) ».
- « [Recherche dans les discussions](/search-github/searching-on-github/searching-discussions) »
- « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications) »
- « [Modération des commentaires et des conversations](/communities/moderating-comments-and-conversations) »{% ifversion fpt or ghec %}
- « [Gestion de votre sécurité sur {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github) »{% endif %}
