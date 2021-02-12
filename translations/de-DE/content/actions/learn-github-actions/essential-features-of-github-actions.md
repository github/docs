---
title: Essential features of GitHub Actions
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} are designed to help you build robust and dynamic automations. This guide will show you how to craft {% data variables.product.prodname_actions %} workflows that include environment variables, customized scripts, and more.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Übersicht

{% data variables.product.prodname_actions %} allow you to customize your workflows to meet the unique needs of your application and team. In this guide, we'll discuss some of the essential customization techniques such as using variables, running scripts, and sharing data and artifacts between jobs.

### Using variables in your workflows

{% data variables.product.prodname_actions %} include default environment variables for each workflow run. If you need to use custom environment variables, you can set these in your YAML workflow file. This example demonstrates how to create custom variables named `POSTGRES_HOST` and `POSTGRES_PORT`. These variables are then available to the `node client.js` script.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Weitere Informationen findest Du unter „[Umgebungsvariablen verwenden](/actions/configuring-and-managing-workflows/using-environment-variables)“.

### Adding scripts to your workflow

You can use actions to run scripts and shell commands, which are then executed on the assigned runner. This example demonstrates how an action can use the `run` keyword to execute `npm install -g bats` on the runner.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

For example, to run a script as an action, you can store the script in your repository and supply the path and shell type.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)“.

### Sharing data between jobs

If your job generates files that you want to share with another job in the same workflow, or if you want to save the files for later reference, you can store them in {% data variables.product.prodname_dotcom %} as _artifacts_. Artefakte sind die Dateien, die erstellt werden, wenn Sie Ihren Code erstellen und testen. Artefakte können beispielsweise Binär- oder Paketdateien, Testergebnisse, Screenshots oder Protokolldateien sein. Artifacts are associated with the workflow run where they were created and can be used by another job.

For example, you can create a file and then upload it as an artifact.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: actions/upload-artifact@v1
        with:
          name: output-log-file
          path: output.log
```

To download an artifact from a separate workflow run, you can use the `actions/download-artifact` action. For example, you can download the artifact named `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v2
        with:
          name: output-log-file
```

For more information about artifacts, see "[Persisting workflow data using artifacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)."

### Nächste Schritte:

To continue learning about {% data variables.product.prodname_actions %}, see "[Managing complex workflows](/actions/learn-github-actions/managing-complex-workflows)."
