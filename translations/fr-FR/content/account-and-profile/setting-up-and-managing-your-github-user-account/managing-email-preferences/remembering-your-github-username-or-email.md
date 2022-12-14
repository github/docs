---
title: Mémoriser votre nom d’utilisateur ou votre e-mail GitHub
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086470"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Utilisateurs {% data variables.product.prodname_desktop %}

1. Dans le menu **Bureau GitHub**, cliquez sur **Préférences**.
2. Dans la fenêtre Préférences, vérifiez ce qui suit :
    - Pour afficher votre nom d’utilisateur {% data variables.product.product_name %}, cliquez sur **Comptes**.
    - Pour afficher votre e-mail Git, cliquez sur **Git**. Notez qu’il n’est pas garanti que cet e-mail soit [votre e-mail {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Utilisateurs {% data variables.product.prodname_desktop %}

1. Dans le menu **Fichier**, cliquez sur **Options**.
2. Dans la fenêtre Options, vérifiez ce qui suit :
    - Pour afficher votre nom d’utilisateur {% data variables.product.product_name %}, cliquez sur **Comptes**.
    - Pour afficher votre e-mail Git, cliquez sur **Git**. Notez qu’il n’est pas garanti que cet e-mail soit [votre e-mail {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>Recherche de votre nom d’utilisateur dans votre configuration `user.name`

Pendant la configuration, vous avez peut-être [configuré votre nom d’utilisateur dans Git](/github/getting-started-with-github/setting-your-username-in-git). Si tel est le cas, vous pouvez consulter la valeur de ce paramètre de configuration :

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>Recherche de votre nom d’utilisateur dans l’URL de dépôts distants

Si vous avez des copies locales de dépôts personnels que vous avez créés ou dupliqués, vous pouvez vérifier l’URL du dépôt distant.

{% tip %}

**Astuce** : Cette méthode fonctionne uniquement si vous disposez d’un dépôt d’origine ou de votre propre duplication (fork) du dépôt d’une autre personne. Si vous clonez le dépôt d’une autre personne, son nom d’utilisateur s’affiche à la place du vôtre. De même, les dépôts d’organisation affichent le nom de l’organisation plutôt que celui d’un utilisateur particulier dans l’URL distante.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Votre nom d’utilisateur est ce qui suit immédiatement le `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>Pour aller plus loin

- « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) » {% endif %}
