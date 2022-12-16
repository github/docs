---
title: Communication sur GitHub
intro: 'Vous pouvez discuter de projets et de modifications spécifiques, ainsi que d’idées ou d’objectifs d’équipe plus larges, en utilisant différents types de discussions dans {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 18321069abd4fb48956f4d61653b8bbe592c648b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106788'
---
## Introduction

{% data variables.product.product_name %} fournit des outils de communication collaboratifs intégrés qui vous permettent de d’interagir étroitement avec votre communauté. Ce guide de démarrage rapide vous montre comment choisir l’outil approprié à vos besoins.

{% ifversion discussions %} Vous pouvez créer des problèmes, des demandes de tirage (pull requests), des {% data variables.product.prodname_discussions %} et des discussions d’équipe afin d’y participer, selon le type de conversation souhaité.
{% else %} Vous pouvez créer des problèmes, des demandes de tirage (pull requests) et des discussions d’équipe afin d’y participer, selon le type de conversation souhaité.
{% endif %}

### {% data variables.product.prodname_github_issues %}
- S’avèrent utiles pour discuter des détails spécifiques d’un projet, comme les rapports de bogues, les améliorations planifiées et les commentaires. 
- Sont propres à un dépôt et ont généralement un propriétaire clairement désigné. 
- Sont souvent désignés comme le système de suivi des bogues de {% data variables.product.prodname_dotcom %}.
  
### Demandes de tirage
- Vous permettent de proposer des modifications spécifiques.
- Vous permettent de commenter directement les modifications proposées et suggérées par d’autres personnes. 
- Sont propres à un dépôt. 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  S’apparentent à un forum et conviennent particulièrement aux discussions et suggestions d’idées ouvertes pour lesquelles une collaboration s’avère importante. 
-  Peuvent s’étendre à de nombreux dépôts. 
-  Offrent une expérience collaborative en dehors du codebase, propice aux séances de concertation et à la création d’une base de connaissances communautaire.
-  N’ont souvent aucun propriétaire clairement désigné.
-  N’entraînent souvent aucune tâche actionnable.
{% endif %}

### Discussions d’équipe
- Peuvent être lancées à partir de la page de votre équipe pour des conversations qui s’étendent à plusieurs projets et qui ne relèvent pas d’un problème ou d’une demande de tirage spécifique. Au lieu d’ouvrir un problème dans un dépôt pour discuter d’une idée, vous pouvez inclure toute l’équipe en menant une conversation dans une discussion d’équipe.
- Vous permettent d’avoir des discussions avec votre équipe à propos de la planification, l’analyse, la conception, la recherche utilisateur et la prise de décision générale du projet depuis un seul emplacement. {% ifversion ghes or ghae %} 
- Offrent une expérience collaborative en dehors du codebase, propice aux séances de concertation.
- N’ont souvent aucun propriétaire clairement désigné.
- N’entraînent souvent aucune tâche actionnable.{% endif %}

## Quel outil de discussion dois-je utiliser ?

### Scénarios pour les problèmes

- Je veux garder une trace des tâches, améliorations et bogues.
- Je veux classer un rapport de bogue.
- Je veux partager des commentaires sur une fonctionnalité spécifique.
- Je veux poser une question sur des fichiers du dépôt.

#### Exemple de problème

Cet exemple montre comment un utilisateur {% data variables.product.prodname_dotcom %} a créé un problème dans le dépôt open source de notre documentation pour nous faire part d’un bogue et discuter d’un correctif. 

![Exemple de problème](/assets/images/help/issues/issue-example.png)

- Un utilisateur a remarqué que la couleur bleue de la bannière située en haut de la page dans la version chinoise de {% data variables.product.prodname_dotcom %} Docs rend le texte qu’elle contient illisible. 
- Cet utilisateur a créé un problème dans le dépôt, en le décrivant et en suggérant un correctif (à savoir, utiliser une autre couleur d’arrière-plan pour la bannière).
- Une discussion s’ensuit, pour finalement parvenir à un consensus sur le correctif à appliquer.
- Un contributeur peut alors créer une demande de tirage (pull request) avec le correctif.

### Scénarios pour les demandes de tirage (pull requests)

- Je veux corriger une faute de frappe dans un dépôt.
- Je veux apporter des modifications à un dépôt.
- Je veux apporter des modifications pour corriger un problème.
- Je veux commenter des modifications suggérées par d’autres personnes.

#### Exemple de requête de tirage

Cet exemple montre comment un utilisateur {% data variables.product.prodname_dotcom %} a créé une demande de tirage (pull request) dans le dépôt open source de notre documentation pour corriger une faute de frappe. 

Sous l’onglet **Conversation** de la demande de tirage, l’auteur explique pourquoi il a créé la demande de tirage.

![Exemple de demande de tirage – Onglet Conversation](/assets/images/help/pull_requests/pr-conversation-example.png)

