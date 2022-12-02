---
title: 'Présentation approfondie de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Découvrez comment fonctionne {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188263'
---
{% data variables.product.prodname_github_codespaces %} est un environnement de développement instantané et basé sur le cloud qui fournit dans un conteneur les langages, les outils et les utilitaires courants dont vous avez besoin pour développer. {% data variables.product.prodname_github_codespaces %} est également configurable, ce qui vous permet de créer un environnement de développement personnalisé pour votre projet. En configurant un environnement de développement personnalisé pour votre projet, vous pouvez disposer d’une configuration de codespace reproductible pour tous les utilisateurs de votre projet.

## Création de votre codespace

Il existe un certain nombre de points d’entrée pour créer un codespace :

- À partir d’un modèle {% data variables.product.company_short %} ou d’un dépôt de modèles sur {% data variables.product.prodname_dotcom_the_website %} pour démarrer un nouveau projet
- À partir d’une branche de votre dépôt pour un travail relatif à de nouvelles fonctionnalités
- À partir d’une demande de tirage (pull request) ouverte pour explorer le travail en cours
- À partir d’un commit dans l’historique d’un dépôt pour investiguer un bogue à un moment précis

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
Votre codespace peut être éphémère si vous souhaitez simplement effectuer un test, ou vous pouvez revenir au même codespace pour travailler sur des fonctionnalité sur le long terme. 

Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) », « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) » et « [Ouverture d’un codespace existant](/codespaces/developing-in-codespaces/opening-an-existing-codespace) ».

{% note %}

**Remarque** : Vous pouvez créer plusieurs codespaces par dépôt, voire par branche. Toutefois, il existe des limites au nombre de codespaces que vous pouvez créer, et au nombre de codespaces que vous pouvez exécuter en même temps. Si vous atteignez le nombre maximal de codespaces et que vous essayez d’en créer un autre, un message s’affiche vous indiquant que vous devez supprimer un codespace existant avant de pouvoir en créer un.

{% endnote %}

### Processus de création d’un codespace

Quand vous créez un codespace, différentes étapes se produisent en arrière-plan avant que le codespace ne soit disponible.

### Étape 1 : Une machine virtuelle et un stockage sont attribués à votre codespace

Quand vous créez un codespace, un [clone superficiel](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) est créé à partir de votre dépôt ou du dépôt de modèles si vous créez un codespace à partir d’un modèle. Le dépôt est cloné sur une machine virtuelle Linux qui vous est entièrement privée. Le fait que cette machine virtuelle vous soit dédiée vous permet de disposer de l’ensemble de ses ressources de calcul. Si nécessaire, cela vous permet également d’avoir un accès racine complet à votre conteneur.

### Étape 2 : Un conteneur est créé

