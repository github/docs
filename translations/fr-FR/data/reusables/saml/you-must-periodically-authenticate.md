---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145128447"
---
Vous devez régulièrement vous authentifier auprès de votre fournisseur d’identité SAML pour accéder aux ressources de l’organisation {% ifversion fpt or ghec %} sur {% data variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% data variables.product.product_location %}{% endif %}. La durée de ce délai de connexion est spécifiée par votre fournisseur d’identité et est généralement de 24 heures. Cette exigence de connexion périodique limite la durée d’accès et vous oblige à vous identifier à nouveau pour continuer. {% ifversion fpt or ghec %}Vous pouvez afficher et gérer vos sessions SAML actives dans vos paramètres de sécurité. Pour plus d’informations, consultez « [Visualisation et gestion de vos sessions SAML actives](/articles/viewing-and-managing-your-active-saml-sessions) ».{% endif %}
