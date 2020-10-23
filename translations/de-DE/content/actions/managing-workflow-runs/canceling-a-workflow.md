---
title: Canceling a workflow
intro: 'You can cancel a workflow run that is in progress. When you cancel a workflow run, {% data variables.product.prodname_dotcom %} cancels all jobs and steps that are a part of that workflow.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

### Einen Workflow-Lauf abbrechen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, click **Cancel workflow**. ![Schaltfläche zum Abbrechen der Prüfsuite](/assets/images/help/repository/cancel-check-suite.png)

### Steps {% data variables.product.prodname_dotcom %} takes to cancel a workflow run

Beim Abbrechen der Workflowausführung führen Sie möglicherweise andere Software aus, die Ressourcen verwendet, die mit der Workflowausführung zusammenhängen. To help you free up resources related to the workflow run, it may help to understand the steps {% data variables.product.prodname_dotcom %} performs to cancel a workflow run.

1. Um die Workflowausführung abzubrechen, wertet der Server `neu aus, wenn` Bedingungen für alle derzeit ausgeführten Aufträge. Wenn die Bedingung als true</code>`wird, wird der Auftrag nicht abgebrochen. Beispielsweise <code>die Bedingung, ob: always()` als true ausgewertet wird und der Auftrag weiterhin ausgeführt wird. Wenn keine Bedingung vorhanden ist, entspricht dies der Bedingung `wenn: success()`, die nur ausgeführt wird, wenn der vorherige Schritt erfolgreich abgeschlossen wurde.
2. Bei Aufträgen, die abgebrochen werden müssen, sendet der Server eine Abbruchnachricht an alle Läufercomputer mit Aufträgen, die abgebrochen werden müssen.
3. Bei Aufträgen, die weiterhin ausgeführt werden, wertet der Server `neu aus, ob` Bedingungen für die unvollendeten Schritte. Wenn die Bedingung als true</code>`wird, wird der Schritt weiterhin ausgeführt.</li>
<li>Für Schritte, die abgebrochen werden müssen, sendet die Läufermaschine <code>SIGINT/Ctrl-C-` an den Schritteingabeprozess (`Knoten` für Javascript-Aktion, `docker` für Containeraktion und `bash/cmd/pwd` , wenn sie</code> in einem Schritt verwenden `ausführen). Wenn der Prozess nicht innerhalb von 7500 ms beendet wird, sendet der Läufer <code>SIGTERM/Ctrl-Break-` an den Prozess, und wartet dann 2500 ms, bis der Prozess beendet wird. Wenn der Prozess noch ausgeführt wird, tötet der Läufer den Prozessbaum.
5. Nach ablaufen 5 Minuten Abbruchzeit zeitoutt der Server das Beenden aller Aufträge und Schritte, die die Ausführung nicht beenden oder den Abbruchvorgang nicht abschließen können.
