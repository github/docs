---
title: Einrichten der Codeüberprüfung für ein Repository
shortTitle: Set up code scanning
intro: 'Du kannst die {% data variables.product.prodname_code_scanning %} einrichten, indem du einen Workflow zu deinem Repository hinzufügst.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161134'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Optionen zum Einrichten von {% data variables.product.prodname_code_scanning %}

Du entscheidest, wie du {% data variables.product.prodname_code_scanning %}-Warnungen generieren möchtest und welche Tools auf Repositoryebene verwendet werden sollen. {% data variables.product.product_name %} bietet eine vollständig integrierte Unterstützung für {% data variables.product.prodname_codeql %}-Analysen sowie für Analysen mit Drittanbietertools. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning).

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis**: Beachte bei der Verwendung von CodeQL-Analysen Folgendes: In diesem Artikel werden die Features beschrieben, die mit der Version der CodeQL-Aktion und dem zugehörigen CodeQL-CLI-Bundle im ursprünglichen Release dieser Version von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine neuere Version der CodeQL-Aktion verwendet, findest du Informationen zu den neuesten Features unter [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository). {% ifversion not ghae %} Informationen zur Verwendung der neuesten Version findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## Voraussetzungen

Bevor du {% data variables.product.prodname_code_scanning %} für ein Repository einrichtest, stelle sicher, dass mindestens ein selbstgehosteter {% data variables.product.prodname_actions %}-Runner für das Repository verfügbar ist.

Enterprise-Besitzer sowie Organisations- und Repositoryadministratoren können selbstgehostete Runner hinzufügen. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners) und [Hinzufügen selbstgehosteter Runner](/actions/hosting-your-own-runners/about-self-hosted-runners).
{% endif %}

{% ifversion fpt or ghec %}
## Einrichten von {% data variables.product.prodname_code_scanning %} mithilfe von Startworkflows

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** In diesem Artikel werden die Features beschrieben, die mit der Version der CodeQL-Aktion und dem zugehörigen CodeQL-CLI-Bundle im ursprünglichen Release dieser Version von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine neuere Version der CodeQL-Aktion verwendet, findest du Informationen zu den neuesten Features unter [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository). {% ifversion not ghae %} Informationen zur Verwendung der neuesten Version findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_capc %}-Startworkflows sind für dein Repository nur verfügbar, wenn die {% data variables.product.prodname_code_scanning %} aktiviert ist.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Wurde für das Repository bereits mindestens ein Workflow eingerichtet und ausgeführt, klicke auf **Neuer Workflow**, und fahre mit Schritt 5 fort. Sind derzeit keine Workflows für das Repository konfiguriert, fahre mit dem nächsten Schritt fort.
   ![Screenshot: Schaltfläche „Neuer Workflow“](/assets/images/help/security/actions-new-workflow-button.png)
1. Scrolle nach unten zur Kategorie „Sicherheit“, und klicke unterhalb des Workflows, den du konfigurieren möchtest, auf **Konfigurieren**. Alternativ kannst du auf **Alle anzeigen** klicken, um alle verfügbaren Sicherheitsworkflows anzuzeigen.
   ![Screenshot: Abschnitt „Sicherheit“ für Actions-Workflows](/assets/images/help/security/actions-workflows-security-section.png)
