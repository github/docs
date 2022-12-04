---
title: Planification et suivi du travail d’une équipe ou d’un projet
intro: 'Bases de l’utilisation des outils de planification et de suivi de {% data variables.product.prodname_dotcom %} pour gérer le travail sur une équipe ou un projet.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423611'
---
## Introduction
Vous pouvez utiliser les référentiels, problèmes, panneaux de projets et autres outils {% data variables.product.prodname_dotcom %} pour planifier votre travail et en effectuer le suivi, qu’il s’agisse d’un projet individuel ou d’une équipe fonctionnelle croisée.

Dans ce guide, vous allez découvrir comment créer et configurer un référentiel pour collaborer avec un groupe de personnes, créer des modèles de problèmes{% ifversion fpt or ghec %} et des formulaires{% endif %}, ouvrir des problèmes et utiliser des listes de tâches pour décomposer le travail, et établir un panneau de projet pour organiser les problèmes et en effectuer le suivi.

## Création d’un dépôt
Au début d’un nouveau projet, d’une nouvelle initiative ou d’une nouvelle fonctionnalité, la première étape consiste à créer un référentiel. Les référentiels contiennent tous les fichiers de votre projet. Ils vous permettent de collaborer avec d’autres personnes et de gérer votre travail. Pour plus d’informations, consultez « [Création d’un dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository) ».

Vous pouvez configurer des référentiels à différentes fins en fonction de vos besoins. Voici quelques cas d’utilisation courants :

- **Référentiels de produits :** les grandes organisations qui effectuent le suivi de leur travail et de leurs objectifs autour de produits spécifiques peuvent posséder un ou plusieurs référentiels contenant le code et d’autres fichiers. Ces référentiels peuvent également être utilisés pour la documentation, les rapports sur l’intégrité du produit ou les plans futurs le concernant. 
- **Référentiels de projets :** vous pouvez créer un référentiel pour un projet individuel sur lequel vous travaillez ou pour un projet sur lequel vous collaborez avec d’autres personnes. Dans le cas d’une organisation qui effectue le suivi du travail pour des initiatives ou des projets de courte durée (par exemple une société de conseil), il est nécessaire de créer des rapports sur l’intégrité du projet et de déplacer les personnes entre les différents projets en fonction de leurs compétences et des besoins. Le code du projet est souvent contenu dans un seul référentiel.
- **Référentiels d’équipe :** dans le cas d’une organisation qui regroupe des personnes dans des équipes et leur apporte des projets (par exemple une équipe d’outils de développement), le code peut être dispersé dans de nombreux référentiels pour le travail dont ils doivent effectuer le suivi. Il peut alors être utile de disposer d’un référentiel unique, propre à l’équipe, pour suivre tout le travail dans lequel elle est impliquée.
- **Référentiels personnels :** vous pouvez créer un référentiel personnel pour effectuer le suivi de tout votre travail à un seul endroit, planifier les tâches futures, ou même ajouter des notes ou des informations que vous souhaitez enregistrer. Vous avez également la possibilité d’ajouter des collaborateurs si vous voulez partager ces informations avec d’autres personnes. 

Vous pouvez créer plusieurs référentiels distincts pour attribuer des autorisations d’accès différentes au code source ou pour effectuer un suivi des problèmes et des discussions. Pour plus d’informations, consultez « [Création d’un référentiel dédié aux problèmes](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository) ».

Dans la suite de ce guide, nous allons utiliser un exemple de référentiel appelé Project Octocat.
## Communication des informations sur le référentiel
Vous pouvez créer un fichier README.md pour votre référentiel afin de présenter votre équipe ou votre projet et de communiquer des informations importantes à son sujet. Il s’agit souvent du premier élément consulté par les visiteurs de votre référentiel. Vous pouvez donc fournir également des informations pour aider les utilisateurs et les contributeurs à commencer à utiliser le projet et à contacter l’équipe. Pour plus d’informations, consultez « [À propos des fichiers README](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes) ».

Vous pouvez également créer spécifiquement un fichier CONTRIBUTING.md destiné aux utilisateurs et aux contributeurs, qui contiendra des instructions pour contribuer et interagir avec l’équipe ou le projet (par exemple comment ouvrir un problème de résolution de bogue ou demander une amélioration). Pour plus d’informations, consultez « [Définition de recommandations pour les contributeurs de dépôt](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) ».
### Exemple de fichier README
Nous pouvons créer un fichier README.md pour présenter notre nouveau projet, Project Octocat. 

