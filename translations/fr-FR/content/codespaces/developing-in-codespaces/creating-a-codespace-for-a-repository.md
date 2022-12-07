---
title: Création d’un codespace pour un dépôt
intro: Vous pouvez créer un espace de code pour une branche dans un dépôt à développer en ligne.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 409c946feda4ffbd3d9ab615b6ea07fabee3f530
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188319'
---
## À propos de la création d’un codespace pour un dépôt

{% data reusables.codespaces.ways-to-create-a-codespace %} Utilisez les onglets de cet article afin d’afficher des instructions pour chacune de ces méthodes de création d’un codespace.

{% data reusables.codespaces.starting-new-project-template %} Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) ».

{% note %}

**Remarque** : Si vous utilisez un IDE JetBrains, vous pouvez utiliser {% data variables.product.prodname_cli %} pour créer un codespace. Vous pouvez ensuite utiliser l’application JetBrains Gateway pour ouvrir le codespace dans un IDE JetBrains. Pour plus d’informations, consultez « [Utilisation de Codespaces dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide) ».

{% endnote %}

Vous pouvez utiliser {% data variables.product.prodname_github_codespaces %} sur votre compte personnel {% data variables.product.prodname_dotcom_the_website %}, avec le quota d’utilisation gratuite inclus chaque mois pour les comptes associés aux plans Gratuit et Pro. {% data reusables.codespaces.codespaces-continue-by-paying %}

Les organisations peuvent, à leurs frais, permettre aux membres et aux collaborateurs externes de créer et d’utiliser des codespaces. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ».

{% data reusables.codespaces.codespaces-are-personal %}

Si vous créez un codespace à partir d’un dépôt, le codespace est associé à une branche spécifique, qui ne peut pas être vide. Vous pouvez créer plusieurs codespaces par référentiel, voire par branche.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Processus de création d’un codespace

Lorsque vous créez un codespace, un certain nombre d’étapes sont nécessaires pour créer votre environnement de développement et vous y connecter :

- Étape 1 : la machine virtuelle et le stockage sont affectés à votre codespace.
- Étape 2 : le conteneur est créé et votre dépôt est cloné.
- Étape 3 : vous pouvez vous connecter au codespace.
- Étape 4 : le codespace continue avec la configuration après création.

Pour plus d’informations sur ce qui se passe lorsque vous créez un codespace, consultez « [Présentation approfondie](/codespaces/getting-started/deep-dive) ».

Pour plus d’informations sur le cycle de vie d’un codespace, consultez « [Cycle de vie des codespaces](/codespaces/getting-started/the-codespace-lifecycle) ».

Si vous souhaitez utiliser des crochets Git pour votre codespace, vous devriez configurer des crochets à l’aide de [scripts de cycle de vie `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), tels que `postCreateCommand`, à l’étape 4. Étant donné que votre conteneur de codespace est créé une fois le dépôt cloné, aucun [répertoire de modèles Git](https://git-scm.com/docs/git-init#_template_directory) configuré dans l’image conteneur ne s’applique pas à votre codespace. Les crochets doivent plutôt être installés après la création du codespace. Pour plus d’informations sur l’utilisation de `postCreateCommand`, consultez la [référence `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) dans la documentation de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Création d’un codespace pour un dépôt

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Sous le nom du dépôt, utilisez le menu déroulant « Branche », puis sélectionnez la branche pour laquelle vous souhaitez créer un codespace.

   ![Menu déroulant Branche](/assets/images/help/codespaces/branch-drop-down.png)

1. Cliquez sur le bouton **{% octicon "code" aria-label="The code icon" %} Code**, puis sur l’onglet **Codespaces**.

   ![Bouton Nouveau codespace](/assets/images/help/codespaces/new-codespace-button.png)

   Si les codespaces de ce dépôt sont facturables à une organisation ou à son entreprise parente, un message s’affiche sous le bouton **Créer un codespace sur BRANCH** vous indiquant qui doit payer pour le codespace.

1. Créez votre codespace en utilisant les options par défaut, ou après configuration d’options avancées :
 
   * **Utiliser les options par défaut**

      Pour créer un codespace en utilisant les options par défaut, cliquez sur le signe plus ({% octicon "plus" aria-label="The plus icon" %}). Sinon, si vous n’avez aucun codespace pour ce dépôt, vous pouvez cliquer sur **Créer un codespace sur BRANCH**.

   * **Configurer les options**

      Pour configurer des options avancées pour votre codespace, telles qu’un autre type de machine ou un fichier `devcontainer.json` particulier :

      1. Cliquez sur les points de suspension ( **...** ) en haut à droite de l’onglet **Codespaces** et sélectionnez **Nouveau avec des options**.

      ![Afficher le type de machine par défaut](/assets/images/help/codespaces/default-machine-type.png)

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

      1. Cliquez sur **Créer codespace**.

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

Vous êtes invité à choisir un dépôt. Si les codespaces de ce dépôt sont facturables à une organisation ou à son entreprise parente, un message s’affiche vous indiquant qui doit payer pour le codespace. Vous êtes invité à choisir une branche, un fichier de configuration de conteneur de développement (si plusieurs sont disponibles) et un type de machine (si plusieurs sont disponibles).

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
- « [Ajout d’un badge « Ouvrir dans {% data variables.product.prodname_github_codespaces %} »](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge) »
