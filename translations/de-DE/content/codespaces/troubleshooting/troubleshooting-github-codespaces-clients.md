---
title: Problembehandlung bei GitHub Codespaces-Clients
shortTitle: Codespaces clients
intro: 'In diesem Artikel findest du Informationen zum Behandeln von Problemen mit Clients, die du für {% data variables.product.prodname_github_codespaces %} verwendest.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186171'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Problembehandlung bei dem {% data variables.product.prodname_vscode %}-Webclient

Wenn bei der Verwendung von {% data variables.product.prodname_github_codespaces %} in einem Browser, der nicht auf Chromium basiert, Probleme auftreten, wechsle zu einem Chromium-basierten Browser wie Google Chrome oder Microsoft Edge. Alternativ kannst du das [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen)-Repository auf bekannte Browserprobleme überprüfen, indem du nach Issues suchst, die den Namen deines Browsers tragen, beispielsweise [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) oder [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Wenn Probleme bei der Verwendung von {% data variables.product.prodname_github_codespaces %} in einem Browser auftreten, der auf Chromium basiert, kannst du überprüfen, ob ein anderes bekanntes Problem mit {% data variables.product.prodname_vscode_shortname %} im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen)-Repository auftritt.

### Unterschiede zum lokalen Arbeiten in {% data variables.product.prodname_vscode_shortname %}

Wenn du einen Codespace in deinem Browser mit dem {% data variables.product.prodname_vscode_shortname %}-Webclient öffnest, wirst du einige Unterschiede gegenüber der Arbeit in einem lokalen Arbeitsbereich in der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung feststellen. Beispielsweise unterscheiden sich einige Tastenzuordnungen, oder sie fehlen, und einige Erweiterungen verhalten sich möglicherweise anders. Eine Zusammenfassung findest du unter [Bekannte Einschränkungen und Anpassungen](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.

Du kannst nach bekannten Issues suchen und neue Issues über die {% data variables.product.prodname_vscode_shortname %}-Benutzeroberfläche im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces)-Repository protokollieren.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders ist das am häufigsten verwendete Release von {% data variables.product.prodname_vscode_shortname %}. Es verfügt über alle aktuellen Features und Fehlerkorrekturen. Darin können jedoch gelegentlich neue Probleme auftreten, die zu einem fehlerhaften Build führen.

Wenn du einen Insiders-Build verwendest und Fehler auftreten, solltest du zu {% data variables.product.prodname_vscode %} Stable wechseln und es erneut versuchen.

Klicke unten links im Editor auf {% octicon "gear" aria-label="The manage icon" %}, und wähle **Zur stabilen Version wechseln...** aus. Wenn der {% data variables.product.prodname_vscode_shortname %}-Webclient nicht lädt oder das {% octicon "gear" aria-label="The manage icon" %}-Symbol nicht angezeigt wird, kannst du den Wechsel zu {% data variables.product.prodname_vscode %} Stable erzwingen, indem du `?vscodeChannel=stable` an deine Codespace-URL anfügst und den Codespace unter dieser URL lädst.

Wenn das Problem in {% data variables.product.prodname_vscode %} Stable nicht behoben wurde, suche nach bekannten Issues, und protokolliere bei Bedarf über die {% data variables.product.prodname_vscode_shortname %}-Benutzeroberfläche einen neuen Issue im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces)-Repository.

{% endwebui %}

{% vscode %}

## Behandeln von Problemen mit {% data variables.product.prodname_vscode_shortname %}

Wenn du einen Codespace in der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung öffnest, wirst du vielleicht einige Unterschiede zur Arbeit in einem lokalen Arbeitsbereich feststellen, aber die Benutzeroberfläche sollte ähnlich sein.

Wenn Probleme auftreten, kannst du nach bekannten Issues suchen und neue Issues über die {% data variables.product.prodname_vscode_shortname %}-Benutzeroberfläche im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces)-Repository protokollieren.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders ist das am häufigsten verwendete Release von {% data variables.product.prodname_vscode_shortname %}. Es verfügt über alle aktuellen Features und Fehlerkorrekturen. Darin können jedoch gelegentlich neue Probleme auftreten, die zu einem fehlerhaften Build führen.

Wenn du einen Insiders-Build verwendest und Fehler auftreten, solltest du zu {% data variables.product.prodname_vscode %} Stable wechseln und es erneut versuchen.

Du kannst zu {% data variables.product.prodname_vscode %} Stable wechseln, indem du die {% data variables.product.prodname_vscode %} Insiders-Anwendung schließt, die {% data variables.product.prodname_vscode %} Stable-Anwendung öffnest und deinen Codespace erneut öffnest.

Wenn das Problem in {% data variables.product.prodname_vscode %} Stable nicht behoben wurde, suche nach bekannten Issues, und protokolliere bei Bedarf über die {% data variables.product.prodname_vscode_shortname %}-Benutzeroberfläche einen neuen Issue im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces)-Repository.

{% endvscode %}

{% jetbrains %}

## Problembehandlung bei JetBrains-IDEs

### Leistungsprobleme

