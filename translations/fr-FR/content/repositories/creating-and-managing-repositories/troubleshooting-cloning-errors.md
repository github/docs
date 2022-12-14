---
title: Résolution des erreurs de clonage
intro: 'Si vous rencontrez des problèmes de clonage d’un référentiel, vérifiez ces erreurs courantes.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093141'
---
## Erreurs de clonage HTTPS

Il existe quelques erreurs courantes lors de l’utilisation de HTTPS avec Git. Ces erreurs indiquent généralement que vous avez une ancienne version de Git ou que vous n’avez pas accès au dépôt.

Voici un exemple d’erreur HTTPS que vous pouvez recevoir :

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Vérifiez votre version de Git

Il n’existe aucune version minimale de Git nécessaire pour interagir avec {% data variables.product.product_name %}, mais nous avons constaté que la version 1.7.10 était une version stable et confortable disponible sur de nombreuses plateformes. Vous pouvez toujours [télécharger la dernière version sur le site web Git](https://git-scm.com/downloads).

### Vérifiez que le dépôt distant est correct

Le dépôt que vous essayez d’extraire doit exister sur {% data variables.product.product_location %}, et l’URL respecte la casse.

Vous pouvez trouver l’URL du dépôt local en ouvrant la ligne de commande et en tapant `git remote -v` :

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Vous pouvez également modifier l’URL via notre application [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Fournissez un jeton d’accès

Pour accéder à {% data variables.product.prodname_dotcom %}, vous devez vous authentifier avec un jeton d’accès personnel au lieu de votre mot de passe. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

{% data reusables.command_line.provide-an-access-token %}

### Vérifier vos autorisations

Lorsque vous êtes invité à entrer un nom d’utilisateur et un mot de passe, veillez à utiliser un compte ayant accès au dépôt.

{% tip %}

**Astuce** : Si vous ne souhaitez pas entrer vos informations d’identification chaque fois que vous interagissez avec le dépôt distant, vous pouvez activer la [mise en cache des informations d’identification](/github/getting-started-with-github/caching-your-github-credentials-in-git). Si vous utilisez déjà la mise en cache des informations d’identification, vérifiez que votre ordinateur dispose des informations d’identification correctes mises en cache. Des informations d’identification incorrectes ou obsolètes entraînent l’échec de l’authentification.

{% endtip %}

### Utilisez SSH à la place

Si vous avez déjà configuré des clés SSH, vous pouvez utiliser l’URL de clone SSH au lieu de HTTPS.  Pour plus d’informations, consultez « [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories) ».

## Erreur : Dépôt introuvable

{% ifversion fpt or ghae or ghec %}Si vous voyez cette erreur lors du clonage d’un dépôt, cela signifie que le dépôt n’existe pas ou que vous n’êtes pas autorisé à y accéder.{% else %}Si vous voyez cette erreur lors du clonage d’un dépôt, cela signifie que le dépôt n’existe pas, que vous n’êtes pas autorisé à y accéder ou que {% data variables.product.product_location %} est en mode privé.{% endif %} Il existe quelques solutions à cette erreur, en fonction de la cause.

### Vérifiez l’orthographe.

Les fautes de frappe peuvent arriver, et les noms des dépôts respectent la casse.  Si vous essayez de cloner `git@{% data variables.command_line.codeblock %}:user/repo.git`, mais que le dépôt se nomme en fait `User/Repo`, vous recevrez cette erreur.

Pour éviter cette erreur, lors du clonage, copiez et collez toujours l’URL de clone à partir de la page du dépôt. Pour plus d’informations, consultez « [Clonage d’un dépôt](/articles/cloning-a-repository) ».

Pour mettre à jour le dépôt distant sur un dépôt existant, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

### Vérification de vos autorisations

Si vous essayez de cloner un dépôt privé mais que vous n’êtes pas autorisé à afficher le dépôt, vous recevrez cette erreur.

Vérifiez que vous avez accès au dépôt en vertu des autorisations suivantes :

* Propriétaire du dépôt
* [Collaborateur](/articles/inviting-collaborators-to-a-personal-repository) sur le dépôt
* [Membre d’une équipe](/articles/adding-organization-members-to-a-team) ayant accès au dépôt (si celui-ci appartient à une organisation)

### Vérifiez votre accès SSH

Dans de rares cas, il se peut que vous n’ayez pas l’accès SSH approprié à un dépôt.

Vous devez vérifier que la clé SSH que vous utilisez est attachée à votre compte personnel sur {% data variables.product.product_name %}. Vous pouvez le vérifier en tapant ce qui suit sur la ligne de commande :

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} Si le référentiel appartient à une organisation et que vous utilisez une clé SSH générée par une application OAuth, l’accès de l’application OAuth peut avoir été limité par un propriétaire de l’organisation. Pour plus d’informations, consultez « [À propos des restrictions d’accès des applications OAuth](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions) ».
{% endif %}

Pour plus d’informations, consultez [Ajout d’une nouvelle clé SSH à votre compte GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Vérifiez si votre instance est en mode privé

Si votre administrateur de site a activé le mode privé sur votre instance de GitHub Enterprise, les clones anonymes sur `git://` seront désactivés. Si vous ne parvenez pas à cloner un dépôt, contactez votre administrateur de site.
{% endif %}

### Vérifiez que le dépôt existe vraiment

Si tout le reste échoue, vérifiez que le dépôt existe réellement sur {% data variables.product.product_location %}.
Si vous essayez de pousser vers un dépôt qui n’existe pas, vous recevrez cette erreur.

## Erreur : Le dépôt distant principal fait référence à une référence inexistante. Impossible d’effectuer l’extraction

Cette erreur se produit si la branche par défaut d’un dépôt a été supprimée sur {% data variables.product.product_location %}.

La détection de cette erreur est simple ; Git vous avertit lorsque vous essayez de cloner le dépôt :

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

Pour corriger l’erreur, vous devez être administrateur du dépôt sur {% data variables.product.product_location %}.
Vous devrez [changer la branche par défaut](/github/administering-a-repository/changing-the-default-branch) du dépôt.

Après cela, vous pourrez obtenir la liste de toutes les branches disponibles à partir de la ligne de commande :

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Ensuite, il vous suffira de basculer vers votre nouvelle branche :

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
