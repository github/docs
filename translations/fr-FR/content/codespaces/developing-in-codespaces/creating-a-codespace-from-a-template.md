---
title: Création d’un codespace à partir d’un modèle
intro: 'Si vous démarrez un nouveau projet, vous pouvez créer un codespace à partir d’un modèle vide ou choisir un modèle spécialement conçu pour le type de travail que vous souhaitez effectuer.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188311'
---
## À propos des modèles pour {% data variables.product.prodname_github_codespaces %}

Si vous démarrez un nouveau projet, vous pouvez commencer rapidement à travailler sur le développement en créant un codespace à partir d’un modèle. Vous pourrez travailler sur votre projet dans un environnement de développement cloud, enregistrer vos fichiers dans le cloud et publier votre travail dans un nouveau dépôt distant que vous pouvez partager avec d’autres personnes ou cloner sur votre ordinateur local.

{% note %}

**Remarque** : Les codespaces créés à partir d’un modèle, plutôt que d’un dépôt, sont toujours facturés à votre compte personnel. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

{% endnote %}

Vous pouvez commencer à partir d’un modèle vide, choisir parmi les modèles gérés par {% data variables.product.company_short %} pour les technologies populaires telles que React ou Jupyter Notebook ou lancer un codespace à partir d’un dépôt de modèles sur {% data variables.product.prodname_dotcom %}. Si vous utilisez un modèle vide, vous commencez avec un répertoire vide, avec accès à des ressources de calcul cloud et aux outils, langages et environnements d’exécution qui sont préinstallés avec l’image codespace par défaut. Avec d’autres modèles, vous obtenez des fichiers de démarrage pour la technologie que vous utilisez ainsi que des fichiers supplémentaires tels qu’un fichier README, un fichier `.gitignore` et des fichiers de configuration de conteneur de développement comportant une configuration d’environnement personnalisée. Pour plus d’informations sur les conteneurs de développement et l’image par défaut, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

Par exemple, si vous créez un codespace à partir du modèle React de {% data variables.product.company_short %}, vous arrivez dans un espace de travail contenant des fichiers de modèle pour une application simple, tels que `index.js`, `app.js` et `package.json`. Peu après l’ouverture du codespace, un serveur de développement démarre automatiquement et vous pouvez afficher l’application en cours d’exécution sous un simple onglet de navigateur dans le client web {% data variables.product.prodname_vscode_shortname %}.

![Capture d’écran du modèle React en cours d’exécution dans un codespace](/assets/images/help/codespaces/react-template.png)

Les fichiers et la configuration inclus dans les modèles sont définis dans des dépôts de modèles. Le dépôt de modèles est cloné dans votre codespace quand vous créez celui-ci. Ensuite, le lien est rompu et votre codespace n’est pas lié à un dépôt distant tant que vous n’y publiez pas. 

{% tip %}

**Conseil :** Pour aider les utilisateurs à démarrer avec votre framework, bibliothèque ou autre projet, vous pouvez configurer un dépôt de modèles à utiliser avec {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations, consultez « [Configuration d’un dépôt de modèles pour {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces) ».

{% endtip %}

## Création d’un codespace à partir d’un modèle {% data variables.product.company_short %}

Les modèles gérés par {% data variables.product.company_short %}, y compris le modèle vide, sont disponibles à partir de la page « Vos codespaces ».

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Si vous le souhaitez, pour afficher le dépôt de modèles contenant les fichiers d’un modèle, cliquez sur le nom du modèle.

   ![Capture d’écran de la section « Explorer les modèles de démarrage rapide », avec « React » mis en évidence](/assets/images/help/codespaces/react-template-name.png)

1. Sous le modèle que vous souhaitez lancer, cliquez sur **Utiliser ce modèle**.
   
   ![Capture d’écran des modèles de démarrage rapide, avec le bouton « Utiliser ce modèle » mis en évidence sous le modèle React](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Création d’un codespace à partir d’un dépôt de modèles

Vous pouvez créer un codespace à partir de n’importe quel dépôt de modèles, puis publier votre travail dans un nouveau dépôt quand vous êtes prêt. Pour plus d’informations sur les dépôts de modèles, consultez « [Création d’un dépôt à partir d’un modèle](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Remarque :** Si vous êtes chargé de maintenance du dépôt de modèles et que vous souhaitez commiter les modifications apportées au dépôt de modèles lui-même, vous devez créer un codespace à partir de la liste déroulante **{% octicon "code" aria-label="The code icon" %} Code**. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Publication dans un dépôt sur {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Publication à partir de {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

Quand un codespace est publié, vous avez accès à un plus grand nombre d’options pour personnaliser votre expérience {% data variables.product.prodname_github_codespaces %}. Par exemple, vous pouvez :

- Changez le type de machine de votre codespace pour vous assurer que vous utilisez les ressources appropriées pour le travail que vous effectuez (consultez « [Changement du type d’ordinateur pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) »).
- Autorisez {% data variables.product.prodname_dotcom %} à utiliser automatiquement GPG pour signer les commits que vous effectuez dans votre codespace (consultez « [Gestion de la vérification GPG pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces) »).
- Partagez des secrets chiffrés avec votre codespace (consultez « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) »).

### Publication à partir de {% data variables.product.prodname_dotcom_the_website %} 

Vous pouvez publier un codespace non publié à partir de la page « Vos codespaces » sur {% data variables.product.prodname_dotcom_the_website %}. Cela est utile si vous souhaitez publier un codespace que vous n’avez pas ouvert dans votre navigateur. Dans ce cas, votre travail est conservé dans un dépôt, mais il n’y a pas de lien entre votre codespace existant et le nouveau dépôt. Toutefois, vous pouvez accéder au nouveau dépôt et créer un codespace à partir de là ; ce codespace sera alors connecté au dépôt.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. En regard du codespace non publié, cliquez sur les points de suspension ( **...** ), puis sélectionnez **Publier dans un nouveau dépôt**.

   ![Capture d’écran du bouton « Publier dans un nouveau dépôt »](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Choisissez un nom pour votre nouveau dépôt, définissez-le comme **Public** ou **Privé**, puis cliquez sur **Créer le dépôt**.

   ![Capture d’écran de l’élément déroulant « Publier dans un nouveau dépôt »](/assets/images/help/codespaces/template-new-repository-settings.png)
1. Si vous le souhaitez, pour afficher le nouveau dépôt, cliquez sur **Voir le dépôt**.

## Pour aller plus loin

- « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) »
- « [Cycle de vie des codespaces](/codespaces/getting-started/the-codespace-lifecycle) »
- « [Utilisation du contrôle de code source dans votre codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) »
