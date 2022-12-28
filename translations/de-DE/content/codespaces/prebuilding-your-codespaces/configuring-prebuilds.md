---
title: Konfigurieren von Prebuilds
shortTitle: Configure prebuilds
intro: 'Du kannst dein Projekt so konfigurieren, dass ein Codespace automatisch erstellt wird, wenn du eine Änderung an dein Repository sendest.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159117'
---
Du kannst eine Prebuildkonfiguration für die Kombination eines bestimmten Branchs deines Repositorys mit einer bestimmten Dev-Containerkonfigurationsdatei einrichten.

Alle Branches, die aus einem übergeordneten Branch mit Prebuildunterstützung erstellt werden, erhalten in der Regel auch Prebuilds für die gleiche Dev-Containerkonfiguration. Das liegt daran, dass Prebuilds für untergeordnete Branches, die die gleiche Entwicklungscontainerkonfiguration wie der übergeordnete Branch verwenden, größtenteils identisch sind, sodass Entwickler*innen auch von den schnelleren Codespace-Erstellungszeiten für diese Branches profitieren können. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Bei der Konfiguration von Prebuilds für einen Branch stehen Prebuilds für mehrere Computertypen zur Verfügung. Wenn dein Repository jedoch größer als 32 GB ist, sind Prebuilds für 2-Kern- und 4-Kern-Computer nicht verfügbar, da der von diesen bereitgestellte Speicher auf 32 GB begrenzt ist.

## Voraussetzungen 

Prebuilds werden mit {% data variables.product.prodname_actions %} erstellt. Daher muss {% data variables.product.prodname_actions %} für das Repository aktiviert werden, für das du Prebuilds konfigurierst. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

