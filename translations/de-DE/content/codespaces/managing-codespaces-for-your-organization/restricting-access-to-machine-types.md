---
title: Einschränken des Zugriffs auf Computertypen
shortTitle: Restrict machine types
intro: 'Du kannst Einschränkungen für die Typen von Computern festlegen, die Benutzer wählen können, wenn sie in deiner Organisation Codespaces erstellen.'
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159157'
---
## Übersicht

Wenn du einen Codespace erstellst, werden dir in der Regel verschiedene Spezifikationen für den Computer angeboten, auf dem dein Codespace ausgeführt werden soll. Du kannst den Computertyp auswählen, der deinen Anforderungen am besten entspricht. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). 

Wenn du für die Verwendung von {% data variables.product.prodname_github_codespaces %} bezahlst, wirkt sich deine Auswahl des Computertyps auf den Rechnungsbetrag aus. Die Computekosten für einen Codespace sind proportional zur Anzahl der Prozessorkerne im ausgewählten Computertyp. So sind beispielsweise die Computekosten für die einstündige Verwendung eines Codespace auf einem Computer mit 16 Kernen achtmal höher als bei einem Computer mit zwei Kernen. Weitere Informationen zu den Kosten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Als Organisationsbesitzer möchtest du möglicherweise Einschränkungen für die verfügbaren Computertypen konfigurieren. Wenn die Arbeit in deinem Unternehmen beispielsweise keine signifikante Rechenleistung oder keinen signifikanten Speicherplatz erfordert, kannst du die hochausgestatteten Computer aus der Liste der Optionen entfernen, aus denen die Mitarbeiter wählen können. Dazu definierst du eine oder mehrere Richtlinien in den Einstellungen von {% data variables.product.prodname_github_codespaces %} für deine Organisation.

### Verhalten beim Festlegen einer Computertypeinschränkung

Wenn vorhandene Codespaces nicht mehr mit einer von dir definierten Richtlinie übereinstimmen, funktionieren diese Codespaces weiter, bis sie gestoppt werden oder ein Timeout in Kraft tritt. Wenn der Benutzer versucht, den Codespace fortzusetzen, wird er mit einer Meldung darauf hingewiesen, dass der aktuell ausgewählte Computertyp für diese Organisation nicht mehr zulässig ist, und aufgefordert, einen anderen Computertyp auszuwählen.

Wenn du Computertypen mit höherer Spezifikation entfernst, die die {% data variables.product.prodname_github_codespaces %}-Konfiguration für ein einzelnes Repository in deiner Organisation erfordert, dann ist es nicht möglich, einen Codespace für dieses Repository zu erstellen. Wenn jemand versucht, einen Codespace zu erstellen, wird eine Meldung angezeigt, dass keine gültigen Computertypen verfügbar sind, die den Anforderungen der {% data variables.product.prodname_github_codespaces %}-Konfiguration des Repositorys entsprechen.

{% note %}

**Hinweis**: Jeder, der die `devcontainer.json`-Konfigurationsdatei in einem Repository bearbeiten kann, kann eine Mindestspezifikation für Computer festlegen, die für Codespaces für dieses Repository verwendet werden kann. Weitere Informationen findest du unter [Festlegen einer Mindestspezifikation für Codespacecomputer](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines).

{% endnote %}

Wenn die Festlegung einer Richtlinie für Computertypen verhindert, dass Benutzer {% data variables.product.prodname_github_codespaces %} für ein bestimmtes Repository verwenden, gibt es zwei Möglichkeiten:

* Du kannst deine Richtlinien anpassen, um die Einschränkungen speziell aus dem betroffenen Repository zu entfernen.
* Jeder, der einen Codespace hat, auf den er aufgrund der neuen Richtlinie nicht mehr zugreifen kann, kann seinen Codespace in einen Branch exportieren. Dieser Branch enthält alle Änderungen aus dem Codespace. Er kann dann in diesem Branch einen neuen Codespace mit einem konformen Computertyp öffnen oder lokal an diesem Branch arbeiten. Weitere Informationen findest du unter [Exportieren von Änderungen in einen Branch](/codespaces/troubleshooting/exporting-changes-to-a-branch).

