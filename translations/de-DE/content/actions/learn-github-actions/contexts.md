---
title: Kontexte
shortTitle: Contexts
intro: Du kannst auf Kontextinformationen in Workflows und Aktionen zugreifen.
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
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191934'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Kontexten

Kontexte sind eine Möglichkeit, auf Informationen zu Workflow-Läufen, Runner-Umgebungen, Jobs und Schritten zuzugreifen. Ein Kontext ist ein Objekt, das Eigenschaften enthält. Dabei kann es sich um Zeichenfolgen oder andere Objekte handeln.

{% data reusables.actions.context-contents %} Der Kontext `matrix` wird beispielsweise nur für Aufträge in einer [Matrix](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) aufgefüllt.

Mithilfe der Syntax für Ausdrücke kannst du auf Kontexte zugreifen. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Kontextname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `github` | `object` | Informationen zum Workflow-Lauf. Weitere Informationen findest du unter [Kontext `github`](#github-context). |
| `env` | `object` | Enthält Umgebungsvariablen, die in einem Workflow, Job oder Schritt festgelegt sind. Weitere Informationen findest du unter [Kontext `env`](#env-context). |
| `job` | `object` | Informationen zum derzeit ausgeführten Auftrag. Weitere Informationen findest du unter [Kontext `job`](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | Nur für wiederverwendbare Workflows, enthält Ausgaben von Aufträgen aus dem wiederverwendbaren Workflow. Weitere Informationen findest du unter [Kontext `jobs`](#jobs-context). |{% endif %} | `steps` | `object` | Informationen zu den Schritten, die im aktuellen Auftrag ausgeführt werden. Weitere Informationen findest du unter [Kontext `steps`](#steps-context). | | `runner` | `object` | Informationen zum Runner, der den aktuellen Auftrag ausführt. Weitere Informationen findest du unter [Kontext `runner`](#runner-context). | | `secrets` | `object` | Enthält die Namen und Werte von Geheimnissen, die für eine Workflowausführung verfügbar sind. Weitere Informationen findest du unter [Kontext `secrets`](#secrets-context). | | `strategy` | `object` | Informationen zur Ausführungsstrategie der Matrix für den aktuellen Auftrag. Weitere Informationen findest du unter [Kontext `strategy`](#strategy-context). | | `matrix` | `object` | Enthält die im Workflow definierten Matrixeigenschaften, die für den aktuellen Auftrag gelten. Weitere Informationen findest du unter [Kontext `matrix`](#matrix-context). | | `needs` | `object` | Enthält die Ausgaben aller Aufträge, die als Abhängigkeit des aktuellen Auftrags definiert sind. Weitere Informationen findest du unter [Kontext `needs`](#needs-context). | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | Enthält die Eingaben eines wiederverwendbaren {% ifversion actions-unified-inputs %}oder manuell ausgelösten {% endif %}Workflows. Weitere Informationen findest du unter [Kontext `inputs`](#inputs-context). |{% endif %}

Als Teil eines Ausdrucks kannst du mit einer der beiden folgenden Syntaxarten auf Kontextinformationen zugreifen.

- Indexsyntax: `github['sha']`
- Syntax zur Dereferenzierung von Eigenschaften: `github.sha`

Um die Syntax zur Dereferenzierung von Eigenschaften zu verwenden, muss der Eigenschaftsname mit einem Buchstaben oder `_` beginnen oder nur alphanumerische Zeichen, `-` oder `_` enthalten.

Wenn du versuchst, eine nicht vorhandene Eigenschaft zu dereferenzieren, wird sie als leere Zeichenfolge ausgewertet.

### Anwendungsfälle für Kontexte

{% data reusables.actions.using-context-or-environment-variables %}

### Kontextverfügbarkeit

Bei der Ausführung eines Workflows stehen verschiedene Kontexte zur Verfügung. Der `secrets`-Kontext kann beispielsweise nur an bestimmten Stellen innerhalb eines Auftrags verwendet werden.

Darüber hinaus können auch einige Funktionen nur an bestimmten Stellen verwendet werden. Die Funktion `hashFiles` ist beispielsweise nicht überall verfügbar.

In der folgenden Tabelle siehst du, an welchen Stellen die einzelnen Kontexte und Sonderfunktionen innerhalb eines Workflows verwendet werden können. Funktionen, die nicht in der Liste aufgeführt werden, können überall verwendet werden.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Workflowschlüssel | Kontext | Sonderfunktionen |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| Pfad | Kontext | Sonderfunktionen |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Beispiel: Drucken von Kontextinformationen ins Protokoll

Du kannst den Inhalt von Kontexten zum Debuggen ins Protokoll drucken. Die [Funktion `toJSON`](/actions/learn-github-actions/expressions#tojson) ist für die Quelltextformatierung von JSON-Objekten im Protokoll erforderlich

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## Kontext `github`

Der `github`-Kontext enthält Informationen zur Workflowausführung und zum Ereignis, das die Ausführung ausgelöst hat. Die meisten Daten zum `github`-Kontext kannst du auch in Umgebungsvariablen lesen. Weitere Informationen zu Umgebungsvariablen findest du unter [Verwenden von Umgebungsvariablen](/actions/automating-your-workflow-with-github-actions/using-environment-variables).

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `github` | `object` | Der Top-Level-Kontext, der bei jedem Job oder Schritt im Workflow verfügbar ist. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `github.action` | `string` | Name der aktuell ausgeführten Aktion oder der [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)-Wert eines Schritts. {% data variables.product.prodname_dotcom %} entfernt Sonderzeichen und verwendet den Namen `__run`, wenn der aktuelle Schritt ein Skript ohne `id` ausführt. Wenn du eine Aktion mehr als einmal im selben Auftrag verwendest, enthält der Name ein Suffix mit der Sequenznummer, der ein Unterstrich vorangestellt wird. So lautet z. B. der Name des ersten Skripts, das du ausführst, `__run` und der des zweiten `__run_2`. Analog dazu erhält der zweite Aufruf von `actions/checkout` den Namen `actionscheckout2`. |
| `github.action_path` | `string` | Pfad einer Aktion. Diese Eigenschaft wird nur in zusammengesetzten Aktionen unterstützt. Mit diesem Pfad kannst du auf Dateien zugreifen, die sich im gleichen Repository wie die Aktion befinden. |
| `github.action_ref` | `string` | Bei einem Schritt, in dem eine Aktion ausgeführt wird, verweist diese Eigenschaft auf die ausgeführte Aktion. Beispiel: `v2`. |
| `github.action_repository` | `string` | Bei einem Schritt, in dem eine Aktion ausgeführt wird, gibt diese Eigenschaft den Namen des Besitzers bzw. der Besitzerin und des Repositorys der Aktion an. Beispiel: `actions/checkout`. |
| `github.action_status` | `string` | Das aktuelle Ergebnis einer zusammengesetzten Aktion. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}Der Benutzername des Benutzers bzw. der Benutzerin, der/die die erste Workflowausführung ausgelöst hat. Wenn die Workflowausführung eine erneute Ausführung ist, unterscheidet sich dieser Wert möglicherweise von `github.triggering_actor`. Alle Workflowneuausführungen verwenden die Berechtigungen von `github.actor`, auch wenn der Akteur bzw. die Akteurin, der/die die erneute Ausführung (`github.triggering_actor`) initiiert, unterschiedliche Berechtigungen hat.{% else %}Der Benutzername des Benutzers bzw. der Benutzerin, der/die die Workflowausführung initiiert hat.{% endif %} |
| `github.api_url` | `string` | URL der {% data variables.product.prodname_dotcom %}-REST-API. |
| `github.base_ref` | `string` | `base_ref`- oder Zielbranch des Pull Requests in einer Workflowausführung. Diese Eigenschaft ist nur verfügbar, wenn es sich bei dem Ereignis, das eine Workflowausführung auslöst, um `pull_request` oder `pull_request_target` handelt. |
| `github.env` | `string` | Pfad des Runners zur Datei, die Umgebungsvariablen aus Workflowbefehlen festlegt. Diese Datei ist für den aktuellen Schritt eindeutig und unterscheidet sich für jeden Schritt in einem Auftrag. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable). |
| `github.event` | `object` | Die vollständige Nutzlast des Ereignis-Webhooks. Mit diesem Kontext kannst du auf einzelne Eigenschaften des Ereignisses zugreifen. Dieses Objekt ist identisch mit der Webhooknutzlast des Ereignisses, das die Workflowausführung ausgelöst hat, und unterscheidet sich für jedes Ereignis. Die Webhooks für jedes {% data variables.product.prodname_actions %}-Ereignis werden unter [Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows/) verknüpft. Für einen Workflow, der vom [Ereignis `push`](/actions/using-workflows/events-that-trigger-workflows#push) ausgelöst wird, enthält dieses Objekt beispielsweise den Inhalt der [Webhooknutzlast „push“](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | Der Name des Ereignisses, das den Workflow-Lauf ausgelöst hat. |
| `github.event_path` | `string` | Pfad des Runners zur Datei mit der vollständigen Webhooknutzlast des Ereignisses. |
| `github.graphql_url` | `string` | URL der {% data variables.product.prodname_dotcom %}-GraphQL-API. |
| `github.head_ref` | `string` | `head_ref`- oder Quellbranch des Pull Requests in einer Workflowausführung. Diese Eigenschaft ist nur verfügbar, wenn es sich bei dem Ereignis, das eine Workflowausführung auslöst, um `pull_request` oder `pull_request_target` handelt. |
| `github.job` | `string` | [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)-Wert des aktuellen Auftrags. <br /> Hinweis: Diese Kontexteigenschaft wird vom Actions-Runner festgelegt und ist nur innerhalb der `steps` der Ausführung eines Auftrags verfügbar. Andernfalls ist der Wert dieser Eigenschaft `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | Pfad des Runners zur Datei, die `PATH`-Systemvariablen aus Workflowbefehlen festlegt. Diese Datei ist für den aktuellen Schritt eindeutig und unterscheidet sich für jeden Schritt in einem Auftrag. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path). | | `github.repository` | `string` | Besitzer und Name des Repositorys. Beispiel: `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | Name des Repositorybesitzers. Beispiel: `Codertocat`. | | `github.repositoryUrl` | `string` | Git-URL zum Repository. Beispiel: `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | Anzahl der Tage, für die Protokolle und Artefakte der Workflowausführung beibehalten werden. | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | Eindeutige Nummer für jeden Versuch einer bestimmten Workflowausführung in einem Repository. Diese Nummer beginnt bei 1 für den ersten Versuch der Workflowausführung und erhöht sich mit jeder weiteren Ausführung um 1. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | Die Quelle eines Geheimnisses, das in einem Workflow verwendet wird. Mögliche Werte sind `None`, `Actions`, `Dependabot` oder `Codespaces`. | {%- endif %} | `github.server_url` | `string` | URL des GitHub-Servers. Beispiel: `https://github.com`. | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | Ein Token zur Authentifizierung im Auftrag der GitHub-App, die in deinem Repository installiert ist. Diese Funktion entspricht dem Geheimnis `GITHUB_TOKEN`. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication).  <br /> Hinweis: Diese Kontexteigenschaft wird vom Actions-Runner festgelegt und ist nur innerhalb der `steps` der Ausführung eines Auftrags verfügbar. Andernfalls ist der Wert dieser Eigenschaft `null`. {% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | Der Benutzername des Benutzers bzw. der Benutzerin, der/die die erste Workflowausführung initiiert hat. Wenn die Workflowausführung eine erneute Ausführung ist, unterscheidet sich dieser Wert möglicherweise von `github.actor`. Alle Workflowneuausführungen verwenden die Berechtigungen von `github.actor`, auch wenn der Akteur bzw. die Akteurin, der/die die Neuausführung (`github.triggering_actor`) initiiert, unterschiedliche Berechtigungen hat. | {% endif %} | `github.workflow` | `string` | Der Name des Workflows. Wird in der Workflowdatei kein `name`-Wert festgelegt, entspricht der Wert dieser Eigenschaft dem vollständigen Pfad der Workflowdatei im Repository. | | `github.workspace` | `string` | Standardarbeitsverzeichnis des Runners für die Schritte und Standardspeicherort deines Repositorys bei Verwendung der Aktion [`checkout`](https://github.com/actions/checkout). |

### Beispielinhalt des `github`-Kontexts

Der folgende Beispielkontext stammt aus einer Workflowausführung, die vom Ereignis `push` ausgelöst wurde. Das `event`-Objekt in diesem Beispiel wurde gekürzt, da es mit dem Inhalt der [Webhooknutzlast `push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push) identisch ist.

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Beispielverwendung des `github`-Kontexts

In diesem Beispielworkflow wird der `github.event_name`-Kontext verwendet, um einen Auftrag nur dann auszuführen, wenn die Workflowausführung vom Ereignis `pull_request` ausgelöst wurde.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## Kontext `env`

Der `env`-Kontext enthält Umgebungsvariablen, die in einem Workflow, Auftrag oder Schritt festgelegt wurden. Weitere Informationen zum Festlegen von Umgebungsvariablen in deinem Workflow findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env).

Mit der Syntax für den `env`-Kontext kannst du den Wert einer Umgebungsvariablen in der Workflowdatei verwenden. Du kannst den `env`-Kontext im Wert eines beliebigen Schlüssels in einem Schritt verwenden, mit Ausnahme der Schlüssel `id` und `uses`. Weitere Informationen zur Schrittsyntax findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps).

Wenn Du den Wert einer Umgebungsvariable innerhalb eines Runners verwenden willst, dann verwende die normale Methode des Runner-Betriebssystems zum Lesen von Umgebungsvariablen.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `env` | `object` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. Dieses Objekt enthält die unten aufgeführten Eigenschaften. |
| `env.<env_name>` | `string` | Der Wert einer bestimmten Umgebungsvariable. |

### Beispielinhalt des `env`-Kontexts

Der Inhalt des `env`-Kontexts ist eine Zuordnung der Namen von Umgebungsvariablen zu ihren Werten. Je nach der Stelle in der Workflowausführung kann der Inhalt des Kontexts variieren.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Beispielverwendung des `env`-Kontexts

In diesem Beispielworkflow wird gezeigt, wie du den `env`-Kontext auf der Workflow-, Auftrags- und Schrittebene konfigurierst sowie den Kontext in Schritten verwendest.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## Kontext `job`

Der `job`-Kontext enthält Informationen zum derzeit ausgeführten Auftrag.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `job` | `object` | Dieser Kontext ändert sich bei jedem Auftrag in einem Workflow-Lauf. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `job.container` | `object` | Informationen zum Container des Auftrags. Weitere Informationen zu Containern findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer). |
| `job.container.id` | `string` | ID des Containers. |
| `job.container.network` | `string` | ID des Containernetzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird. |
| `job.services` | `object` | Die für einen Auftrag erstellten Dienstcontainer. Weitere Informationen zu Dienstcontainern findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices). |
| `job.services.<service_id>.id` | `string` | ID des Dienstcontainers. |
| `job.services.<service_id>.network` | `string` | ID des Dienstcontainernetzwerks. Der Runner erstellt das Netzwerk, das von allen Containern in einem Auftrag genutzt wird. |
| `job.services.<service_id>.ports` | `object` | Die offengelegten Ports des Service-Containers |
| `job.status` | `string` | Den aktuellen Status des Auftrags. Mögliche Werte sind `success`, `failure` oder `cancelled`. |

### Beispielinhalt des `job`-Kontexts

In diesem `job`-Beispielkontext wird ein PostgreSQL-Dienstcontainer mit zugeordneten Ports verwendet. Werden in einem Auftrag keine Container oder Dienstcontainer verwendet, enthält der `job`-Kontext nur die Eigenschaft `status`.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Beispielverwendung des `job`-Kontexts

In diesem Beispielworkflow wird ein PostgreSQL-Dienstcontainer konfiguriert und Port 5432 im Dienstcontainer automatisch einem zufällig ausgewählten verfügbaren Port auf dem Host zugeordnet. Mit dem `job`-Kontext wird auf die Nummer des Ports zugegriffen, der dem Host zugewiesen wurde.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## Kontext `jobs`

Der Kontext `jobs` ist nur in wiederverwendbaren Workflows verfügbar und kann nur verwendet werden, um Ausgaben für einen wiederverwendbaren Workflow festzulegen. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow).

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `jobs` | `object` | Ist ausschließlich in wiederverwendbaren Workflows verfügbar und kann nur verwendet werden, um Ausgaben für einen wiederverwendbaren Workflow festzulegen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften.
| `jobs.<job_id>.result` | `string` | Das Ergebnis eines Auftrags im wiederverwendbaren Workflow. Mögliche Werte sind `success`, `failure`, `cancelled` oder `skipped`. |
| `jobs.<job_id>.outputs` | `object` | Der Ausgabensatz eines Auftrags in einem wiederverwendbaren Workflow. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | Der Wert einer spezifischen Ausgabe für einen Auftrag in einem wiederverwendbaren Workflow. |

### Beispielinhalt des `jobs`-Kontexts

Dieses Beispiel für den Kontext `jobs` enthält das Ergebnis und die Ausgaben eines Auftrags aus einer wiederverwendbaren Workflowausführung.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Beispielverwendung des `jobs`-Kontexts

In diesem Beispiel für einen wiederverwendbaren Workflow wird der `jobs`-Kontext verwendet, um Ausgaben für den wiederverwendbaren Workflow festzulegen. Beachte, wie die Ausgaben von den Schritten zum Auftrag und dann zum Trigger `workflow_call` fließen. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow).

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

{% endif %}

## Kontext `steps`

Der `steps`-Kontext enthält Informationen zu den Schritten im aktuellen Auftrag, die über einen angegebenen [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)-Wert verfügen und bereits ausgeführt wurden.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `steps` | `object` | Dieser Kontext ändert sich bei jedem Schritt in einem Auftrag. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `steps.<step_id>.outputs` | `object` | Der Satz an Ausgaben, die für diesen Schritt definiert wurden. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions). |
| `steps.<step_id>.conclusion` | `string` | Ergebnis eines abgeschlossenen Schritts nach der Anwendung von [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Mögliche Werte sind `success`, `failure`, `cancelled` oder `skipped`. Tritt bei einem Schritt vom Typ `continue-on-error` ein Fehler auf, lautet der `outcome`-Wert `failure`, doch der endgültige `conclusion`-Wert lautet `success`. |
| `steps.<step_id>.outcome` | `string` | Ergebnis eines abgeschlossenen Schritts vor der Anwendung von [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Mögliche Werte sind `success`, `failure`, `cancelled` oder `skipped`. Tritt bei einem Schritt vom Typ `continue-on-error` ein Fehler auf, lautet der `outcome`-Wert `failure`, doch der endgültige `conclusion`-Wert lautet `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | Der Wert einer bestimmten Ausgabe |

### Beispielinhalt des `steps`-Kontexts

In diesem `steps`-Beispielkontext siehst du zwei zuvor ausgeführte Schritte mit angegebenem [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)-Wert. Der `id`-Wert des ersten Schritts lautete `checkout`, der des zweiten Schritts `generate_number`. Die Ausgabe des Schritts `generate_number` lautete `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Beispielverwendung des `steps`-Kontexts

In diesem Beispielworkflow wird als Ausgabe in einem Schritt eine Zufallszahl generiert, deren Wert in einem späteren Schritt mit dem `steps`-Kontext gelesen wird.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## Kontext `runner`

Der `runner`-Kontext enthält Informationen zum Runner, der den aktuellen Auftrag ausführt.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `runner` | `object` | Dieser Kontext ändert sich bei jedem Auftrag in einem Workflow-Lauf. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} Die Eigenschaft `runner.workspace` wird absichtlich nicht dokumentiert. Dabei handelt es sich verglichen mit `github.workspace` um eine frühe Actions-Eigenschaft. Sie wird aus Kompatibilitätsgründen beibehalten.
| `runner.workspace` | `string` | | {%- endcomment %}

### Beispielinhalt des `runner`-Kontexts

Der folgende Beispielkontext stammt von einem unter Linux gehosteten {% data variables.product.prodname_dotcom %}-Runner.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Beispielverwendung des `runner`-Kontexts

In diesem Beispielworkflow wird mit dem `runner`-Kontext der Pfad zum temporären Verzeichnis zum Schreiben von Protokollen festgelegt. Bei einem Fehler in der Workflowausführung werden diese Protokolle als Artefakt hochgeladen.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## Kontext `secrets`

Der `secrets`-Kontext enthält die Namen und Werte von Geheimnissen, die für eine Workflowausführung verfügbar sind. Der `secrets`-Kontext ist aus Sicherheitsgründen nicht für zusammengesetzte Aktionen verfügbar. Wenn du ein Geheimnis an eine zusammengesetzte Aktion übergeben möchtest, musst du es explizit als Eingabe übergeben. Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

Das Geheimnis `GITHUB_TOKEN` wird automatisch für jede Workflowausführung erstellt und ist in jedem `secrets`-Kontext enthalten. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication).

{% data reusables.actions.secrets-redaction-warning %}

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `secrets` | `object` | Dieser Kontext ist für jeden Auftrag in einer Workflowausführung identisch. Du kannst bei jedem Schritt in einem Auftrag auf diesen Kontext zugreifen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `secrets.GITHUB_TOKEN` | `string` | Automatisch erstelltes Token für jede Workflowausführung. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). |
| `secrets.<secret_name>` | `string` | Wert eines bestimmten Geheimnisses. |

### Beispielinhalt des `secrets`-Kontexts

Im folgenden Beispielinhalt des `secrets`-Kontexts siehst du das automatisch generierte Geheimnis `GITHUB_TOKEN` sowie zwei weitere Geheimnisse, die für die Workflowausführung verfügbar sind.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Beispielverwendung des `secrets`-Kontexts

{% data reusables.actions.github_token-input-example %}

## Kontext `strategy`

Für Workflows mit einer Matrix enthält der `strategy`-Kontext Informationen zur Ausführungsstrategie der Matrix für den aktuellen Auftrag.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `strategy` | `object` | Dieser Kontext ändert sich bei jedem Auftrag in einem Workflow-Lauf. Auf diesen Kontext kannst du von jedem Auftrag oder Schritt in einem Workflow zugreifen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `strategy.fail-fast` | `boolean` | Bei `true` werden alle ausgeführten Aufträge abgebrochen, wenn bei einem Auftrag in einer Matrix ein Fehler auftritt. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast). |
| `strategy.job-index` | `number` | Index des aktuellen Auftrags in der Matrix. **Hinweis**: Diese Zahl ist nullbasiert. Der Index des ersten Auftrags in der Matrix ist `0`. |
| `strategy.job-total` | `number` | Die Gesamtanzahl der Aufträge in der Matrix. **Hinweis**: Diese Zahl ist **nicht** nullbasiert. Für eine Matrix mit vier Aufträgen ist der Wert von `job-total` z. B. `4`. |
| `strategy.max-parallel` | `number` | Maximale Anzahl der Aufträge, die bei Verwendung einer `matrix`-Auftragsstrategie gleichzeitig ausgeführt werden können. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel). |

### Beispielinhalt des `strategy`-Kontexts

Der folgende Beispielinhalt des `strategy`-Kontexts stammt aus dem letzten Auftrag einer Matrix mit vier Aufträgen. Wie du siehst, unterscheidet sich die nullbasierte Anzahl für `job-index` von der nicht nullbasierten Anzahl für `job-total`.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Beispielverwendung des `strategy`-Kontexts

In diesem Beispielworkflow wird mit der Eigenschaft `strategy.job-index` ein eindeutiger Name für eine Protokolldatei für jeden Auftrag in einer Matrix festgelegt.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## Kontext `matrix`

Für Workflows mit einer Matrix enthält der `matrix`-Kontext die Matrixeigenschaften, die in der Workflowdatei für den aktuellen Auftrag definiert sind. Wenn du z. B. eine Matrix mit den Schlüsseln `os` und `node` konfigurierst, enthält das `matrix`-Kontextobjekt die Eigenschaften `os` und `node` mit den Werten, die für den aktuellen Auftrag verwendet werden.

Der `matrix`-Kontext enthält nur die in der Workflowdatei definierten Eigenschaften, keine Standardeigenschaften.

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `matrix` | `object` | Dieser Kontext ist nur für Aufträge in einer Matrix verfügbar und unterscheidet sich für jeden Auftrag in einer Workflowausführung. Auf diesen Kontext kannst du von jedem Auftrag oder Schritt in einem Workflow zugreifen. Dieses Objekt enthält die unten aufgeführten Eigenschaften. |
| `matrix.<property_name>` | `string` | Wert einer Matrixeigenschaft. |

### Beispielinhalt des `matrix`-Kontexts

Der folgende Beispielinhalt des `matrix`-Kontexts stammt aus einem Auftrag in einer Matrix, die die im Workflow definierten Matrixeigenschaften `os` und `node` aufweist. Der Auftrag führt die Matrixkombination aus einem `ubuntu-latest`-Betriebssystem und Version `16` von Node.js aus.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Beispielverwendung des `matrix`-Kontexts

In diesem Beispielworkflow wird eine Matrix mit den Schlüsseln `os` und `node` erstellt. Mit der Eigenschaft `matrix.os` wird der Runnertyp und mit der Eigenschaft `matrix.node` die Version von Node.js für jeden Auftrag festgelegt.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## Kontext `needs`

Der `needs`-Kontext enthält Ausgaben aller Aufträge, die als direkte Abhängigkeit des aktuellen Auftrags definiert sind. Beachte, dass das nicht für implizit abhängige Aufträge gilt (z. B. abhängige Aufträge eines abhängigen Auftrags). Weitere Informationen zum Definieren von Auftragsabhängigkeiten findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds).

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `needs` | `object` | Dieser Kontext wird nur für Workflowausführungen mit abhängigen Aufträgen ausgefüllt und unterscheidet sich für jeden Auftrag in einer Workflowausführung. Auf diesen Kontext kannst du von jedem Auftrag oder Schritt in einem Workflow zugreifen. Dieses Objekt enthält alle unten aufgeführten Eigenschaften. |
| `needs.<job_id>` | `object` | Ein einzelner Job, von dem der aktuelle Job abhängt. |
| `needs.<job_id>.outputs` | `object` | Die Menge aller Ausgaben eines Jobs, von dem der aktuelle Job abhängt. |
| `needs.<job_id>.outputs.<output name>` | `string` | Der Wert einer bestimmten Ausgabe für einen Job, von dem der aktuelle Job abhängt. |
| `needs.<job_id>.result` | `string` | Das Ergebnis eines Jobs, von dem der aktuelle Job abhängt. Mögliche Werte sind `success`, `failure`, `cancelled` oder `skipped`. |

### Beispielinhalt des `needs`-Kontexts

Im folgenden Beispielinhalt des `needs`-Kontexts siehst du Informationen für zwei Aufträge, von denen der aktuelle Auftrag abhängt.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Beispielverwendung des `needs`-Kontexts

Dieser Beispielworkflow verfügt über drei Aufträge: einen `build`-Auftrag, der einen Build ausführt, einen `deploy`-Auftrag, für den der `build`-Auftrag benötigt wird, und einen `debug`-Auftrag, für den die Aufträge `build` und `deploy` benötigt werden und der nur bei einem Fehler im Workflow ausgeführt wird. Der `deploy`-Auftrag verwendet den `needs`-Kontext auch, um auf eine Ausgabe aus dem `build`-Auftrag zuzugreifen.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Kontext `inputs`

Der `inputs`-Kontext enthält Eingabeeigenschaften, die an eine Aktion{% ifversion actions-unified-inputs %},{% else %} oder{% endif %} einen wiederverwendbaren Workflow{% ifversion actions-unified-inputs %} oder einen manuell ausgelösten Workflow übergeben werden{% endif %}. {% ifversion actions-unified-inputs %}Die Eingabenamen und -typen {% else %}für wiederverwendbare Workflows{% endif %} werden in der Konfiguration des [`workflow_call`-Ereignisses](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) eines wiederverwendbaren Workflows definiert. Die Eingabewerte werden von [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) in einem externen Workflow übergeben, der den wiederverwendbaren Workflow aufruft. {% ifversion actions-unified-inputs %}Für manuell ausgelöste Workflows werden die Eingaben in der Konfiguration des [`workflow_dispatch`-Ereignisses](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) eines Workflows definiert.{% endif %}

Der `inputs`-Kontext enthält nur die in der Workflowdatei definierten Eigenschaften, keine Standardeigenschaften.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| Eigenschaftenname | type | BESCHREIBUNG |
|---------------|------|-------------|
| `inputs` | `object` | Dieser Kontext ist nur in einem [wiederverwendbaren Workflow](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} oder in einem Workflow, der von dem [`workflow_dispatch`-Ereignis](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) ausgelöst wurde, verfügbar {% endif %}. Auf diesen Kontext kannst du von jedem Auftrag oder Schritt in einem Workflow zugreifen. Dieses Objekt enthält die unten aufgeführten Eigenschaften. |
| `inputs.<name>` | `string` oder `number` oder `boolean` | Jeder Eingabewert, der von einem externen Workflow übergeben wurde. |

### Beispielinhalt des `inputs`-Kontexts

Der folgende Beispielinhalt des `inputs`-Kontexts stammt aus einem Workflow, der die Eingaben `build_id`, `deploy_target` und `perform_deploy` definiert hat.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Beispielnutzung des `inputs`-Kontexts in einem wiederverwendbaren Workflow

In diesem Beispiel eines wiederverwendbaren Workflows werden mit dem `inputs`-Kontext die Werte der Eingaben `build_id`, `deploy_target` und `perform_deploy` abgerufen, die an den wiederverwendbaren Workflow vom aufrufenden Workflow übergeben wurden.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Beispielnutzung des `inputs`-Kontexts in einem manuell ausgelösten Workflow

In diesem Beispiel eines durch ein `workflow_dispatch`-Ereignis ausgelösten Workflows werden mit dem `inputs`-Kontext die Werte der Eingaben `build_id`, `deploy_target` und `perform_deploy` abgerufen, die an den Workflow übergeben wurden.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}
