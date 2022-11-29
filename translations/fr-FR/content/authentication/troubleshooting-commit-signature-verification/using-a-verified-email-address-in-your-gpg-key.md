---
title: Utilisation d’une adresse e-mail vérifiée dans votre clé GPG
intro: 'Pendant la vérification d’une signature, {% data variables.product.product_name %} contrôle que l’adresse e-mail du commiteur ou de l’étiqueteur correspond à une adresse e-mail dans les identités de la clé GPG et qu’il s’agit d’une adresse e-mail vérifiée sur le compte de l’utilisateur. Cela garantit que la clé vous appartient et que vous avez créé le commit ou l’étiquette.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085906'
---
{% ifversion fpt or ghec %} Si vous devez vérifier votre adresse e-mail GitHub, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address/) ». {% endif %}Si vous devez mettre à jour ou ajouter une adresse e-mail à votre clé GPG, consultez « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) ».

Les commits et les étiquettes peuvent contenir plusieurs adresses e-mail. Pour les commits, il y a l’auteur (personne qui a écrit le code) et le commiteur (personne qui a ajouté le commit à l’arborescence). Lors de la signature d’un commit avec Git, que ce soit à l’occasion d’une fusion, d’un cherry-picking ou d’un `git commit` normal, l’adresse e-mail du commiteur est la vôtre, même si l’adresse e-mail de l’auteur ne l’est pas. Les étiquettes sont plus simples : l’adresse e-mail de l’étiqueteur est toujours celle de l’utilisateur qui a créé l’étiquette.

Si vous devez changer votre adresse e-mail de commiteur ou d’étiqueteur, consultez « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address/) ».

## Pour aller plus loin

- « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) »
