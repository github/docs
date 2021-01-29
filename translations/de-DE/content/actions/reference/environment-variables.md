---
title: Umgebungsvariablen
intro: '{% data variables.product.prodname_dotcom %} setzt Standard-Umgebungsvariablen für jeden {% data variables.product.prodname_actions %}-Workflow-Lauf. Du kannst auch benutzerdefinierte Umgebungsvariablen in Deiner Workflow-Datei festlegen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Umgebungsvariablen

{% data variables.product.prodname_dotcom %} setzt Standard-Umgebungsvariablen, die für jeden Schritt in einem Workflow-Lauf verfügbar sind. Bei Umgebungsvariablen wird die Groß-/Kleinschreibung berücksichtigt. Befehle, die in Aktionen oder „Steps“ (Schritten) ausgeführt werden, können Umgebungsvariablen erstellen, lesen und ändern.

Um benutzerdefinierte Umgebungsvariablen festzulegen, musst Du die Variablen in der Workflow-Datei angeben. You can define environment variables for a step, job, or entire workflow using the [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), and [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) keywords. Weitere Informationen finden Sie unter „[Workflow-Syntax für {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)“.

```yaml
steps:
  - name: Hello world
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

You can also use the {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}`GITHUB_ENV` environment file{% else %} `set-env` workflow command{% endif %} to set an environment variable that the following steps in a workflow can use. The {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}environment file{% else %} `set-env` command{% endif %} can be used directly by an action or as a shell command in a workflow file using the `run` keyword. Weitere Informationen findest Du unter „[Workflow-Befehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)“.

### Standard-Umgebungsvariablen

Es wird dringend empfohlen, dass Aktionen Umgebungsvariablen verwenden, um auf das Dateisystem zuzugreifen, anstatt hartcodierte Dateipfade zu verwenden. {% data variables.product.prodname_dotcom %} legt Umgebungsvariablen für Aktionen fest, die in allen Runner-Umgebungen verwendet werden sollen.

| Umgebungsvariable    | Beschreibung                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Immer auf `true` gesetzt.                                                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_WORKFLOW`    | Der Name des Workflows.                                                                                                                                                                                                                                                                                                                                                                |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_ACTION`      | Die eindeutige Kennung (`id`) der Aktion.                                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_ACTIONS`     | Immer auf `true` gesetzt, wenn {% data variables.product.prodname_actions %} den Workflow ausführt. Du kannst diese Variable verwenden, um zu differenzieren, wann Tests lokal oder von {% data variables.product.prodname_actions %} durchgeführt werden.                                                                                                                           |
| `GITHUB_ACTOR`       | Name der Person oder App, die den Workflow initiiert hat. Beispiel: `octocat`.                                                                                                                                                                                                                                                                                                         |
| `GITHUB_REPOSITORY`  | Der Inhaber- und Repository-Name, Beispiel: `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_EVENT_NAME`  | Name des Webhook-Ereignisses, das den Workflow ausgelöst hat.                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_EVENT_PATH`  | Pfad der Datei mit der gesamten Nutzlast des Webhook-Ereignisses. Beispiel: `/github/workflow/event.json`.                                                                                                                                                                                                                                                                             |
| `GITHUB_WORKSPACE`   | Pfad zum Verzeichnis der Arbeitsoberfläche von {% data variables.product.prodname_dotcom %}. The workspace directory is a copy of your repository if your workflow uses the [actions/checkout](https://github.com/actions/checkout) action. Wenn Du die Aktion `actions/checkout` nicht verwendest, ist das Verzeichnis leer. Beispiel: `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | Commit-SHA, die den Workflow ausgelöst hat. Beispiel: `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                                                      |
| `GITHUB_REF`         | Branch- oder Tag-Ref, das den Workflow ausgelöst hat. Beispiel: `refs/heads/feature-branch-1`. Wenn für den Ereignistyp weder ein Branch noch ein Tag vorliegt, ist die Variable nicht vorhanden.                                                                                                                                                                                      |
| `GITHUB_HEAD_REF`    | Only set for pull request events. The name of the head branch.                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_BASE_REF`    | Only set for pull request events. The name of the base branch.                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_SERVER_URL`  | Returns the URL of the {% data variables.product.product_name %} server. For example: `https://github.com`.                                                                                                                                                                                                                                                                            |
| `GITHUB_API_URL`     | Gibt die API-URL zurück. For example: `https://api.github.com`.                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_GRAPHQL_URL` | Gibt die GraphQL-API-URL zurück. For example: `https://api.github.com/graphql`.                                                                                                                                                                                                                                                                                                        |

{% tip %}

**Note:** If you need to use a workflow run's URL from within a job, you can combine these environment variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

#### Determining when to use default environment variables or contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

### Namens-Konventionen für Umgebungsvariablen

{% note %}

**Hinweis:** In {% data variables.product.prodname_dotcom %} ist das Umgebungsvariablen-Präfix `GITHUB_` für den internen Gebrauch durch {% data variables.product.prodname_dotcom %} reserviert. Wenn Sie eine Umgebungsvariable oder ein Geheimnis mit dem Präfix `GITHUB_` anlegen, tritt ein Fehler auf.

{% endnote %}

Alle neuen Umgebungsvariablen, die auf einen Speicherort im Dateisystem verweisen, müssen das Suffix `_PATH` erhalten. Die Standardvariablen `HOME` und `GITHUB_WORKSPACE` sind von dieser Konvention ausgenommen, da die Bezeichnungen „home“ und „workspace“ bereits einen Speicherort implizieren.