![Création d’un exemple de fichier README](/assets/images/help/issues/quickstart-creating-readme.png)
## Création de modèles de problème

Vous pouvez utiliser des problèmes pour effectuer le suivi des différents types de travail couverts par votre équipe fonctionnelle croisée ou votre projet, ainsi que pour recueillir des informations auprès de personnes extérieures à votre projet. Voici quelques cas d’usage courants pour les problèmes.

- Suivi des versions : vous pouvez utiliser un problème pour suivre la progression d’une version ou la procédure à appliquer le jour du lancement.
- Grandes initiatives : vous pouvez utiliser un problème pour suivre la progression d’une grande initiative ou d’un projet, qui est ensuite lié à des problèmes de moindre envergure.
- Demandes de fonctionnalités : votre équipe ou vos utilisateurs peuvent créer des problèmes pour demander une amélioration à votre produit ou projet.
- Bogues : votre équipe ou vos utilisateurs peuvent créer des problèmes pour signaler un bogue. 

Selon le type de référentiel et de projet sur lequel vous travaillez, vous pouvez classer les problèmes par ordre de priorité. Une fois que vous avez identifié les types de problèmes les plus courants pour votre équipe, vous avez la possibilité de créer des modèles de problèmes {% ifversion fpt or ghec %}et des formulaires{% endif %} pour votre référentiel. Les modèles de problèmes {% ifversion fpt or ghec %}et les formulaires{% endif %} vous permettent de créer une liste standardisée de modèles parmi lesquels un contributeur peut choisir lorsqu’il ouvre un problème dans votre référentiel. Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) ».

### Exemple de modèle de problème
Nous allons créer un modèle de problème permettant de signaler un bogue dans Project Octocat.

![Création d’un exemple de modèle de problème](/assets/images/help/issues/quickstart-creating-issue-template.png)

Maintenant que nous avons créé le modèle de problème de rapport de bogues, vous pouvez le sélectionner lors de la création d’un problème dans Project Octocat.

![Choix de l’exemple de modèle de problème](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Ouverture de problèmes et utilisation de listes de tâches pour effectuer le suivi du travail
Vous pouvez organiser votre travail et en effectuer le suivi en créant des problèmes. Pour plus d’informations, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue) ».
### Exemple de problème
Voici un exemple de problème créé pour une grande initiative, un travail front-end, dans Project Octocat.

