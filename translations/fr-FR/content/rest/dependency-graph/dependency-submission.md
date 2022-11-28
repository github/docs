---
title: Soumission de dépendances
intro: 'L’API de soumission de dépendances vous permet d’envoyer des dépendances pour des projets, telles que celles résolues lorsqu’un projet est généré ou compilé.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079888'
---
## À propos de l’API Soumission de dépendances

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Les dépendances sont envoyées à l’API de soumission de dépendances sous la forme d’une capture instantanée. Un instantané est un ensemble de dépendances associées à un SHA de commit et à d’autres métadonnées, qui reflète l’état actuel de votre dépôt pour un commit.  Vous pouvez choisir d’utiliser des actions prédéfinies ou de créer vos propres actions pour soumettre vos dépendances à l’API de soumission de dépendances au format requis chaque fois que votre projet est généré. Pour plus d’informations sur l’utilisation de l’API de soumission de dépendances, consultez « [Utilisation de l’API de soumission de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) ».

Vous pouvez soumettre plusieurs ensembles de dépendances à l’API de soumission de dépendances afin de les inclure dans votre graphe des dépendances. L’API utilise la propriété `job.correlator` et la catégorie `detector.name` de l’instantané pour garantir l’affichage des dernières soumissions pour chaque workflow. La propriété `correlator` elle-même est le champ principal que vous utiliserez pour veiller à ce que les soumissions indépendantes soient distinctes. Un exemple de `correlator` pourrait être une combinaison simple de deux variables disponibles dans des exécutions d’actions : `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
