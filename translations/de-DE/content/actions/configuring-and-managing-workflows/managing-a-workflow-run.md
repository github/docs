---
title: Einen Workflow-Lauf verwalten
intro: 'Sie können den Status und die Ergebnisse der einzelnen Schritte in Ihrem Workflow anzeigen, einen ausstehenden Workflow abbrechen, fakturierbare Auftragsausführungsminuten anzeigen, einen fehlgeschlagenen Workflow debuggen und erneut ausführen, Protokolle suchen und herunterladen und Artefakte herunterladen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zur Workflow-Verwaltung

Auf der Workflow-Lauf-Seite können sie sehen, ob ein Workflow-Lauf ausgeführt wird oder abgeschlossen ist. Wenn der Lauf ausgeführt wird, können Sie den Lauf abbrechen. Sie müssen mit einem {% data variables.product.prodname_dotcom %}-Konto angemeldet sein, um Workflow-Informationen anzuzeigen, auch für öffentliche Repositories. Weitere Informationen finden Sie unter „[Zugriffsberechtigungen auf GitHub](/articles/access-permissions-on-github)“.

Wenn der Lauf abgeschlossen ist, können Sie sehen, ob das Ergebnis erfolgreich, fehlerhaft, abgebrochen oder neutral war. Wenn der Lauf fehlgeschlagen ist, können Sie die Build-Protokolle anzeigen und durchsuchen, um den Fehler zu diagnostizieren und den Workflow erneut auszuführen. Sie können auch fakturierbare Auftragsausführungsminuten anzeigen oder Protokolle herunterladen und Artefakte erstellen.

 ![Annotiertes Workflow-Ausführungsbild](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %} verwenden die Checks API, um Status, Ergebnisse und Protokolle für einen Workflow auszugeben. {% data variables.product.prodname_dotcom %} erstellt eine neue Prüfsuite für jeden Workflow-Lauf. Die Prüfsuite enthält einen Prüflauf für jeden Auftrag im Workflow, und jeder Auftrag enthält Schritte. {% data variables.product.prodname_actions %} werden als Schritt in einem Workflow ausgeführt. Weitere Informationen zur Prüf-API finden Sie unter "[](/v3/checks/)".

{% data reusables.github-actions.invalid-workflow-files %}

### Ihren Workflow-Verlauf anzeigen

Sie können jeden Auftrag in einem Workflow-Lauf und jeden Schritt in einem Auftrag anzeigen. Weitere Informationen findest Du unter „[Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)“.  {% data reusables.repositories.permissions-statement-read %}

Zusätzlich zu den in der Workflowdatei konfigurierten Schritten enthält jeder Auftrag auch zusätzliche Aufgaben zum Initiieren und Abschließen der Ausführung des Auftrags. Diese Schritte werden im Workflow als "Einrichtungsauftrag" und "Auftrags abschließen" protokolliert.

Bei Aufträgen, die auf {% data variables.product.prodname_dotcom %}-gehosteten Läufern ausgeführt werden, zeichnet "Job einrichten" Details der virtuellen Umgebung des Läufers auf und enthält einen Link zur Liste der vorinstallierten Tools, die auf dem Läufercomputer vorhanden waren.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. Wenn der Lauf fehlgeschlagen ist, kannst Du den Workflow optional erneut ausführen, indem Du das Dropdownmenü **Re-run checks** (Prüfungen erneut durchführen) in der oberen rechten Ecke des Workflows verwendest und **Re-run all checks** (Alle Prüfungen erneut durchführen) auswählst. ![Dropdownmenü zum erneuten Durchführen der Prüfungen](/assets/images/help/repository/rerun-checks-drop-down.png)

### Einen Workflow-Lauf abbrechen

Wenn Sie einen Workflowlauf abbrechen, bricht {% data variables.product.prodname_dotcom %} alle Aufträge und Schritte ab, die Teil dieses Workflows sind. {% data reusables.repositories.permissions-statement-write %}

Beim Abbrechen der Workflowausführung führen Sie möglicherweise andere Software aus, die Ressourcen verwendet, die mit der Workflowausführung zusammenhängen. Um Ihnen zu helfen, Ressourcen im Zusammenhang mit der Workflowausführung freizugeben, kann es hilfreich sein, die Schritte zu verstehen, {% data variables.product.prodname_dotcom %} zum Abbrechen einer Workflowausführung ausführt. Weitere Informationen finden Sie unter "[Schritte, die {% data variables.product.prodname_dotcom %} zum Abbrechen eines Workflowlaufs](#steps-github-takes-to-cancel-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Klicke in der oberen rechten Ecke des Workflows auf **Cancel check suite** (Prüfsuite abbrechen). ![Schaltfläche zum Abbrechen der Prüfsuite](/assets/images/help/repository/cancel-check-suite.png)
1. Nachdem Sie auf **Check Suite**"  .

