---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145087214"
---
Chaque licence pour {% data variables.product.prodname_GH_advanced_security %} spécifie un nombre maximal de comptes ou de sièges, qui peuvent utiliser ces fonctionnalités. Chaque commiteur actif dans au moins un dépôt avec la fonctionnalité activée utilise un seul siège. Un commiteur est considéré comme actif si l’un de ses commits a été poussé (push) dans le dépôt au cours des 90 derniers jours, quel que soit sa date de création originale.

{% note %}

**Remarque :** Les commiteurs actifs sont calculés à l’aide des informations de l’auteur du commit et de l’horodatage de la poussée (push) du code dans {% data variables.product.product_name %}.

- Quand un utilisateur pousse (push) du code dans {% data variables.product.prodname_dotcom %}, chaque utilisateur qui a créé du code dans cette poussée (push) est comptabilisé dans les sièges {% data variables.product.prodname_GH_advanced_security %}, même si le code n’est pas nouveau sur {% data variables.product.prodname_dotcom %}.

- Les utilisateurs doivent toujours créer des branches à partir d’une base récente ou recréer une base avant toute poussée (push). Ainsi, les utilisateurs qui n’ont pas poussé de commits au cours des 90 derniers jours ne prennent pas de sièges {% data variables.product.prodname_GH_advanced_security %}.

{% endnote %}

