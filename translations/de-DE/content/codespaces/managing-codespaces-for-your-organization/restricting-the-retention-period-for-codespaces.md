---
title: Einschränken des Aufbewahrungszeitraums für Codespaces
shortTitle: Restrict the retention period
intro: Du kannst einen maximalen Aufbewahrungszeitraum für alle Codespaces im Besitz deiner Organisation festlegen.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158981'
---
## Übersicht

{% data variables.product.prodname_github_codespaces %} werden automatisch gelöscht, nachdem sie beendet wurden und für eine definierte Anzahl von Tagen inaktiv geblieben sind. Der Aufbewahrungszeitraum für einen Codespace wird festgelegt, wenn der Codespace erstellt wird, und ändert sich nicht. 

Jeder, der Zugriff auf {% data variables.product.prodname_github_codespaces %} hat, kann einen Aufbewahrungszeitraum für die von ihm erstellten Codespaces konfigurieren. Die anfängliche Einstellung für diesen Standardaufbewahrungszeitraum beträgt 30 Tage. Einzelne Benutzer können für diesen Zeitraum 0 bis 30 Tage festlegen. Weitere Informationen findest du unter [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces). 

Als Organisationsbesitzer solltest du eventuell Einschränkungen für den maximalen Aufbewahrungszeitraum für Codespaces konfigurieren, die für die Repositorys im Besitz deiner Organisation erstellt werden. Dies kann dir helfen, die Speicherkosten zu begrenzen, die für Codespaces entstehen, die beendet und dann bis zum automatischen Löschen nicht verwendet werden. Weitere Informationen zu den Speichergebühren findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing). Du kannst einen maximalen Aufbewahrungszeitraum für alle oder bestimmte Repositorys festlegen, die deiner Organisation gehören. 

### Festlegen von organisationsweiten und repositoryspezifischen Richtlinien

Wenn du eine Richtlinie erstellst, wählst du aus, ob sie für alle Repositorys in deiner Organisation oder nur für angegebene Repositorys gilt. Wenn du eine organisationsweite Richtlinie mit einer Codespace-Aufbewahrungsbeschränkung erstellst, sollten die Aufbewahrungsbeschränkungen in allen Richtlinien, die auf bestimmte Repositorys abzielen, kürzer sein als die für die gesamte Organisation konfigurierte Beschränkung, sonst haben sie keine Wirkung. Der kürzeste Aufbewahrungszeitraum in einer organisationsweiten Richtlinie, einer auf bestimmte Repositorys ausgerichteten Richtlinie, oder der standardmäßige Aufbewahrungszeitraum in den persönlichen Einstellungen einer Person wird angewendet.

Wenn du eine organisationsweite Richtlinie mit einer Aufbewahrungsbeschränkung hinzufügst, solltest du die Aufbewahrungsbeschränkung auf den längsten zulässigen Wert festlegen. Anschließend kannst du separate Richtlinien hinzufügen, die die maximale Aufbewahrung für bestimmte Repositorys in deiner Organisation auf einen kürzeren Zeitraum festlegen.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Hinzufügen einer Richtlinie zur Festlegung einer maximalen Codespaceaufbewahrung

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Klicke auf **Einschränkung hinzufügen**, und wähle **Aufbewahrungszeitraum** aus.

   ![Screenshot: Dropdownmenü „Einschränkung hinzufügen“](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Einschränkung zu bearbeiten.

   ![Screenshot: Stiftsymbol zum Bearbeiten der Einschränkung](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Gib die maximale Anzahl von Tagen ein, die nach dem Beenden von Codespaces verstreichen können, bevor die Codespaces automatisch gelöscht werden, und klicke dann auf **Speichern**.

   ![Screenshot: Festlegen des Aufbewahrungszeitraums in Tagen](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Hinweise**: 
   * Ein Tag ist in diesem Zusammenhang ein 24-Stunden-Zeitraum, der zu dem Zeitpunkt beginnt, wenn der Codespace beendet wird.
   * Der gültige Bereich sind 0-30 Tage.
   * Wenn du den Zeitraum auf `0` festlegst, werden deine Codespaces sofort gelöscht, wenn sie beendet werden oder ein Inaktivitätstimeout in Kraft tritt.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. Wenn du der Richtlinie eine weitere Einschränkung hinzufügen möchtest, klicke auf **Einschränkung hinzufügen**, und wähle eine andere Einschränkung aus. Informationen zu anderen Einschränkungen findest du hier:
   * [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Einschränken des Basisimages für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
1. Nachdem du deiner Richtlinie Einschränkungen hinzugefügt hast, klicke auf **Speichern**.

Die Richtlinie wird auf alle neu erstellten Codespaces angewendet, die deiner Organisation in Rechnung gestellt werden. Die Einschränkung des Aufbewahrungszeitraums wird nur auf die Codespaceerstellung angewendet.

## Bearbeiten einer Richtlinie

Du kannst eine vorhandenen Richtlinie bearbeiten. Beispielsweise kannst du Einschränkungen einer Richtlinie hinzufügen oder daraus entfernen.

Die Einschränkung des Aufbewahrungszeitraums wird nur auf Codespaces angewendet, wenn sie erstellt werden. Das Bearbeiten einer Richtlinie hat keine Auswirkungen auf vorhandene Codespaces.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zur Festlegung einer maximalen Codespaceaufbewahrung](#adding-a-policy-to-set-a-maximum-codespace-retention-period).
1. Klicke auf den Namen der Richtlinie, die du bearbeiten möchtest.
1. Klicke auf das Stiftsymbol ({% octicon "pencil" aria-label="The edit icon" %}) neben der Einschränkung „Aufbewahrungszeitraum“.
1. Nimm die erforderlichen Änderungen vor, und klicke dann auf **Speichern**.

## Löschen einer Richtlinie 

Du kannst eine Richtlinie jederzeit löschen. Das Löschen einer Richtlinie hat keine Auswirkungen auf vorhandene Codespaces.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zur Festlegung einer maximalen Codespaceaufbewahrung](#adding-a-policy-to-set-a-maximum-codespace-retention-period).
1. Klicke rechts neben der Richtlinie, die du löschen möchtest, auf die Schaltfläche „Löschen“.

   ![Screenshot: Schaltfläche zum Löschen einer Richtlinie](/assets/images/help/codespaces/policy-delete.png)
