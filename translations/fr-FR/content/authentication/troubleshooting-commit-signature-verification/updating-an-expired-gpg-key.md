---
title: Mise à jour d’une clé GPG expirée
intro: Lors de la vérification d’une signature, {% data variables.product.product_name %} vérifie que la clé n’est pas révoquée ou qu’elle n’a pas expiré. Si votre clé de signature est révoquée ou qu’elle a expiré, {% data variables.product.product_name %} ne peut pas vérifier vos signatures. Si votre clé est révoquée, utilisez la clé primaire ou une autre clé qui n’est pas révoquée pour signer vos commits.
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085913"
---
Si votre clé a expiré, vous devez [mettre à jour l’expiration](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), exporter la nouvelle clé, supprimer la clé expirée dans votre compte GitHub et [charger la nouvelle clé sur GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/). Vos commits et étiquettes précédentes s’affichent comme étant vérifiés, tant que la clé répond à toutes les autres exigences de vérification.

Si votre clé n’est pas valide et que vous n’utilisez pas une autre clé valide dans votre jeu de clés, mais que vous générez une nouvelle clé GPG avec un nouveau jeu d’informations d’identification, vos commits effectués avec la clé révoquée ou expirée continuent de s’afficher comme étant non vérifiés. En outre, vos nouvelles informations d’identification ne peuvent pas abandonner ou vérifier vos anciens commits et étiquettes.

## <a name="further-reading"></a>Pour aller plus loin

- « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) »