![Création d’un exemple de problème pour une grande initiative](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### Exemple de liste de tâches

Vous pouvez utiliser des listes de tâches pour décomposer les problèmes volumineux en tâches plus petites et effectuer le suivi des problèmes dans le cadre d’un objectif plus large. {% ifversion fpt or ghec %} Les listes de tâches présentent des fonctionnalités supplémentaires lorsqu’elles sont ajoutées au corps d’un problème. Vous pouvez voir en haut du problème le nombre de tâches terminées par rapport au total. Si une personne ferme un problème lié dans la liste des tâches, la case à cocher est automatiquement marquée comme effectuée. {% endif %} Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».

Nous avons ajouté une liste de tâches à notre problème Project Octocat, le décomposant ainsi en problèmes plus petits.

![Ajout d’une liste de tâches à l’exemple de problème](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## Prise de décisions en équipe
Vous pouvez utiliser des problèmes et des discussions pour communiquer et prendre des décisions en équipe sur les améliorations planifiées et les priorités de votre projet. Les problèmes sont utiles lorsqu’ils sont créés pour discuter de détails spécifiques (par exemple des rapports de bogues ou de performances), de la planification du trimestre suivant ou de la conception d’une nouvelle initiative. Les discussions servent pour le brainstorming et les commentaires ouverts, en dehors du codebase et sur plusieurs référentiels. Pour plus d’informations, consultez « [Quel outil de discussion utiliser ?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use) ».

Dans votre équipe, vous pouvez également communiquer des informations sur les tâches quotidiennes au sein des problèmes afin que tout le monde connaisse l’état du travail. Créez par exemple un problème pour une fonctionnalité volumineuse sur laquelle plusieurs personnes travaillent : chaque membre de l’équipe pourra ainsi ajouter des mises à jour de son état ou ouvrir des questions dans ce problème.
### Exemple de problème avec des collaborateurs de projet
Voici un exemple de collaborateurs de projet qui donnent un état d’avancement de leur travail sur le problème Project Octocat.

![Collaboration sur l’exemple de problème](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## Mise en évidence des objectifs et de l’état du projet à l’aide d’étiquettes
Vous pouvez créer des étiquettes pour un référentiel afin de catégoriser les problèmes, les demandes de tirage (pull request) et les discussions. {% data variables.product.prodname_dotcom %} fournit également des étiquettes par défaut pour chacun des nouveaux référentiels que vous modifiez ou supprimez. Les étiquettes sont utiles pour effectuer le suivi des objectifs du projet, des bogues, des types de travail et de l’état d’un problème.

Pour plus d’informations, consultez « [Création d’une étiquette](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label) ».

Une fois que vous avez créé une étiquette dans un référentiel, vous pouvez l’appliquer à tous les problèmes, à toutes les demandes de tirage et à toutes les discussions du référentiel. Cela vous permettra de filtrer les problèmes et les demandes de tirage par étiquette pour trouver tout le travail associé. Par exemple, recherchez tous les bogues front-end de votre projet en ajoutant un filtre sur les problèmes avec les étiquettes `front-end` et `bug`. Pour plus d’informations, consultez « [Filtrage et recherche des problèmes et demandes de tirage](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests) ».
### Exemple d’étiquette
Voici un exemple d’étiquette `front-end` qui a été créée et ajoutée au problème.

![Ajout d’une étiquette à un exemple de problème](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## Ajout de problèmes à un panneau de projet

{% ifversion projects-v2 %}

Vous pouvez utiliser {% data variables.projects.projects_v2 %} sur {% data variables.product.prodname_dotcom %} pour planifier et suivre le travail de votre équipe. Un projet consiste en une feuille de calcul personnalisable qui s’intègre à vos problèmes et demandes de tirage sur {% data variables.product.prodname_dotcom %} et reste automatiquement à jour des informations présentes sur {% data variables.product.prodname_dotcom %}. Vous pouvez personnaliser la disposition en filtrant, en triant et en regroupant vos problèmes et demandes de tirage. Pour commencer à utiliser des projets, consultez « [Démarrage rapide avec les projets](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects) ».
### Exemple de projet
Voici la disposition du tableau d’un exemple de projet, remplie avec les problèmes Project Octocat créés.

![Exemple de projet sous forme de tableau](/assets/images/help/issues/quickstart-projects-table-view.png)

Il est également possible d’afficher le même projet sous forme de panneau.

![Exemple de projet sous forme de panneau](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

Vous pouvez {% ifversion projects-v2 %} aussi utiliser les{% else %} utiliser{% endif %} {% data variables.product.prodname_projects_v1 %} existants sur {% data variables.product.prodname_dotcom %} pour planifier et suivre votre travail ou celui de votre équipe. Les panneaux de projets sont constitués de problèmes, de demandes de tirage et de notes classés comme des cartes dans les colonnes de votre choix. Vous pouvez créer des panneaux de projets pour le travail lié à des fonctionnalités, les feuilles de route générales et même les listes de contrôle des mises en production. Pour plus d’informations, consultez « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ».
### Exemple de panneau Project
Voici un panneau de projet pour l’exemple Project Octocat avec le problème créé, auquel ont été ajoutés les problèmes plus petits dans lesquels il a été décomposé.

![Exemple de panneau Project](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## Étapes suivantes

Vous avez découvert les outils proposés par {% data variables.product.prodname_dotcom %} pour la planification et le suivi de votre travail, et vous avez commencé à configurer le référentiel de votre équipe fonctionnelle croisée ou de votre projet ! Voici quelques ressources utiles pour personnaliser davantage votre référentiel et organiser votre travail.

- « [À propos des référentiels](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories) » pour plus d’informations sur la création de référentiels
- « [Suivi du travail avec des problèmes](/issues/tracking-your-work-with-issues) » pour savoir comment créer et gérer les problèmes
- « [À propos des problèmes et des modèles de demandes de tirage](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) » pour plus d’informations sur les modèles de problèmes
- « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) » pour savoir comment créer, modifier et supprimer des étiquettes
- « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) » pour en savoir plus sur les listes de tâches {% ifversion projects-v2 %} - « [À propos des projets](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) » pour en savoir plus sur les projets
- « [Personnalisation d’une vue](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) » pour apprendre à personnaliser les vues des projets{% endif %} {% ifversion projects-v1 %}- « [À propos des {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) » pour apprendre à gérer les panneaux de projet{% endif %}
