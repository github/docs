---
title: Contrôle de l’état de la vérification de la signature du commit et de l’étiquette
intro: 'Vous pouvez vérifier l’état de vérification de vos signatures de commit et d’étiquette sur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: c43072b238d6064b8d6a8cc27bb1994f4806875f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653313'
---
## Contrôle de l’état de la vérification de la signature du commit

1. Sur {% data variables.product.product_name %}, accédez à votre demande de tirage (pull request).
{% data reusables.repositories.review-pr-commits %}
3. En regard du hachage abrégé de votre commit, une zone indique si la signature de votre commit est vérifiée{% ifversion fpt or ghec %}, partiellement vérifiée{% endif %} ou non vérifiée.
![Commit signé](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Pour afficher des informations plus détaillées sur la signature du commit, cliquez sur **Vérifié**{% ifversion fpt or ghec %}, **Partiellement vérifié**{% endif %} ou **Non vérifié**.
  Les commits signés GPG affichent l’ID de la clé qui a été utilisée.
  ![Commits signés GPG vérifiés](/assets/images/help/commits/gpg-signed-commit_verified_details.png) {% ifversion ssh-commit-verification %} Les commits signés SSH affichent la signature de la clé publique qui a été utilisée.
![Commit signé SSH vérifié](/assets/images/help/commits/ssh-signed-commit-verified-details.png) {% endif %}

## Contrôle de l’état de la vérification de la signature de l’étiquette

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. En haut de la page Mises en production, cliquez sur **Étiquettes**.
![Page Étiquettes](/assets/images/help/releases/tags-list.png)
3. En regard de la description de votre étiquette, une zone indique si la signature de votre étiquette est vérifiée{% ifversion fpt or ghec %}, partiellement vérifiée{% endif %} ou non vérifiée.
![Signature d’étiquette vérifiée](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Pour afficher des informations plus détaillées sur la signature de l’étiquette, cliquez sur **Vérifié**{% ifversion fpt or ghec %}, **Partiellement vérifié**{% endif %} ou **Non vérifié**. 
![Étiquette signée vérifiée](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## Pour aller plus loin

- « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) »
- « [Signature des commits](/articles/signing-commits) »
- « [Signature d’étiquettes](/articles/signing-tags) »
