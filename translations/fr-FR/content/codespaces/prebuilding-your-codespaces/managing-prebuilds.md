---
title: Gestion des prébuilds
shortTitle: Manage prebuilds
intro: 'Vous pouvez vérifier, modifier et supprimer les configurations des prébuilds de votre dépôt.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159747'
---
## Vérification, modification et suppression de vos configurations de prébuild

Les prébuilds que vous configurez pour un dépôt sont créées et mises à jour à l’aide d’un workflow {% data variables.product.prodname_actions %}, géré par le service {% data variables.product.prodname_github_codespaces %}. 

Selon les paramètres définis dans une configuration de prébuild, le workflow qui permet de mettre à jour la prébuild peut être déclenché par ces événements :

* Création ou mise à jour de la configuration de prébuild
* Poussée (push) d’un commit ou d’une demande de tirage (pull request) dans une branche configurée pour avoir des prébuilds
* Modification de l’un des fichiers de configuration du conteneur de développement
* Planification que vous avez définie dans la configuration de prébuild
* Déclenchement manuel du workflow

Les paramètres définis dans la configuration de prébuild déterminent les événements qui déclenchent automatiquement une mise à jour de la prébuild. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ». 

Les personnes dotées d’un accès administrateur à un dépôt peuvent vérifier la progression des prébuilds, modifier et supprimer des configurations de prébuild. 

### Affichage de la progression des prébuilds
Vous pouvez voir l’état actuel de la dernière exécution du workflow pour chaque configuration de prébuild que vous avez configurée dans la page {% data variables.product.prodname_github_codespaces %} des paramètres de votre dépôt. Par exemple, « En cours d’exécution » ou « Dernière exécution il y a 1 heure ».

Pour voir la sortie de journal de la dernière exécution du workflow de la prébuild, cliquez sur **Voir la sortie**.

![Bouton « Voir la sortie »](/assets/images/help/codespaces/prebuilds-see-output.png) 

Ce bouton permet d’afficher la sortie de l’exécution la plus récente du workflow sous l’onglet **Actions**.

![Sortie du workflow de la prébuild](/assets/images/help/codespaces/prebuilds-log-output.png) 

Pour voir également toutes les exécutions du workflow de la prébuild associées à la branche spécifiée, cliquez sur le bouton de sélection et choisissez **Voir les exécutions** dans le menu déroulant.

![Option « Voir les exécutions » dans le menu déroulant](/assets/images/help/codespaces/prebuilds-view-runs.png) 

Cette option permet d’afficher l’historique des exécutions du workflow pour les prébuilds de la branche associée.

![Historique des exécutions du workflow](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### Modification d’une configuration de prébuild

1. Dans la page {% data variables.product.prodname_codespaces %} des paramètres de votre dépôt, cliquez sur les points de suspension situés à droite de la configuration de prébuild à modifier.
1. Dans le menu déroulant, cliquez sur **Modifier**.
 
   ![Option « Modifier » dans le menu déroulant](/assets/images/help/codespaces/prebuilds-edit.png) 

1. Apportez les modifications nécessaires à la configuration de prébuild, puis cliquez sur **Mettre à jour**. 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Désactivation d’une configuration de prébuild

Pour suspendre la mise à jour des prébuilds pour une configuration, vous pouvez désactiver les exécutions du workflow pour cette configuration. La désactivation des exécutions du workflow pour une configuration de prébuild ne supprime aucune prébuild précédemment créée pour cette configuration et ainsi, les codespaces continuent d’être générés à partir d’une prébuild existante.

La désactivation des exécutions du workflow pour une configuration de prébuild s’avère utile si vous avez besoin d’investiguer des échecs de création de prébuild.

1. Dans la page {% data variables.product.prodname_codespaces %} des paramètres de votre dépôt, cliquez sur les points de suspension situés à droite de la configuration de prébuild à désactiver.
1. Dans le menu déroulant, cliquez sur **Désactiver les exécutions**.

   ![Option « Désactiver les exécutions » dans le menu déroulant](/assets/images/help/codespaces/prebuilds-disable.png)

1. Pour confirmer votre volonté de désactiver cette configuration, cliquez sur **OK**.

### Suppression d’une configuration de prébuild

La suppression d’une configuration de prébuild supprime également toutes les prébuilds précédemment créées pour cette configuration. En conséquence, peu de temps après la suppression d’une configuration, les prébuilds générés par cette configuration ne sont plus disponibles quand vous créez un codespace.

Une fois que vous avez supprimé une configuration de prébuild, les exécutions du workflow qui ont été mises en file d’attente ou démarrées pour cette configuration s’exécutent quand même. Elles sont listées dans l’historique des exécutions du workflow, avec les exécutions du workflow précédemment terminées.

1. Dans la page {% data variables.product.prodname_codespaces %} des paramètres de votre dépôt, cliquez sur les points de suspension situés à droite de la configuration de prébuild à supprimer.
1. Dans le menu déroulant, cliquez sur **Supprimer**.

   ![Option « Supprimer » dans le menu déroulant](/assets/images/help/codespaces/prebuilds-delete.png)

1. Cliquez sur **OK** pour confirmer la suppression.

### Déclencher manuellement des prébuilds

Il peut s’avérer utile de déclencher manuellement une exécution du workflow pour une configuration de prébuild. En règle générale, ce déclenchement manuel est uniquement nécessaire si vous êtes en train de déboguer un problème lié au workflow pour une configuration de prébuild.

1. Dans la page {% data variables.product.prodname_codespaces %} des paramètres de votre dépôt, cliquez sur les points de suspension situés à droite de la configuration de prébuild dont vous voulez déclencher le workflow.
1. Dans le menu déroulant, cliquez sur **Déclencher manuellement**.

   ![Option « Déclencher manuellement » dans le menu déroulant](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## Pour aller plus loin

- « [Résolution des problèmes liés aux prébuilds](/codespaces/troubleshooting/troubleshooting-prebuilds) »
