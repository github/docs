---
title: Audit de clés SSH
intro: Les administrateurs de site peuvent lancer un audit des clés SSH à l’échelle de l’instance.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 6ffcbdc698b6eb3a4736fdb2b4713e2871dcaac2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147508431'
---
Une fois lancé, l’audit désactive toutes les clés SSH existantes et force les utilisateurs à les approuver ou les rejeter pour pouvoir cloner un dépôt, tirer (pull) à partir d’un dépôt ou pousser (push) sur un dépôt. Un audit est utile dans les situations où un employé ou un prestataire quitte l’entreprise et où vous devez vous assurer que toutes les clés sont vérifiées.

## Lancement d’un audit

Vous pouvez lancer un audit de clés SSH à partir de l’onglet « Tous les utilisateurs » du tableau de bord d’administrateur de site :

![Démarrage d’un audit de clé publique](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Après avoir cliqué sur le bouton « Démarrer un audit de clé publique », vous accédez à un écran de confirmation expliquant les étapes suivantes :

![Confirmation de l’audit](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Une fois que vous avez cliqué sur le bouton « Commencer l’audit », toutes les clés SSH sont invalidées et nécessitent une approbation. Vous voyez une notification indiquant que l’audit a commencé.

## Ce que voient les utilisateurs

Si des utilisateurs tentent d’effectuer une opération Git sur SSH, l’opération échoue et ils voient le message suivant :

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

S’ils suivent le lien, ils sont invités à approuver les clés sur leur compte :

![Audit de clés](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Après avoir approuvé ou rejeté leurs clés, ils pourront interagir avec les dépôts comme d’habitude.

## Ajout d’une clé SSH

{% ifversion ghes %}

Lorsqu’un nouvel utilisateur ajoute une clé SSH à un compte, pour confirmer l’accès de l’utilisateur, {% data variables.product.product_name %} l’invite à s’authentifier. Pour plus d’informations, consultez « [Mode sudo](/authentication/keeping-your-account-and-data-secure/sudo-mode) ».

{% endif %}

Quand un utilisateur ajoute une clé, il reçoit un e-mail de notification qui ressemble à ceci :

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
