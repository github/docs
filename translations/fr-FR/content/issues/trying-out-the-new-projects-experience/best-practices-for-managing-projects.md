---
title: Meilleures pratiques pour la gestion de projets (bêta)
intro: Découvrez les conseils pour gérer vos projets dans {% data variables.product.company_short %}.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Projects
- Issues
- Project management
ms.openlocfilehash: 70c50bf58f99575759b91fb520fa3275127d9a49
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128685"
---
{% data reusables.projects.projects-beta %}

Vous pouvez utiliser des projets pour gérer votre travail sur {% data variables.product.company_short %}, où vos problèmes et vos demandes de tirage vivent. Lisez les conseils pour gérer vos projets efficacement. Pour plus d’informations sur les projets, consultez « [À propos des projets](/issues/trying-out-the-new-projects-experience/about-projects) ».

## <a name="break-down-large-issues-into-smaller-issues"></a>Décomposer les problèmes volumineux en problèmes plus petits

La décomposition d’un problème important en problèmes plus petits rend le travail plus gérable et permet aux membres de l’équipe de travailler en parallèle. Il conduit également à des demandes de tirage plus petites, plus faciles à examiner.

Pour suivre la façon dont les problèmes plus petits s’intègrent dans l’objectif plus grand, utilisez des listes de tâches, des jalons ou des étiquettes. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) », « [À propos des jalons](/issues/using-labels-and-milestones-to-track-work/about-milestones) » et « [Gestion des étiquettes](/issues/using-labels-and-milestones-to-track-work/managing-labels) ».

## <a name="communicate"></a>Communiquer

Les problèmes et les demandes de tirage incluent des fonctionnalités intégrées pour vous permettre de communiquer facilement avec vos collaborateurs. Utilisez @mentions pour avertir une personne ou toute l’équipe d’un commentaire. Attribuez des collaborateurs à des problèmes pour communiquer la responsabilité. Lien vers des problèmes connexes ou des demandes de tirage pour communiquer la façon dont ils sont connectés.

## <a name="make-use-of-the-description-and-readme"></a>Utiliser la description et le fichier Lisez-moi

Utilisez la description de votre projet et le fichier Lisez-moi pour partager des informations sur le projet.

Par exemple :

- Explication de l’objectif du projet.
- Description des vues de projet et de leur utilisation.
- Inclusion des liens pertinents et des personnes à contacter pour plus d’informations.

Les fichiers Lisez-moi du projet prennent en charge Markdown, ce qui vous permet d’utiliser des images et une mise en forme avancée, telles que des liens, des listes et des en-têtes. 

Pour plus d’informations, consultez « [Création d’un projet (bêta)](/issues/trying-out-the-new-projects-experience/creating-a-project#updating-your-project-description-and-readme) ».

## <a name="use-views"></a>Utiliser des vues

Utilisez des vues de projet pour examiner votre projet de différents angles.

Par exemple :

- Filtrer par état pour afficher tous les éléments non démarrés
- Regrouper dans un champ de priorité personnalisé pour surveiller le volume d’éléments à priorité élevée
- Trier par champ de date personnalisée pour afficher les éléments dont la date d’expédition cible est la plus ancienne

Pour plus d’informations, consultez « [Personnalisation des affichages de votre projet](/issues/trying-out-the-new-projects-experience/customizing-your-project-views) ».

## <a name="have-a-single-source-of-truth"></a>Une source unique d'approbation

Pour empêcher la synchronisation des informations, conservez une seule source d’approbation. Par exemple, effectuez le suivi d’une date d’expédition cible dans un emplacement unique au lieu d’être réparti sur plusieurs champs. Ensuite, si la date d’expédition cible change, vous n’avez besoin de mettre à jour la date qu’à un seul emplacement.

{% data variables.product.company_short %} les projets restent automatiquement à jour avec les données {% data variables.product.company_short %}, telles que les affectations, les jalons et les étiquettes. Quand l’un de ces champs change dans un problème ou une demande de tirage, la modification est automatiquement répercutée dans votre projet.

## <a name="use-automation"></a>Utiliser l’automatisation

Vous pouvez automatiser les tâches pour consacrer moins de temps au travail et plus de temps au projet lui-même. Moins vous avez de tâches manuelles à retenir, plus votre projet restera à jour.

Les projets (bêta) offrent des workflows intégrés. Par exemple, lorsqu’un problème est fermé, vous pouvez définir automatiquement l’état sur « Terminé ».

En outre, {% data variables.product.prodname_actions %} et l’API GraphQL vous permettent d’automatiser les tâches de gestion de projet de routine. Par exemple, pour effectuer le suivi des demandes de tirage en attente d’évaluation, vous pouvez créer un workflow qui ajoute une demande de tirage à un projet et définit l’état sur « besoin d’évaluation » ; ce processus peut être déclenché automatiquement lorsqu’une demande de tirage est marquée comme « prête pour évaluation ».

- Pour obtenir un exemple de workflow, consultez « [Automatisation des projets](/issues/trying-out-the-new-projects-experience/automating-projects) ».
- Pour plus d’informations, consultez « [Utilisation de l’API pour gérer des projets](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects) ».
- Pour plus d’informations sur {% data variables.product.prodname_actions %}, consultez [« {% data variables.product.prodname_actions %}](/actions). »

## <a name="use-different-field-types"></a>Utiliser différents types de champs

Tirez parti des différents types de champs pour répondre à vos besoins.

Utilisez un champ d’itération pour planifier le travail ou créer une chronologie. Vous pouvez regrouper par itération pour voir si les éléments sont équilibrés entre les itérations ou vous pouvez filtrer pour vous concentrer sur une seule itération. Les champs d’itération vous permettent également d’afficher le travail que vous avez effectué dans les itérations précédentes, ce qui peut vous aider à planifier la vélocité et à réfléchir aux réalisations de votre équipe. Les champs d’itération prennent également en charge les sauts à afficher lorsque vous et votre équipe prenez du temps hors de leurs itérations. Pour plus d’informations, consultez « [Gestion des itérations dans des projets](/issues/trying-out-the-new-projects-experience/managing-iterations) ».

Utilisez un champ de sélection unique pour suivre les informations relatives à une tâche en fonction d’une liste prédéfinie de valeurs. Par exemple, suivez la phase de priorité ou de projet. Étant donné que les valeurs sont sélectionnées dans une liste prédéfinie, vous pouvez facilement regrouper ou filtrer pour vous concentrer sur les éléments avec une valeur spécifique.

Pour plus d’informations sur les différents types de champs, consultez « [Création d’un projet (bêta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields) ».
