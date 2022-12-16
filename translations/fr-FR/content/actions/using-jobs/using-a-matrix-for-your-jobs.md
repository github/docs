---
title: Utilisation d’une matrice pour vos travaux
shortTitle: Using a matrix
intro: Créez une matrice pour définir les variantes de chaque travail.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 2dd53fd8810e2ca5dcfc74ff8a6e45b46477d55f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107102'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des stratégies de matrice

{% data reusables.actions.jobs.about-matrix-strategy %}

## Utilisation d’une stratégie de matrice

{% data reusables.actions.jobs.using-matrix-strategy %}

### Exemple : Utilisation d’une matrice à une seule dimension

{% data reusables.actions.jobs.single-dimension-matrix %}

### Exemple : Utilisation d’une matrice à plusieurs dimensions

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Exemple : Utilisation de contextes pour créer des matrices

{% data reusables.actions.jobs.matrix-from-context %}

## Développement ou ajout de configurations de matrice

{% data reusables.actions.jobs.matrix-include %}

### Exemple : Développement de configurations

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Exemple : Ajout de configurations

{% data reusables.actions.jobs.matrix-add-with-include %}

## Exclusion de configurations de matrice

{% data reusables.actions.jobs.matrix-exclude %}

## Gestion des échecs

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Définition du nombre maximal de travaux simultanés

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
