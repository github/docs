---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159725"
---
## Hinzufügen eines Ports zur Codespacekonfiguration

Du kannst der {% data variables.product.prodname_github_codespaces %}-Konfiguration für das Repository einen weitergeleiteten Port hinzufügen, sodass der Port automatisch für alle Codespaces weitergeleitet wird, die über das Repository erstellt werden. Nachdem du die Konfiguration aktualisiert hast, müssen alle zuvor erstellten Codespaces neu erstellt werden, damit die Änderung angewendet werden kann. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

Du kannst weitergeleitete Ports in einer Datei vom Typ `.devcontainer.json` mithilfe der Eigenschaft `forwardPorts` manuell konfigurieren oder den Bereich „Ports“ in einem Codespace verwenden, den du im Browser oder in der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung geöffnet hast.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Klicke mit der rechten Maustaste auf den Port, den du der Codespacekonfiguration hinzufügen möchtest, und wähle dann **Bezeichnung festlegen und devcontainer.json aktualisieren** aus.
  ![Option im Kontextmenü zum Festlegen von Bezeichnungen und Hinzufügen eines Ports zu „devcontainer.json“](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}