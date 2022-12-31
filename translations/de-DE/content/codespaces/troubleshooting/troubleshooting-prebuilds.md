---
title: Problembehandlung bei Prebuilds
shortTitle: Codespaces prebuilds
intro: Mit Prebuilds kannst du die Erstellung von Codespaces beschleunigen. Dieser Artikel enthält Schritte zur Behandlung von häufig auftretenden Problemen mit Prebuilds.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158885'
---
Weitere Informationen zu {% data variables.product.prodname_github_codespaces %}-Prebuilds findest du unter [Vordefinieren von Codespaces](/codespaces/prebuilding-your-codespaces).

## Prüfst du, ob ein Codespace aus einem Prebuild erstellt wurde?

Wenn du einen Codespace erstellst, kannst du den Typ des virtuellen Computers auswählen, den du verwenden möchtest. Wenn ein Prebuild für den Typ der VM verfügbar ist, wird „{% octicon "zap" aria-label="The zap icon" %} Prebuild bereit“ daneben angezeigt.

![Eine Liste mit verfügbaren Computertypen](/assets/images/help/codespaces/choose-custom-machine-type.png)

Wenn du die Voreinstellungen für den {% data variables.product.prodname_github_codespaces %}-Editor auf „{% data variables.product.prodname_vscode %} für Web“ festgelegt hast, wird auf der Seite „Einrichten deines Codespace“ die Meldung „Vordefinierter Codespace gefunden“ angezeigt, wenn ein Prebuild verwendet wird. 

![Die Meldung „Vordefinierter Codespace gefunden“](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Ähnlich verhält es sich, wenn deine Editor-Voreinstellung „{% data variables.product.prodname_vscode_shortname %}“ lautet. Dann wird im integrierten Terminal die Meldung „Du befindest dich in einem vordefinierten Codespace, der durch die Prebuildkonfiguration für dein Repository definiert ist“ angezeigt, wenn du einen neuen Codespace erstellst. Weitere Informationen findest du unter [Festlegen deines Standard-Editors für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).

Nachdem du einen Codespace erstellt hast, kannst du überprüfen, ob er aus einem Prebuild erstellt wurde, indem du den folgenden {% data variables.product.prodname_cli %}-Befehl im Terminal ausführst:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Dieser gibt `true` zurück, wenn der Codespace mithilfe eines Prebuilds erstellt wurde.

Wenn {% data variables.product.prodname_cli %} (`gh`) nicht installiert ist, kannst du den folgenden Befehl verwenden, der `createFromPrebuild` zurückgibt, wenn der Codespace aus einem Prebuild erstellt wurde: 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## Die Bezeichnung „Prebuild bereit“ fehlt manchmal.

Wenn du einen neuen Codespace aus einem Branch mit Prebuildunterstützung erstellst, stellst du vielleicht fest, dass die Bezeichnung „{% octicon "zap" aria-label="The zap icon" %} Prebuild bereit“ nicht im Dialogfeld für die Auswahl eines Computertyps angezeigt wird. Dies bedeutet, dass Prebuilds derzeit nicht verfügbar sind.

Der Prebuild wird standardmäßig jedes Mal aktualisiert, wenn du einen Push in einen Branch mit Prebuildunterstützung ausführst. Wenn der Push eine Änderung der Konfiguration des Entwicklungscontainers beinhaltet, wird während der Aktualisierung die Bezeichnung „{% octicon "zap" aria-label="The zap icon" %} Prebuild bereit“ aus der Liste der Computertypen entfernt. Während dieser Zeit kannst du weiterhin Codespaces ohne Prebuild erstellen. Bei Bedarf kannst du die Anzahl der Fälle reduzieren, in denen Prebuilds für ein Repository nicht verfügbar sind, indem du das Prebuild so einstellst, dass es nur aktualisiert wird, wenn du eine Änderung an deinen Dev-Container-Konfigurationsdateien vornimmst, oder nur nach einem benutzerdefinierten Zeitplan. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

Wenn dein Branch nicht speziell für Prebuilds aktiviert ist, kann er trotzdem von Prebuilds profitieren, wenn er von einem Branch mit Prebuildunterstützung abzweigt. Wenn die Dev-Containerkonfiguration jedoch in deinem Branch geändert wird, sodass sie nicht mit der Konfiguration im Basisbranch identisch ist, stehen Prebuilds nicht mehr in deinem Branch zur Verfügung.

Die folgenden Punkte müssen überprüft werden, wenn die Bezeichnung „{% octicon "zap" aria-label="The zap icon" %} Prebuild bereit“ für einen bestimmten Branch nicht angezeigt wird:

* Vergewissere dich, dass für diesen Branch eine Prebuildkonfiguration vorhanden ist. Wenn du kein Repositoryadministrator bist, musst du einen solchen bitten, dies zu bestätigen. 
* Vergewissere dich, dass die Vorbuildkonfiguration deine Region enthält.
* Überprüfe, ob kürzlich eine Änderung der Dev-Containerkonfiguration zu dem Branch mit Prebuildunterstützung verschoben wurde. Wenn dies der Fall ist, musst du in der Regel warten, bis der Prebuildworkflow für diesen Push abgeschlossen ist, bevor Prebuilds erneut verfügbar sind.
* Wenn in letzter Zeit keine Konfigurationsänderungen vorgenommen wurden, navigiere zur Registerkarte **Aktionen** deines Repositorys, klicke in der Liste der Workflows auf **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}-Prebuilds**, und überprüfe, ob Ausführungen von Prebuildworkflows für den Branch erfolgreich sind. Wenn die letzten Ausführungen eines Workflows erfolglos waren und eine oder mehrere dieser erfolglosen Ausführungen Änderungen an der Dev-Container-Konfiguration enthielten, sind keine Prebuilds für den zugehörigen Branch verfügbar. 