## Konfigurieren von Prebuilds

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. Klicke im Abschnitt „Prebuildkonfiguration“ der Seite auf **Prebuild einrichten**.

   ![Die Schaltfläche „Prebuilds einrichten“](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Wähle den Branch aus, für den du Prebuilds einrichten möchtest.

   ![Das Branch-Dropdownmenü](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **Hinweis**: Alle Branches, die aus einem Basisbranch mit Prebuildunterstützung erstellt werden, erhalten in der Regel auch Prebuilds für die gleiche Dev-Containerkonfiguration. Wenn du beispielsweise Prebuilds für eine Dev-Containerkonfigurationsdatei im Standardbranch des Repositorys aktivierst, erhalten Branches, die auf dem Standardbranch basieren, in den meisten Fällen ebenfalls Prebuilds für die gleiche Dev-Containerkonfiguration.

   {% endnote %}

1. Wähle optional im angezeigten Dropdownmenü **Konfigurationsdatei** die `devcontainer.json`-Konfigurationsdatei aus, die du für deine Prebuilds verwenden möchtest. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson).

   ![Das Dropdownmenü „Konfigurationsdatei“](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Wähle aus, wie du die Updates von Prebuilds automatisch auslösen möchtest.

   * **Bei jedem Push** (Standardeinstellung): Mit dieser Einstellung werden Prebuilds bei jedem Push aktualisiert, der in den angegebenen Branch erfolgt. So wird sichergestellt, dass die aus einem Prebuild generierten Codespaces stets die neueste Codespacekonfiguration enthalten, einschließlich aller zuletzt hinzugefügten oder aktualisierten Abhängigkeiten.
   * **Bei Konfigurationsänderung**: Mit dieser Einstellung werden die Prebuilds jedes Mal aktualisiert, wenn die zugeordneten Konfigurationsdateien für ein bestimmtes Repository und einen bestimmten Branch aktualisiert werden. Damit wird sichergestellt, dass Änderungen an den Konfigurationsdateien des Entwicklungscontainers für das Repository verwendet werden, wenn ein Codespace anhand eines Prebuilds generiert wird. Der {% data variables.product.prodname_actions %}-Workflow, der die Prebuilds aktualisiert, wird seltener ausgeführt, sodass diese Option weniger {% data variables.product.prodname_actions %}-Minuten benötigt. Diese Option garantiert jedoch nicht, dass Codespaces immer zuletzt hinzugefügte oder aktualisierte Abhängigkeiten enthalten, sodass diese möglicherweise manuell hinzugefügt oder aktualisiert werden müssen, nachdem ein Codespace erstellt wurde.
   * **Geplant**: Mit dieser Einstellung kannst du festlegen, dass deine Prebuilds nach einem benutzerdefinierten Zeitplan aktualisiert werden. Dies kann den Verbrauch von {% data variables.product.prodname_actions %}-Minuten verringern. Mit dieser Option werden jedoch möglicherweise Codespaces erstellt, bei denen die neuesten Konfigurationsänderungen des Entwicklungscontainers nicht übernommen werden.

   ![Die Optionen für Prebuildtrigger](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Wähle optional **Prebuild auf bestimmte Regionen beschränken** aus, um Prebuilds nur in bestimmten Regionen zu erstellen. Wähle die Regionen aus, in denen Prebuilds verfügbar sein sollen.

   Standardmäßig werden Prebuilds in allen verfügbaren Regionen erstellt, wobei Speichergebühren pro Prebuild anfallen.

   ![Die Optionen bei der Regionsauswahl](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Hinweise**: 
   * Für den Prebuild in jeder Region fallen individuelle Speichergebühren an. Du solltest daher nur Prebuilds für Regionen aktivieren, von denen du weißt, dass sie verwendet werden. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds).
   * Entwickler*innen können deine Standardregion für {% data variables.product.prodname_github_codespaces %} festlegen, wodurch du Prebuilds für weniger Regionen aktivieren kannst. Weitere Informationen findest du unter [Festlegen deiner Standardregion für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces).

   {% endnote %}

1. Lege unter **Vorlagenverlauf** wahlweise die Anzahl der Prebuildversionen fest, die aufbewahrt werden sollen. Du kannst eine beliebige Zahl zwischen 1 und 5 eingeben. Standardmäßig werden zwei Versionen gespeichert. Das bedeutet, dass nur der neueste Prebuild und die Vorgängerversion gespeichert werden.

   ![Die Einstellung „Prebuildverlauf“](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   Abhängig von den Triggereinstellungen könnte der Prebuild mit jedem Push oder jeder Konfigurationsänderung im Entwicklungscontainer geändert werden. Wenn du ältere Versionen von Prebuilds aufbewahrst, kannst du einen Prebuild aus einem älteren Commit mit einer anderen Konfiguration für den Entwicklungscontainer erstellen als der aktuelle Prebuild. Mit dieser Einstellung kannst du die Anzahl der aufbewahrten Versionen auf ein für deine Anforderungen geeignetes Maß festlegen. 

   Wenn du festlegst, dass nur eine Version deines Prebuilds gespeichert wird, bewahrt {% data variables.product.prodname_github_codespaces %} nur die neueste Version des Prebuilds auf. Ältere Versionen werden bei jedem Update der Vorlage gelöscht. Das bedeutet, dass kein vordefinierter Codespace vorhanden ist, wenn du zurück zu einer älteren Konfiguration des Entwicklungscontainers wechselst.
   
   Für jede Prebuildversion, die aufbewahrt wird, fallen Speicherkosten an. Wenn du beispielsweise Prebuilds in vier Regionen generieren und zwei Versionen aufbewahren möchtest, werden dir bis zu acht Prebuilds in Rechnung gestellt. Weitere Informationen zur Abrechnung findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

1. Füge wahlweise Benutzer*innen oder Teams hinzu, die benachrichtigt werden sollen, wenn bei der Ausführung des Prebuildworkflows für diese Konfiguration ein Fehler auftritt. Beginne mit der Eingabe eines Benutzernamens, eines Teamnamens oder eines vollständigen Namens, und klicke dann auf den gewünschten Namen, sobald dieser angezeigt wird, um ihn der Liste hinzuzufügen. Die Benutzer*innen oder Teams, die du hinzufügst, erhalten eine E-Mail, wenn Prebuildfehler auftreten. Diese enthält einen Link zu den Ausführungsprotokollen des Workflows, um weitere Untersuchungen zu erleichtern.

   ![Benachrichtigungseinstellung für Prebuildfehler](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Wähle am unteren Rand der Seite die Option **Erweiterte Optionen anzeigen** aus.

   ![Screenshot: Seite mit der Prebuildkonfiguration und der hervorgehobenen Option „Erweiterte Optionen anzeigen“](/assets/images/help/codespaces/show-advanced-options.png)

   Wenn du im Abschnitt „Erweiterte Optionen“ die Option **Prebuildoptimierung deaktivieren** auswählst, werden Codespaces ohne Prebuild erstellt, wenn der neueste Prebuildworkflow fehlgeschlagen ist oder gerade ausgeführt wird. Weitere Informationen findest du unter [Problembehandlung bei Prebuilds](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used).

1. Klicke auf **Erstellen**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Nachdem du eine Prebuildkonfiguration erstellt hast, wird diese auf der Seite {% data variables.product.prodname_github_codespaces %} in deinen Repositoryeinstellungen aufgeführt. Ein {% data variables.product.prodname_actions %}-Workflow wird in die Warteschlange gestellt und anschließend ausgeführt, um Prebuilds in den angegebenen Regionen basierend auf deiner Auswahl für den Branch und die Dev-Containerkonfigurationsdatei zu erstellen. 

![Screenshot der Liste der Prebuildkonfigurationen](/assets/images/help/codespaces/prebuild-configs-list.png)

Informationen zum Bearbeiten und Löschen von Prebuildkonfigurationen findest du unter [Verwalten von Prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds).

## Konfigurieren von Umgebungsvariablen

Damit der Prebuildprozess auf Umgebungsvariablen zugreifen kann, die zum Erstellen deiner Entwicklungsumgebung erforderlich sind, kannst du diese entweder als {% data variables.product.prodname_codespaces %}-Repositorygeheimnisse oder als {% data variables.product.prodname_codespaces %}-Organisationsgeheimnisse festlegen. Weitere Informationen findest du unter [Hinzufügen von Geheimnissen für ein Repository](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository) und [Hinzufügen von Geheimnissen für eine Organisation](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization). 

Geheimnisse, die du auf diese Weise erstellst, sind für alle Personen zugänglich, die einen Codespace aus diesem Repository erstellen. Wenn du dies nicht möchtest, kannst du alternativ das `CODESPACES_PREBUILD_TOKEN`-Geheimnis festlegen. Das `CODESPACES_PREBUILD_TOKEN`-Geheimnis wird nur zum Prebuilding verwendet, und sein Wert ist in den Codespaces der Benutzer*innen nicht zugänglich. 

Prebuilds können bei der Erstellung deiner Umgebung keine Geheimnisse auf Benutzerebene verwenden, da diese erst nach der Erstellung des Codespaces verfügbar sind.

## Konfigurieren von zeitaufwendigen Aufgaben, die im Prebuild enthalten sind

Du kannst die Befehle `onCreateCommand` und `updateContentCommand` in deine `devcontainer.json`-Datei einschließen, um zeitaufwändige Prozesse bei der Erstellung des Prebuilds zu verwenden. Weitere Informationen findest du in der {% data variables.product.prodname_vscode %}-Dokumentation unter [ Referenz zu „devcontainer.json“](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts).

`onCreateCommand` wird nur einmal ausgeführt, wenn der Prebuild erstellt wird, wobei `updateContentCommand` zum Zeitpunkt der Erstellung des Prebuilds und bei nachfolgenden Updates ausgeführt wird. Inkrementelle Builds sollten in `updateContentCommand` enthalten sein, da sie die Quelle deines Projekts darstellen und in jedem Prebuildupdate enthalten sein müssen.

## Weitere Informationsquellen

- [Gewähren von Zugriff auf andere Repositorys durch einen Pebuild](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)
- [Problembehandlung bei Prebuilds](/codespaces/troubleshooting/troubleshooting-prebuilds)
