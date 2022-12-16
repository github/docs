---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184398"
---
Die {% data variables.product.product_name %}-REST-API ist versionsspezifisch. Der API-Versionsname basiert auf dem Datum, an dem die API-Version veröffentlicht wurde. Beispielsweise wurde die API-Version `{{ initialRestVersioningReleaseDate }}` am {{ initialRestVersioningReleaseDateLong }} veröffentlicht.

Alle Breaking Changes werden in einer neuen API-Version veröffentlicht. Breaking Changes sind Änderungen, die möglicherweise eine Integration unterbrechen können. Zu Breaking Changes gehören:

- Entfernen eines gesamten Vorgangs
- Entfernen oder Umbenennen eines Parameters
- Entfernen oder Umbenennen eines Antwortfelds
- Hinzufügen eines neuen erforderlichen Parameters
- Erforderlichmachen eines zuvor optionalen Parameters
- Ändern des Typs eines Parameters oder Antwortfelds
- Entfernen von Enumerationswerten
- Hinzufügen einer neuen Validierungsregel zu einem vorhandenen Parameter
- Ändern der Authentifizierungs- oder Autorisierungsanforderungen

Alle additiven (Nonbreaking) Changes sind in allen unterstützten API-Versionen verfügbar. Additive Änderungen sind Änderungen, die eine Integration nicht unterbrechen sollten. Zu den additiven Änderungen gehören:

- Hinzufügen eines Vorgangs
- Hinzufügen eines optionalen Parameters
- Hinzufügen eines optionalen Anforderungsheaders
- Hinzufügen eines Antwortfelds
- Hinzufügen eines Antwortheaders
- Hinzufügen von Enumerationswerten

Wenn eine neue REST-API-Version veröffentlicht wird, wird die vorherige API-Version noch mindestens 24 Monate nach der Veröffentlichung der neuen API-Version unterstützt.