## In Codespaces, die mithilfe eines Prebuilds erstellt wurden, kann auf einige Ressourcen nicht zugegriffen werden.

Wenn die `devcontainer.json`-Konfigurationsdatei für eine Prebuildkonfiguration angibt, dass Berechtigungen für den Zugriff auf andere Repositorys erforderlich sind, werden Repositoryadministrator*innen beim Erstellen oder Aktualisieren der Prebuildkonfiguration aufgefordert, diese Berechtigungen zu autorisieren. Wenn der bzw. die Administrator*in nicht alle angeforderten Berechtigungen gewährt, können im Prebuild und in Codespaces, die aus diesem Prebuild erstellt wurden, unter Umständen Probleme auftreten. Dies gilt auch dann, wenn die Benutzer*innen, die einen Codespace basierend auf diesem Prebuild erstellen, alle Berechtigungen _gewähren_, wenn sie dazu aufgefordert werden.

## Problembehandlung bei erfolglosen Workflowausführungen für Prebuilds

### Erhöhen des Ausgabenlimits für {% data variables.product.prodname_actions %} 

Prebuilds werden mit {% data variables.product.prodname_actions %} erstellt und aktualisiert. Prebuildworkflows sind nicht erfolgreich, wenn du alle deine {% data variables.product.prodname_actions %}-Minuten aufgebraucht und dein Ausgabenlimit erreicht hast. Sollte das der Fall sein, kannst du dein Ausgabenlimit für {% data variables.product.prodname_actions %} erhöhen, damit die Workflows ausgeführt werden können. Weitere Informationen findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions).

### Autorisieren von Zugriffsberechtigungen

Wenn die `devcontainer.json`-Konfigurationsdatei für eine Prebuildkonfiguration aktualisiert wird, um anzugeben, dass Berechtigungen für den Zugriff auf andere Repositorys erforderlich sind, und Repositoryadministrator*innen nicht zur Autorisierung dieser Berechtigungen für die Prebuildkonfiguration aufgefordert werden, kann der Prebuild fehlschlagen. Versuche, die Prebuildkonfiguration zu aktualisieren, ohne Änderungen vorzunehmen. Wenn du auf **Aktualisieren** klickst, wird die Autorisierungsseite angezeigt. Überprüfe, ob die angeforderten Berechtigungen geeignet sind, und autorisiere die Anforderung gegebenenfalls. Weitere Informationen findest du unter [Verwalten von Prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration) und [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions).

Wenn die Workflowausführungen für eine Prebuildkonfiguration erfolglos sind, kannst du die Prebuildkonfiguration vorübergehend deaktivieren, während du Untersuchungen anstellst. Weitere Informationen findest du unter [Verwalten von Prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration).

### Verhindern der Verwendung veralteter Prebuilds

Wenn beim neuesten Prebuildworkflow ein Fehler aufgetreten ist, wird standardmäßig ein vorheriger Prebuild für die gleiche Kombination aus Repository, Branch und Konfigurationsdatei (`devcontainer.json`) verwendet, um neue Codespaces zu erstellen. Dieses Verhalten wird als Prebuildoptimierung bezeichnet.

Es empfiehlt sich, die Prebuildoptimierung aktiviert zu lassen, da dadurch sichergestellt werden kann, dass weiterhin schnell Codespaces erstellt werden können, auch wenn kein aktueller Prebuild verfügbar ist. Als Repositoryadministrator kannst du die Prebuildoptimierung jedoch deaktivieren, wenn bei dir Probleme mit vordefinierten Codespaces auftreten, die nicht dem aktuellen Zustand des Branchs entsprechen. Falls du die Prebuildoptimierung deaktivierst, werden Codespaces für die relevante Kombination aus Repository, Branch und der Datei `devcontainer.json` ohne Prebuild erstellt, wenn beim neuesten Prebuildworkflow ein Fehler aufgetreten ist oder wenn der neueste Prebuildworkflow gerade ausgeführt wird.

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. Wähle rechts neben der betroffenen Prebuildkonfiguration die Auslassungspunkte ( **...** ) aus, und klicke anschließend auf **Bearbeiten**.

   ![Screenshot: Liste mit Prebuilds und hervorgehobene Option „Bearbeiten“](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. Scrolle zum unteren Rand der Seite „Konfiguration bearbeiten“, und klicke auf **Erweiterte Optionen anzeigen**.

   ![Screenshot: Seite mit der Prebuildkonfiguration und hervorgehobener Option „Erweiterte Optionen anzeigen“](/assets/images/help/codespaces/show-advanced-options.png)
1. Falls du die Standardeinstellung wirklich deaktivieren möchtest, wähle **Prebuildoptimierung deaktivieren** aus.

   ![Screenshot: Abschnitt mit den erweiterten Optionen und der Einstellung „Prebuildoptimierung deaktivieren“](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. Klicke zum Speichern deiner Änderung auf **Aktualisieren**.

## Weiterführende Themen

- [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)
- [Verwalten von Prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)
