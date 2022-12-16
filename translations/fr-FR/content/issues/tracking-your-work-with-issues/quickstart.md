---
title: Guide de démarrage rapide pour les problèmes GitHub
intro: 'Suivez ce petit guide interactif pour découvrir {% data variables.product.prodname_github_issues %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423251'
---
## Introduction

Ce guide montre comment utiliser {% data variables.product.prodname_github_issues %} pour planifier et suivre un élément de travail. Dans ce guide, vous allez créer un problème et ajouter une liste de tâches pour suivre les sous-tâches. Vous allez aussi apprendre à ajouter des étiquettes, des jalons, des personnes responsables et des projets pour communiquer des métadonnées sur votre problème.

## Prérequis

Pour créer un problème, vous avez besoin d’un dépôt. Vous pouvez utiliser un dépôt existant auquel vous avez accès en écriture ou en créer un nouveau. {% data reusables.enterprise-accounts.emu-permission-repo %} Les problèmes doivent être activés sur le dépôt. Pour plus d’informations sur la création d’un dépôt, consultez « [Création d’un dépôt](/articles/creating-a-new-repository) ». Pour plus d’informations sur l’activation des problèmes s’ils sont désactivés dans votre dépôt, consultez « [Désactivation des problèmes](/github/administering-a-repository/managing-repository-settings/disabling-issues) ».

## Ouverture d’un problème vide

Pour commencer, créez un problème. Il existe plusieurs façons de créer un problème : vous pouvez choisir la méthode la plus pratique pour votre workflow. Cet exemple va utiliser l’interface utilisateur de {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur les autres façons de créer un problème, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Dans cet exemple, nous allons commencer par un problème vide. Votre dépôt peut utiliser des modèles de problème{% ifversion fpt or ghec %} et des formulaires de problème{% endif %} pour encourager les contributeurs à fournir des informations spécifiques. Si votre dépôt utilise des modèles de problème, {% ifversion fpt or ghes or ghec %}cliquez sur **Ouvrir un problème vide**{% else %}cliquez sur **Ouvrir un problème normal.** {% endif %}.

![problème vide](/assets/images/help/issues/blank-issue.png)

## Indication des informations

Donnez un titre descriptif à votre problème. Le titre doit refléter ce sur quoi porte le problème.

Ajoutez une description qui explique l’objectif du problème, y compris tous les détails susceptibles d’aider à le résoudre. Par exemple, s’il s’agit du signalement d’un bogue, décrivez les étapes à suivre pour reproduire le bogue, le résultat attendu et le résultat réel.

Vous pouvez utiliser Markdown pour ajouter une mise en forme, des liens, des emojis, etc. Pour plus d’informations, consultez [Écrire sur GitHub](/github/writing-on-github).

![titre et corps du problème](/assets/images/help/issues/issue-title-body.png)

## Ajout d’une liste de tâches

Il peut être utile de décomposer les gros problèmes en tâches plus petites ou de suivre plusieurs problèmes connexes dans un seul problème plus gros. Ajoutez une liste de tâches à votre problème en préfaçant les éléments de liste avec `[ ]`. Référencez les problèmes existants par numéro ou URL du problème. Vous pouvez utiliser du texte brut pour suivre les tâches qui n’ont pas de problème correspondant et les convertir en problèmes ultérieurement. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/about-task-lists) ».

![problème avec une liste des tâches](/assets/images/help/issues/issue-task-list-raw.png)

## Ajout d’étiquettes

Ajoutez une étiquette pour catégoriser votre problème. Par exemple, vous pouvez utiliser une étiquette `bug` et une étiquette `good first issue` pour indiquer qu’un problème est un bogue qu’un nouveau contributeur peut sélectionner. Les utilisateurs peuvent filtrer les problèmes par étiquette pour rechercher tous les problèmes qui ont une étiquette spécifique.

Vous pouvez utiliser les étiquettes par défaut ou créer une étiquette. Pour plus d’informations, consultez « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) ».

![problème avec des étiquettes](/assets/images/help/issues/issue-with-label.png)

## Ajout de jalons

Vous pouvez ajouter un jalon pour suivre le problème dans le cadre d’une cible basée sur une date. Un jalon indique la progression des problèmes à mesure que la date cible approche. Pour plus d’informations, consultez « [À propos des jalons](/issues/using-labels-and-milestones-to-track-work/about-milestones) ».

![problème avec un jalon](/assets/images/help/issues/issue-milestone.png)

## Affectation du problème

Pour transmettre la responsabilité, vous pouvez affecter le problème à un membre de votre organisation. Pour plus d’informations, consultez « [Affectation de problèmes et de demandes de tirage à d’autres utilisateurs GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users) ».

![problème avec des personnes responsables](/assets/images/help/issues/issue-assignees.png)

## Ajout du problème à un projet

Vous pouvez ajouter le problème à un projet existant{% ifversion projects-v2 %} et fournir les métadonnées du projet. {% endif %} Pour plus d’informations sur les projets, consultez {% ifversion projects-v2 %}« [À propos des projets](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ».{% else %}« [Organisation de votre travail avec des panneaux de projet](/issues/organizing-your-work-with-project-boards) ».{% endif %}

![problème avec des projets](/assets/images/help/issues/issue-project.png)

## Soumission de votre problème

Cliquez sur **Soumettre un nouveau problème** pour créer votre problème. Vous pouvez modifier les champs ci-dessus après avoir créé le problème. Votre problème a une URL unique que vous pouvez partager avec les membres de l’équipe, ou que vous pouvez référencer dans d’autres problèmes ou demandes de tirage.

## Communication

Une fois votre problème créé, poursuivez la conversation en ajoutant des commentaires au problème. Vous pouvez utiliser @mention avec des collaborateurs ou des équipes pour attirer leur attention sur un commentaire. Pour lier des problèmes connexes dans le même dépôt, vous pouvez taper `#` suivi d’une partie du titre du problème, puis cliquer sur le problème que vous voulez lier. Pour plus d’informations, consultez [Écrire sur GitHub](/github/writing-on-github).

![commentaire de problème](/assets/images/help/issues/issue-comment.png)

## Étapes suivantes

Vous pouvez utiliser des problèmes pour de nombreux objectifs différents. Par exemple :

- Suivi d’idées
- Collecte de feedback
- Planification de tâches
- Signalement des bogues

Voici quelques ressources utiles pour effectuer vos étapes suivantes avec {% data variables.product.prodname_github_issues %} :

- Pour en savoir plus sur les problèmes, consultez « [À propos des problèmes](/issues/tracking-your-work-with-issues/about-issues) ».
- Pour en savoir plus sur la façon dont les projets peuvent vous aider dans la planification et le suivi, consultez {% ifversion projects-v2 %}« [À propos des projets](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ».{% else %}« [Organisation de votre travail avec des panneaux de projet](/issues/organizing-your-work-with-project-boards) ».{% endif %}
- Pour en savoir plus sur l’utilisation des modèles de problème{% ifversion fpt or ghec %} et les formulaires de problème{% endif %} pour encourager les contributeurs à fournir des informations spécifiques, consultez « [Utilisation de modèles pour favoriser les problèmes et les demandes de tirage utiles](/communities/using-templates-to-encourage-useful-issues-and-pull-requests) ».
