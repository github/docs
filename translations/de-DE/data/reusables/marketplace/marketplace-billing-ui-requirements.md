---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145108188"
---
- Kunden, die einen kostenpflichtigen Plan kündigen, der über den {% data variables.product.prodname_marketplace %} erworben wurde, sollten automatisch auf den kostenlosen Plan der App zurückgestuft werden, sofern ein solcher vorhanden ist. {% data reusables.marketplace.cancellation-clarification %} Es wird dringend empfohlen, Kunden die Möglichkeit zu geben, ihren vorherigen Plan zu reaktivieren.
- Kunden sollten in der Lage sein, von der Benutzeroberfläche deiner App aus ein Upgrade durchzuführen, wenn du eine [Upgrade-URL](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls) in diesem Format angibst: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Kunden sollten in der Lage sein, auf der Website deiner App zu ändern, welche Benutzer Zugriff auf deine App haben, wenn sie Arbeitsplätze erworben haben (Preisplan pro Einheit) oder der Plan eine unbegrenzte Anzahl von Projektmitarbeitern zulässt.
- Kunden sollten die folgenden Änderungen an ihrem Konto sofort in den Abrechnungs-, Profil- oder Kontoeinstellungen auf der Website der App sehen können:
  - Aktueller Plan und Preis.
  - Neue Pläne, die erworben wurden.
  - Upgrades, Downgrades, Stornierungen und die Anzahl der verbleibenden für eine kostenlose Testversion.
  - Änderungen an Abrechnungszyklen (monatlich oder jährlich).
  - Nutzung und verbleibende Ressourcen für Pläne mit Pauschalgebühr und auf Einheiten basierende Pläne. Wenn der Preisplan zum Beispiel pro Einheit gilt, sollte die Website deiner App die verbrauchten und die verfügbaren Einheiten anzeigen.