Ein {% data variables.product.prodname_github_codespaces %}-Computertyp mit mindestens vier Kernen wird für die Ausführung einer der JetBrains-IDEs empfohlen. Weitere Informationen zu Computertypen findest du unter [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).

Wenn du einen Computer mit vier oder mehr Kernen verwendest und die Leistung in JetBrains beeinträchtigt erscheint, musst du möglicherweise die maximale Java-Heapgröße erhöhen. 

Es wird empfohlen, die maximale Heapgröße auf einen Wert zwischen 2862 MiB (3 GB) und 60 % des RAM des Remotehosts festzulegen.

Im Folgenden findest du einige Anhaltspunkte für den Anfang, die du je nach Größe der Codebasis und dem für deine Anwendung benötigten Arbeitsspeicher anpassen kannst. Wenn du beispielsweise über eine große oder komplizierte Codebasis verfügst, musst du die Heapgröße möglicherweise weiter erhöhen. Wenn du über eine größere Anwendung verfügst, kannst du eine niedrigere Heapgröße festlegen, um mehr Arbeitsspeicher für die Anwendung zu erhalten.

| Computertyp   | Maximale Heapgröße |
| -------------- | ----------------- |
| Vier Kerne         | 3GB              |
| Acht Kerne         | 4 GB              |
| 16 oder 32 Kerne | 8 GB              |

1. Klicke links neben der Navigationsleiste oben im Anwendungsfenster auf den Namen des Codespaces.

   ![Screenshot: Die Schaltfläche „Ressourcen“ in JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. Notiere dir auf der Registerkarte „Leistung“ die Details zu CPU-Auslastung und Arbeitsspeicher. Diese geben an, ob der Computer überlastet ist.
 
   ![Screenshot: Die Schaltfläche „Localhost“ in JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Klicke auf die Registerkarte „Einstellungen“, und bearbeite die Heapgröße, und erhöhe sie auf nicht mehr als 60 % des verfügbaren Arbeitsspeichers für deinen Codespace.

   ![Screenshot: Die Einstellung für die maximale Heapgröße](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Klicke auf **Speichern und neu starten**.

### Client kann unter macOS Ventura nicht geöffnet werden 

Unter macOS Ventura wird beim ersten Versuch, über das JetBrains-Gateway eine Verbindung mit einem Codespace herzustellen, möglicherweise eine Meldung angezeigt, die dich darüber informiert, dass die JetBrains-Clientanwendung „beschädigt ist und nicht geöffnet werden kann“.

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

Gehe in diesem Fall wie folgt vor:

1. Klicke auf **Abbrechen**, um diese Nachricht zu schließen.
1. Klicke oben links auf dem Bildschirm auf das Apple-Symbol, und klicke auf **Systemeinstellungen**. 
1. Klicke auf **Datenschutz und Sicherheit**, und scrolle nach unten zum Abschnitt „Sicherheit“.

   ![Screenshot des Dialogfelds „Datenschutz und Sicherheit“](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   Es wird eine Meldung angezeigt, die dich darüber informiert, dass die Verwendung des JetBrains-Clients blockiert wurde. 

1. Klicke auf **Trotzdem öffnen**, um den JetBrains-Client zu den erkannten Anwendungen hinzuzufügen. 
   Die Meldung wird erneut angezeigt, aber diesmal mit der Schaltfläche **Öffnen**.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Klicke erneut auf **Abbrechen**.
1. Wechsle zurück zur JetBrains Gateway-Anwendung, und stelle erneut eine Verbindung mit dem erforderlichen Codespace her.
   Der JetBrains-Client wird nun erfolgreich geöffnet. Nachdem du die Clientanwendung für die Ausführung auf deinem Mac autorisiert hast, wird die Meldung nicht mehr angezeigt, wenn du in Zukunft eine Verbindung mit deinen Codespaces herstellst.

### SSH-Verbindungsprobleme

Um eine Verbindung über den SSH-Server herzustellen, der in deinem Codespace ausgeführt wird, musst du über einen SSH-Schlüssel in deinem `~/.ssh`-Verzeichnis (macOS und Linux) oder `%HOMEPATH%\.ssh`-Verzeichnis (Windows) verfügen, der deinem {% data variables.product.prodname_dotcom %}-Konto bereits hinzugefügt wurde. Wenn du keine Schlüssel in diesem Verzeichnis hast, generiert {% data variables.product.prodname_cli %} Schlüssel für dich. Weitere Informationen findest du unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui).

Wenn Probleme bei der Schlüsselüberprüfung auftreten, aktualisiere deine Version von {% data variables.product.prodname_cli %}. Weitere Informationen findest du in den [Upgradeanweisungen](https://github.com/cli/cli#installation) in der INFODATEI für {% data variables.product.prodname_cli %}.

### JetBrains-IDE-Probleme

Hilfe zu Problemen, die speziell die von dir verwendete JetBrains-IDE oder die JetBrains Gateway-Anwendung betreffen, findest du unter [Produktsupport](https://www.jetbrains.com/support/) auf der JetBrains-Website.

{% endjetbrains %}
