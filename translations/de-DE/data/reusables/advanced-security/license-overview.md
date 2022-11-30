---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091236"
---
Jede Lizenz für {% data variables.product.prodname_GH_advanced_security %} gibt eine maximale Anzahl von Konten oder Arbeitsplätzen an, die diese Features verwenden können. Jede aktive Person, die Commits an mindestens ein Repository sendet (Committer), für das dieses Feature aktiviert ist, verwendet einen Arbeitsplatz. Ein Committer gilt als aktiv, wenn einer seiner Commits innerhalb der letzten 90 Tage an das Repository gepusht wurde, unabhängig davon, wann der Commit ursprünglich erstellt wurde.

{% note %}

**Hinweis**: Aktive Committer werden sowohl anhand der Information zum Commitersteller als auch anhand des Zeitstempels berechnet, an dem Code an {% data variables.product.product_name %} gepusht wurde.

- Wenn ein Benutzer Code an {% data variables.product.prodname_dotcom %} pusht, wird jeder Benutzer, der Code in diesem Push erstellt hat, auf die Arbeitsplätze in {% data variables.product.prodname_GH_advanced_security %} angerechnet. Dies gilt auch dann, wenn der Code in {% data variables.product.prodname_dotcom %} nicht neu ist.

- Benutzer sollten Branches immer aus einer aktuellen Basis erstellen oder vor dem Pushen ein Rebase ausführen. Dadurch wird sichergestellt, dass Benutzer, die in den letzten 90 Tagen keine Commits gepusht haben, keine {% data variables.product.prodname_GH_advanced_security %}-Arbeitsplätze belegen.

{% endnote %}