{% data variables.product.prodname_github_codespaces %} utilise un conteneur comme environnement de développement. Ce conteneur est créé en fonction de configurations que vous pouvez définir dans un fichier `devcontainer.json` et, éventuellement, un fichier Dockerfile. Si vous créez un codespace à partir du modèle vide de {% data variables.product.company_short %}, ou à partir d’un dépôt sans fichier `devcontainer.json`, {% data variables.product.prodname_github_codespaces %} utilise une image par défaut, pour laquelle de nombreux langages et runtimes sont disponibles. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ». Pour plus de détails sur le contenu de l’image par défaut, consultez le dépôt [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Remarque :** si vous souhaitez utiliser des crochets Git dans votre codespace et appliquer le contenu du [répertoire de modèles Git](https://git-scm.com/docs/git-init#_template_directory) à votre codespace, vous devez configurer des crochets à l’étape 4 après la création du conteneur.

Étant donné que votre référentiel est cloné sur la machine virtuelle hôte avant la création du conteneur, le contenu du [répertoire de modèles Git](https://git-scm.com/docs/git-init#_template_directory) ne s’applique pas à votre codespace, sauf si vous configurez des crochets dans votre fichier de configuration `devcontainer.json` à l’aide de la commande `postCreateCommand` à l’étape 4. Pour plus d’informations, consultez « [Étape 4 : Configuration post-création](#step-4-post-creation-setup) ».

{% endnote %}

### Étape 3 : Connexion au codespace

Une fois votre conteneur créé et toute autre initialisation exécutée, vous être connecté à votre codespace. Vous pouvez vous y connecter avec :

* Votre navigateur web
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [Un IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### Étape 4 : Configuration post-création

Une fois que vous êtes connecté à votre codespace, la configuration automatisée peut se poursuivre sur la base de la configuration spécifiée dans votre fichier `devcontainer.json`. Vous pouvez voir l’exécution des commandes `postCreateCommand` et `postAttachCommand`.

Si vous souhaitez utiliser des crochets Git dans votre codespace, configurez les crochets avec des [scripts de cycle de vie `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), tels que `postCreateCommand`. Pour plus d’informations, consultez les [informations de référence sur `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) dans la documentation {% data variables.product.prodname_vscode_shortname %}.

Si vous disposez d’un dépôt de fichiers dotfile public pour {% data variables.product.prodname_github_codespaces %}, vous pouvez l’activer afin de l’utiliser avec de nouveaux espaces de code. Lorsque celui-ci est activé, vos dotfiles sont clonés dans le conteneur et le script d’installation est appelé. Pour plus d’informations, consultez « [Personnalisation de {% data variables.product.prodname_github_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles) ». 

Enfin, si vous avez créé le codespace à partir d’un dépôt, l’historique complet du dépôt est copié avec un clone complet. Si vous avez créé le codespace à partir d’un modèle, l’historique complet du dépôt de modèles n’est pas conservé ; à la place, sauf si vous utilisez le modèle vide, vous commencez par un commit initial pour le contenu du dépôt de modèles.

Lors de la configuration post-création, vous pourrez toujours utiliser le terminal intégré et apporter des modifications à vos fichiers, mais veillez alors à éviter toute condition de concurrence entre votre travail et les commandes en cours d’exécution.
## Cycle de vie des {% data variables.product.prodname_codespaces %}

### Enregistrement de fichiers dans votre codespace

Enregistrez les modifications apportées aux fichiers de manière normale, en fonction de l’éditeur que vous utilisez.

Si vous travaillez sur des codespaces dans {% data variables.product.prodname_vscode %}, vous pouvez activer l’[enregistrement automatique](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) pour vous assurer que vos modifications sont toujours enregistrées. 

### Fermeture ou arrêt de votre codespace

Votre codespace continue de s’exécuter pendant que vous l’utilisez, mais expire après une période d’inactivité. Les modifications apportées aux fichiers à partir de l’éditeur et de la sortie du terminal sont comptabilisées en tant qu’activité. Votre codespace n’expire donc pas si la sortie du terminal se poursuit. La période du délai d’inactivité par défaut est de 30 minutes. Vous pouvez définir votre paramètre de délai d’expiration personnel pour les codespaces que vous créez, mais cela peut être annulé par une stratégie de délai d’expiration de l’organisation. Pour plus d’informations, consultez « [Définition de votre période d’expiration pour Codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces) ». 

Si un codespace expire, il cesse de s’exécuter, mais vous pouvez le redémarrer à partir de l’onglet du navigateur (si vous utilisiez le codespace dans le navigateur), de {% data variables.product.prodname_vscode_shortname %} ou de votre liste de codespaces à l’adresse [https://github.com/codespaces](https://github.com/codespaces).

Pour arrêter votre codespace, vous pouvez

* Dans le navigateur : dans votre liste de codespaces à l’adresse [https://github.com/codespaces](https://github.com/codespaces), cliquez sur les points de suspension ( **...** ) à droite du codespace que vous souhaitez arrêter, puis cliquez sur **Arrêter le codespace**.
* Dans {% data variables.product.prodname_vscode_shortname %} : ouvrez [la {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) - par exemple, en appuyant sur <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>Entrée</kbd> (Windows/Linux) ou <kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac) - tapez `Codespaces: stop`, puis appuyez sur <kbd>Entrée</kbd>.
* Dans le client JetBrains, cliquez sur le bouton Arrêter en haut de la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations, consultez l’onglet « IDE JetBrains » de « [Arrêt et démarrage d’un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace) ».
* Dans une fenêtre de terminal : utilisez la commande {% data variables.product.prodname_cli %} `gh codespace stop`. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} avec {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces) ».

Si vous quittez votre codespace sans exécuter la commande d’arrêt (par exemple, en fermant l’onglet du navigateur), ou si vous laissez le codespace s’exécuter sans interaction, le codespace et ses processus en cours continuent pendant la durée du délai d’inactivité. 

Lorsque vous fermez ou arrêtez votre codespace, toutes les modifications non validées sont conservées jusqu’à ce que vous vous connectiez à nouveau au codespace.

## Exécution de votre application

Le réacheminement de ports vous permet d’accéder aux ports TCP exécutés dans votre codespace. Par exemple, si vous exécutez une application web sur le port 4000 de votre codespace, vous pouvez réacheminer automatiquement ce port pour rendre l’application accessible à partir de votre navigateur.

Le réacheminement de port détermine les ports accessibles à partir de l’ordinateur distant. Même si vous ne réacheminez pas un port, celui-ci reste accessible aux autres processus qui s’exécutent dans le codespace lui-même.

![Diagramme illustrant le fonctionnement du réacheminement de port dans un codespace](/assets/images/help/codespaces/port-forwarding.png)

Quand une application exécutée dans {% data variables.product.prodname_github_codespaces %} envoie un port vers la console, {% data variables.product.prodname_github_codespaces %} détecte le modèle d’URL localhost et réachemine automatiquement le port. Vous pouvez cliquer sur l’URL dans le terminal ou sur le lien dans le message de notification « toast » qui s’affiche en bas à droite de {% data variables.product.prodname_vscode_shortname %}, pour ouvrir le port dans un navigateur. Par défaut, {% data variables.product.prodname_github_codespaces %} réachemine le port à l’aide de HTTP. Pour plus d’informations sur le réacheminement de port, consultez « [Réacheminement de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

Bien que les ports puissent être réacheminés automatiquement, ils ne sont pas accessibles publiquement sur Internet. Par défaut, tous les ports sont privés, mais vous pouvez manuellement rendre un port public ou disponible à l’échelle de votre organisation, puis partager l’accès via une URL. Pour plus d’informations, consultez « [Partage d’un port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port) ».

L’exécution de votre application dès votre arrivée dans votre codespace peut constituer une boucle de développement interne rapide. Au fil de vos modifications, celles-ci sont automatiquement enregistrées et disponibles sur votre port réacheminé. Pour visualiser les modifications, revenez à l’onglet de l’application en cours d’exécution dans votre navigateur et actualisez-le.

## Validation (commit) et envoi (push) de vos modifications

Git est installé par défaut dans votre codespace. Vous pouvez donc vous appuyer sur votre workflow Git existant. Vous pouvez utiliser Git dans votre codespace via le terminal ou en utilisant les fonctionnalités de contrôle de code source de {% data variables.product.prodname_vscode_shortname %} ou JetBrains.

Si vous utilisez un dépôt existant, vous pouvez créer un codespace à partir de n’importe quelle branche, commit ou demande de tirage (pull request) du dépôt, ou basculer vers une branche nouvelle ou existante à partir de votre codespace actif. Dans la mesure où {% data variables.product.prodname_github_codespaces %} est conçu pour être éphémère, vous pouvez l’utiliser comme un environnement isolé pour effectuer des expériences, vérifier la demande de tirage d’un collègue ou résoudre des conflits de fusion.

Si vous travaillez dans un codespace créé à partir d’un modèle, Git est installé par défaut, mais vous devez publier votre codespace dans un dépôt distant pour conserver votre travail et le partager avec d’autres personnes. Si vous commencez à partir du modèle vide de {% data variables.product.company_short %}, vous devez d’abord initialiser votre espace de travail en tant que dépôt Git (par exemple en entrant `git init`) pour commencer à utiliser le contrôle de code source dans le codespace.

Pour plus d’informations, consultez « [Utilisation d’un contrôle de code source dans votre codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) ».

{% note %}

**Remarque :** les validations de votre codespace sont attribuées au nom et à l’adresse e-mail publique configurés à l’adresse https://github.com/settings/profile. Un jeton étendu au référentiel, inclus dans l’environnement sous le nom de `GITHUB_TOKEN`, et vos informations d’identification GitHub seront utilisées pour l’authentification.

{% endnote %}

## Personnalisation de votre codespace avec des extensions ou plug-ins

Vous pouvez ajouter des plug-ins et des extensions dans un codespace pour personnaliser votre expérience dans JetBrains et {% data variables.product.prodname_vscode_shortname %} respectivement.

### Extensions {% data variables.product.prodname_vscode_shortname %}

Si vous travaillez sur vos codespaces dans l’application de bureau {% data variables.product.prodname_vscode_shortname %} ou dans le client web, vous pouvez ajouter toutes les extensions dont vous avez besoin à partir de la {% data variables.product.prodname_vscode_marketplace %}. Pour plus d’informations sur l’exécution des extensions dans {% data variables.product.prodname_github_codespaces %}, consultez [Prise en charge du développement à distance et de {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions) dans la documentation {% data variables.product.prodname_vscode_shortname %}. 

Si vous utilisez déjà {% data variables.product.prodname_vscode_shortname %}, vous pouvez utiliser la fonctionnalité [Synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync) pour synchroniser automatiquement les extensions, les paramètres, les thèmes et les raccourcis clavier entre votre instance locale et tous les codespaces que vous créez.

### Plug-ins JetBrains

Si vous travaillez sur vos codespaces dans un IDE JetBrains, vous pouvez ajouter des plug-ins à partir de la Place de marché JetBrains.

1. Cliquez sur **JetBrains Client** (Client JetBrains), puis sur **Preferences**.
1. Dans la boîte de dialogue Preferences, cliquez sur **Plugins On Host** (Plug-ins sur l’hôte) pour installer un plug-in dans l’IDE JetBrains complet qui s’exécute à distance, ou sur **Plugins** pour installer un plug-in sur le client local, par exemple pour changer le thème de l’interface utilisateur. 
1. Cliquez sur l’onglet **Marketplace** (Place de marché).

   ![Capture d’écran de l’onglet Marketplace pour « Plugins On Host »](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Cliquez sur **Install** à côté du plug-in requis.

## Pour aller plus loin

- « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) »
- « [Gestion du coût de {% data variables.product.prodname_github_codespaces %} dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization) »
- « [Ajouter une configuration de conteneur de développement à votre dépôt](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces) ».
- « [Cycle de vie des codespaces](/codespaces/getting-started/the-codespace-lifecycle) »
