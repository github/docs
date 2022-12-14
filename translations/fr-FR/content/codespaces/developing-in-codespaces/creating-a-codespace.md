---
title: Création d’un codespace
intro: Vous pouvez créer un espace de code pour une branche dans un dépôt à développer en ligne.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106732"
---
## À propos de la création de codespace

Vous pouvez créer un codespace sur {% data variables.product.prodname_dotcom_the_website %}, dans {% data variables.product.prodname_vscode %} ou à l’aide de {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Les codespaces sont associés à une branche spécifique d’un dépôt qui ne peut pas être vide. Vous pouvez créer plusieurs codespaces par référentiel, voire par branche.

Lorsque vous créez un codespace, un certain nombre d’étapes sont nécessaires pour créer votre environnement de développement et vous y connecter :

- Étape 1 : la machine virtuelle et le stockage sont affectés à votre codespace.
- Étape 2 : le conteneur est créé et votre dépôt est cloné.
- Étape 3 : vous pouvez vous connecter au codespace.
- Étape 4 : le codespace continue avec la configuration après création.

Pour plus d’informations sur ce qui se passe lorsque vous créez un codespace, consultez « [Présentation approfondie](/codespaces/getting-started/deep-dive) ».

Pour plus d’informations sur le cycle de vie d’un codespace, consultez « [Cycle de vie des codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle) ».

Si vous souhaitez utiliser des crochets Git pour votre codespace, vous devriez configurer des crochets à l’aide de [scripts de cycle de vie `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), tels que `postCreateCommand`, à l’étape 4. Étant donné que votre conteneur de codespace est créé une fois le dépôt cloné, aucun [répertoire de modèles Git](https://git-scm.com/docs/git-init#_template_directory) configuré dans l’image conteneur ne s’applique pas à votre codespace. Les crochets doivent plutôt être installés après la création du codespace. Pour plus d’informations sur l’utilisation de `postCreateCommand`, consultez la [référence `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) dans la documentation de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Accès à {% data variables.product.prodname_github_codespaces %}

Quand vous aurez accès à {% data variables.product.prodname_github_codespaces %}, vous verrez un onglet « Codespaces » dans le menu déroulant **{% octicon "code" aria-label="The code icon" %} Code** lorsque vous afficherez un dépôt.

Vous aurez accès à {% data variables.product.prodname_github_codespaces %} dans les conditions suivantes :

Soit toutes ces affirmations sont vraies :
* Vous êtes membre ou collaborateur externe d’une organisation qui a activé {% data variables.product.prodname_codespaces %} et défini une limite de dépense.
* Le propriétaire de l’organisation vous a autorisé à créer des codespaces aux frais de l’organisation.
* Le dépôt pour lequel vous souhaitez créer un codespace appartient à cette organisation.

Soit ces deux affirmations sont vraies :
* Vous participez à la version bêta de {% data variables.product.prodname_codespaces %} pour les utilisateurs individuels.
* Soit vous êtes propriétaire du dépôt pour lequel vous souhaitez créer un codespace, soit il appartient à une organisation dont vous êtes membre ou collaborateur externe.

Avant qu’il soit possible d’utiliser {% data variables.product.prodname_codespaces %} dans une organisation, un propriétaire ou un gestionnaire de facturation doivent avoir défini une limite de dépense. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces) ».

Les propriétaires d’organisation peuvent spécifier qui peut créer et utiliser des codespaces aux frais de l’organisation. Les propriétaires d’organisation peuvent également empêcher toute utilisation des codespaces aux frais de l’organisation. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization) ».

## Création d’un codespace

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Sous le nom du dépôt, utilisez le menu déroulant « Branche », puis sélectionnez la branche pour laquelle vous souhaitez créer un codespace.

   ![Menu déroulant Branche](/assets/images/help/codespaces/branch-drop-down.png)

1. Cliquez sur le bouton **{% octicon "code" aria-label="The code icon" %} Code**, puis sur l’onglet **Codespaces**.

   ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

   Si les codespaces de ce dépôt sont facturables, un message s’affiche sous le bouton **Créer un codespace sur BRANCH** vous indiquant qui doit payer pour le codespace.

