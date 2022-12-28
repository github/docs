---
title: Annulation d’un workflow
intro: 'Vous pouvez annuler une exécution de workflow. Quand vous annulez l’exécution d’un workflow, {% data variables.product.prodname_dotcom %} annule tous les travaux et toutes les étapes qui font partie de ce workflow.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: f8bf0d06f5e0e37cb120b22a3bd6da39b51b78a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086084'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## Annulation d’une exécution de workflow

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Dans la liste des exécutions de workflow, cliquez sur le nom de l’exécution `queued` ou `in progress` que vous souhaitez annuler.
![Nom de l’exécution de workflow](/assets/images/help/repository/in-progress-run.png)
1. Dans le coin supérieur droit du workflow, cliquez sur **Annuler le workflow**.
![Bouton Annuler la suite de vérification](/assets/images/help/repository/cancel-check-suite-updated.png)

## Les étapes que {% data variables.product.prodname_dotcom %} effectue pour annuler une exécution de workflow

Lors de l’annulation de l’exécution du workflow, vous pouvez exécuter d’autres logiciels qui utilisent des ressources liées à l’exécution du workflow. Pour vous aider à libérer des ressources liées à l’exécution du workflow, cela peut vous aider à comprendre les étapes que {% data variables.product.prodname_dotcom %} effectue pour annuler une exécution de workflow.

1. Pour annuler l’exécution du workflow, le serveur réévalue les conditions `if` de tous les travaux en cours d’exécution. Si la condition prend la valeur `true`, le travail n’est pas annulé. Par exemple, la condition `if: always()` prend la valeur true et le travail continue à s’exécuter. En l’absence de condition, c’est l’équivalent de la condition `if: success()`, qui s’exécute uniquement si l’étape précédente s’est terminée avec succès.
2. Pour les travaux qui doivent être annulés, le serveur envoie un message d’annulation à toutes les machines de l’exécuteur avec les travaux qui doivent être annulés.
3. Pour les travaux qui continuent à s’exécuter, le serveur réévalue les conditions des étapes non terminées `if`. Si la condition prend la valeur `true`, l’étape continue à s’exécuter.
4. Pour les étapes qui doivent être annulées, l’ordinateur de l’exécuteur envoie `SIGINT/Ctrl-C` au processus d’entrée de l’étape (`node` pour l’action JavaScript, `docker` pour l’action conteneur et `bash/cmd/pwd` lors de l’utilisation de `run` dans une étape). Si le processus ne se termine pas dans les 7500 ms, l’exécuteur envoie `SIGTERM/Ctrl-Break` au processus, puis attend 2500 ms que le processus se termine. Si le processus est toujours en cours d’exécution, l’exécuteur tue l’arborescence du processus.
5. Après la période d’expiration d’annulation de 5 minutes, le serveur force l’arrêt de tous les travaux et étapes qui ne se terminent pas ou ne parviennent pas à terminer le processus d’annulation.
