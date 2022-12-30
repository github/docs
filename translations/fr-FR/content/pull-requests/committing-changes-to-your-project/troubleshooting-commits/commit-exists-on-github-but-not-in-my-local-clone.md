---
title: La validation existe sur GitHub mais pas dans mon clone local
intro: 'Parfois, un commit est visible sur {% data variables.product.product_name %}, mais n’existe pas dans votre clone local du dépôt.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132530'
---
Lorsque vous utilisez `git show` pour afficher une validation spécifique sur la ligne de commande, il se peut que vous obteniez une erreur irrécupérable.

Par exemple, vous pouvez recevoir une erreur `bad object` localement :

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

En revanche, lorsque vous affichez la validation sur {% data variables.product.product_location %}, vous pouvez la voir sans aucun problème :

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Il existe plusieurs explications possibles :

* Le dépôt local est obsolète.
* La branche contenant la validation a été supprimée, de sorte que la validation n’est plus référencée.
* Quelqu’un a effectué un envoi (push) forcé sur la validation.

## Le dépôt local est obsolète.

Il se peut que votre dépôt local n’ait pas encore la validation. Pour obtenir des informations de votre dépôt distant dans votre clone local, utilisez `git fetch` :

```shell
$ git fetch <em>remote</em>
```

Cela a pour effet de copier en toute sécurité les informations du dépôt distant vers votre clone local sans apporter de modifications aux fichiers que vous avez extraits. Vous pouvez utiliser `git fetch upstream` pour obtenir des informations d’un dépôt que vous avez dupliqué, ou `git fetch origin` pour obtenir des informations d’un dépôt que vous avez seulement cloné.

{% tip %}

**Astuce** : pour plus d’informations, lisez la documentation sur [la gestion des dépôts distants et l’extraction de données](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) dans le livre [Pro Git](https://git-scm.com/book).

{% endtip %}

## La branche qui contenait la validation a été supprimée

Si un collaborateur du dépôt a supprimé la branche contenant la validation ou a effectué un envoi (push) forcé sur la branche, la validation manquante est peut-être devenue orpheline (de sorte qu’elle est inaccessible à partir d’une référence) et ne sera donc pas extraite dans votre clone local.

Heureusement, si un collaborateur a un clone local du dépôt avec la validation manquante, il peut le renvoyer (push) à {% data variables.product.product_name %}.  Il doit s’assurer que la validation est référencée par une branche locale, puis l’envoyer (push) en tant que nouvelle branche à {% data variables.product.product_name %}.

Supposons que la personne a toujours une branche locale (appelons-la `B`) contenant la validation.  Il pourrait s’agir du suivi de la branche sur laquelle a été effectué un envoi (push) forcé ou qui a été supprimée, et qui n’a tout simplement pas encore été mise à jour.  Pour conserver la validation, il peut envoyer (push) cette branche locale à une nouvelle branche (appelons-la `recover-B`) sur {% data variables.product.product_name %}.  Pour cet exemple, supposons qu’il dispose d’un dépôt distant nommé `upstream` via lequel il a accès en envoi (push) à `github.com/$account/$repository`.

L’autre personne exécute :

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Maintenant, *vous* pouvez exécuter :

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## Éviter les envois (push) forcés

Éviter l’envoi (push) forcé à un dépôt, sauf absolue nécessité. C’est particulièrement vrai si plusieurs personnes peuvent effectuer un envoi (push) au dépôt. Si quelqu’un effectue un envoi (push) forcé à un dépôt, cet envoi peut remplacer des validations sur lesquelles d’autres personnes ont basé leur travail. Un envoi (push) forcé modifie l’historique du dépôt et peut endommager votre demande de tirage.

## Pour aller plus loin

- « [Utilisation de dépôts distants](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) » dans le livre _Pro Git_
- « [Récupération de données](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery) » dans le livre _Git Pro_
