---
title: "Erreur\_: Problème de certificat SSL, vérifiez que le certificat d’autorité de certification est valide"
intro: 'Cette erreur signifie que votre certificat racine d’autorité de certification est obsolète. Si votre certificat racine d’autorité de certification a besoin d’être mis à jour, vous ne pouvez ni pousser (push) ni tirer (pull) sur des dépôts {% data variables.product.product_name %}.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSL certificate problem
ms.openlocfilehash: 26777edf5b312c8f45c5b1fb211b87648778cf13
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085869'
---
L’erreur que vous recevez peut se présenter comme suit :

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

« CA » est la forme abrégée de « autorité de certification », groupe tiers responsable de la gestion des connexions sécurisées sur le web. Une autorité de certification établit des « certificats » numériques, qui permettent de s’assurer que les connexions entre deux machines, telles que votre ordinateur et GitHub.com, sont valides. Sans certificat, le risque de sécurité entre deux machines est plus élevé.

Quand vous recevez cette erreur, cela signifie probablement que votre autorité de certification est obsolète et doit être mise à jour. En règle générale, la mise à jour de votre système d’exploitation met également à jour votre autorité de certification et résout le problème.
