---
title: Ajout de fonctionnalités à un fichier devcontainer.json
shortTitle: Adding features
intro: 'Avec des fonctionnalités, vous pouvez rapidement ajouter des outils, des runtimes ou des bibliothèques à votre configuration de conteneur de développement.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180826'
---
{% data reusables.codespaces.about-features %} Utilisez les onglets de cet article afin d’afficher des instructions pour chaque méthode d’ajout de fonctionnalités.

## Ajout de fonctionnalités à un fichier `devcontainer.json`

{% webui %}

1. Accédez à votre dépôt sur {% data variables.product.prodname_dotcom_the_website %}, recherchez votre fichier `devcontainer.json`, puis cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier le fichier.
   
   Si vous n’avez pas encore de fichier `devcontainer.json`, vous pouvez en créer un maintenant. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration) ».
1. À droite de l’éditeur de fichier, sous l’onglet **Place de marché**, parcourez les fonctionnalités ou recherchez celle que vous souhaitez ajouter, puis cliquez sur son nom.

   ![Capture d’écran de la fonctionnalité Terraform dans l’onglet Place de marché, avec « Terra » dans la barre de recherche](/assets/images/help/codespaces/feature-marketplace.png)
3. Sous « Installation », cliquez sur l’extrait de code pour le copier dans le Presse-papiers, puis collez l’extrait dans l’objet `features` de votre fichier `devcontainer.json`.

   ![Capture d’écran d’un bloc de code dans la section Installation de l’onglet Place de marché](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. Par défaut, la dernière version de la fonctionnalité est utilisée. Pour choisir une autre version ou configurer d’autres options pour la fonctionnalité, développez les propriétés listées sous « Options » pour afficher les valeurs disponibles, puis ajoutez les options en modifiant manuellement l’objet dans votre fichier `devcontainer.json`.

   ![Capture d’écran de la section Options de l’onglet Place de marché, avec « version » et « tflint » développés](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. Commitez les modifications dans votre fichier `devcontainer.json`.

Les modifications de configuration prendront effet dans les nouveaux codespaces créés à partir du dépôt. Pour que les modifications prennent effet dans les codespaces existants, vous devez tirer (pull) les mises à jour du fichier `devcontainer.json` dans votre codespace, puis regénérer le conteneur pour le codespace. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) ».

{% endwebui %}

{% vscode %}

{% note %}

Pour ajouter des fonctionnalités dans {% data variables.product.prodname_vscode_shortname %} lorsque vous travaillez localement et que vous n’êtes pas connecté à un codespace, l’extension « Conteneurs de développement » doit être installée et activée. Pour plus d’informations sur cette extension, consultez la [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Commencez à taper « Configurer », puis sélectionnez **Codespaces : Configurer les fonctionnalités du conteneur de développement**.

   ![Commande Configurer les fonctionnalités du conteneur de développement dans la palette de commandes](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Mettez à jour vos sélections de fonctionnalités, puis cliquez sur **OK**.

   ![Menu Sélectionner des fonctionnalités supplémentaires pendant la configuration du conteneur](/assets/images/help/codespaces/select-additional-features.png)

4. Si vous travaillez dans un codespace, une invite apparaît dans le coin inférieur droit. Pour regénérer le conteneur et appliquer les modifications au codespace dans lequel vous travaillez, cliquez sur **Regénérer maintenant**.

   ![« Codespaces : Regénérer le conteneur » dans la palette de commandes](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
