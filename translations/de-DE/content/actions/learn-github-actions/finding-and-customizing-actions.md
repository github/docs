---
title: Finding and customizing actions
shortTitle: Finding and customizing actions
intro: 'Actions are the building blocks that power your workflow. A workflow can contain actions created by the community, or you can create your own actions directly within your application''s repository. This guide will show you how to discover, use, and customize actions.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Übersicht

The actions you use in your workflow can be defined in:

- Ein öffentliches Repository
- The same repository where your workflow file references the action
- Ein veröffentlichtes Docker-Containerimage auf Docker Hub

{% data variables.product.prodname_marketplace %} ist eine zentrale Stelle, an der Du Aktionen findest, die von der {% data variables.product.prodname_dotcom %}-Community erstellt wurden. [{% data variables.product.prodname_marketplace %} page](https://github.com/marketplace/actions/) enables you to filter for actions by category.

{% data reusables.actions.enterprise-marketplace-actions %}

### Browsing Marketplace actions in the workflow editor

Direkt im Workflow-Editor Deines Repositorys kannst Du Aktionen suchen und durchstöbern und auch suchen. In der Seitenleiste kannst Du nach einer bestimmten Aktion suchen, vorgestellte Aktionen anzeigen und vorgestellte Kategorien durchsuchen. Du kannst auch nach der Anzahl der Sterne schauen, die eine Aktion von der {% data variables.product.prodname_dotcom %}-Community erhalten hat.

1. Navigiere in Deinem Repository zu der Workflow-Datei, die Du bearbeiten möchtest.
1. Um den Workflow-Editor zu öffnen, klickst Du in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}. ![Schaltfläche zum Editieren der Workflow-Datei](/assets/images/help/repository/actions-edit-workflow-file.png)
1. Rechts vom Editor befindet sich die Sidebar {% data variables.product.prodname_marketplace %} , um Aktionen zu durchsuchen. Actions with the {% octicon "verified" aria-label="The verified badge" %} badge indicate {% data variables.product.prodname_dotcom %} has verified the creator of the action as a partner organization. ![Seitenleiste für den Marktplatz-Workflow](/assets/images/help/repository/actions-marketplace-sidebar.png)

### Adding an action to your workflow

Die Listing-Seite einer Aktion enthält die Version der Aktion und die erforderliche Workflow-Syntax, um die Aktion zu benutzen. To keep your workflow stable even when updates are made to an action, you can reference the version of the action to use by specifying the Git or Docker tag number in your workflow file.

1. Navigiere zu der Aktion, die Du in Deinem Workflow verwenden möchtest.
1. Klicke unter „Installation“ auf {% octicon "clippy" aria-label="The edit icon" %} , um die Workflow-Syntax zu kopieren. ![Aktionsliste anzeigen](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Füge die Syntax als neuen Schritt in Deinen Workflow ein. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)“.
1. If the action requires you to provide inputs, set them in your workflow. For information on inputs an action might require, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Using release management for your custom actions

The creators of a community action have the option to use tags, branches, or SHA values to manage releases of the action. Similar to any dependency, you should indicate the version of the action you'd like to use based on your comfort with automatically accepting updates to the action.

You will designate the version of the action in your workflow file. Check the action's documentation for information on their approach to release management, and to see which tag, branch, or SHA value to use.

#### Using tags

Tags are useful for letting you decide when to switch between major and minor versions, but these are more ephemeral and can be moved or deleted by the maintainer. This example demonstrates how to target an action that's been tagged as `v1.0.1`:

```yaml
Schritte:
    - verwendet: actions/javascript-action@v1.0.1
```

#### Using SHAs

If you need more reliable versioning, you should use the SHA value associated with the version of the action. SHAs are immutable and therefore more reliable than tags or branches. However this approach means you will not automatically receive updates for an action, including important bug fixes and security updates. This example targets an action's SHA:

```yaml
Schritte:
    - verwendet: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

#### Using branches

Referring to a specific branch means that the action will always use include the latest updates on the target branch, but can create problems if those updates include breaking changes. This example targets a branch named `@main`:

```yaml
steps:
    - uses: actions/javascript-action@main
```

For more information, see "[Using release management for actions](/actions/creating-actions/about-actions#using-release-management-for-actions)."

### Using inputs and outputs with an action

An action often accepts or requires inputs and generates outputs that you can use. For example, an action might require you to specify a path to a file, the name of a label, or other data it will uses as part of the action processing.

To see the inputs and outputs of an action, check the `action.yml` or `action.yaml` in the root directory of the repository.

In this example `action.yml`, the `inputs` keyword defines a required input called `file-path`, and includes a default value that will be used if none is specified. The `outputs` keyword defines an output called `results-file`, which tells you where to locate the results.

```yaml
name: 'Example'
description: 'Receives file and generates output'
inputs:
  file-path:  # id of input
    description: "Path to test script"
    required: true
    default: 'test-file.js'
outputs:
  results-file: # id of output
    description: "Path to results file"
```

### Verweisen auf eine Aktion im selben Repository, in dem eine Workflowdatei die Aktion verwendet

Wenn eine Aktion im selben Repository definiert ist, in dem Ihre Workflowdatei die Aktion verwendet, können Sie auf die Aktion mit der`{owner}/{repo}-{ref}` oder `./path/to/dir-` Syntax in ihrer Workflowdatei verweisen.

Beispiel-Repository-Dateistruktur:

```
|-- hello-world (Repository)
|   |__ .github
|       Workflows
|           My-First-Workflow.yml
|       • Maßnahmen
|           |__ hello-world-action
|               • action.yml
```

Beispiel-Workflowdatei:

```yaml
jobs:
  build:
    läuft auf: ubuntu-latest
    Schritte:
      - Dieser Schritt checkt eine Kopie Ihres Repositorys aus.
      - verwendet: actions/checkout@v2
      - Dieser Schritt verweist auf das Verzeichnis, das die Aktion enthält.
      - verwendet: ./.github/actions/hello-world-action
```

The `action.yml` file is used to provide metadata for the action. Learn about the content of this file in "[Metadata syntax for GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions)"

### Verweisen auf einen Container auf Docker Hub

Wenn eine Aktion in einem veröffentlichten Docker-Containerimage auf Docker Hub definiert ist, müssen Sie auf die Aktion mit der `docker://{image}:{tag}` Syntax in Ihrer Workflowdatei verweisen. Zum Schutz Ihres Codes und Ihrer Daten wird dringend empfohlen, die Integrität des Docker-Containerimages von Docker Hub zu überprüfen, bevor Sie es in Ihrem Workflow verwenden.

```yaml
jobs:
  my_first_job:
    Schritte:
      - Name: Mein erster Schritt
        verwendet: docker://alpine:3.8
```

For some examples of Docker actions, see the [Docker-image.yml workflow](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) and "[Creating a Docker container action](/articles/creating-a-docker-container-action)."

### Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Essential features of {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions)."