#### Schritte {% data variables.product.prodname_dotcom %} zum Abbrechen einer Workflowausführung führt

1. Um die Workflowausführung abzubrechen, wertet der Server `neu aus, wenn` Bedingungen für alle derzeit ausgeführten Aufträge. Wenn die Bedingung als true</code>`wird, wird der Auftrag nicht abgebrochen. Beispielsweise <code>die Bedingung, ob: always()` als true ausgewertet wird und der Auftrag weiterhin ausgeführt wird. Wenn keine Bedingung vorhanden ist, entspricht dies der Bedingung `wenn: success()`, die nur ausgeführt wird, wenn der vorherige Schritt erfolgreich abgeschlossen wurde.
2. Bei Aufträgen, die abgebrochen werden müssen, sendet der Server eine Abbruchnachricht an alle Läufercomputer mit Aufträgen, die abgebrochen werden müssen.
3. Bei Aufträgen, die weiterhin ausgeführt werden, wertet der Server `neu aus, ob` Bedingungen für die unvollendeten Schritte. Wenn die Bedingung als true</code>`wird, wird der Schritt weiterhin ausgeführt.</li>
<li>Für Schritte, die abgebrochen werden müssen, sendet die Läufermaschine <code>SIGINT/Ctrl-C-` an den Schritteingabeprozess (`Knoten` für Javascript-Aktion, `docker` für Containeraktion und `bash/cmd/pwd` , wenn sie</code> in einem Schritt verwenden `ausführen). Wenn der Prozess nicht innerhalb von 7500 ms beendet wird, sendet der Läufer <code>SIGTERM/Ctrl-Break-` an den Prozess, und wartet dann 2500 ms, bis der Prozess beendet wird. Wenn der Prozess noch ausgeführt wird, tötet der Läufer den Prozessbaum.
5. Nach ablaufen 5 Minuten Abbruchzeit zeitoutt der Server das Beenden aller Aufträge und Schritte, die die Ausführung nicht beenden oder den Abbruchvorgang nicht abschließen können.

### Löschen einer Workflowausführung

Sie können eine Workflowausführung löschen, die abgeschlossen wurde oder mehr als 2 Wochen alt ist. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Um eine Workflowausführung zu löschen, verwenden Sie das Dropdownmenü {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} , und wählen Sie **Workflow löschen**.

    ![Löschen einer Workflowausführung](/assets/images/help/settings/workflow-delete-run.png)
1. Überprüfen Sie die Bestätigungsaufforderung, und klicken Sie auf **Ja, löschen Sie diesen Workflow, der**ausgeführt wird.

    ![Löschen einer Workflowausführungsbestätigung](/assets/images/help/settings/workflow-delete-run-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}

### Anzeigen von abrechnungsfähigen Auftragsausführungsminuten

Sie können die Ausführungszeit eines Auftrags anzeigen, einschließlich der fakturierbaren Minuten, die ein Einzelvorgang angesammelt hat.

Fakturierbare Auftragsausführungsminuten werden nur für Aufträge angezeigt, die auf privaten Repositorys ausgeführt werden, die {% data variables.product.prodname_dotcom %}gehosteten Läufer verwenden. Es gibt keine fakturierbaren Minuten, wenn {% data variables.product.prodname_actions %} in öffentlichen Repositorys oder für Aufträge verwendet werden, die auf selbst gehosteten Läufern ausgeführt werden.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Klicken Sie in der Auftragszusammenfassung auf **Ausführen und fakturierbare Zeitdetails**. ![Link zu Den Ausführungs- und Abrechnungsdetails](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Hinweis:** Die angezeigte Abrechnungszeit enthält keine Rundungen oder Minutenmultiplikatoren. Informationen zum Anzeigen der gesamten {% data variables.product.prodname_actions %} Nutzung, einschließlich Rundungs- und Minutenmultiplikatoren, finden Sie unter "[Anzeigen Ihrer {% data variables.product.prodname_actions %} Nutzung](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)".

   {% endnote %}

{% endif %}

### Protokolle zur Fehlerdiagnose anzeigen

Wenn Ihr Workflow-Lauf fehlschlägt, können Sie sehen, welcher Schritt den Fehler verursacht hat, und die Build-Protokolle des fehlgeschlagenen Schrittes zur Fehlerbehebung überprüfen. Sie sehen, wie lange es gedauert hat, bis jeder Schritt ausgeführt wurde. Sie können außerdem einen Permalink in eine bestimmte Zeile in der Protokolldatei kopieren, um ihn mit Ihrem Team zu teilen. {% data reusables.repositories.permissions-statement-read %}

{% data variables.product.product_name %} speichert vollständige Buildprotokolle und Artefakte 90 Tage lang.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Um das Protokoll für einen fehlgeschlagenen Schritt einzublenden, klicken Sie auf den Schritt. ![Name des fehlgeschlagenen Schrittes](/assets/images/help/repository/failed-check-step.png)
7. Klicke bei Bedarf auf die Zeilennummer des Schritts, um einen Link zu einer bestimmten Zeile in den Logs zu erhalten. Den Link kannst Du aus der Adressleiste Deines Webbrowsers kopieren. ![Schaltfläche zum Kopieren des Links](/assets/images/help/repository/copy-link-button.png)

### Protokolle durchsuchen

Sie können die Build-Protokolle für einen bestimmten Schritt durchsuchen. Beim Durchsuchen von Protokollen werden nur eingeblendete Schritte in die Ergebnisse einbezogen. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Um jeden Schritt, den Sie in Ihre Suche einbeziehen möchten, einzublenden, klicken Sie auf den Schritt. ![Name des Schrittes](/assets/images/help/repository/failed-check-step.png)
7. Gib in der oberen rechten Ecke der Protokollausgabe im Suchfeld **Search logs** (Protokolle durchsuchen) eine Suchanfrage ein. ![Suchfeld zum Durchsuchen von Protokollen](/assets/images/help/repository/search-log-box.png)

### Herunterladen von Protokollen

Sie können die Protokolldateien von Ihrem Workflowlauf herunterladen. Sie können auch die Artefakte eines Workflows herunterladen. Weitere Informationen findest Du unter „[Workflow-Daten mittels Artefakten persistieren](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)“. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Um Protokolle herunterzuladen, verwende das Dropdownmenü **Download logs** (Protokolle herunterladen), und wähle die Protokolle aus, die Du herunterladen möchtest. ![Dropdownmenü zum Herunterladen von Protokollen](/assets/images/help/repository/download-logs-drop-down.png)

### Logs löschen

Du kannst die Logdateien aus Deiner Workflow-Ausführung löschen. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Um die Logdateien zu löschen, klicke auf **Delete all logs** (Alle Logs löschen) und überprüfe die Bestätigungsanfrage. ![Delete all logs](/assets/images/help/repository/delete-all-logs.png) Nach die Protokolle gelöscht sind, verschwindet die Schaltfläche  **Delete all logs**, um anzuzeigen, dass keine Protokolldateien mehr im Workflowlauf verbleiben.

### Debug-Protokollierung aktivieren

Wenn die Workflow-Logs nicht genügend Details zur Diagnose enthalten, warum ein Workflow, ein Job oder ein Schritt nicht wie erwartet abläuft, können Sie die zusätzliche Debug-Protokollierung aktivieren.

Diese zusätzlichen Protokolle werden aktiviert, indem Geheimnisse im Repository, die den Workflow enthalten, gesetzt werden, sodass die gleichen Berechtigungsanforderungen gelten:

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Weitere Informationen zum Festlegen von Geheimnissen finden Sie unter "[Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

#### Diagnose-Protokollierung des Runners aktivieren

Die Runner-Diagnoseprotokollierung stellt zusätzliche Protokolldateien bereit, die Informationen darüber enthalten, wie ein Läufer einen Auftrag ausführt. In das Protokollarchiv werden zwei weitere Protokolldateien aufgenommen:

* das Runner-Prozessprotokoll mit Informationen zur Koordinierung und Einrichtung von Runnern für die Ausführung von Aufträgen
* das Worker-Prozessprotokoll, in dem die Ausführung eines Auftrags protokolliert wird

1. Zum Aktivieren der Runner-Diagnoseprotokollierung legen Sie das folgende Geheimnis im Repository fest, in dem sich der Workflow befindet: `ACTIONS_RUNNER_DEBUG` auf `true`.

1. Sollen die Runner-Diagnoseprotokolle heruntergeladen werden, laden Sie das Protokollarchiv des Workflow-Laufs herunter. Die Runner-Diagnoseprotokolle befinden sich im Ordner `runner-diagnostic-logs`. Weitere Informationen zum Herunterladen von Protokollen finden Sie unter "[Herunterladen von Protokollen](#downloading-logs)".

#### Debug-Schrittprotokollierung aktivieren

Bei der Debug-Schrittprotokollierung werden ausführlichere Protokolle während und nach der Ausführung eines Auftrags erstellt.

1. Zum Aktivieren der Debug-Schrittprotokollierung legen Sie das folgende Geheimnis im Repository fest, in dem sich der Workflow befindet: `ACTIONS_STEP_DEBUG` auf `true`.

1. Sobald Sie das Geheimnis festgelegt haben, werden weitere Debug-Ereignisse in den Schrittprotokollen aufgeführt. Weitere Informationen finden Sie unter [„Protokolle zur Fehlerdiagnose anzeigen“](#viewing-logs-to-diagnose-failures).


### Weiterführende Informationen

- „[Informationen zu {% data variables.product.prodname_actions %}](/articles/about-github-actions)“
- „[Einen Workflow konfigurieren](/articles/configuring-a-workflow)“
- „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)“
- „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows)“
- „[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)“
