---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061298"
---
1. Suche unter „Runner“ den Runner in der Liste. Wenn sich dein Läufer in einer Gruppe befindet, klicke auf {% octicon "chevron-down" aria-label="The downwards chevron" %}, um die Liste zu erweitern.
1. Klicke neben dem Runner, den du entfernen möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Entfernen**.

    ![Entfernen einer selbst-gehosteten Läufereinstellung](/assets/images/help/settings/actions-runner-remove.png)
1. Du wirst Anweisungen zum Entfernen des selbst gehosteten Läufers sehen. Vervollständige einen der folgenden Schritte, um den Läufer zu entfernen, abhängig davon, ob er noch zugänglich ist:

    * **Wenn du Zugriff auf den Runnercomputer hast:** Folge den Anweisungen auf dem Bildschirm für das Betriebssystem deines Computers, um den Befehl zum Entfernen auszuführen. Die Anweisungen beinhalten die erforderliche URL und ein automatisch generiertes, zeitlich begrenztes Token.

        Der Befehl zum Entfernen führt die folgenden Aufgaben aus:

        * Entfernt den Läufer aus {% data variables.product.product_name %}.
        * Entfernt alle selbst-gehosteten Läufer-Anwendungskonfigurationsdateien auf der Maschine.
        * Entfernt alle konfigurierten Dienste, wenn sie nicht im interaktiven Modus ausgeführt werden.

    * **Wenn du keinen Zugriff auf den Computer hast:** Klicke auf **Ja, Entfernen dieses Runners erzwingen**, um das Entfernen des Runners durch {% data variables.product.product_name %} zu erzwingen.