1. Klicke im rechten Bereich der Seite „Workflow“ auf **Dokumentation**, und folge den Anweisungen auf dem Bildschirm, um den Workflow deinen Anforderungen anzupassen.
   ![Screenshot: Registerkarte „Dokumentation“ für Startworkflows](/assets/images/help/security/actions-workflows-documentation.png) Weitere Informationen findest du unter [Verwenden von Startworkflows](/actions/using-workflows/using-starter-workflows#using-starter-workflows) und [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning).

{% endif %}

## Manuelles Einrichten von {% data variables.product.prodname_code_scanning %}

{% ifversion fpt %}

Du kannst {% data variables.product.prodname_code_scanning %} in jedem öffentlichen Repository einrichten, auf das du Schreibzugriff hast.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Klicke rechts neben „{% data variables.product.prodname_code_scanning_capc %}-Warnungen“ auf **{% data variables.product.prodname_code_scanning %} einrichten**.{% ifversion ghec or ghes or ghae %} Wenn {% data variables.product.prodname_code_scanning %} fehlt, musst du einen Organisationsbesitzer oder Repositoryadministrator bitten, {% data variables.product.prodname_GH_advanced_security %} zu aktivieren.{% endif %}. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) oder [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
 ![Schaltfläche „Einrichten von {% data variables.product.prodname_code_scanning %}“ rechts neben „{% data variables.product.prodname_code_scanning_capc %}“ in der Sicherheitsübersicht](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Klicke unter „Erste Schritte mit {% data variables.product.prodname_code_scanning %}“ für {% data variables.code-scanning.codeql_workflow %} oder einen Drittanbieterworkflow auf **Diesen Workflow einrichten**.
 ![Schaltfläche „Diesen Workflow einrichten“ unter der Überschrift „Erste Schritte mit {% data variables.product.prodname_code_scanning %}“](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Workflows werden nur angezeigt, wenn sie für die im Repository erkannten Programmiersprachen relevant sind. {% data variables.code-scanning.codeql_workflow %} wird immer angezeigt. Die Schaltfläche „Diesen Workflow einrichten“ ist jedoch nur aktiviert, wenn die {% data variables.product.prodname_codeql %}-Analyse die im Repository vorhandenen Sprachen unterstützt.
5. Bearbeite den Workflow, wenn du die Codeüberprüfung durch {% data variables.product.prodname_code_scanning %} anpassen möchtest.

   In der Regel kannst du den Commit für {% data variables.code-scanning.codeql_workflow %} ohne Änderungen übernehmen. Viele der Drittanbieterworkflows erfordern jedoch eine zusätzliche Konfiguration. Lies daher vor dem Committen die Kommentare im Workflow.

   Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning).
6. Verwende die Dropdownliste **Start commit** (Commit starten), und gib eine Commitnachricht ein.
 ![Starten des Commits](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Wähle aus, ob du direkt in den Standardbranch committen möchtest, oder erstelle einen neuen Branch, und starte einen Pull Request.
 ![Auswählen des Orts für den Commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Klicke auf **Commit new file** (Neue Datei committen) oder **Propose new file** (Neue Datei vorschlagen).

Standardmäßig wird {% data variables.code-scanning.codeql_workflow %} in {% data variables.product.prodname_code_scanning %} so konfiguriert, dass dein Code jedes Mal analysiert wird, wenn du entweder eine Änderung per Push an den Standardbranch oder an geschützte Branches überträgst oder einen Pull Request für den Standardbranch auslöst. Daraufhin wird {% data variables.product.prodname_code_scanning %} gestartet.

Die `on:pull_request`- und `on:push`-Trigger für Codescans sind jeweils für unterschiedliche Zwecke nützlich. Weitere Informationen findest du unter [Überprüfen von Pull Requests](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests) und [Überprüfen bei Pushvorgängen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).
## Einrichten von {% data variables.product.prodname_code_scanning %} als Massenvorgang

Mithilfe eines Skripts kannst du {% data variables.product.prodname_code_scanning %} für viele Repositorys gleichzeitig einrichten. Wenn du mit einem Skript Pull Requests auslösen möchtest, die mehreren Repositorys einen {% data variables.product.prodname_actions %}-Workflow hinzufügen, findest du im Repository [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) ein Beispiel mit PowerShell bzw. im Repository [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) ein Beispiel für NodeJS (anstelle von PowerShell).

## Anzeigen der Protokollausgabe von {% data variables.product.prodname_code_scanning %}

Nach dem Einrichten von {% data variables.product.prodname_code_scanning %} für dein Repository kannst du die Ausgabe der Aktionen während der Ausführung überwachen.

{% data reusables.repositories.actions-tab %}

  Es wird eine Liste angezeigt, die einen Eintrag für die Ausführung des {% data variables.product.prodname_code_scanning %}-Workflows enthält. Der Text des Eintrags entspricht dem Titel deiner Commitnachricht.

  ![Liste der Aktionen mit {% data variables.product.prodname_code_scanning %}-Workflow](/assets/images/help/repository/code-scanning-actions-list.png)

1. Klicke auf den Eintrag für den {% data variables.product.prodname_code_scanning %}-Workflow.

1. Klicke auf den Namen des Auftrags auf der linken Seite. Beispiel: **Analyse (SPRACHE)** .

  ![Protokollausgabe des {% data variables.product.prodname_code_scanning %}-Workflows](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Überprüfe die Protokollausgabe der Aktionen in diesem Workflow während der Ausführung.

1. Sobald alle Aufträge abgeschlossen sind, kannst du die Details aller identifizierten {% data variables.product.prodname_code_scanning %}-Warnungen anzeigen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

{% note %}

**Hinweis**: Wenn du zum Hinzufügen des {% data variables.product.prodname_code_scanning %}-Workflows zu deinem Repository einen Pull Request ausgelöst hast, werden Warnungen aus diesem Pull Request erst direkt auf der Seite „{% data variables.product.prodname_code_scanning_capc %}“ angezeigt, wenn der Pull Request gemergt wurde. Wurden Warnungen gefunden, kannst du diese vor dem Merge des Pull Requests anzeigen. Klicke hierzu im Banner auf der Seite „{% data variables.product.prodname_code_scanning_capc %}“ auf den Link **_n_ Warnungen gefunden**.

![Klicke auf den Link „n Warnungen gefunden“.](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Grundlegendes zu den Überprüfungen von Pull Requests

Jeder {% data variables.product.prodname_code_scanning %}-Workflow, den du für Pull Requests festgelegt hast, weist immer mindestens zwei Einträge im Abschnitt „Überprüfungen“ eines Pull Requests auf. Ein Eintrag bezieht sich auf die einzelnen Analyseaufträge im Workflow und der letzte Eintrag auf die Ergebnisse der Analyse.

Der Name der {% data variables.product.prodname_code_scanning %}-Analyseüberprüfungen wird im Format „TOOLNAME / AUFTRAGSNAME (TRIGGER)“ angegeben. So erhält beispielsweise die {% data variables.product.prodname_codeql %}-Analyse von C++-Code den Eintrag „{% data variables.product.prodname_codeql %} / Analyse (cpp) (pull_request)“. Klicke für einen {% data variables.product.prodname_code_scanning %} -Analyseeintrag auf **Details**, um die Protokolldaten anzuzeigen. Auf diese Weise kannst du bei einem Fehler im Analyseauftrag das Problem debuggen. Dies kann etwa bei der {% data variables.product.prodname_code_scanning %}-Analyse kompilierter Sprachen der Fall sein, wenn der Code mit der Aktion nicht erstellt werden kann.

  ![{% data variables.product.prodname_code_scanning %}-Überprüfungen von Pull Requests](/assets/images/help/repository/code-scanning-pr-checks.png)

Nach Abschluss der {% data variables.product.prodname_code_scanning %}-Aufträge überprüft {% data variables.product.prodname_dotcom %}, ob vom Pull Request Warnungen hinzugefügt wurden, und fügt der Liste mit den Überprüfungen den Eintrag „{% data variables.product.prodname_code_scanning_capc %}-Ergebnisse / TOOLNAME“ hinzu. Nach mindestens einer Ausführung von {% data variables.product.prodname_code_scanning %} kannst du auf **Details** klicken, um die Ergebnisse der Analyse anzuzeigen.

{% ifversion ghes < 3.5 or ghae %} Wenn du {% data variables.product.prodname_code_scanning %} mithilfe eines Pull Requests dem Repository hinzugefügt hast, wird beim Klicken auf **Details** für den Eintrag „{% data variables.product.prodname_code_scanning_capc %}-Ergebnisse/TOOLNAME“ zunächst die Meldung „Keine Analyse gefunden“ angezeigt.

  ![Meldung „Analyse nicht gefunden“ für Commit](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

In der Tabelle wird mindestens eine Kategorie aufgeführt. Jede Kategorie bezieht sich auf bestimmte Analysen für dasselbe Tool und denselben Commit, die für eine andere Sprache oder einen anderen Teil des Codes ausgeführt wurden. Für jede Kategorie werden in der Tabelle die beiden Analysen angezeigt, die in {% data variables.product.prodname_code_scanning %} miteinander verglichen wurden, um die im Pull Request eingeführten oder behobenen Warnungen zu ermitteln.

Im vorherigen Screenshot wurde von {% data variables.product.prodname_code_scanning %} z. B. eine Analyse für den Mergecommit des Pull Requests gefunden, jedoch keine Analyse für den Kopfteil des Mainbranches.

### Gründe für die Meldung „Keine Analyse gefunden“


Nach der Analyse des Codes in einem Pull Request durch {% data variables.product.prodname_code_scanning %} müssen die Analysen des Topic-Branches (den du zur Erstellung des Pull Requests verwendet hast) und des Basis-Branches (in den der Merge des Pull Requests erfolgen soll) miteinander verglichen werden. Dadurch kann {% data variables.product.prodname_code_scanning %} berechnen, welche Warnungen vom Pull Request neu eingeführt wurden, welche Warnungen im Basis-Branch bereits vorhanden waren und ob durch die Änderungen im Pull Request vorhandene Warnungen behoben wurden. Wenn du {% data variables.product.prodname_code_scanning %} mithilfe eines Pull Requests dem Repository hinzugefügt hast, wurde der Basis-Branch noch nicht analysiert. Daher ist die Berechnung dieser Details zunächst nicht möglich. Wenn du in diesem Fall auf die Ergebnisüberprüfung für den Pull Request klickst, wird die Meldung „Keine Analyse gefunden“ angezeigt.

Es gibt weitere Situationen, in denen möglicherweise keine Analyse des neuesten Commits für den Basis-Branch eines Pull Requests vorhanden ist. Dazu gehören:

* Der Pull Request wurde für einen anderen Branch als den Standardbranch ausgelöst, der nicht analysiert wurde.

  Wenn du überprüfen möchtest, ob ein Branch bereits überprüft wurde, wechsle zur Seite „{% data variables.product.prodname_code_scanning_capc %}“, klicke auf das Dropdownmenü **Branch**, und wähle den entsprechenden Branch aus.

  ![Wähle einen Branch aus der Dropdownliste „Branch“ aus.](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  Füge in diesem Fall den Spezifikationen `on:push` und `on:pull_request` im {% data variables.product.prodname_code_scanning %}-Workflow für diesen Branch den Namen des Basis-Branches hinzu. Füge zudem eine Änderung hinzu, mit der der offene Pull Request, den du überprüfen möchtest, aktualisiert wird.

* Der neueste Commit für den Basis-Branch des Pull Requests wird derzeit analysiert, weshalb die Analyse noch nicht verfügbar ist.

  Warte ein paar Minuten, bevor du eine Änderung per Push an den Pull Request überträgst, um {% data variables.product.prodname_code_scanning %} erneut auszulösen.

* Während der Analyse des neuesten Commits für den Basis-Branch trat ein Fehler auf, weshalb die Analyse für diesen Commit nicht verfügbar ist.

  Merge eine geringfügige Änderung in den Basis-Branch, um {% data variables.product.prodname_code_scanning %} für den neuesten Commit auszulösen. Übertrage anschließend per Push eine Änderung an den Pull Request, um {% data variables.product.prodname_code_scanning %} erneut auszulösen.

{% endif %}

## Nächste Schritte

Nach dem Einrichten von {% data variables.product.prodname_code_scanning %} und dem Abschluss der Aktionen kannst du Folgendes tun:

- Anzeigen aller für dieses Repository generierten {% data variables.product.prodname_code_scanning %}-Warnungen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_code_scanning %}-Warnungen für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).
- Anzeigen von Warnungen, die für einen Pull Request generiert wurden, der nach dem Einrichten von {% data variables.product.prodname_code_scanning %} übermittelt wurde. Weitere Informationen findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).
- Einrichten von Benachrichtigungen für abgeschlossene Ausführungen. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options).
- Anzeigen der Protokolle, die bei der {% data variables.product.prodname_code_scanning %}-Analyse generiert wurden. Weitere Informationen findest du unter [Anzeigen von {% data variables.product.prodname_code_scanning %}-Protokollen](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs).
- Untersuchen von Problemen, die bei der Ersteinrichtung von {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %} auftreten können. Weitere Informationen findest du unter [Problembehandlung für den {% data variables.product.prodname_codeql %}-Workflow](/code-security/secure-coding/troubleshooting-the-codeql-workflow).
- Passe an, wie die {% data variables.product.prodname_code_scanning %} den Code in deinem Repository überprüft. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning).
