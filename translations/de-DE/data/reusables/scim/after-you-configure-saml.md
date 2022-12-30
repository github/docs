---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145130401"
---
Standardmäßig kommuniziert dein Identitätsanbieter nicht automatisch mit {% data variables.product.product_name %}, wenn du die Anwendung zuweist oder die Zuweisung aufhebst. {% data variables.product.product_name %} {% ifversion fpt or ghec %}bietet Zugriff auf deine Ressourcen {% else %}erstellt ein Benutzerkonto {% endif %}unter Verwendung der SAML-JIT-Bereitstellung (Just-In-Time), wenn ein Benutzer erstmals zu {% ifversion fpt or ghec %}deinen Ressourcen auf {% endif %} {% data variables.product.product_name %} navigiert und sich bei der Anmeldung über deinen Identitätsanbieter authentifiziert. Unter Umständen musst du Benutzer manuell benachrichtigen, wenn du ihnen Zugriff auf {% data variables.product.product_name %} gewährst, und beim Offboarding musst du manuell {% ifversion fpt or ghec %}die Bereitstellung des Zugriffs aufheben {% else %}das Benutzerkonto in {% endif %}{% data variables.product.product_name %} deaktivieren. Du kannst SCIM zum automatischen {% ifversion ghec %}Bereitstellen oder Aufheben der Bereitstellung{% elsif ghae %}Erstellen oder Sperren{% endif %} {% ifversion fpt or ghec %}des Zugriffs auf Organisationen, die deiner Organisation auf {% data variables.product.prodname_dotcom_the_website %} angehören, {% else %}von Benutzerkonten und Zugriff für {% data variables.product.product_name %} {% endif %}verwenden, wenn du die Anwendung für deinen Identitätsanbieter zuweist oder die Zuweisung aufhebst.