1. Créez votre codespace en utilisant les options par défaut, ou après configuration d’options avancées :
 
   * **Utiliser les options par défaut**

      Pour créer un codespace à l’aide des options par défaut, cliquez sur **Créer un codespace sur BRANCHE**.

      Si vous le souhaitez, avant de cliquer sur **Créer un codespace sur BRANCHE**, vous pouvez cliquer sur la flèche vers le bas en regard du bouton pour voir quel type d’ordinateur sera utilisé pour votre codespace.

      ![Afficher le type de machine par défaut](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Remarque** : le type de machine dotée des ressources les plus basses valides pour le dépôt est sélectionné par défaut.

      {% endnote %}

   * **Configurer les options**

      Pour configurer des options avancées pour votre codespace, telles qu’un autre type de machine ou un fichier `devcontainer.json` particulier :

      1. Cliquez sur la flèche vers le bas en regard du bouton **Créer un codespace sur BRANCHE**, puis cliquez sur **Configurer et créer un codespace**.
      1. Cliquez sur le bouton **Configurer et créer un codespace** .
      1. Dans la page d’options pour votre codespace, choisissez vos options préférées dans les menus déroulants.

         ![Page d’options de codespace](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Remarques**
      
         * Vous pouvez marquer d’un signet la page d’options afin de disposer d’un moyen rapide de créer un codespace pour ce dépôt et cette branche.
         * La page [https://github.com/codespaces/new](https://github.com/codespaces/new) offre un moyen rapide de créer un codespace pour tout dépôt et toute branche. Vous pouvez accéder rapidement à cette page en tapant `codespace.new` dans la barre d’adresse de votre navigateur.
         * Pour plus d’informations sur le fichier `devcontainer.json`, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson) ».
         * Pour plus d’informations sur les types de machines, consultez « [Modification du type de machine pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types) ».
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Cliquez sur **Démarrer une session**.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour créer un codespace, utilisez la sous-commande `gh codespace create`. 

```shell
gh codespace create 
```

Vous êtes invité à choisir un dépôt. Si les codespaces de ce dépôt sont facturables, un message s’affiche vous indiquant qui doit payer pour le codespace. Vous êtes invité à choisir une branche, un fichier de configuration de conteneur de développement (si plusieurs sont disponibles) et un type de machine (si plusieurs sont disponibles).

Vous pouvez également utiliser des indicateurs pour spécifier tout ou partie des options :

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

Dans cet exemple, remplacez `owner/repo` par l’identificateur du dépôt. Remplacez `branch` par le nom de la branche, ou le hachage SHA complet de la validation, dont vous souhaitez l’extraction initiale dans le codespace. Si vous utilisez l’indicateur `-r` sans l’indicateur `b`, le codespace est créé à partir de la branche par défaut.

Remplacez `path` par le chemin du fichier de configuration de conteneur de développement que vous souhaitez utiliser pour le nouveau codespace. Si vous omettez cet indicateur et que plusieurs fichiers de conteneur de développement sont disponibles, vous êtes invité à en choisir un dans une liste. Pour plus d’informations sur le fichier de configuration de conteneur de développement, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

Remplacez `machine-type` par un identificateur valide pour un type de machine disponible. Les identificateurs sont des chaînes telles que : `basicLinux32gb` et `standardLinux32gb`. Les types de machines disponibles dépendent du dépôt, de votre compte personnel et de votre emplacement. Si vous entrez un type de machine non valide ou indisponible, les types disponibles sont affichés dans le message d’erreur. Si vous omettez cet indicateur et que plusieurs types de machines sont disponibles, vous êtes invité à en choisir un dans une liste.

Pour obtenir des détails complets sur les options de cette commande, consultez [le manuel de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Pour aller plus loin
- « [Ouverture d’un codespace existant](/codespaces/developing-in-codespaces/opening-an-existing-codespace) »
- « [Ajout d’un badge 'Ouvrir dans GitHub Codespaces'](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge) »
