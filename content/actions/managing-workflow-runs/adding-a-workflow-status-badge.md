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

If your workflow uses the `name` keyword, you must reference the workflow by name. If the name of your workflow contains white space, you'll need to replace the space with the URL encoded string `%20`. For more information about the `name` keyword, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)."

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

Alternatively, if your workflow doesn't have a `name`, you must reference the workflow file using the file path relative to the repository's root directory.

{% note %}

**Note:** Referencing the workflow file using the file path does not work if the workflow has a `name`.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

### Using a workflow name

This Markdown example adds a status badge for a workflow with the name "Greet Everyone." The `OWNER` of the repository is the `actions` organization and the `REPOSITORY` name is `hello-world`.

```
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### Using a workflow file path

This Markdown example adds a status badge for a workflow with the file path `.github/workflows/main.yml`. The `OWNER` of the repository is the `actions` organization and the `REPOSITORY` name is `hello-world`.

```
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### Using the `branch` parameter

This Markdown example adds a status badge for a branch with the name `feature-1`.

```
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### Using the `event` parameter

This Markdown example adds a badge that displays the status of workflow runs triggered by the `pull_request` event.

```
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
