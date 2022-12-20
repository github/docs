---
title: Mise en cache de vos informations d’identification GitHub dans Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Si vous [clonez des dépôts {% data variables.product.product_name %} avec HTTPS](/github/getting-started-with-github/about-remote-repositories), nous vous recommandons d’utiliser {% data variables.product.prodname_cli %} ou Git Credential Manager (GCM) pour mémoriser vos informations d’identification.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102629'
---
{% tip %}

**Astuce :** Si vous clonez des dépôts {% data variables.product.product_name %} en utilisant SSH, vous pouvez vous authentifier avec une clé SSH au lieu d’utiliser d’autres informations d’identification. Pour plus d’informations sur la configuration d’une connexion SSH, consultez « [Génération d’une clé SSH](/articles/generating-an-ssh-key) ».

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} stocke automatiquement vos informations d’identification Git quand vous choisissez `HTTPS` comme protocole par défaut pour les opérations Git et répondez « oui » à l’invite demandant si vous voulez vous authentifier sur Git avec vos informations d’identification {% data variables.product.product_name %}.

1. [Installez](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} sur macOS, Windows ou Linux.
2. Dans la ligne de commande, entrez `gh auth login`, puis suivez les invites.
   - Quand vous êtes invité à entrer votre protocole par défaut pour les opérations Git, sélectionnez `HTTPS`.
   - Quand vous êtes invité à vous authentifier sur Git avec vos informations d’identification {% data variables.product.product_name %}, entrez `Y`.

Pour plus d’informations sur l’authentification avec {% data variables.product.prodname_cli %}, consultez [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Gestionnaire d’informations d’identification Git

Le [Gestionnaire d’informations d’identification Git](https://github.com/GitCredentialManager/git-credential-manager) (GCM) est un autre moyen de stocker vos informations d’identification de manière sécurisée et de vous connecter à GitHub sur HTTPS. Avec GCM, vous n’avez pas besoin de manuellement [créer et stocker un jeton PAT](/github/authenticating-to-github/creating-a-personal-access-token), car GCM gère l’authentification pour vous, y compris 2FA (authentification à deux facteurs).

{% mac %}

1. Installer Git en utilisant [Homebrew](https://brew.sh/) :
  ```shell
  $ brew install git
  ```

2. Installer GCM en utilisant Homebrew :
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Pour MacOS, vous n’avez pas besoin d’exécuter `git config`, car GCM configure automatiquement Git pour vous.

{% data reusables.gcm-core.next-time-you-clone %}

Une fois que vous êtes authentifié, vos informations d’identification sont stockées dans le trousseau macOS et utilisées chaque fois que vous clonez une URL HTTPS. Git ne vous redemande pas de taper vos informations d’identification dans la ligne de commande, sauf si vous changez vos informations d’identification.

{% endmac %}

{% windows %}

1. Installez Git pour Windows, qui comprend GCM. Pour plus d’informations, consultez « [Git pour les versions Windows](https://github.com/git-for-windows/git/releases/latest) » dans sa [page de versions](https://github.com/git-for-windows/git/releases/latest).

Nous vous recommandons d’installer toujours la dernière version. Au minimum, installez la version 2.29 ou ultérieure, qui est la première version offrant la prise en charge d’OAuth pour GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Une fois que vous êtes authentifié, vos informations d’identification sont stockées dans le gestionnaire d’informations d’identification Windows et utilisées chaque fois que vous clonez une URL HTTPS. Git ne vous redemande pas de taper vos informations d’identification dans la ligne de commande, sauf si vous changez vos informations d’identification.

<br>

{% warning %}

**Avertissement :** Les versions antérieures de Git pour Windows comprenaient le Gestionnaire d’informations d’identification Git pour Windows. Ce produit plus ancien n’est plus pris en charge et ne peut plus se connecter à GitHub via OAuth. Nous vous recommandons de passer à la [dernière version de Git pour Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Avertissement :** Si vous avez mis en cache des informations d’identification incorrectes ou obsolètes dans le Gestionnaire d’informations d’identification pour Windows, Git ne peut pas accéder à {% data variables.product.product_name %}. Pour réinitialiser vos informations d’identification en cache afin que Git vous invite à entrer vos informations d’identification, accédez au Gestionnaire d’informations d’identification dans le Panneau de configuration Windows sous Comptes d’utilisateur > Gestionnaire d’informations d’identification. Recherchez l’entrée {% data variables.product.product_name %} et supprimez-la. 

{% endwarning %}

{% endwindows %}

{% linux %}

Pour Linux, installez Git et GCM, puis configurez Git pour utiliser GCM.

1. Installez Git à partir du système de packaging de votre distribution. Les instructions varient en fonction de la version de Linux que vous exécutez.

2. Installez GCM. Consultez les [instructions du dépôt GCM](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions), car elles varient en fonction de la version de Linux que vous exécutez.

3. Configurez Git pour utiliser GCM. Il existe plusieurs magasins de stockage que vous pouvez choisir. Consultez la documentation GCM pour la configuration. Pour plus d’informations, consultez « [GCM Linux](https://aka.ms/gcmcore-linuxcredstores) ».

{% data reusables.gcm-core.next-time-you-clone %}

Une fois que vous êtes authentifié, vos informations d’identification sont stockées dans votre système et utilisées chaque fois que vous clonez une URL HTTPS. Git ne vous redemande pas de taper vos informations d’identification dans la ligne de commande, sauf si vous changez vos informations d’identification.

Pour plus d’options de stockage de vos informations d’identification sur Linux, consultez [Stockage des informations d’identification](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) dans Pro Git.

{% endlinux %}

<br>

Pour plus d’informations ou pour signaler des problèmes avec GCM, consultez la documentation GCM officielle sur « [Gestionnaire d’informations d’identification Git](https://github.com/GitCredentialManager/git-credential-manager) ».
