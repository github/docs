---
title: Résolution des problèmes liés aux prébuilds
shortTitle: Codespaces prebuilds
intro: Vous pouvez utiliser des prébuilds pour accélérer la création des codespaces. Cet article indique les étapes à suivre pour résoudre les problèmes courants relatifs aux prébuilds.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158884'
---
Pour plus d’informations sur les prébuilds {% data variables.product.prodname_github_codespaces %}, consultez « [Prégénération de vos codespaces](/codespaces/prebuilding-your-codespaces) ».

## Vérifier si un codespace a été créé à partir d’une prébuild

Lorsque vous créez un codespace, vous pouvez choisir le type de machine virtuelle que vous souhaitez utiliser. Si une prébuild est disponible pour le type de machine virtuelle, « {% octicon "zap" aria-label="The zap icon" %} Prébuild prête » s’affiche.

![Liste des types de machine disponibles](/assets/images/help/codespaces/choose-custom-machine-type.png)

Si vous avez défini votre éditeur {% data variables.product.prodname_github_codespaces %} favori sur « {% data variables.product.prodname_vscode %} pour le Web », la page « Configuration de votre codespace » affiche le message « Codespace prédéfini trouvé » si une prébuild est utilisée. 

![Message « Codespace prédéfini trouvé »](/assets/images/help/codespaces/prebuilt-codespace-found.png)

De même, si votre éditeur favori est « {% data variables.product.prodname_vscode_shortname %} », le terminal intégré affiche le message « Vous êtes sur un codespace prédéfini par la configuration de prébuild de votre référentiel » lorsque vous créez un codespace. Pour plus d’informations, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) ».

Après avoir créé un codespace, vous pouvez vérifier s’il a été créé à partir d’une prébuild en exécutant la commande {% data variables.product.prodname_cli %} suivante dans le terminal :

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Cette commande renvoie `true` si le codespace a été créé à l’aide d’une prébuild.

Si {% data variables.product.prodname_cli %} (`gh`) n’est pas installé, vous pouvez utiliser la commande suivante, qui renvoie `createFromPrebuild` si le codespace a été créé à partir d’une prébuild : 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## L’étiquette « Prébuild prête » est parfois manquante

Vous pouvez remarquer que parfois, lorsque vous créez un codespace à partir d’une branche de prébuild, l’étiquette « {% octicon "zap" aria-label="The zap icon" %} Prébuild prête » ne s’affiche pas dans la boîte de dialogue pour choisir un type de machine. Cela signifie que les prébuilds ne sont pas encore disponibles.

Par défaut, chaque fois que vous effectuez un envoi (push) vers une branche de prébuild, la prébuild est mise à jour. Si l’envoi (push) push implique une modification de la configuration du conteneur de développement alors que la mise à jour est en cours, l’étiquette « {% octicon "zap" aria-label="The zap icon" %} Prébuild prête » est supprimée de la liste des types de machine. Pendant ce temps, vous pouvez toujours créer des codespaces sans prébuild. Si nécessaire, vous pouvez réduire le nombre d'occasions où les prébuilds ne sont pas disponibles pour un référentiel en configurant la prébuild pour qu’elle soit uniquement mise à jour lorsque vous apportez une modification aux fichiers de configuration de votre conteneur de développement, ou uniquement selon une planification personnalisée. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».

Si votre branche n’est pas spécifiquement activée pour les prébuilds, elle peut bénéficier de prébuilds si elle a été créée à partir d’une branche de prébuild. Toutefois, si la configuration du conteneur de développement est modifiée sur votre branche et que sa configuration est différente sur la branche de base, les prébuilds ne sont plus disponibles sur votre branche.

Voici quelques éléments à vérifier si l’étiquette « {% octicon "zap" aria-label="The zap icon" %} Prébuild prête » ne s’affiche pas pour une branche particulière :

* Vérifiez qu’une configuration de prébuild existe pour cette branche. Si vous n’êtes pas administrateur de référentiel, vous devez faire en contacter un pour le vérifier. 
* Vérifiez que la configuration de prébuild inclut votre région.
* Vérifiez si une modification de la configuration du conteneur de développement a récemment été envoyée (push) à la branche de prébuild. Si tel est le cas, vous devrez probablement attendre que le workflow de prébuild s’exécute pour que cet envoi (push) se termine avant que les prébuilds ne soient à nouveau disponibles.
* Si aucune modification de configuration n’a été récemment apportée, accédez à l’onglet **Actions** de votre référentiel, cliquez sur **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} Prébuilds** dans la liste des workflows, puis vérifiez que les exécutions de worflow de prébuild ont abouti. Si les dernières exécutions d’un workflow ont échoué et qu’une ou plusieurs de ces exécutions ayant échoué contiennent des modifications apportées à la configuration du conteneur de développement, aucune prébuild ne sera disponible pour la branche associée. 

