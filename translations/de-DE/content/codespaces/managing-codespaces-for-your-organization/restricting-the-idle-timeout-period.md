---
title: Einschränken des Zeitraums für Leerlauftimeouts
shortTitle: Restrict timeout periods
intro: Du kannst einen maximalen Timeoutzeitraum für alle Codespaces im Besitz deiner Organisation festlegen.
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158989'
---
## Übersicht

Bei Codespaces tritt nach 30 Minuten Inaktivität standardmäßig ein Timeout auf. Wenn bei einem Codespace ein Timeout auftritt, wird er beendet, und es werden keine Gebühren mehr für die Computenutzung berechnet. 

Die persönlichen Einstellungen von {% data variables.product.prodname_dotcom %}-Benutzer*innen ermöglichen ihnen das Definieren eines benutzerdefinierten Timeoutzeitraums für die von ihnen erstellten Codespaces. Dieser Zeitraum kann länger sein als der Standardzeitraum von 30 Minuten. Weitere Informationen findest du unter [Festlegen deines Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces).

Als Organisationsbesitzer solltest du eventuell Einschränkungen für den maximalen Timeoutzeitraum für Codespaces konfigurieren, die für Repositorys im Besitz deiner Organisation erstellt werden. Dies kann helfen, Kosten im Zusammenhang mit Codespaces zu begrenzen, bei denen nach langen Zeiträumen von Inaktivität Timeouts auftreten. Du kannst ein maximales Timeout für die Codespaces für alle Repositorys im Besitz deiner Organisation oder für die Codespaces bestimmter Repositorys festlegen. 

{% note %}

**Hinweis:** Einschränkungen für maximale Leerlauftimeouts gelten nur für Codespaces, die sich im Besitz deiner Organisation befinden.

{% endnote %}

Weitere Informationen zu den Preisen für die Computenutzung von {% data variables.product.prodname_github_codespaces %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

### Verhalten, wenn eine Einschränkung für das maximale Leerlauftimeout festgelegt ist

Wenn das Standard-Leerlauftimeout in den persönlichen Einstellungen auf 90 Minuten festlegt und dann ein Codespace für ein Repository mit einer Einschränkung für das maximale Leerlauftimeout von 60 Minuten gestartet wird, tritt beim Codespace nach 60 Minuten Inaktivität ein Timeout auf. Wenn die Codespaceerstellung abgeschlossen ist, wird eine Meldung angezeigt, die dies erläutert:

> Das Leerlauftimeout für diesen Codespace ist gemäß den Richtlinien deiner Organisation auf 60 Minuten festgelegt.

### Festlegen von organisationsweiten und repositoryspezifischen Richtlinien

Wenn du eine Richtlinie erstellst, wählst du aus, ob sie für alle Repositorys in deiner Organisation oder nur für angegebene Repositorys gilt. Wenn du eine organisationsweite Richtlinie mit einer Timeouteinschränkung erstellst, müssen die Timeouteinschränkungen in allen Richtlinien, die auf bestimmte Repositorys ausgerichtet sind, innerhalb der für die gesamte Organisation konfigurierten Einschränkung liegen. Der kürzeste Timeoutzeitraum in einer organisationsweiten Richtlinie, einer auf bestimmte Repositorys ausgerichteten Richtlinie oder in den persönlichen Einstellungen einer Person wird angewendet.

Wenn du eine organisationsweite Richtlinie mit einer Timeouteinschränkung hinzufügst, solltest du das Timeout auf den längsten zulässigen Zeitraum festlegen. Anschließend kannst du separate Richtlinien hinzufügen, die das maximale Timeout für bestimmte Repositorys in deiner Organisation auf einen kürzeren Zeitraum festlegen.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Hinzufügen einer Richtlinie zum Festlegen eines maximalen Zeitraums für Leerlauftimeouts

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Klicke auf **Einschränkung hinzufügen**, und wähle **Maximales Leerlauftimeout** aus.

   ![Screenshot: Dropdownmenü „Einschränkung hinzufügen“](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Einschränkung zu bearbeiten.

   ![Screenshot: Stiftsymbol zum Bearbeiten der Einschränkung](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Gib die maximale Anzahl von Minuten ein, die Codespaces inaktiv bleiben können, bevor ein Timeout auftritt. Klicke anschließend auf **Speichern**.

   ![Screenshot: Festlegen des maximalen Timeouts in Minuten](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Wenn du der Richtlinie eine weitere Einschränkung hinzufügen möchtest, klicke auf **Einschränkung hinzufügen**, und wähle eine andere Einschränkung aus. Informationen zu anderen Einschränkungen findest du hier:
   * [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Einschränken des Basisimages für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. Nachdem du deiner Richtlinie Einschränkungen hinzugefügt hast, klicke auf **Speichern**.

Die Richtlinie wird auf alle neu erstellten Codespaces angewendet, die deiner Organisation in Rechnung gestellt werden. Die Timeouteinschränkung wird beim nächsten Start auch auf vorhandene Codespaces angewendet.

## Bearbeiten einer Richtlinie

Du kannst eine vorhandenen Richtlinie bearbeiten. Beispielsweise kannst du Einschränkungen einer Richtlinie hinzufügen oder daraus entfernen.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Festlegen eines maximalen Zeitraums für Leerlauftimeouts](#adding-a-policy-to-set-a-maximum-idle-timeout-period).
1. Klicke auf den Namen der Richtlinie, die du bearbeiten möchtest.
1. Klicke auf das Stiftsymbol ({% octicon "pencil" aria-label="The edit icon" %}) neben der Einschränkung „Maximales Leerlauftimeout“.
1. Nimm die erforderlichen Änderungen vor, und klicke dann auf **Speichern**.

## Löschen einer Richtlinie 

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Festlegen eines maximalen Zeitraums für Leerlauftimeouts](#adding-a-policy-to-set-a-maximum-idle-timeout-period).
1. Klicke rechts neben der Richtlinie, die du löschen möchten, auf die Schaltfläche „Löschen“.

   ![Screenshot: Schaltfläche zum Löschen einer Richtlinie](/assets/images/help/codespaces/policy-delete.png)
