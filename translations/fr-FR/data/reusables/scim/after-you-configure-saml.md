---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193205"
---
Par défaut, votre fournisseur d’identité ne communique pas avec {% data variables.product.product_name %} automatiquement lorsque vous attribuez ou désattribuez l’application. {% data variables.product.product_name %} {% ifversion fpt or ghec %}provisionne l’accès à vos ressources sur {% else %}crée un compte d’utilisateur {% endif %}en utilisant le provisionnement juste-à-temps (JIT) SAML la première fois qu’une personne accède à {% ifversion fpt or ghec %}vos ressources sur {% endif %} {% data variables.product.product_name %} et se connecte en s’authentifiant via votre fournisseur d’identité. Vous devrez peut-être notifier manuellement les utilisateurs lorsque vous accordez l’accès à {% data variables.product.product_name %}, et vous devez manuellement {% ifversion fpt or ghec %}déprovisionner l’accès {% else %}désactiver le compte d’utilisateur sur {% endif %}{% data variables.product.product_name %} lors de la désintégration.

Sinon, au lieu du provisionnement JIT SAML, vous pouvez utiliser SCIM pour {% ifversion ghec %}provisionner ou déprovisionner{% elsif ghae or scim-for-ghes %}créer ou suspendre{% endif %} {% ifversion fpt or ghec %}l’accès aux organisations appartenant à votre entreprise sur {% data variables.product.prodname_dotcom_the_website %} {% else %}des comptes d’utilisateur et accorder ou refuser l’accès à {% data variables.location.product_location %} {% endif %}automatiquement après avoir attribué ou désattribué l’application sur votre IdP.{% ifversion scim-for-ghes %} SCIM pour {% data variables.product.product_name %} est actuellement en version bêta privée et peut faire l’objet de modifications.{% endif %}
