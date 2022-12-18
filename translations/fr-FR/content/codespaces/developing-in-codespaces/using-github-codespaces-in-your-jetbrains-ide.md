---
title: Utilisation de GitHub Codespaces dans votre IDE JetBrains
shortTitle: JetBrains IDEs
intro: Vous pouvez utiliser JetBrains Gateway pour vous connecter à votre codespace et travailler dans votre IDE JetBrains favori.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159728'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## À propos de {% data variables.product.prodname_codespaces %} dans les IDE JetBrains

Si vous utilisez un IDE JetBrains pour travailler sur votre code, vous pouvez tirer parti de l’utilisation d’un codespace. Pour ce faire, utilisez l’application JetBrains Gateway.

Après avoir installé JetBrains Gateway, vous pouvez définir JetBrains comme éditeur par défaut, puis chaque fois que vous ouvrez un codespace à partir de {% data variables.product.prodname_dotcom_the_website %}, la passerelle JetBrains se lance pour vous permettre de choisir votre IDE JetBrains et de vous connecter au codespace.

{% note %}

**Remarque** : Seuls les codespaces existants sont disponibles dans JetBrains Gateway. Vous pouvez créer des codespaces dans {% data variables.product.prodname_dotcom_the_website %} ou à l’aide de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».

{% endnote %}

### Processus de connexion de développement à distance JetBrains

Le processus de base qui sous-tend l’utilisation d’un codespace dans votre IDE JetBrains est le suivant.

* Dans l’application JetBrains Gateway, vous sélectionnez l’un de vos codespaces actifs ou arrêtés. 
* Vous choisissez ensuite l’IDE JetBrains que vous souhaitez utiliser. 
* L’IDE JetBrains sélectionné est ensuite téléchargé sur la machine virtuelle distante qui héberge votre codespace et votre code source.
* L’application cliente légère JetBrains est ensuite téléchargée sur votre ordinateur local et démarrée.
* L’application cliente se connecte à l’IDE back-end complet.
* Vous pouvez travailler sur votre code dans l’application cliente de la même façon que dans un environnement local.

## Prérequis

Pour travailler dans un codespace dans un IDE JetBrains, vous avez besoin des éléments suivants :

* Une licence JetBrains valide
* L’application JetBrains Gateway
* {% data variables.product.prodname_cli %} version 2.18.0 ou ultérieure 
* Codespace existant qui exécute un serveur SSH

### Licence JetBrains

Vous devez disposer d’une licence pour au moins l’un des IDE JetBrains pris en charge pour vous connecter à un codespace à partir de JetBrains Gateway.

### JetBrains Gateway

Vous pouvez installer et mettre à jour JetBrains Gateway à partir de l’application JetBrains Toolbox.

1. Téléchargez et installez [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app).
1. Ouvrez JetBrains Toolbox.
1. Recherchez **Gateway** (Passerelle) dans la liste des outils disponibles, puis cliquez sur **Install**.

   ![Capture d’écran de JetBrains Toolbox](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

Le plug-in {% data variables.product.prodname_github_codespaces %} pour JetBrains Gateway nécessite que vous ayez installé et configuré {% data variables.product.prodname_cli %} version 2.18.0 ou ultérieure avant d’ouvrir un codespace à partir de JetBrains Gateway.

Utilisez cette commande pour vérifier votre version de {% data variables.product.prodname_cli %} :

```shell{:copy}
gh --version
```

Pour plus d’informations, consultez « [À propos de GitHub CLI](/github-cli/github-cli/about-github-cli) ».

### Codespace exécutant un serveur SSH

Vous devez disposer d’un codespace existant auquel vous connecter. {% data reusables.codespaces.ways-to-create-a-codespace %} Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».

{% data reusables.codespaces.ssh-server-installed %}

Pour plus d’informations sur le fichier `devcontainer.json` et l’image conteneur par défaut, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

{% note %}

**Remarque** : Pour obtenir de l’aide sur la connexion à votre codespace via SSH, consultez « [Résolution des problèmes liés aux clients {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues) ».

{% endnote %}

## Configuration de JetBrains Gateway

La première fois que vous utilisez JetBrains Gateway pour {% data variables.product.prodname_github_codespaces %}, vous devez installer le plug-in {% data variables.product.prodname_codespaces %}. Vous devez également autoriser JetBrains Gateway à accéder à {% data variables.product.prodname_dotcom_the_website %} avec votre compte {% data variables.product.prodname_dotcom %}. 

1. Ouvrez l’application JetBrains Gateway.
1. Sous **Install More Providers** (Installer plus de fournisseurs), cliquez sur le lien **Install** pour {% data variables.product.prodname_github_codespaces %}.

   ![Capture d’écran de la vue initiale de JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Cliquez sur **Connect to Codespace** (Se connecter à Codespace).

   ![Capture d’écran de la passerelle avec le bouton « Se connecter à Codespace »](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. Dans la boîte de dialogue «Welcome to JetBrains Gateway » (Bienvenue dans JetBrains Gateway), cliquez sur **Sign In with {% data variables.product.prodname_dotcom %}** (Se connecter avec GitHub).

   ![Capture d’écran du bouton de connexion](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. Cliquez sur l’icône en regard du code à usage unique pour le copier, puis cliquez sur le lien de connexion.

   ![Capture d’écran du code de connexion à usage unique](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Si vous n’êtes pas connecté à {% data variables.product.prodname_dotcom %}, la page de connexion s’affiche. 
   * Entrez vos informations, puis cliquez sur **Sign in** (Se connecter).
   * Vérifiez votre authentification, par exemple en entrant un code d’authentification à deux facteurs.
1. Dans la page « Device activation » (Activation de l’appareil), collez le code copié, puis cliquez sur **Continue**.
1. Si vous appartenez à des organisations, la page « Single sign-on to your organizations » (Authentification unique auprès de vos organisations) s’affiche. Cliquez sur **Authorize** (Autoriser) en regard des organisations que vous souhaitez rendre accessibles à JetBrains Gateway, puis cliquez sur **Continue**.
1. Dans la page « Authorize {% data variables.product.prodname_github_codespaces %} for JetBrains » (Autoriser GitHub Codespaces pour JetBrains), cliquez sur **Authorize {% data variables.product.prodname_dotcom %}** (Autoriser GitHub).
1. Revenez à l’application JetBrains Gateway et ouvrez un codespace à partir de la liste de vos codespaces actifs ou arrêtés. Consultez l’étape 3 de la procédure suivante.

## Ouverture d’un codespace dans votre IDE JetBrains

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   La première fois que vous vous connectez à un codespace, l’IDE back-end est téléchargé sur l’ordinateur distant. Cela peut prendre quelques minutes. La prochaine fois que vous vous connecterez au même codespace, cette étape ne sera pas nécessaire, ce qui accélérera le processus de connexion. 

   L’IDE back-end est ensuite démarré. Là encore, cette étape ne sera pas nécessaire à l’avenir si vous vous reconnectez à un IDE back-end que vous avez laissé s’exécuter. 
   
   L’application cliente est ensuite lancée.

## Pour aller plus loin

- « [Développement dans un codespace](/codespaces/developing-in-codespaces/developing-in-a-codespace) »
- « [Utilisation du plug-in {% data variables.product.prodname_github_codespaces %} pour JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains) »
- « [Utilisation de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces) »
- « [Résolution des problèmes liés aux clients {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains) »
