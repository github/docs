---
title: Manuelle Ausführung eines Workflows
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the Actions tab on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, or the REST API.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Configuring a workflow to run manually

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. For more information about configuring the `workflow_dispatch` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Running a workflow on {% data variables.product.prodname_dotcom %}

To trigger the `workflow_dispatch` event on {% data variables.product.prodname_dotcom %}, your workflow must be in the default branch. Führen Sie die folgenden Schritte aus, um eine Workflowausführung manuell auszulösen.

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Klicken Sie in der linken Seitenleiste auf den Workflow, den Sie ausführen möchten. ![Aktionen auswählen Workflow](/assets/images/actions-select-workflow.png)
1. Wählen Sie über der Liste der Workflowausführungen **Workflow ausführen**. ![Aktionsworkflow-Dispatch](/assets/images/actions-workflow-dispatch.png)
1. Wählen Sie die Verzweigung aus, in der der Workflow ausgeführt wird, und geben Sie die Eingabeparameter ein, die vom Workflow verwendet werden. Klicken Sie auf **Workflow ausführen**. ![Aktionen manuell ausgeführt Workflow](/assets/images/actions-manually-run-workflow.png)

### Running a workflow using {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To run a workflow, use the `workflow run` subcommand. Replace the `workflow` parameter with either the name, ID, or file name of the workflow you want to run. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow run <em>workflow</em>
```

If your workflow accepts inputs, {% data variables.product.prodname_cli %} will prompt you to enter them. Alternatively, you can use `-f` or `-F` to add an input in `key=value` format. Use `-F` to read from a file.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

You can also pass inputs as JSON by using standard input.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

To run a workflow on a branch other than the repository's default branch, use the `--ref` flag.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```

### Running a workflow using the REST API

Wenn Sie die REST-API verwenden, konfigurieren Sie die `eingaben` und `ref` als Anforderungstextparameter. Wenn die Eingaben weggelassen werden, werden die in der Workflowdatei definierten Standardwerte verwendet.

Weitere Informationen zur Verwendung der REST-API finden Sie unter "[Erstellen eines Workflow-Dispatch-Ereignisses](/rest/reference/actions/#create-a-workflow-dispatch-event)."
