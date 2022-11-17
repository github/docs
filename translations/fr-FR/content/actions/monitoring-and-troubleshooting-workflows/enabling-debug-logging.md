---
title: Enabling debug logging
intro: 'Si les journaux de workflow ne fournissent pas suffisamment de détails pour diagnostiquer la raison pour laquelle un workflow, un travail ou une étape ne fonctionne pas comme prévu, vous pouvez activer une journalisation de débogage supplémentaire.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a2a7f6ff009782c636fd7b9e453bba869d6c799d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179382'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Ces journaux supplémentaires sont activés en définissant des secrets dans le dépôt contenant le workflow, de sorte que les mêmes exigences en matière d’autorisations s’appliquent :

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

Pour plus d’informations sur la définition des secrets, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

{% ifversion debug-reruns %}

De plus, toute personne disposant d’un accès pour exécuter un workflow peut activer la journalisation des diagnostics de l’exécuteur et la journalisation du débogage par étape pour une réexécution de workflow. Pour plus d’informations, consultez « [Réexécution de workflows et de travaux](/actions/managing-workflow-runs/re-running-workflows-and-jobs) ».

 {% endif %}

## Activation de la journalisation des diagnostics de l’exécuteur

La journalisation des diagnostics de l’exécuteur fournit des fichiers journaux supplémentaires qui contiennent des informations sur la façon dont un exécuteur exécute un travail. Deux fichiers journaux supplémentaires sont ajoutés à l’archive des journaux :

* Journal du processus de l’exécuteur, qui inclut des informations sur la coordination et la configuration des exécuteurs pour exécuter des travaux.
* Journal du processus de travail, qui enregistre l’exécution d’un travail.

1. Pour activer la journalisation des diagnostics de l’exécuteur, définissez le secret suivant dans le dépôt qui contient le workflow : `ACTIONS_RUNNER_DEBUG` sur la valeur `true`.

1. Pour télécharger les journaux des diagnostics de l’exécuteur, téléchargez l’archive des journaux de l’exécution de workflow. Les journaux des diagnostics de l’exécuteur sont contenus dans le dossier `runner-diagnostic-logs`. Pour plus d’informations sur le téléchargement des journaux, consultez « [Téléchargement des journaux](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs) ».

## Activation de la journalisation du débogage par étape

La journalisation du débogage par étape augmente la verbosité des journaux d’un travail pendant et après l’exécution d’un travail.

1. Pour activer la journalisation du débogage par étape, vous devez définir le secret suivant dans le dépôt qui contient le workflow : `ACTIONS_STEP_DEBUG` sur la valeur `true`.

1. Après avoir défini le secret, d’autres événements de débogage sont affichés dans les journaux d’étapes. Pour plus d’informations, consultez [« Affichage des journaux pour diagnostiquer les défaillances »](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
