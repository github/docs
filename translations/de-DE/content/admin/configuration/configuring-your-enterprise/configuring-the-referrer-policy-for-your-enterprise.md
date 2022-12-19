---
title: Konfigurieren der Referrerrichtlinie für dein Unternehmen
shortTitle: Configure referrer policy
intro: 'Du kannst den Datenschutz für {% data variables.product.product_location %} erhöhen, indem du die Richtlinie für ursprungsübergreifende Anforderungen konfigurierst.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066491'
---
## Informationen zur Referrerrichtlinie für dein Unternehmen

Die Referrerrichtlinie steuert die Informationen, die {% data variables.product.product_name %} in HTTP-Headern überträgt, wenn jemand einen Link von {% data variables.product.product_location %} zu einer externen Website besucht.

Wenn ein Benutzer in {% data variables.product.product_location %} einen Link zu einer anderen Website aus einer Datei oder einem Kommentar in deiner Instanz besucht, enthält die Anforderung standardmäßig den Hostnamen für deine Instanz in Nur-Text-Form im `Referer`-Header. Wenn der Link zu einer externen Website führt, könnte der Besitzer der Website den Hostnamen für deine Instanz in Anforderungen oder Protokolldateien lesen.

Du kannst die Informationen steuern, die {% data variables.product.product_name %} sendet, wenn ein Benutzer von deiner Instanz aus einen Link besucht.

## Aktivieren der Referenzrichtlinie `same-origin`

Mit der Referenzrichtlinie `same-origin` kannst du moderne Browser anweisen, den Hostnamen für {% data variables.product.product_location %} aus Anforderungen an externe Websites auszuschließen. Die Einstellung gilt für alle Links von der Weboberfläche deiner Instanz. Standardmäßig verwendet {% data variables.product.product_name %} die Referrerrichtlinien `origin-when-cross-origin` und `strict-origin-when-cross-origin`, was bedeutet, dass der Hostname deiner Instanz in HTTP- und HTTPS-Anforderungen an externe Websites angezeigt wird.

{% note %}

**Hinweis**: Das Ändern der Referrerrichtlinie zu `same-origin` kann sich auf externe Websites auswirken, die einen Hostnamen in den HTTP-Headern von Anforderungen erwarten.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Wähle unter „Referrerrichtlinie für Benutzer-Agent“ die Option **same-origin-Richtlinie für alle Organisationen aktivieren**.
  ![Kontrollkästchen zum Aktivieren der same-origin-Referrerrichtlinie](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Klicken Sie auf **Speichern**.
  ![Schaltfläche „Speichern“ zum Aktivieren der same-origin-Referrerrichtlinie](/assets/images/enterprise/settings/referrer-policy-save-button.png)
