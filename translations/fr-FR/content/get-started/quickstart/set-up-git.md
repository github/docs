---
title: Configurer Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'Au cœur de {% data variables.product.prodname_dotcom %}, se trouve un système de gestion de versions open source appelé Git. Git est responsable de tout ce qui est lié à {% data variables.product.prodname_dotcom %} qui se produit localement sur votre ordinateur.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643956'
---
## Utilisation de Git

Pour utiliser Git sur la ligne de commande, vous devez télécharger, d’installer et configurer Git sur votre ordinateur. Vous pouvez aussi installer {% data variables.product.prodname_cli %} pour utiliser {% data variables.product.prodname_dotcom %} à partir de la ligne de commande. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) ».

Si vous voulez utiliser Git localement, sans utiliser la ligne de commande, vous pouvez télécharger et installer le client [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Pour plus d’informations, consultez « [Installation et configuration de {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/) ».

Si vous n’avez pas besoin d’utiliser des fichiers localement, {% data variables.product.product_name %} vous permet d’effectuer de nombreuses actions Git directement dans le navigateur, notamment les suivantes :

- [Création d’un dépôt](/articles/create-a-repo)
- [Duplication (fork) d’un dépôt](/articles/fork-a-repo)
- [Gestion des fichiers](/repositories/working-with-files/managing-files)
- [Prendre part au réseau social](/articles/be-social)

## Configuration de Git

1. [Téléchargez et installez la dernière version de Git](https://git-scm.com/downloads).

   {% note %}
   
   **Remarque** : Si vous utilisez un appareil Chrome OS, une configuration supplémentaire est nécessaire :
   
   1. Installez un émulateur de terminal comme Termux à partir du Google Play Store sur votre appareil Chrome OS.
   1. À partir de l’émulateur de terminal que vous avez installé, installez Git. Par exemple, dans Termux, entrez `apt install git`, puis tapez `y` à l’invite. 
   
   {% endnote %}

1. [Définissez votre nom d’utilisateur dans Git](/github/getting-started-with-github/setting-your-username-in-git).
1. [Définissez votre adresse e-mail de commit dans Git](/articles/setting-your-commit-email-address).

## Authentification auprès de {% data variables.product.prodname_dotcom %} à partir de Git

Quand vous vous connectez à un dépôt {% data variables.product.prodname_dotcom %} à partir de Git, vous avez besoin de vous authentifier auprès de {% data variables.product.product_name %} en utilisant le protocole HTTPS ou SSH.

{% note %}

**Remarque :** Vous pouvez vous authentifier auprès de {% data variables.product.product_name %} à l’aide de {% data variables.product.prodname_cli %}, pour HTTP ou SSH. Pour plus d’informations, consultez [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Connexion par le biais du protocole HTTPS (recommandé)

Si vous clonez avec le protocole HTTPS, vous pouvez mettre en cache vos informations d’identification {% data variables.product.prodname_dotcom %} dans Git à l’aide d’une assistance des informations d’identification. Pour plus d’informations, consultez « [Clonage avec des URL HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) » et « [Mise en cache de vos informations d’identification {% data variables.product.prodname_dotcom %} dans Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) ».

### Connexion par le biais du protocole SSH

Si vous clonez avec le protocole SSH, vous devez générer des clés SSH sur chaque ordinateur que vous utilisez pour pousser (push) ou tirer (pull) à partir de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Clonage avec des URL SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls) » et « [Génération d’une nouvelle clé SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

## Étapes suivantes

Vous avez terminé de configurer Git et {% data variables.product.prodname_dotcom %}. Vous pouvez à présent choisir de créer un dépôt dans lequel vous allez placer vos projets. L’enregistrement de votre code dans un dépôt vous permet de sauvegarder votre code et de le partager dans le monde entier. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
