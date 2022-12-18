---
title: Mémoriser votre nom d’utilisateur ou votre e-mail GitHub
intro: "Est-ce que cela fait longtemps que vous ne vous êtes pas connecté à {% data variables.product.product_location %}\_? Si c’est le cas, bon retour parmi nous\_! Si vous avez oublié le nom d’utilisateur de votre compte personnel sur {% data variables.product.product_name %}, vous pouvez essayer ces méthodes pour vous en souvenir."
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
ms.openlocfilehash: e65ba973a5ca7865aa642ce5d64f8efa0a996742
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164990'
---
{% mac %}

## Utilisateurs {% data variables.product.prodname_desktop %}

1. Dans le menu **Bureau GitHub**, cliquez sur **Préférences**.
2. Dans la fenêtre Préférences, vérifiez ce qui suit :
    - Pour afficher votre nom d’utilisateur {% data variables.product.product_name %}, cliquez sur **Comptes**.
    - Pour afficher votre e-mail Git, cliquez sur **Git**. Notez qu’il n’est pas garanti que cet e-mail soit [votre e-mail {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## Utilisateurs {% data variables.product.prodname_desktop %}

1. Dans le menu **Fichier**, cliquez sur **Options**.
2. Dans la fenêtre Options, vérifiez ce qui suit :
    - Pour afficher votre nom d’utilisateur {% data variables.product.product_name %}, cliquez sur **Comptes**.
    - Pour afficher votre e-mail Git, cliquez sur **Git**. Notez qu’il n’est pas garanti que cet e-mail soit [votre e-mail {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Recherche de votre nom d’utilisateur dans votre configuration `user.name`

Pendant la configuration, vous avez peut-être [configuré votre nom d’utilisateur dans Git](/github/getting-started-with-github/setting-your-username-in-git). Si tel est le cas, vous pouvez consulter la valeur de ce paramètre de configuration :

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## Recherche de votre nom d’utilisateur dans l’URL de dépôts distants

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
## Pour aller plus loin

- « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) » {% endif %}
