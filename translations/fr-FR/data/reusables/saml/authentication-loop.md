---
ms.openlocfilehash: 7e0f711826a1f1ea1bee8cec18bf5b4614815174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108504"
---
## Les utilisateurs sont redirigés à plusieurs reprises pour s’authentifier

Si les utilisateurs sont redirigés à plusieurs reprises vers l’invite d’authentification SAML dans une boucle, il peut être nécessaire d’augmenter la durée de la session SAML dans vos paramètres de fournisseur d’identité. 

La valeur `SessionNotOnOrAfter` envoyée dans une réponse SAML détermine quand un utilisateur est redirigé vers le fournisseur d’identité pour s’authentifier. Si une durée de session SAML est configurée pour 2 heures ou moins, {% data variables.product.prodname_dotcom_the_website %} va actualiser une session SAML 5 minutes avant son expiration. Si la durée de votre session est configurée pour 5 minutes ou moins, les utilisateurs peuvent être bloqués dans une boucle d’authentification SAML. 

Pour résoudre ce problème, nous vous recommandons de configurer une durée minimale de session SAML de 4 heures. Pour plus d’informations, consultez la « [Référence de configuration SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout) ».
