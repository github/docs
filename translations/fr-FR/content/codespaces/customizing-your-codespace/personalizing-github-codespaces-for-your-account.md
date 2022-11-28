---
title: Personnalisation de GitHub Codespaces pour votre compte
shortTitle: Personalize your codespaces
intro: 'Vous pouvez personnaliser {% data variables.product.prodname_github_codespaces %} en utilisant un dépôt `dotfiles` sur {% data variables.product.product_name %} ou en utilisant la fonctionnalité Synchronisation des paramètres.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159768'
---
## À propos de la personnalisation de {% data variables.product.prodname_codespaces %}

Lors de l’utilisation d’un environnement de développement, la personnalisation des paramètres et outils selon vos préférences et workflows constitue une étape importante. {% data variables.product.prodname_github_codespaces %} vous permet de personnaliser vos codespaces de deux façons principales.

- [Synchronisation des paramètres](#settings-sync) : vous pouvez synchroniser vos paramètres {% data variables.product.prodname_vscode %} entre l’application de bureau et le client web {% data variables.product.prodname_vscode_shortname %}.
- [Dotfiles](#dotfiles) : vous pouvez utiliser un référentiel `dotfiles` pour spécifier des scripts, des préférences d’interpréteur de commandes et d’autres configurations.

La personnalisation {% data variables.product.prodname_github_codespaces %} s’applique à tout codespace que vous créez.

Les personnes en charge de la maintenance du projet peuvent également définir une configuration par défaut qui s’applique à chaque codespace d’un référentiel, créé par n’importe qui. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

## Synchronisation des paramètres

La synchronisation des paramètres vous permet de synchroniser des configurations telles que les paramètres, les raccourcis clavier, les extraits de code, les extensions et l’état de l’interface utilisateur sur les machines et les instances de {% data variables.product.prodname_vscode_shortname %}.

Pour activer la synchronisation des paramètres, dans le coin inférieur gauche de la barre d’activité de {% data variables.product.prodname_vscode %}, sélectionnez {% octicon "gear" aria-label="The gear icon" %}, puis cliquez sur **Activer la synchronisation des paramètres...** . Dans la boîte de dialogue, sélectionnez les paramètres que vous souhaitez synchroniser.

![Définition de l’option Synchronisation des paramètres dans le menu Gérer](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Pour plus d’informations, consultez le [Guide de synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) dans la documentation {% data variables.product.prodname_vscode_shortname %}.

## Dotfiles

Les dotfiles sont des fichiers et des dossiers sur des systèmes de type Unix commençant par `.`, qui contrôlent la configuration des applications et des interpréteurs de commandes sur votre système. Vous pouvez stocker et gérer vos dotfiles dans un référentiel sur {% data variables.product.prodname_dotcom %}. Pour des conseils et des tutoriels sur les éléments à inclure dans votre référentiel dotfiles, consultez [GitHub et les dotfiles](https://dotfiles.github.io/).

Votre référentiel dotfiles peut inclure vos alias et préférences d’interpréteur de commandes, tous les outils que vous souhaitez installer ou toute autre personnalisation de codespace que vous souhaitez effectuer.

Vous pouvez configurer {% data variables.product.prodname_github_codespaces %} de manière à utiliser des dotfiles à partir de n’importe quel dépôt que vous possédez, en sélectionnant ce dépôt dans vos [paramètres {% data variables.product.prodname_github_codespaces %} personnels](https://github.com/settings/codespaces).

Lorsque vous créez un codespace, {% data variables.product.prodname_dotcom %} clone le dépôt de dotfiles sélectionné dans l’environnement codespace et recherche l’un des fichiers suivants pour configurer l’environnement.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Si aucun de ces fichiers n’est trouvé, les fichiers ou dossiers de votre référentiel dotfiles sélectionnés commençant par `.` sont liés par un lien symbolique au répertoire `~` ou `$HOME` du codespace.

Toutes les modifications apportées à votre référentiel dotfiles sélectionné s’appliquent uniquement à chaque nouveau codespace et n’affectent pas le codespace existant.

{% note %}

**Remarque :** {% data variables.product.prodname_codespaces %} ne prend pas en charge la personnalisation des paramètres de portée utilisateur pour {% data variables.product.prodname_vscode_shortname %} avec votre dépôt `dotfiles`. Vous pouvez définir les paramètres Espace de travail et de distance [Codespaces] distants pour un projet spécifique dans le référentiel du projet. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration) ».

{% endnote %}

### Activation de votre référentiel dotfiles pour {% data variables.product.prodname_codespaces %}

Vous pouvez utiliser votre dépôt dotfiles sélectionné pour personnaliser votre environnement {% data variables.product.prodname_github_codespaces %}. Après avoir choisi votre référentiel dotfiles, vous pouvez y ajouter vos scripts, préférences et configurations. Vous devez ensuite activer vos dotfiles à partir de votre page de paramètres {% data variables.product.prodname_github_codespaces %} personnels.

{% warning %}

**Avertissement :** les dotfiles permettent d’exécuter des scripts arbitraires susceptibles de contenir du code inattendu ou malveillant. Avant d’installer un référentiel dotfiles, nous vous recommandons de vérifier que les scripts n’effectue aucune action inattendue.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Dotfiles », sélectionnez **Installer automatiquement des dotfiles** pour permettre à {% data variables.product.prodname_github_codespaces %} d’installer automatiquement vos dotfiles dans chaque codespace que vous créez.
   ![Installation de dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Choisissez le référentiel dans lequel vous souhaitez installer les dotfiles.
   ![Sélection d’un référentiel dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Vous pouvez ajouter d’autres scripts, préférences, fichiers de configuration à votre référentiel dotfiles ou modifier des fichiers existants si vous le souhaitez. Les modifications apportées aux paramètres ne seront prises en compte que par les nouveaux codespaces.

Si votre codespace ne parvient pas à récupérer les paramètres de configuration à partir des dotfiles, consultez « [Résolution des problèmes liés aux dotfiles pour {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces) ».

## Autres paramètres disponibles

Vous pouvez également personnaliser {% data variables.product.prodname_github_codespaces %} avec des options supplémentaires dans [vos paramètres personnels](https://github.com/settings/codespaces) :

- Pour activer la vérification GPG, consultez « [Gestion de la vérification GPG pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces) ».
- Pour définir votre éditeur, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) ».
- Pour définir la durée pendant laquelle un codespace peut rester inutilisé avant d’être arrêté automatiquement, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) ».
- Pour définir la période pendant laquelle vos codespaces inutilisés sont conservés, consultez « [Configuration de la suppression automatique de vos codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ».
- Pour définir votre région par défaut, consultez « [Définition de votre région par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces) ».

## Pour aller plus loin

* « [Création d’un dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) »
* « [Présentation approfondie de {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins) »
