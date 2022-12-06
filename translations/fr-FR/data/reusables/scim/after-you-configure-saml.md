---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128339"
---
Par défaut, votre fournisseur d’identité ne communique pas avec {% data variables.product.product_name %} automatiquement lorsque vous attribuez ou désattribuez l’application. {% data variables.product.product_name %} {% ifversion fpt or ghec %}provisionne l’accès à vos ressources sur {% else %}crée un compte d’utilisateur {% endif %}en utilisant le provisionnement juste-à-temps (JIT) SAML la première fois qu’une personne accède à {% ifversion fpt or ghec %}vos ressources sur {% endif %} {% data variables.product.product_name %} et se connecte en s’authentifiant via votre fournisseur d’identité. Vous devrez peut-être notifier manuellement les utilisateurs lorsque vous accordez l’accès à {% data variables.product.product_name %}, et vous devez manuellement {% ifversion fpt or ghec %}déprovisionner l’accès {% else %}désactiver le compte d’utilisateur sur {% endif %}{% data variables.product.product_name %} lors de la désintégration. Vous pouvez utiliser SCIM pour {% ifversion ghec %}provisionner ou déprovisionner{% elsif ghae %}créer ou suspendre{% endif %} {% ifversion fpt or ghec %}accéder aux organisations appartenant à votre entreprise sur {% data variables.product.prodname_dotcom_the_website %} {% else %}les comptes d’utilisateur et l’accès pour {% data variables.product.product_name %} {% endif %}automatiquement lorsque vous attribuez ou désattribuez l’application sur votre IDP.
