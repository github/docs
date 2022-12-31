---
title: Configuration des prébuilds
shortTitle: Configure prebuilds
intro: Vous pouvez configurer votre projet pour prédéfinir automatiquement un espace de code chaque fois que vous envoyez une modification à votre référentiel.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159116'
---
Vous pouvez configurer une configuration de prébuild pour combiner une branche spécifique de votre dépôt avec un fichier de configuration de conteneur de développement spécifique.

Toutes les branches créées à partir d’une branche parente activée par prébuild obtiennent généralement des prébuilds pour la même configuration de conteneur de développement. En effet, la prébuild pour les branches enfants qui utilisent la même configuration de conteneur de développement que la branche parente est, pour une grande partie, identique, afin que les développeurs puissent bénéficier d’un temps de création de codespace plus rapide sur ces branches également. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

En règle générale, lorsque vous configurez des prébuilds pour une branche, celles-ci sont disponibles pour plusieurs types de machines. Toutefois, si votre référentiel fait plus de 32 Go, les prébuilds ne seront pas disponibles pour les types de machines 2 cœurs et 4 cœurs, car le stockage qu’elles fournissent est limité à 32 Go.

## Prérequis 

Les prébuilds sont créées avec {% data variables.product.prodname_actions %}. {% data variables.product.prodname_actions %} doit donc être activé pour le dépôt pour lequel vous configurez des prébuilds. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) ».

