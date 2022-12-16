---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193268"
---
Standardmäßig kommuniziert dein Identitätsanbieter nicht automatisch mit {% data variables.product.product_name %}, wenn du die Anwendung zuweist oder die Zuweisung aufhebst. {% data variables.product.product_name %} {% ifversion fpt or ghec %}bietet Zugriff auf deine Ressourcen {% else %}erstellt ein Benutzerkonto {% endif %}unter Verwendung der SAML-JIT-Bereitstellung (Just-In-Time), wenn ein Benutzer erstmals zu {% ifversion fpt or ghec %}deinen Ressourcen auf {% endif %} {% data variables.product.product_name %} navigiert und sich bei der Anmeldung über deinen Identitätsanbieter authentifiziert. Unter Umständen musst du Benutzer manuell benachrichtigen, wenn du ihnen Zugriff auf {% data variables.product.product_name %} gewährst, und beim Offboarding musst du manuell {% ifversion fpt or ghec %}die Bereitstellung des Zugriffs aufheben {% else %}das Benutzerkonto in {% endif %}{% data variables.product.product_name %} deaktivieren.

Anstelle der SAML-JIT-Bereitstellung kannst du alternativ SCIM zum {% ifversion ghec %}Bereitstellen oder Aufheben der Bereitstellung{% elsif ghae or scim-for-ghes %}Erstellen oder Sperren{% endif %} {% ifversion fpt or ghec %}des Zugriffs auf Organisationen, die zu deinem Unternehmen auf {% data variables.product.prodname_dotcom_the_website %} gehören, {% else %}von Benutzerkonten und zum automatischen Gewähren und Verweigern des Zugriffs auf {% data variables.location.product_location %} {% endif %}verwenden, nachdem du die Anwendung für deinen Identitätsanbieter zugewiesen oder die Zuweisung aufgehoben hast.{% ifversion scim-for-ghes %} SCIM für {% data variables.product.product_name %} befindet sich derzeit in der privaten Betaphase und wird möglicherweise noch geändert.{% endif %}
