---
title: Utilisation de conditions pour contrôler l’exécution des travaux
shortTitle: Using conditions to control job execution
intro: Empêchez un travail de s’exécuter si vos conditions ne sont pas remplies.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107089'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

{% note %}

**Remarque :** Un travail ignoré signale son état comme « Réussite ». Il n’empêche pas une demande de tirage (pull request) de fusionner, même s’il s’agit d’une vérification requise.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Vous devez voir l’état suivant sur un travail ignoré :

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
