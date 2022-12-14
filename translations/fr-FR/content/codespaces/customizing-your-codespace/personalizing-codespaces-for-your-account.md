---
title: Personnalisation de Codespaces pour votre compte
shortTitle: Personalize your codespaces
intro: Vous pouvez personnaliser {% data variables.product.prodname_codespaces %} en utilisant un référentiel `dotfiles` sur {% data variables.product.product_name %} ou en utilisant la Synchronisation des paramètres.
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681348"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>À propos de la personnalisation de {% data variables.product.prodname_codespaces %}

Lors de l’utilisation d’un environnement de développement, la personnalisation des paramètres et outils selon vos préférences et workflows constitue une étape importante. {% data variables.product.prodname_codespaces %} vous permet de personnaliser vos codespaces de deux façons principales.

- [Synchronisation des paramètres](#settings-sync) : vous pouvez utiliser et partager des paramètres {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} et d’autres instances de {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) : vous pouvez utiliser un référentiel `dotfiles` pour spécifier des scripts, des préférences d’interpréteur de commandes et d’autres configurations.

La personnalisation {% data variables.product.prodname_codespaces %} s’applique à tout codespace que vous créez.

Les personnes en charge de la maintenance du projet peuvent également définir une configuration par défaut qui s’applique à chaque codespace d’un référentiel, créé par n’importe qui. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_codespaces %} pour votre projet](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project) ».

## <a name="settings-sync"></a>Synchronisation des paramètres

La synchronisation des paramètres vous permet de partager des configurations telles que les paramètres, les raccourcis clavier, les extraits de code, les extensions et l’état de l’interface utilisateur sur les machines et les instances de {% data variables.product.prodname_vscode %}.

Pour activer la synchronisation des paramètres, dans le coin inférieur gauche de la barre d’activité, sélectionnez {% octicon "gear" aria-label="The gear icon" %}, puis cliquez sur **Activer la synchronisation des paramètres...** . Dans la boîte de dialogue, sélectionnez les paramètres que vous souhaitez synchroniser.

![Définition de l’option Synchronisation des paramètres dans le menu Gérer](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Pour plus d’informations, consultez le [Guide de synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) dans la documentation {% data variables.product.prodname_vscode %}.

## <a name="dotfiles"></a>Dotfiles

Les dotfiles sont des fichiers et des dossiers sur des systèmes de type Unix commençant par `.`, qui contrôlent la configuration des applications et des interpréteurs de commandes sur votre système. Vous pouvez stocker et gérer vos dotfiles dans un référentiel sur {% data variables.product.prodname_dotcom %}. Pour des conseils et des tutoriels sur les éléments à inclure dans votre référentiel dotfiles, consultez [GitHub et les dotfiles](https://dotfiles.github.io/).

Votre référentiel dotfiles peut inclure vos alias et préférences d’interpréteur de commandes, tous les outils que vous souhaitez installer ou toute autre personnalisation de codespace que vous souhaitez effectuer.

Vous pouvez configurer {% data variables.product.prodname_codespaces %} de manière à utiliser des dotfiles à partir de n’importe quel référentiel que vous possédez, en sélectionnant ce référentiel dans vos [paramètres {% data variables.product.prodname_codespaces %} personnels](https://github.com/settings/codespaces).

Lorsque vous créez un codespace, {% data variables.product.prodname_dotcom %} clone le référentiel sélectionné dans l’environnement codespace et recherche l’un des fichiers suivants pour configurer l’environnement.

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

**Remarque :** actuellement, {% data variables.product.prodname_codespaces %} ne prend pas en charge la personnalisation des paramètres _Utilisateur_ pour l’éditeur {% data variables.product.prodname_vscode %} avec votre référentiel `dotfiles`. Vous pouvez définir les paramètres _Espace de travail_ et _de distance [Codespaces] distants_ pour un projet spécifique dans le référentiel du projet. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration) ».

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>Activation de votre référentiel dotfiles pour {% data variables.product.prodname_codespaces %}

Vous pouvez utiliser votre référentiel dotfiles sélectionné pour personnaliser votre environnement {% data variables.product.prodname_codespaces %}. Après avoir choisi votre référentiel dotfiles, vous pouvez y ajouter vos scripts, préférences et configurations. Vous devez ensuite activer vos dotfiles à partir de votre page de paramètres {% data variables.product.prodname_codespaces %} personnels.

{% warning %}

**Avertissement :** les dotfiles permettent d’exécuter des scripts arbitraires susceptibles de contenir du code inattendu ou malveillant. Avant d’installer un référentiel dotfiles, nous vous recommandons de vérifier que les scripts n’effectue aucune action inattendue.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Sous « Dotfiles », sélectionnez **Installer automatiquement des dotfiles** pour permettre à {% data variables.product.prodname_codespaces %} d’installer automatiquement vos dotfiles dans chaque codespace que vous créez.
   ![Installation de dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Choisissez le référentiel dans lequel vous souhaitez installer les dotfiles.
   ![Sélection d’un référentiel dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Vous pouvez ajouter d’autres scripts, préférences, fichiers de configuration à votre référentiel dotfiles ou modifier des fichiers existants si vous le souhaitez. Les modifications apportées aux paramètres ne seront prises en compte que par les nouveaux codespaces.

Si votre codespace ne parvient pas à récupérer les paramètres de configuration à partir des dotfiles, consultez « [Résolution des problèmes liés aux dotfiles pour {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces) ».

## <a name="other-available-settings"></a>Autres paramètres disponibles

Vous pouvez également personnaliser {% data variables.product.prodname_codespaces %} à l’aide de [paramètres {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces) supplémentaires :

- Pour définir votre région par défaut, consultez « [Définition de votre région par défaut pour {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces) ».
- Pour définir votre éditeur, consultez « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces) ».
- Pour ajouter des secrets chiffrés, consultez « [Gestion des secrets chiffrés pour {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces) ».
- Pour activer la vérification GPG, consultez « [Gestion de la vérification GPG pour {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces) ».
- Pour autoriser vos codespaces à accéder à d’autres référentiels, consultez « [Gestion de l’accès et de la sécurité pour {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces) ».

## <a name="further-reading"></a>Pour aller plus loin

* « [Création d’un dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) »
