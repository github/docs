---
title: Einschränken der Sichtbarkeit weitergeleiteter Ports
shortTitle: Restrict port visibility
intro: 'Du kannst Einschränkungen für die Sichtbarkeitsoptionen festlegen, die Benutzer*innen auswählen können, wenn sie Ports der Codespaces in deiner Organisation weiterleiten.'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158973'
---
## Übersicht

Normalerweise kannst du innerhalb eines Codespace Ports privat (nur an dich selbst), an Mitglieder deiner Organisation oder öffentlich (an alle Personen mit der URL) weiterleiten. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Als Organisationsbesitzer kannst du Einschränkungen für die Sichtbarkeitsoptionen konfigurieren, die Benutzer bei der Weiterleitung von Ports festlegen können. Aus Sicherheitsgründen kannst du z. B. die Weiterleitung öffentlicher Porte untersagen. Dazu definierst du eine oder mehrere Richtlinien in den Einstellungen von {% data variables.product.prodname_github_codespaces %} für deine Organisation.

### Verhalten beim Festlegen einer Einschränkung der Portsichtbarkeit

Wenn vorhandene Codespaces nicht mehr mit einer von dir definierten Richtlinie übereinstimmen, werden diese Codespaces weiter verwendet, bis sie gestoppt werden oder ein Timeout eintritt. Wenn der Benutzer den Codespace fortsetzt, unterliegt er den Richtlinieneinschränkungen.

{% note %}

**Hinweis**: Du kannst die Weiterleitung an private Ports nicht deaktivieren, da {% data variables.product.prodname_github_codespaces %} diese benötigt, um weiterhin wie vorgesehen zu funktionieren, z. B. um SSH zu Port 22 weiterzuleiten.

{% endnote %}

### Festlegen von organisationsweiten und repositoryspezifischen Richtlinien

Wenn du eine Richtlinie erstellst, wählst du aus, ob sie für alle Repositorys in deiner Organisation oder nur für angegebene gilt. Wenn du eine organisationsweite Richtlinie festlegst, müssen alle Richtlinien, die du für einzelne Repositorys festlegst, mit der auf Organisationsebene festgelegten Einschränkung übereinstimmen. Durch das Hinzufügen von Richtlinien wird die Wahl der Sichtbarkeitsoptionen nicht weniger, sondern stärker eingeschränkt.

Du kannst z. B. eine organisationsweite Richtlinie erstellen, die die Sichtbarkeitsoptionen auf die Organisation beschränkt. Dann kannst du eine Richtlinie für Repository A festlegen, die sowohl die öffentliche Sichtbarkeit als auch die Sichtbarkeit in der Organisation nicht zulässt, was dazu führen würde, dass nur die Privatportweiterleitung für dieses Repository verfügbar ist. Die Festlegung einer Richtlinie für Repository A, die sowohl die öffentliche als auch die Sichtbarkeit innerhalb der Organisation zulässt, würde dazu führen, dass nur die Sichtbarkeit innerhalb der Organisation gegeben ist, da die organisationsweite Richtlinie keine öffentliche Sichtbarkeit zulässt.

Wenn du eine organisationsweite Richtlinie hinzufügst, solltest du sie auf die großzügigste Sichtbarkeitsoption festlegen, die für ein Repository in deiner Organisation verfügbar ist. Du kannst dann repositoryspezifische Richtlinien hinzufügen, um die Auswahl weiter einzuschränken.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Hinzufügen einer Richtlinie zum Einschränken der Portsichtbarkeitsoptionen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Klicke auf **Einschränkung hinzufügen**, und wähle **Portsichtbarkeit** aus.

   ![Screenshot der Dropdownliste „Einschränkung hinzufügen“](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Einschränkung zu bearbeiten.

   ![Screenshot des Stiftsymbols zum Bearbeiten der Einschränkung](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Lösche die Auswahl der Portsichtbarkeitsoptionen (**Org** oder **Öffentlich**), die nicht verfügbar sein sollen.

   ![Screenshot vom Löschen einer Portsichtbarkeitsoption](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Wenn du der Richtlinie eine weitere Einschränkung hinzufügen möchtest, klicke auf **Einschränkung hinzufügen**, und wähle eine andere Einschränkung aus. Informationen zu anderen Einschränkungen findest du unter:
   * [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Einschränken des Basisimages für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)
   * [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. Nachdem du deiner Richtlinie Einschränkungen hinzugefügt hast, klicke auf **Speichern**.

Die Richtlinie wird auf alle neu erstellten Codespaces angewendet, die deiner Organisation in Rechnung gestellt werden. Die Portsichtbarkeitseinschränkung wird beim nächsten Start auch auf vorhandene Codespaces angewendet.

## Bearbeiten einer Richtlinie

Du kannst eine vorhandenen Richtlinie bearbeiten. Beispielsweise kannst du Einschränkungen einer Richtlinie hinzufügen oder daraus entfernen.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Einschränken der Portsichtbarkeitsoptionen](#adding-a-policy-to-limit-the-port-visibility-options).
1. Klicke auf den Namen der Richtlinie, die du bearbeiten möchtest.
1. Klicke auf das Stiftsymbol ({% octicon "pencil" aria-label="The edit icon" %}) neben der Einschränkung „Portsichtbarkeit“.
1. Nimm die erforderlichen Änderungen vor, und klicke dann auf **Speichern**.

## Löschen einer Richtlinie 

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Einschränken der Portsichtbarkeitsoptionen](#adding-a-policy-to-limit-the-port-visibility-options).
1. Klicke rechts neben der Richtlinie, die du löschen möchtest, auf die Schaltfläche „Löschen“.

   ![Screenshot der Schaltfläche zum Löschen einer Richtlinie](/assets/images/help/codespaces/policy-delete.png)
