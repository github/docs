---
title: "Erreur\_: Nous effectuons un audit de clé SSH"
intro: Cette erreur signifie que la clé SSH que vous utilisez pour effectuer une opération Git n’est pas vérifiée.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key audit
ms.openlocfilehash: 8683f5506fc2a026c11f22f2086de2308d096906
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085853'
---
Lorsque vous utilisez une clé non vérifiée pour effectuer des opérations Git, vous êtes invité à effectuer un audit de vos clés SSH.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## Résolution du problème

Pour résoudre ce problème, vous devez [passer en revue vos clés SSH](/articles/reviewing-your-ssh-keys) et rejeter ou approuver la clé non vérifiée. Si vous cliquez sur le lien URL dans le message d’erreur, vous accédez à la page Paramètres SSH, où la clé SSH non vérifiée est mise en surbrillance dans la liste des clés SSH.
