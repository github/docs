---
title: Utilisation de crochets de pré-réception
intro: Les *crochets de pré-réception* appliquent des règles pour les contributions avant que les commits puissent être poussés (push) vers un dépôt.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: Pre-receive hooks
ms.openlocfilehash: 6ca26aed9e9d92abfb6d742f7f4ca968c442b447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332591'
---
Des crochets de pré-réception exécutent des tests sur du code envoyé (push) à un dépôt pour s’assurer que les contributions sont conformes à la stratégie du dépôt ou de l’organisation. Si le contenu à valider réussit les tests, l’envoi (push) est accepté dans le dépôt. Si le contenu à valider échoue aux tests, l’envoi (push) n’est accepté.

Si votre envoi (push) n’est pas accepté, vous voyez s’afficher un message d’erreur correspondant au crochet de pré-réception qui a échoué.

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![Message d’erreur pour un crochet de pré-réception qui a échoué](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

L’administrateur de votre site {% data variables.product.product_name %} peut créer et supprimer des crochets de pré-réception pour votre organisation ou dépôt, ainsi qu’autoriser les administrateurs de l’organisation ou du dépôt à activer ou désactiver des crochets de pré-réception. Pour plus d’informations, consultez « [Utilisation de crochets de pré-réception pour appliquer une stratégie](/enterprise/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy) ».