## Configuration des prébuilds

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. Dans la section « Configuration de prébuild » de la page, cliquez sur **Configurer la prébuild**.

   ![Bouton « Configurer des prébuilds »](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Choisissez la branche pour laquelle vous souhaitez configurer des prébuilds.

   ![Menu déroulant de la branche](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **Remarque** :Toutes les branches créées à partir d’une branche de base activée par prébuild obtiennent généralement des prébuilds pour la même configuration de conteneur de développement. Par exemple, si vous activez les prébuilds pour un fichier de configuration de conteneur de développement sur la branche par défaut du dépôt, dans la plupart des cas, vous obtenez aussi les prébuilds pour la même configuration de conteneur de développement.

   {% endnote %}

1. Si vous le souhaitez, dans le menu déroulant **Fichier de configuration** qui s’affiche, choisissez le fichier de configuration `devcontainer.json` que vous souhaitez utiliser pour vos prébuilds. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson) ».

   ![Menu déroulant du fichier de configuration](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Choisissez la façon dont vous souhaitez déclencher automatiquement les mises à jour des prébuilds.

   * **À chaque envoi** (paramètre par défaut) : avec ce paramètre, les prébuilds sont mises à jour à chaque envoi (push) vers la branche donnée. Vous avez ainsi la certitude que les codespaces générés à partir d’une prébuild contiennent toujours la dernière configuration de codespace, ainsi que les dépendances récemment ajoutées ou mises à jour.
   * **Lors d’une modification de la configuration** : avec ce paramètre, les prébuilds sont mises à jour chaque fois que les fichiers de configuration associés d’un dépôt et d’une branche donnés sont mis à jour. Vous avez ainsi la certitude que les modifications apportées aux fichiers de configuration du conteneur de développement pour le référentiel sont utilisées lorsqu’un codespace est généré à partir d’une prébuild. Le workflow {% data variables.product.prodname_actions %} qui met à jour les prébuilds s’exécute moins souvent. Cette option utilise donc moins de minutes {% data variables.product.prodname_actions %}. Toutefois, cette option ne garantit pas que les codespaces incluront toujours des dépendances récemment ajoutées ou mises à jour. Celles-ci peuvent donc être ajoutées ou mises à jour manuellement après la création d’un codespace.
   * **Mise à jour planifiée** : avec ce paramètre, vous pouvez mettre à jour vos prébuilds selon une planification personnalisée définie par vous. Cela peut réduire la consommation des minutes {% data variables.product.prodname_actions %}. Toutefois, avec cette option, des codespaces n’utilisant pas les dernières modifications de la configuration de conteneur de développement peuvent être créés.

   ![Options de déclenchement des prébuilds](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Si vous le souhaitez, sélectionnez **Réduire la disponibilité des prébuilds à des régions spécifiques** pour créer des prébuilds uniquement dans les régions spécifiées. Sélectionnez les régions dans lesquelles vous souhaitez que les prébuilds soient disponibles.

   Par défaut, les prébuilds sont créées dans toutes les régions disponibles, ce qui entraîne des frais de stockage par prébuild.

   ![Options de sélection de la région](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Remarques**: 
   * La prébuild dans chaque région entraîne des frais de stockage individuels. Vous ne devez donc activer les prébuilds que pour les régions dans lesquelles vous savez qu’elles seront utilisées. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds) ».
   * Les développeurs peuvent définir leur région par défaut pour {% data variables.product.prodname_github_codespaces %}, ce qui permet d’activer les prébuilds pour un plus petit nombre de régions. Pour plus d’informations, consultez « [Définition de votre région par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces) ».

   {% endnote %}

1. Si vous le souhaitez, sous **Historique des modèles**, définissez le nombre de versions de prébuild à conserver. Vous pouvez entrer n’importe quel nombre compris entre 1 et 5. Le nombre par défaut de versions enregistrées est de 2, ce qui signifie que seules la dernière prébuild et la version précédente sont enregistrées.

   ![Paramètre d’historique des prébuilds](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   En fonction de vos paramètres de déclencheur de prébuild, votre prébuild peut changer avec chaque modification push ou sur chaque modification de configuration de conteneur de développement. La conservation des versions antérieures des prébuilds vous permet de créer une prébuild à partir d’une validation antérieure avec une configuration de conteneur de développement différente de celle de la prébuild actuelle. Ce paramètre vous permet de définir le nombre de versions conservées à un niveau adapté à vos besoins. 

   Si vous définissez le nombre de versions de prébuilds à enregistrer sur 1, {% data variables.product.prodname_github_codespaces %} enregistre uniquement la dernière version de la prébuild et supprime l’ancienne version chaque fois que le modèle est mis à jour. Cela signifie que vous n’obtiendrez pas d’espace de code prédéfini si vous revenez à une configuration de conteneur de développement plus ancienne.
   
   Un coût de stockage est associé à chaque version de prébuild conservée. Par exemple, si vous générez des prébuilds dans 4 régions et conservez 2 versions, vous serez facturé pour le stockage de 8 prébuilds au maximum. Pour plus d’informations sur la facturation, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ».

1. Ajoutez éventuellement des utilisateurs ou des équipes à avertir quand l’exécution du workflow de prébuild échoue pour cette configuration. Vous pouvez commencer à taper un nom d’utilisateur, un nom d’équipe ou un nom complet, puis cliquer sur le nom une fois qu’il apparaît pour les ajouter à la liste. Les utilisateurs ou les équipes que vous ajoutez recevront un e-mail lorsque des échecs de prébuild se produisent, avec un lien vers les journaux d’exécution du workflow pour faciliter l’examen approfondi.

   ![Paramètre de notification d’échec de prébuild](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Si vous le souhaitez, en bas de la page, cliquez sur **Afficher les options avancées**.

   ![Capture d’écran de la page de configuration de prébuild avec « Afficher les options avancées » mis en évidence](/assets/images/help/codespaces/show-advanced-options.png)

   Dans la section « Options avancées », si vous sélectionnez **Désactiver l’optimisation de la prébuild**, les codespaces sont créés sans prébuild si le dernier workflow de prébuild a échoué ou est en cours d’exécution. Pour plus d’informations, consultez « [Résolution des problèmes liés aux prébuilds](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used) ».

1. Cliquez sur **Créer**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Après la création d’une configuration de prébuild, celle-ci est listée dans la page {% data variables.product.prodname_github_codespaces %} des paramètres de votre dépôt. Un workflow {% data variables.product.prodname_actions %} est mis en file d’attente, puis exécuté pour créer des prébuilds dans les régions que vous avez spécifiées, en fonction de la branche et du fichier de configuration de conteneur de développement que vous avez sélectionnés. 

![Capture d’écran de la liste des configurations de prébuild](/assets/images/help/codespaces/prebuild-configs-list.png)

Pour plus d’informations sur la modification et la suppression des configurations de prébuild, consultez « [Gestion des prébuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds) ».

## Configuration des variables d’environnement

Pour permettre au processus de prébuild d’accéder aux variables d’environnement nécessaires à la création de votre environnement de développement, vous pouvez les définir sous la forme de secrets de référentiel {% data variables.product.prodname_codespaces %} ou de secrets d’organisation {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Ajout de secrets pour un référentiel](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository) » et « [Ajout de secrets pour une organisation](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization) ». 

Les secrets que vous créez de cette façon seront accessibles par toute personne qui crée un codespace à partir de ce dépôt. Si ce n’est pas ce que vous souhaitez, vous pouvez définir le secret `CODESPACES_PREBUILD_TOKEN`. Le secret `CODESPACES_PREBUILD_TOKEN` est utilisé uniquement pour les prébuilds et sa valeur n’est pas accessible dans les codespaces des utilisateurs. 

Les prébuilds ne peuvent pas utiliser de secrets au niveau utilisateur lors de la création de votre environnement, car ceux-ci ne sont disponibles qu’après la création du codespace.

## Configuration des tâches chronophages à inclure dans la prébuild

Vous pouvez utiliser les commandes `onCreateCommand` et `updateContentCommand` de votre `devcontainer.json` pour inclure les processus chronophages dans le cadre de la création de la prébuild. Pour plus d’informations, consultez la documentation {% data variables.product.prodname_vscode %}, « [Informations de référence sur devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) ».

`onCreateCommand` ne s’exécute qu’une seule fois, lors de la création de la prébuild, tandis que `updateContentCommand` s’exécute lors de la création de la prébuild et de ses mises à jour ultérieures. Les builds incrémentielles doivent être incluses dans `updateContentCommand`, car elles représentent la source de votre projet et doivent être incluses pour chaque mise à jour de la prébuild.

## Pour aller plus loin

- « [Autorisation d’une prébuild à accéder à d’autres dépôts](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories) »
- « [Résolution des problèmes liés aux prébuilds](/codespaces/troubleshooting/troubleshooting-prebuilds) »
