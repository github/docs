---
title: Einschränken des Basisimages für Codespaces
shortTitle: Restrict base image
intro: 'Du kannst angeben, welche Basisimages für neue Codespaces verwendet werden können, die in deiner Organisation erstellt werden.'
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: f17bb20aa919ca94cd13e14a6f770cea23042b2b
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188280'
---
## Übersicht

Wenn du einen Codespace erstellen, wird automatisch ein Docker-Container auf einem virtuellen Remotecomputer erstellt. Dieser Docker-Container wird aus einem Docker-Image erstellt. Das Image ist im Grunde eine Vorlage für Docker-Container und bestimmt viele Aspekte der vom Codespace bereitgestellten resultierenden Umgebung.

Du kannst auswählen, welches Image du für deine Codespaces verwenden möchtest, indem du es in der Entwicklungscontainerkonfiguration für ein Repository angibst. Dazu kannst du z. B. die Eigenschaft `image` in der Datei `devcontainer.json` verwenden.

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

Weitere Informationen findest du in der [Entwicklungscontainerspezifikation](https://containers.dev/implementors/json_reference/) auf „containers.dev“.

Wenn du kein Image in der Entwicklungscontainerkonfiguration für ein Repository angibst, wird das Standardimage verwendet. Das Standardimage enthält eine Reihe von Runtimeversionen für gängige Programmiersprachen und häufig verwendete Tools. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration).

Als Organisationsbesitzer*in kannst du eine Richtlinie hinzufügen, mit der eingeschränkt wird, welche Images für Codespaces verwendet werden können, die in deiner Organisation erstellt werden.

Wenn das in der Entwicklungscontainerkonfiguration angegebene Image nicht mit einem der zulässigen Images übereinstimmt, wird die folgende Meldung angezeigt, wenn versucht wird, einen Codespace für das Repository zu erstellen:

> Codespace konnte nicht erstellt werden: Das Basisimage „DETAILS FROM DEV CONTAINER CONFIGURATION“ ist basierend auf einer vom Organisationsadministrator festgelegten Organisationsrichtlinie nicht zulässig.

{% note %}

**Hinweise**: 
* Die Basisimagerichtlinie wird nur angewendet, wenn ein Codespace erstellt wird. Aktuell wird sie nicht angewendet, wenn ein Container neu erstellt wird. Dies wird in einem zukünftigen Release geändert. Weitere Informationen findest du unter [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace).
* Die Basisimagerichtlinie gilt nicht für das Standardimage oder das Image, das zum Wiederherstellen eines Codespaces verwendet wird, wenn ein Fehler in einer Entwicklungscontainerkonfiguration auftritt, der verhindert, dass der Container neu erstellt wird. 

{% endnote %}

### Festlegen von organisationsweiten und repositoryspezifischen Richtlinien

Wenn du eine Richtlinie erstellst, wählst du aus, ob sie für alle Repositorys in deiner Organisation oder nur für angegebene gilt. Wenn du eine organisationsweite Richtlinie festlegst, müssen alle Richtlinien, die du für einzelne Repositorys festlegst, mit der auf Organisationsebene festgelegten Einschränkung übereinstimmen. Durch das Hinzufügen von Richtlinien wird die Wahl des Images nicht weniger, sondern stärker eingeschränkt.

Du kannst beispielsweise eine organisationsweite Richtlinie erstellen, die das Basisimage auf eines von zehn angegebenen Images beschränkt. Du kannst dann eine Richtlinie für Repository A festlegen, die das Image auf eine Teilmenge von nur zwei der auf Organisationsebene angegebenen Images beschränkt. Das Angeben zusätzlicher Images für Repository A hat keine Auswirkungen, da diese Images nicht in der Richtlinie auf Organisationsebene angegeben sind. Wenn du eine organisationsweite Richtlinie hinzufügst, solltest du sie auf die größte Auswahl von Images festlegen, die für ein Repository in deiner Organisation verfügbar ist. Du kannst dann repositoryspezifische Richtlinien hinzufügen, um die Auswahl weiter einzuschränken.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Hinzufügen einer Richtlinie zum Definieren der zulässigen Images

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Klicke auf **Einschränkung hinzufügen**, und wähle **Basisimages** aus.

   ![Screenshot der Dropdownliste „Einschränkung hinzufügen“](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Einschränkung zu bearbeiten.

   ![Screenshot des Stiftsymbols zum Bearbeiten der Einschränkung](/assets/images/help/codespaces/edit-image-constraint.png)

1. Gib im Feld „Zulässige Werte“ die vollständige URL eines Images ein, das du zulassen möchtest.

   ![Screenshot eines Eintrags im Feld „Zulässige Werte“](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **Hinweis**: Du musst eine Image-URL angeben, die genau mit dem in einer Entwicklungscontainerkonfiguration angegebenen Wert übereinstimmt.

   {% endnote %}

1. Klicke auf die Schaltfläche mit dem Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}), um den Wert hinzuzufügen.
1. Wiederhole bei Bedarf die vorherigen beiden Schritte, um weitere Image-URLs hinzuzufügen.
{% data reusables.codespaces.codespaces-policy-targets %}
1. Wenn du der Richtlinie eine weitere Einschränkung hinzufügen möchtest, klicke auf **Einschränkung hinzufügen**, und wähle eine andere Einschränkung aus. Informationen zu anderen Einschränkungen findest du unter:
   * [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
   * [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
   * [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)
   * [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)
1. Nachdem du deiner Richtlinie Einschränkungen hinzugefügt hast, klicke auf **Speichern**.

Die Richtlinie wird angewendet, wenn versucht wird, einen neuen Codespace zu erstellen, der für deine Organisation abrechenbar ist. Die Basisimageeinschränkung wirkt sich nicht auf vorhandene, aktive oder beendete Codespaces aus.

## Bearbeiten einer Richtlinie

Du kannst eine vorhandenen Richtlinie bearbeiten. Beispielsweise kannst du Einschränkungen einer Richtlinie hinzufügen oder daraus entfernen.

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Definieren der zulässigen Images](#adding-a-policy-to-define-the-allowed-images).
1. Klicke auf den Namen der Richtlinie, die du bearbeiten möchtest.
1. Klicke auf das Stiftsymbol ({% octicon "pencil" aria-label="The edit icon" %}) neben der Einschränkung „Basisimages“.
1. Füge Image-URLs hinzu oder entferne sie.
1. Klicke auf **Speichern**.

## Löschen einer Richtlinie 

1. Zeige die Seite „Codespacerichtlinien“ an. Weitere Informationen findest du unter [Hinzufügen einer Richtlinie zum Definieren der zulässigen Images](#adding-a-policy-to-define-the-allowed-images).
1. Klicke rechts neben der Richtlinie, die du löschen möchten, auf die Schaltfläche „Löschen“.

   ![Screenshot der Schaltfläche zum Löschen einer Richtlinie](/assets/images/help/codespaces/policy-delete.png)
