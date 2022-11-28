---
ms.openlocfilehash: cdf55c11d2d54b94788e317961466999079debbb
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/26/2022
ms.locfileid: "148111296"
---
1. Klicke auf **Neuer Runner** und dann auf **{% octicon "mark-github" aria-label="New hosted runner" %} Neuer von {% data variables.product.prodname_dotcom %} gehosteter Runner**.
1. Fülle die erforderlichen Angaben aus, um deinen neuen Runner zu konfigurieren:

    - **Name**: Gib einen Namen für deinen neuen Runner ein. Zur leichteren Identifizierung sollten hier die Hardware und die Betriebskonfiguration angegeben werden, z. B. `ubuntu-20.04-16core`.
    - **Runnerimage**: Wähle ein Betriebssystem aus den verfügbaren Optionen. Sobald du ein Betriebssystem ausgewählt hast, kannst du eine spezifische Version auswählen.
    - **Runnergröße**: Wähle in der Dropdownliste der verfügbaren Optionen eine Hardwarekonfiguration aus.
    - **Automatische Skalierung**: Wähle die maximale Anzahl von Runnern aus, die zu jedem Zeitpunkt aktiv sein können.
    - **Runnergruppe**: Wähle die Gruppe aus, der dein Runner angehören soll. Diese Gruppe hostet mehrere Instanzen deines Runners, die je nach Bedarf hoch- und herunterskaliert werden können.
    - **Netzwerk**: Nur für {% data variables.product.prodname_ghe_cloud %}: Wähle aus, ob den Instanzen des {% data variables.actions.hosted_runner %} ein statischer IP-Adressbereich zugewiesen werden soll. Du kannst insgesamt bis zu 10 statische IP-Adressen verwenden.

1. Klicke auf **Runner erstellen**.
