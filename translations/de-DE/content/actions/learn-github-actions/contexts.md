---
title: Kontexte
shortTitle: Kontexte
intro: You can access context information in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About contexts

{% data reusables.github-actions.context-injection-warning %}

Kontexte sind eine Möglichkeit, auf Informationen zu Workflow-Läufen, Runner-Umgebungen, Jobs und Schritten zuzugreifen. Kontexte nutzen die Syntax für Ausdrücke. For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

| Kontextname | Typ      | Beschreibung                                                                                                                                                                                                                                                                                |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`    | `Objekt` | Informationen zum Workflow-Lauf. Weitere Informationen findest Du unter „[`github`-Kontext](#github-context)“.                                                                                                                                                                              |
| `env`       | `Objekt` | Enthält Umgebungsvariablen, die in einem Workflow, Job oder Schritt festgelegt sind. Weitere Informationen findest Du unter [`env`-Kontext](#env-context).                                                                                                                                  |
| `Auftrag`   | `Objekt` | Informationen zum derzeit ausgeführten Job. Weitere Informationen findest Du unter „[`job`-Kontext](#job-context)“.                                                                                                                                                                         |
| `steps`     | `Objekt` | Informationen zu den Schritten, die bei diesem Job ausgeführt wurden. Weitere Informationen findest Du unter „[`steps`-Kontext](#steps-context)“.                                                                                                                                           |
| `runner`    | `Objekt` | Informationen zu dem Runner, der den aktuellen Job ausführt. Weitere Informationen findest Du unter [`runner`-Kontext](#runner-context).                                                                                                                                                    |
| `secrets`   | `Objekt` | Ermöglicht den Zugriff auf Geheimnisse. Weitere Informationen über Geheimnisse findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.                                         |
| `strategy`  | `Objekt` | Ermöglicht den Zugriff auf die konfigurierten Strategieparameter und Informationen zum aktuellen Job. Zu Strategieparametern gehören `fail-fast`, `job-index`, `job-total` und `max-parallel`.                                                                                              |
| `matrix`    | `Objekt` | Ermöglicht den Zugriff auf die Matrixparameter, die Du für den aktuellen Job konfiguriert hast. Wenn Du beispielsweise einen Matrix-Build mit den Versionen von `os` und `node` konfigurierst, umfasst das Kontextobjekt `matrix` die Versionen von `os` und `node` des aktuellen Auftrags. |
| `needs`     | `Objekt` | Ermöglicht den Zugriff auf die Ausgaben aller Jobs, die als Abhängigkeit des aktuellen Jobs definiert sind. Weitere Informationen findest Du unter [`needs`-Kontext](#needs-context).                                                                                                       |

Als Teil eines Ausdrucks kannst Du mit einer der beiden folgenden Syntaxarten auf Kontextinformationen zugreifen.
- Index-Syntax: `github['sha']`
- Syntax zur Dereferenzierung von Eigenschaften: `github.sha`

Bei der Eigenschaftsdereferenzierungs-Syntax muss der Eigenschaftsname
- mit `a-Z` oder `_` beginnen,
- mit `a-Z`, `0-9`, `-` oder `_` weitergehen.

### Determining when to use contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

### `github`-Kontext

Der `github`-Kontext enthält Informationen zum Workflow-Lauf und zu dem Ereignis, das den Lauf ausgelöst hat. Du kannst die meisten `github`-Kontextdaten in Umgebungsvariablen lesen. Weitere Informationen über Umgebungsvariablen findest Du unter „[Umgebungsvariablen verwenden](/actions/automating-your-workflow-with-github-actions/using-environment-variables)“.

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| Name der Eigenschaft      | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `Objekt` | Der Top-Level-Kontext, der bei jedem Job oder Schritt im Workflow verfügbar ist.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `github.action`           | `string` | Der Name der aktuell laufenden Aktion. {% data variables.product.prodname_dotcom %} removes special characters or uses the name `__run` when the current step runs a script.  If you use the same action more than once in the same job, the name will include a suffix with the sequence number with underscore before it.  For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. Ebenso wird die zweite Anrufung von `actions/checkout` `actionscheckout2` sein. |
| `github.action_path`      | `string` | The path where your action is located. You can use this path to easily access files located in the same repository as your action. This attribute is only supported in composite actions.                                                                                                                                                                                                                                                                                                                                     |
| `github.actor`            | `string` | Der Anmeldename des Benutzers, der den Workflow-Lauf initiiert hat                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `github.base_ref`         | `string` | Das `base_ref` oder der Ziel-Branch des Pull Requests in einem Workflow-Lauf. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`.                                                                                                                                                                                                                                                                                                                  |
| `github.event`            | `Objekt` | Die vollständige Nutzlast des Ereignis-Webhooks. Weitere Informationen findest Du unter „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows)“. You can access individual properties of the event using this context.                                                                                                                                                                                                                                                                                |
| `github.event_name`       | `string` | Der Name des Ereignisses, das den Workflow-Lauf ausgelöst hat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `github.event_path`       | `string` | Der Pfad zur vollständigen Event-Webhook-Nutzlast auf dem Runner.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.head_ref`         | `string` | Das `head_ref` oder der Quell-Branch des Pull Requests in einem Workflow-Lauf. This property is only available when the event that triggers a workflow run is either `pull_request` or `pull_request_target`.                                                                                                                                                                                                                                                                                                                 |
| `github.job`              | `string` | Die [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) des aktuellen Jobs.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `github.ref`              | `string` | Das Branch- oder Tag-Ref, das den Workflow-Lauf ausgelöst hat. For branches this is the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                                            |
| `github.repository`       | `string` | Der Inhaber- und Repository-Name, z. B. `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `github.repository_owner` | `string` | Der Name des Repository-Besitzers. Beispielsweise `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.run_id`           | `string` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `string` | {% data reusables.github-actions.run_number_description %}
| `github.run_attempt`      | `string` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run.                                                                                                                                                                                                                                                                                                                                                 |
| `github.server_url`       | `string` | Returns the URL of the GitHub server. For example: `https://github.com`.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `github.sha`              | `string` | Die Commit-SHA, die den Workflow-Lauf ausgelöst hat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `github.token`            | `string` | Ein Token zum Authentifizieren im Namen der in Deinem Repository installierten GitHub-App. Funktionell entspricht dies dem Geheimnis `GITHUB_TOKEN`. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".                                                                                                                                                                                           |
| `github.workflow`         | `string` | Der Name des Workflows. Wenn in der Workflow-Datei kein `name` (Name) festgelegt ist, entspricht der Wert dieser Eigenschaft dem vollständigen Pfad der Workflow-Datei im Repository.                                                                                                                                                                                                                                                                                                                                         |
| `github.workspace`        | `string` | Das Standardarbeitsverzeichnis für Schritte und der Standardspeicherort Deines Repositorys bei Verwendung der Aktion [ `checkout`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                                      |

### `env`-Kontext

Der `env`-Kontext enthält Umgebungsvariablen, die in einem Workflow, Job oder Schritt gesetzt wurden. Weitere Informationen über das Setzen von Umgebungsvariablen in Deinem Workflow findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)“.

