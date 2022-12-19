---
title: 'Bonnes pratiques relatives à {% data variables.product.prodname_projects_v2 %}'
intro: Découvrez des conseils sur la gestion de vos projets.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106764'
---
Vous pouvez utiliser {% data variables.product.prodname_projects_v2 %} pour gérer votre travail sur {% data variables.product.company_short %}, où vos problèmes et vos demandes de tirage résident. Lisez les conseils pour gérer vos projets efficacement. Pour plus d’informations sur {% data variables.product.prodname_projects_v2 %}, consultez « [À propos de {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ».

## Décomposer les problèmes volumineux en problèmes plus petits

La décomposition d’un problème important en problèmes plus petits rend le travail plus gérable et permet aux membres de l’équipe de travailler en parallèle. Il conduit également à des demandes de tirage plus petites, plus faciles à examiner.

Pour suivre la façon dont les problèmes plus petits s’intègrent dans l’objectif plus grand, utilisez des listes de tâches, des jalons ou des étiquettes. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) », « [À propos des jalons](/issues/using-labels-and-milestones-to-track-work/about-milestones) » et « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) ».

## Communiquer

Les problèmes et les demandes de tirage incluent des fonctionnalités intégrées pour vous permettre de communiquer facilement avec vos collaborateurs. Utilisez @mentions pour avertir une personne ou toute l’équipe d’un commentaire. Attribuez des collaborateurs à des problèmes pour communiquer la responsabilité. Lien vers des problèmes connexes ou des demandes de tirage pour communiquer la façon dont ils sont connectés.

## Utiliser la description et le fichier Lisez-moi

Utilisez la description de votre projet et le fichier Lisez-moi pour partager des informations sur le projet.

Par exemple :

- Explication de l’objectif du projet.
- Description des vues de projet et de leur utilisation.
- Inclusion des liens pertinents et des personnes à contacter pour plus d’informations.

Les fichiers Lisez-moi du projet prennent en charge Markdown, ce qui vous permet d’utiliser des images et une mise en forme avancée, telles que des liens, des listes et des en-têtes. 

Pour plus d’informations, consultez « [Création d’un {% data variables.projects.project_v2 %}](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project) ».

## Utiliser des vues

Utilisez des vues de projet pour examiner votre projet de différents angles.

Par exemple :

- Filtrer par état pour afficher tous les éléments non démarrés
- Regrouper dans un champ de priorité personnalisé pour surveiller le volume d’éléments à priorité élevée
- Trier par champ de date personnalisée pour afficher les éléments dont la date d’expédition cible est la plus ancienne

Pour plus d’informations, consultez « [Personnalisation d’une vue](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) ».

## Une source unique d'approbation

Pour empêcher la synchronisation des informations, conservez une seule source d’approbation. Par exemple, effectuez le suivi d’une date d’expédition cible dans un emplacement unique au lieu d’être réparti sur plusieurs champs. Ensuite, si la date d’expédition cible change, vous n’avez besoin de mettre à jour la date qu’à un seul emplacement.

Les {% data variables.product.prodname_projects_v2 %} restent automatiquement à jour avec les données {% data variables.product.company_short %}, telles que les destinataires, les jalons et les étiquettes. Quand l’un de ces champs change dans un problème ou une demande de tirage, la modification est automatiquement répercutée dans votre projet.

## Utiliser l’automatisation

Vous pouvez automatiser les tâches pour consacrer moins de temps au travail et plus de temps au projet lui-même. Moins vous avez de tâches manuelles à retenir, plus votre projet restera à jour.

{% data variables.product.prodname_projects_v2 %} offre des workflows intégrés. Par exemple, lorsqu’un problème est fermé, vous pouvez définir automatiquement l’état sur « Terminé ». {% ifversion projects-v2-auto-archive %}Vous pouvez aussi configurer des workflows intégrés pour archiver automatiquement les éléments qui répondent à certains critères.{% endif %}

En outre, {% data variables.product.prodname_actions %} et l’API GraphQL vous permettent d’automatiser les tâches de gestion de projet de routine. Par exemple, pour effectuer le suivi des demandes de tirage en attente d’évaluation, vous pouvez créer un workflow qui ajoute une demande de tirage à un projet et définit l’état sur « besoin d’évaluation » ; ce processus peut être déclenché automatiquement lorsqu’une demande de tirage est marquée comme « prête pour évaluation ».

- Pour plus d’informations sur les workflows intégrés, consultez « [Utilisation des automatisations intégrées](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations) ».{% ifversion projects-v2-auto-archive %}
- Pour plus d’informations sur l’archivage automatique des éléments, consultez « [Archivage automatique des éléments](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically) ».{% endif %}
- Pour obtenir un exemple de workflow, consultez « [Automatisation des {% data variables.product.prodname_projects_v2 %} avec Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions) ».
- Pour plus d’informations sur l’API, consultez « [Utilisation de l’API pour gérer {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects) ».
- Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez [« {% data variables.product.prodname_actions %}](/actions). »

## Utiliser différents types de champs

Tirez parti des différents types de champs pour répondre à vos besoins.

Utilisez un champ d’itération pour planifier le travail ou créer une chronologie. Vous pouvez regrouper par itération pour voir si les éléments sont équilibrés entre les itérations ou vous pouvez filtrer pour vous concentrer sur une seule itération. Les champs d’itération vous permettent également d’afficher le travail que vous avez effectué dans les itérations précédentes, ce qui peut vous aider à planifier la vélocité et à réfléchir aux réalisations de votre équipe. Les champs d’itération prennent également en charge les sauts à afficher lorsque vous et votre équipe prenez du temps hors de leurs itérations. Pour plus d’informations, consultez « [À propos des champs d’itération](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields) ».

Utilisez un champ de sélection unique pour suivre les informations relatives à une tâche en fonction d’une liste prédéfinie de valeurs. Par exemple, suivez la phase de priorité ou de projet. Étant donné que les valeurs sont sélectionnées dans une liste prédéfinie, vous pouvez facilement regrouper ou filtrer pour vous concentrer sur les éléments avec une valeur spécifique.

Pour plus d’informations sur les différents types de champ, consultez « [Présentation des types de champ](/issues/planning-and-tracking-with-projects/understanding-field-types) ».