### Festlegen von organisationsweiten und repositoryspezifischen Richtlinien

Wenn du eine Richtlinie erstellst, wählst du aus, ob sie für alle Repositorys in deiner Organisation oder nur für angegebene gilt. Wenn du eine organisationsweite Richtlinie festlegst, müssen alle Richtlinien, die du für einzelne Repositorys festlegst, mit der auf Organisationsebene festgelegten Einschränkung übereinstimmen. Durch das Hinzufügen von Richtlinien wird die Wahl des Computers nicht weniger, sondern stärker eingeschränkt.

Du könntest beispielsweise eine organisationsweite Richtlinie erstellen, die die Computertypen auf 2 oder 4 Kerne beschränkt. Dann kannst du eine Richtlinie für Repository A festlegen, die es auf Computer mit nur 2 Kernen beschränkt. Die Festlegung einer Richtlinie für Repository A, die es auf Computer mit 2, 4 oder 8 Kernen beschränkt, würde dazu führen, dass nur Computer mit 2 und 4 Kernen zur Auswahl stehen, da die organisationsweite Richtlinie den Zugriff auf Computer mit 8 Kernen verhindert.

Wenn du eine organisationsweite Richtlinie hinzufügst, solltest du sie auf die größte Auswahl von Computertypen festlegen, die für ein Repository in deiner Organisation verfügbar sind. Du kannst dann repositoryspezifische Richtlinien hinzufügen, um die Auswahl weiter einzuschränken.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Hinzufügen einer Richtlinie zum Einschränken der verfügbaren Computertypen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Klicke auf **Einschränkung hinzufügen**, und wähle **Computertypen** aus.

   ![Screenshot: Dropdownmenü „Einschränkung hinzufügen“](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Einschränkung zu bearbeiten, und deaktiviere dann die Auswahl aller Computertypen, die nicht verfügbar sein sollen.

   ![Screenshot: Bleistiftsymbol zum Bearbeiten der Einschränkung](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Wenn du der Richtlinie eine weitere Einschränkung hinzufügen möchtest, klicke auf **Einschränkung hinzufügen**, und wähle eine andere Einschränkung aus. Informationen zu anderen Einschränkungen findest du hier:
   * [Einschränken des Basisimages für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. Nachdem du deiner Richtlinie Einschränkungen hinzugefügt hast, klicke auf **Speichern**.

Die Richtlinie wird auf alle neu erstellten Codespaces angewendet, die deiner Organisation in Rechnung gestellt werden. Die Computertypeinschränkung wird auch auf vorhandene Codespaces angewendet, wenn jemand versucht, einen beendeten Codespace neu zu starten oder erneut eine Verbindung mit einem aktiven Codespace herzustellen.

## Bearbeiten einer Richtlinie

Du kannst eine vorhandenen Richtlinie bearbeiten. Beispielsweise kannst du Einschränkungen einer Richtlinie hinzufügen oder daraus entfernen.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Einschränken der verfügbaren Computertypen](#adding-a-policy-to-limit-the-available-machine-types).
1. Klicke auf den Namen der Richtlinie, die du bearbeiten möchtest.
1. Klicke auf das Stiftsymbol ({% octicon "pencil" aria-label="The edit icon" %}) neben der Einschränkung „Computertypen“.
1. Nimm die erforderlichen Änderungen vor, und klicke dann auf **Speichern**.

## Löschen einer Richtlinie 

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Einschränken der verfügbaren Computertypen](#adding-a-policy-to-limit-the-available-machine-types).
1. Klicke rechts neben der Richtlinie, die du löschen möchten, auf die Schaltfläche „Löschen“.

   ![Screenshot: Schaltfläche zum Löschen einer Richtlinie](/assets/images/help/codespaces/policy-delete.png)

## Weitere Informationsquellen

- [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)