## Certaines ressources ne peuvent pas être accessibles dans les codespaces créés avec une prébuild.

Si le fichier de configuration `devcontainer.json` d’une configuration de prébuild spécifie que des autorisations d’accès à d’autres dépôts sont nécessaires, l’administrateur du dépôt est invité à accorder ces autorisations quand il crée ou met à jour la configuration de prébuild. Si l’administrateur n’accorde pas toutes les autorisations demandées, il est possible que des problèmes se produisent dans la prébuild et dans les codespaces créés à partir de cette prébuild. C’est vrai même si l’utilisateur qui crée un codespace basé sur cette prébuild _accorde_ toutes les autorisations lorsqu’il est invité à le faire.

## Résolution des problèmes liés aux exécutions de workflow ayant échoué pour les prébuilds

### Augmentation de la limite de dépense pour {% data variables.product.prodname_actions %} 

Les prébuilds sont créées et mises à jour en utilisant {% data variables.product.prodname_actions %}. Vos workflows de prébuild échouent si vous avez utilisé toutes vos minutes {% data variables.product.prodname_actions %} et atteint votre limite de dépense. Dans ce cas, vous pouvez augmenter votre limite de dépense pour {% data variables.product.prodname_actions %} afin d’autoriser l’exécution des workflows. Pour plus d’informations, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions) ».

### Octroi d’autorisations d’accès

Si le fichier de configuration `devcontainer.json` d’une configuration de prébuild est mis à jour pour spécifier que les autorisations d’accès à d’autres dépôts sont nécessaires et qu’un administrateur de dépôt n’a pas été invité à accorder ces autorisations pour la configuration de la prébuild, le workflow de prébuild peut échouer. Essayez de mettre à jour la configuration de prébuild, sans apporter de modifications. Si, lorsque vous cliquez sur **Mettre à jour**, la page d’autorisations s’affiche, vérifiez que les autorisations demandées sont appropriées et, le cas échéant, autorisez la demande. Pour plus d’informations, consultez « [Gestion des prébuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration) » et « [Gestion des accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions) ».

Si les exécutions de workflow pour une configuration de prébuild échouent, vous pouvez temporairement désactiver la configuration de prébuild en attendant que le problème soit résolu. Pour plus d’informations, consultez « [Gestion des prébuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration) ».

### Empêcher l’utilisation de prébuilds obsolètes

Par défaut, si le dernier workflow de prébuild a échoué, une prébuild précédente pour la même combinaison de dépôt, de branche et de fichier de configuration `devcontainer.json` est utilisée pour créer des codespaces. Ce comportement est appelé « optimisation de la prébuild ».

Nous vous recommandons de laisser l’optimisation de la prébuild activée pour garantir la création rapide de codespaces si aucune prébuild à jour n’est disponible. Toutefois, en tant qu’administrateur de dépôt, vous pouvez désactiver l’optimisation de la prébuild si vous rencontrez des problèmes liés à des codespaces prédéfinis en retrait par rapport à l’état actuel de la branche. Si vous désactivez l’optimisation de la prébuild, des codespaces pour la combinaison appropriée de dépôt, de branche et de fichier `devcontainer.json` sont créés sans prébuild si le dernier workflow de prébuild a échoué ou est en cours d’exécution.

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. À droite de la configuration de prébuild affectée, sélectionnez les points de suspension ( **...** ), puis cliquez sur **Modifier**.

   ![Capture d’écran d’une liste de prébuilds avec « Modifier » mis en évidence](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. Faites défiler la page « Modifier la configuration » jusqu’en bas et cliquez sur **Afficher les options avancées**.

   ![Capture d’écran de la page de configuration de prébuild avec « Afficher les options avancées » mis en évidence](/assets/images/help/codespaces/show-advanced-options.png)
1. Si vous êtes sûr de vouloir désactiver le paramètre par défaut, sélectionnez **Désactiver l’optimisation de la prébuild**.

   ![Capture d’écran de la section des options avancées et du paramètre « Désactiver l’optimisation de la prébuild »](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. Pour enregistrer votre modification, cliquez sur **Mettre à jour**.

## Pour aller plus loin

- « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds) »
- « [Gestion des prébuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds) »