Mit der Syntax für den `env`-Kontext kannst Du den Wert einer Umgebungsvariable in Deiner Workflow-Datei verwenden. You can use the `env` context in the value of any key in a **step** except for the `id` and `uses` keys. Weitere Informationen zur Syntax für Schritte findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)“.

Wenn Du den Wert einer Umgebungsvariable innerhalb eines Runners verwenden willst, dann verwende die normale Methode des Runner-Betriebssystems zum Lesen von Umgebungsvariablen.

| Name der Eigenschaft   | Typ      | Beschreibung                                                                                                                              |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `env`                  | `Objekt` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. |
| `env.<env_name>` | `string` | Der Wert einer bestimmten Umgebungsvariable.                                                                                              |

### `job`-Kontext

Der `job`-Kontext enthält Informationen zum gerade ausgeführten Auftrag.

| Name der Eigenschaft                      | Typ      | Beschreibung                                                                                                                                                                                                                                         |
| ----------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Auftrag`                                 | `Objekt` | Dieser Kontext ändert sich bei jedem Auftrag in einem Workflow-Lauf. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen.                                                                                                      |
| `job.container`                           | `Objekt` | Informationen zum Container des Auftrags. Weitere Informationen zu Containern findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)“.              |
| `job.container.id`                        | `string` | Die ID des Containers                                                                                                                                                                                                                                |
| `job.container.network`                   | `string` | Die ID des Container-Netzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird.                                                                                                                            |
| `job.services`                            | `Objekt` | Die für einen Auftrag erstellten Dienstcontainer. Weitere Informationen zu Dienstcontainern findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)“. |
| `job.services.<service id>.id`      | `string` | Die ID des Dienstcontainers                                                                                                                                                                                                                          |
| `job.services.<service id>.network` | `string` | Die ID des Dienstcontainer-Netzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird.                                                                                                                      |
| `job.services.<service id>.ports`   | `Objekt` | Die offengelegten Ports des Service-Containers                                                                                                                                                                                                       |
| `job.status`                              | `string` | Der aktuelle Status des Auftrags. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen) oder `cancelled` (abgebrochen).                                                                                                            |

### `steps`-Kontext

Der `steps`-Kontext enthält Informationen zu den Schritten im aktuellen Job, die bereits ausgeführt wurden.

| Name der Eigenschaft                                | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `Objekt` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen.                                                                                                                                                                                                                                                                                                                                                                                                             |
| `steps.<step id>.outputs`                     | `Objekt` | Der Satz an Ausgaben, die für diesen Schritt definiert wurden. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)“.                                                                                                                                                                                                                                                                                                                   |
| `steps.<step id>.conclusion`                  | `string` | Das Ergebnis eines abgeschlossenen Schritts nachdem[`continue-on-error` (bei Fehler weitermachen)](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) angewendet wurde. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). Wenn ein Schritt mit `continue-on-error` (bei Fehler weitermachen) fehlschlägt, ist `outcome` (Ergebnis) `failure` zwar (Fehler), aber `conclusion` (Schlussfolgerung) ist am Ende `success` (Erfolg). |
| `steps.<step id>.outcome`                     | `string` | Das Ergebnis eines abgeschlossenen Schritts bevor [`continue-on-error` (bei Fehler weitermachen)](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) angewendet wird. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). Wenn ein Schritt mit `continue-on-error` (bei Fehler weitermachen) fehlschlägt, ist `outcome` (Ergebnis) `failure` zwar (Fehler), aber `conclusion` (Schlussfolgerung) ist am Ende `success` (Erfolg).   |
| `steps.<step id>.outputs.<output name>` | `string` | Der Wert einer bestimmten Ausgabe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### `runner`-Kontext

Der `runner`-Kontext enthält Informationen über den Runner, der den aktuellen Job ausführt.

| Name der Eigenschaft | Typ      | Beschreibung                                                                                                                                                                                                                                                                                                                 |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.name`        | `string` | {% data reusables.actions.runner-name-description %}
| `runner.os`          | `string` | {% data reusables.actions.runner-os-description %}
| `runner.temp`        | `string` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache`  | `string` | {% ifversion ghae %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)." {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### `needs`-Kontext

Der `needs`-Kontext enthält Ausgaben von allen Jobs, die als Abhängigkeit des aktuellen Jobs definiert sind. Weitere Informationen zur Definition von Jobabhängigkeiten findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)“.

| Name der Eigenschaft                               | Typ      | Beschreibung                                                                                                                                                                                 |
| -------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `needs.<job id>`                             | `Objekt` | Ein einzelner Job, von dem der aktuelle Job abhängt.                                                                                                                                         |
| `needs.<job id>.outputs`                     | `Objekt` | Die Menge aller Ausgaben eines Jobs, von dem der aktuelle Job abhängt.                                                                                                                       |
| `needs.<job id>.outputs.<output name>` | `string` | Der Wert einer bestimmten Ausgabe für einen Job, von dem der aktuelle Job abhängt.                                                                                                           |
| `needs.<job id>.result`                      | `string` | Das Ergebnis eines Jobs, von dem der aktuelle Job abhängt. Mögliche Werte sind `success` (erfolgreich), `failure` (fehlgeschlagen), `cancelled` (abgebrochen) oder `skipped` (übersprungen). |

#### Beispiel für die Ausgabe von Kontextinformationen in die Protokolldatei

Mit dem folgenden Beispiel einer Workflow-Datei kannst Du die Informationen einsehen, auf die in den einzelnen Kontexten zugegriffen werden kann.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

## Context availability

Different contexts are available throughout a workflow run. For example, the `secrets` context may only be used at certain places within a job.

In addition, some functions may only be used in certain places. For example, the `hashFiles` function is not available everywhere.

The following table indicates where each context and special function can be used within a workflow. Unless listed below, a function can be used anywhere.

| Pfad                       | Context                    | Special functions          |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                            |
| <code>env</code>  | <code>github, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> |                            |
