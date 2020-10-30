---
title: Umgebungsvariablen benutzen
intro: '{% data variables.product.prodname_dotcom %} setzt Standard-Umgebungsvariablen für jeden {% data variables.product.prodname_actions %}-Workflow-Lauf. Du kannst auch benutzerdefinierte Umgebungsvariablen in Deiner Workflow-Datei festlegen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Umgebungsvariablen

{% data variables.product.prodname_dotcom %} setzt Standard-Umgebungsvariablen, die für jeden Schritt in einem Workflow-Lauf verfügbar sind. Bei Umgebungsvariablen wird die Groß-/Kleinschreibung berücksichtigt. Befehle, die in Aktionen oder „Steps“ (Schritten) ausgeführt werden, können Umgebungsvariablen erstellen, lesen und ändern.

Um benutzerdefinierte Umgebungsvariablen festzulegen, musst Du die Variablen in der Workflow-Datei angeben. Du kannst Umgebungsvariablen für einen „Step“ (Schritt), Job, oder ganzen Workflow festlegen, indem Du die Schlüsselworte [`jobs.<job_id>.steps.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv) oder [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) verwendest. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)“.

```yaml
steps:
  - name: Hello world
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

Du kannst auch den Workflow-Befehl `set-env` benutzen, um eine Umgebungsvariable festzulegen, die in späteren Schritten ides Workflows verwendet werden kann. Der Befehl `set-env` kann von einer Aktion direkt oder als Shell-Befehl in einer Workflow-Datei mit dem Schlüsselwort `run` verwendet werden. Weitere Informationen findest Du unter „[Workflow-Befehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)“.

### Standard-Umgebungsvariablen

Es wird dringend empfohlen, dass Aktionen Umgebungsvariablen verwenden, um auf das Dateisystem zuzugreifen, anstatt hartcodierte Dateipfade zu verwenden. {% data variables.product.prodname_dotcom %} legt Umgebungsvariablen für Aktionen fest, die in allen Runner-Umgebungen verwendet werden sollen.

| Umgebungsvariable    | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Immer auf `true` gesetzt.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `HOME`               | Pfad zum {% data variables.product.prodname_dotcom %}-Startverzeichnis, in dem die Benutzerdaten gespeichert werden. Beispiel: `/github/home`.                                                                                                                                                                                                                                                                                               |
| `GITHUB_WORKFLOW`    | Der Name des Workflows.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}                                                                                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}                                                                                                                                                                                                                                                                                                                                                                                 |
| `GITHUB_ACTION`      | Die eindeutige Kennung (`id`) der Aktion.                                                                                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_ACTIONS`     | Immer auf `true` gesetzt, wenn {% data variables.product.prodname_actions %} den Workflow ausführt. Du kannst diese Variable verwenden, um zu differenzieren, wann Tests lokal oder von {% data variables.product.prodname_actions %} durchgeführt werden.                                                                                                                                                                            |
| `GITHUB_ACTOR`       | Name der Person oder App, die den Workflow initiiert hat. Beispiel: `octocat`.                                                                                                                                                                                                                                                                                                                                                                    |
| `GITHUB_REPOSITORY`  | Der Inhaber- und Repository-Name, Beispiel: `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                |
| `GITHUB_EVENT_NAME`  | Name des Webhook-Ereignisses, das den Workflow ausgelöst hat.                                                                                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_EVENT_PATH`  | Pfad der Datei mit der gesamten Nutzlast des Webhook-Ereignisses. Beispiel: `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_WORKSPACE`   | Pfad zum Verzeichnis der Arbeitsoberfläche von {% data variables.product.prodname_dotcom %}. Das Arbeitsoberflächen-Verzeichnis enthält ein Unterverzeichnis mit einer Kopie Deines Repositorys, wenn Dein Workflow die Aktion [actions/checkout](https://github.com/actions/checkout) verwendet. Wenn Du die Aktion `actions/checkout` nicht verwendest, ist das Verzeichnis leer. Beispiel: `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | Commit-SHA, die den Workflow ausgelöst hat. Beispiel: `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                                                                                                                 |
| `GITHUB_REF`         | Branch- oder Tag-Ref, das den Workflow ausgelöst hat. Beispiel: `refs/heads/feature-branch-1`. Wenn für den Ereignistyp weder ein Branch noch ein Tag vorliegt, ist die Variable nicht vorhanden.                                                                                                                                                                                                                                                 |
| `GITHUB_HEAD_REF`    | Nur für geforkte Repositorys festgelegt. Der Branch des Head-Repositorys.                                                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_BASE_REF`    | Nur für geforkte Repositorys festgelegt. Der Branch des Basis-Repositorys.                                                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_SERVER_URL`  | Gibt die URL des {% data variables.product.product_name %} -Servers zurück. For example: `https://github.com`.                                                                                                                                                                                                                                                                                                                               |
| `GITHUB_API_URL`     | Gibt die API-URL zurück. For example: `https://api.github.com`.                                                                                                                                                                                                                                                                                                                                                                                   |
| `GITHUB_GRAPHQL_URL` | Gibt die GraphQL-API-URL zurück. For example: `https://api.github.com/graphql`.                                                                                                                                                                                                                                                                                                                                                                   |

### Namens-Konventionen für Umgebungsvariablen

{% note %}

**Hinweis:** In {% data variables.product.prodname_dotcom %} ist das Umgebungsvariablen-Präfix `GITHUB_` für den internen Gebrauch durch {% data variables.product.prodname_dotcom %} reserviert. Wenn Sie eine Umgebungsvariable oder ein Geheimnis mit dem Präfix `GITHUB_` anlegen, tritt ein Fehler auf.

{% endnote %}

Alle neuen Umgebungsvariablen, die auf einen Speicherort im Dateisystem verweisen, müssen das Suffix `_PATH` erhalten. Die Standardvariablen `HOME` und `GITHUB_WORKSPACE` sind von dieser Konvention ausgenommen, da die Bezeichnungen „home“ und „workspace“ bereits einen Speicherort implizieren.
