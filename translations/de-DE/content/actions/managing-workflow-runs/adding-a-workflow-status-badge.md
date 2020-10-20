---
title: Adding a workflow status badge
intro: You can display a status badge in your repository to indicate the status of your workflows.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

Wenn Ihr Workflow den `Namen` Schlüsselwort verwendet, müssen Sie auf den Workflow anhand des Namens verweisen. Wenn der Name Ihres Workflows Leerraum enthält, müssen Sie das Leerzeichen durch die URL codierte Zeichenfolge `%20`ersetzen. Weitere Informationen zum Schlüsselwort `name` findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)“.

```
https://github.com/<OWNER>/<REPOSITORY>/Workflows/<WORKFLOW_NAME>/badge.svg
```

Wenn Ihr Workflow keinen `Namen`hat, müssen Sie auch auf die Workflowdatei verweisen, indem Sie den Dateipfad relativ zum Stammverzeichnis des Repositorys verwenden.

{% note %}

**Hinweis:** Verweisen auf die Workflowdatei mithilfe des Dateipfads funktioniert nicht, wenn der Workflow einen `Namen`hat.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/Workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

### Using a workflow name

In diesem Markdown-Beispiel wird ein Status-Badge für einen Workflow mit dem Namen "Greet Everyone" hinzugefügt. Die `owner` des Repositorys sind die `Aktionen` Organisation, und der name `REPOSITORY` ist `hello-world`.

```
! [Beispiel-Workflowname] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### Using a workflow file path

In diesem Markdown-Beispiel wird ein Status-Badge für einen Workflow mit dem Dateipfad `.github/workflows/main.yml`hinzugefügt. Die `owner` des Repositorys sind die `Aktionen` Organisation, und der name `REPOSITORY` ist `hello-world`.

```
! [Beispiel Workflowdateipfad] (https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### Using the `branch` parameter

In diesem Markdown-Beispiel wird ein Status-Badge für eine Verzweigung mit dem Namen `Feature-1-`hinzugefügt.

```
! [Beispiel-Zweigparameter] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### Using the `event` parameter

In diesem Markdown-Beispiel wird ein Badge hinzugefügt, das den Status von Workflowausführungen anzeigt, die durch das `pull_request` -Ereignis ausgelöst werden.

```
! [Beispielereignisparameter] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
