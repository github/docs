---
ms.openlocfilehash: 7e0f711826a1f1ea1bee8cec18bf5b4614815174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108503"
---
## Benutzer werden wiederholt zur Authentifizierung umgeleitet

Wenn Benutzer wiederholt in einer Schleife zur SAML-Authentifizierungsaufforderung umgeleitet werden, musst du möglicherweise die SAML-Sitzungsdauer in deinen IdP-Einstellungen erhöhen. 

Der in einer SAML-Antwort gesendete `SessionNotOnOrAfter`-Wert bestimmt, wann ein Benutzer zur Authentifizierung zurück zum IdP umgeleitet wird. Wenn eine SAML-Sitzungsdauer für höchstens 2 Stunden konfiguriert ist, aktualisiert {% data variables.product.prodname_dotcom_the_website %} eine SAML-Sitzung 5 Minuten vor Ablauf. Wenn deine Sitzungsdauer für höchstens 5 Minuten konfiguriert ist, können Benutzer in einer SAML-Authentifizierungsschleife hängen bleiben. 

Um dieses Problem zu beheben, sollte eine minimale SAML-Sitzungsdauer von 4 Stunden konfiguriert werden. Weitere Informationen findest du in der [SAML-Konfigurationsreferenz](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout).