L’onglet **Fichiers modifiés** de la demande de tirage présente le correctif implémenté.

![Exemple de demande de tirage – Onglet Fichiers modifiés](/assets/images/help/pull_requests/pr-files-changed-example.png)

- Ce contributeur remarque une faute de frappe dans le dépôt.
- L’utilisateur crée une demande de tirage avec le correctif.
- Un gestionnaire de dépôt passe en revue la demande de tirage et les commentaires s’y rapportant, puis il la fusionne.

{% ifversion discussions %}
### Scénarios pour {% data variables.product.prodname_discussions %}

- J’ai une question qui n’est pas nécessairement liée à des fichiers spécifiques du dépôt.
- Je veux diffuser des nouvelles à mes collaborateurs ou mon équipe.
- Je veux participer à une conversation ouverte ou en démarrer une.
- Je veux faire une annonce à ma communauté.

#### Exemple de {% data variables.product.prodname_discussions %}

Cet exemple montre le billet d’accueil {% data variables.product.prodname_discussions %} pour le dépôt open source {% data variables.product.prodname_dotcom %} Docs et illustre la façon dont l’équipe souhaite collaborer avec sa communauté.

![Exemple de {% data variables.product.prodname_discussions %}](/assets/images/help/discussions/github-discussions-example.png)

Ce gestionnaire de la communauté a démarré une discussion pour accueillir la communauté et demander à ses membres de se présenter. Ce billet crée une atmosphère accueillante pour les visiteurs et les contributeurs. Il établit également que l’équipe est ravie de soutenir les contributions apportées au dépôt.

{% endif %}
### Scénarios pour les discussions d’équipe

- J’ai une question qui n’est pas nécessairement liée à des fichiers spécifiques du dépôt.
- Je veux diffuser des nouvelles à mes collaborateurs ou mon équipe.
- Je veux participer à une conversation ouverte ou en démarrer une.
- Je veux faire une annonce à mon équipe.

{% ifversion fpt or ghec %} Comme vous pouvez le voir, les discussions d’équipe sont très similaires aux {% data variables.product.prodname_discussions %}. Pour {% data variables.product.prodname_dotcom_the_website %}, nous vous recommandons d’utiliser des {% data variables.product.prodname_discussions %} comme point de départ pour les conversations. Vous pouvez utiliser des {% data variables.product.prodname_discussions %} pour collaborer avec toute communauté sur {% data variables.product.prodname_dotcom %}. Si vous faites partie d’une organisation et que vous souhaitez lancer des conversations au sein de votre organisation ou de votre équipe au sein de cette organisation, utilisez de préférence des discussions d’équipe.
{% endif %}

#### Exemple de discussion d’équipe

Cet exemple illustre un billet de l’équipe `octo-team`.

![Exemple de discussion d’équipe](/assets/images/help/projects/team-discussions-example.png)

Le membre `octocat` de l’équipe a publié une discussion d’équipe, afin d’informer l’équipe de diverses choses :
- Un membre de l’équipe appelé Mona a lancé des événements de jeu à distance.
- Il existe un billet de blog qui décrit la manière dont les équipes utilisent {% data variables.product.prodname_actions %} pour produire leurs documents.
- Les documents liés à l’événement April All Hands sont désormais mis à la disposition de tous les membres de l’équipe.

## Étapes suivantes

Ces exemples vous ont montré comment déterminer l’outil le mieux approprié à vos conversations sur {% data variables.product.product_name %}. Mais ce n’est qu’un début ; il y a tant d’autres choses que vous pouvez faire pour adapter ces outils à vos besoins.

Pour les problèmes, par exemple, vous pouvez utiliser des étiquettes à des fins de recherche plus rapide et créer des modèles de problème pour aider les contributeurs à ouvrir des problèmes pertinents. Pour plus d’informations, consultez « [À propos des problèmes](/github/managing-your-work-on-github/about-issues#working-with-issues) » et « [À propos des modèles de problème et de demande de tirage](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) ».

Pour les demandes de tirage, vous pouvez créer des brouillons si les modifications que vous proposez sont encore en cours de travail. Les brouillons de demande de tirage ne peuvent pas être fusionnés tant qu’ils ne sont pas marqués comme étant prêts pour la révision. Pour plus d’informations, consultez « [À propos des demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) ».

{% ifversion discussions %} Pour les {% data variables.product.prodname_discussions %}, vous pouvez{% ifversion fpt or ghec %} définir un code de conduite et{% endif %} épingler des discussions qui contiennent des informations importantes pour votre communauté. Pour plus d’informations, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».
{% endif %}

Pour les discussions d’équipe, vous pouvez modifier ou supprimer des discussions dans la page d’une équipe, et vous pouvez configurer des notifications pour les discussions d’équipe. Pour plus d’informations, consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ».

Pour découvrir certaines fonctionnalités de mise en forme avancées qui vous aideront à communiquer, consultez « [Démarrage rapide pour l’écriture sur {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github) ».
