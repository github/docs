---
title: Guide de démarrage rapide pour GitHub Discussions
intro: 'Activez {% data variables.product.prodname_discussions %} sur un dépôt ou une organisation existant et commencez des conversations avec votre communauté.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410210'
---
## Introduction

{% data variables.product.prodname_discussions %} est un forum de communication collaboratif pour la communauté autour d’un projet open source ou interne. Les discussions sont destinées aux conversations qui doivent être transparentes et accessibles, mais ne doivent pas être suivies sur un tableau de projet et ne sont pas liées au code, contrairement aux {% data variables.product.prodname_github_issues %}. Les discussions permettent une conversation fluide et ouverte dans un forum public.

Les discussions donnent un espace pour des conversations plus collaboratives en se connectant et en donnant une zone plus centralisée pour se connecter et trouver des informations.

## Activation de {% data variables.product.prodname_discussions %} sur votre référentiel

Les propriétaires de dépôts et les personnes avec un accès en écriture peuvent activer {% data variables.product.prodname_discussions %} pour une communauté sur leurs dépôts publics{% ifversion ghes > 3.5 %}, internes{% endif %} et privés. La visibilité d’une discussion est héritée du dépôt dans lequel la discussion est créée.

Lorsque vous activez {% data variables.product.prodname_discussions %} pour la première fois, vous êtes invité à configurer un message d’accueil.

{% data reusables.repositories.navigate-to-repo %}
1. Sous le nom de votre référentiel, cliquez sur {% octicon "gear" aria-label="The gear icon" %} **Paramètres**.
![Bouton Paramètres publics](/assets/images/help/discussions/public-repo-settings.png)
1. Sous « Fonctionnalités », cliquez sur **Configurer les discussions**.
  ![Configurer un bouton de discussion sous « Fonctionnalités » pour activer ou désactiver GitHub Discussions pour un référentiel](/assets/images/help/discussions/setup-discussions-button.png)
1. Sous « Démarrer une nouvelle discussion », modifiez le modèle pour s’aligner sur les ressources et le ton que vous souhaitez définir pour votre communauté.
1. Cliquez sur **Démarrer la discussion**.
  ![Bouton « Démarrer la discussion »](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Activation de {% data variables.product.prodname_discussions %} sur votre organisation

Les propriétaires d’organisation peuvent activer {% data variables.product.prodname_discussions %} pour leur organisation.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Contributions d’accueil dans vos discussions

Vous pouvez accueillir votre communauté et introduire une nouvelle façon de communiquer dans un référentiel ou une organisation en créant un message d’accueil et en l’épinglant sur votre page {% data variables.product.prodname_discussions %}. L’épinglage et le verrouillage des discussions aident les gens à savoir qu’une publication est une annonce. Vous pouvez utiliser des annonces comme moyen de lier des personnes à d’autres ressources et d’offrir des conseils pour ouvrir des discussions dans votre communauté. Pour plus d’informations sur l’épinglage d’une discussion, consultez « [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion) ».


## Configuration des lignes directrices de la communauté pour les contributeurs

Pour les discussions de référentiel, vous pouvez définir des lignes directrices de contribution pour encourager les collaborateurs à avoir des conversations significatives et utiles qui sont pertinentes pour le référentiel. Vous pouvez également mettre à jour le fichier README du référentiel pour communiquer les attentes qui déterminent quand les collaborateurs doivent ouvrir un problème ou une discussion. Pour plus d’informations sur l’offre de recommandations pour votre projet, consultez{% ifversion fpt or ghec %} « [Ajout d’un code de conduite à votre projet](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) » et{% endif %} « [Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions). »

Pour les discussions de l’organisation, vous partagez des informations sur la façon d’interagir avec votre organisation en créant un README pour le profil de l’organisation. Pour plus d’informations, consultez « [Personnalisation du profil de votre organisation](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile) ».

## Création d’une discussion

Tout utilisateur authentifié qui peut afficher le référentiel peut créer une discussion dans ce référentiel. De même, étant donné que les discussions de l’organisation sont basées sur un référentiel source, tout utilisateur authentifié qui peut afficher le référentiel source peut créer une discussion dans cette organisation.

{% data reusables.discussions.starting-a-discussion %}

## Création d’une nouvelle interrogation

Tout utilisateur authentifié qui peut afficher un référentiel peut créer un sondage. De même, étant donné que les discussions de l’organisation sont basées sur un référentiel source, tout utilisateur authentifié qui peut afficher le référentiel source peut créer un sondage dans cette organisation.

{% data reusables.discussions.starting-a-poll %}

## Organisation de discussions

Les propriétaires et les personnes disposant d’un accès en écriture au référentiel peuvent créer de nouvelles catégories pour organiser les discussions. De même, étant donné que les discussions de l’organisation sont basées sur un référentiel source, les propriétaires de référentiel et les personnes disposant d’un accès en écriture au référentiel source peuvent créer de nouvelles catégories pour les discussions de l’organisation.

Les collaborateurs participant et créant de nouvelles discussions peuvent regrouper des discussions dans les catégories existantes les plus pertinentes. Les discussions peuvent également être reclassées après leur création. Pour plus d’informations, consultez « [Gestion des catégories de discussion](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) ».

{% data reusables.discussions.you-can-label-discussions %}

## Promouvoir des conversations saines

Les personnes disposant d’autorisations d’écriture pour le référentiel ou pour le référentiel source pour les discussions de l’organisation peuvent aider à faire ressortir les conversations importantes en épinglant des discussions, en supprimant des discussions qui ne sont plus utiles ou qui sont préjudiciables à la communauté, et en transférant des discussions vers des référentiels plus pertinents appartenant à l’organisation. Pour plus d’informations, consultez [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions).

Les personnes avec des autorisations de triage sur le référentiel, ou pour le référentiel source pour les discussions de l’organisation, peuvent aider à modérer les discussions d’un projet en marquant les commentaires comme des réponses, en verrouillant les discussions qui ne sont plus utiles ou qui sont préjudiciables à la communauté et en convertissant les problèmes en discussions quand une idée est encore en phase initiale de développement. Pour plus d’informations, consultez « [Modération des discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) ».

## Étapes suivantes

Une fois qu’il existe un chemin clair pour définir l’étendue et passer une idée du concept à la réalité, vous pouvez créer un problème et commencer à suivre votre progression. Pour plus d’informations sur la création d’un problème à partir d’une discussion, consultez « [Modération des discussions](/discussions/managing-discussions-for-your-community/moderating-discussions) ».
