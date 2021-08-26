---
title: Viewing workflow run history
intro: You can view logs for each run of a workflow. Logs include the status for each job and step in a workflow.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: View workflow run history
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-read %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Viewing recent workflow runs

To list the recent workflow runs, use the `run list` subcommand.

```shell
gh run list
```

To specify the maximum number of runs to return, you can use the `-L` or `--limit` flag . The default is `10`.

```shell
gh run list --limit 5
```

To only return runs for the specified workflow, you can use the `-w` or `--workflow` flag.  Replace `workflow` with either the workflow name, workflow ID, or workflow file name. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

### Viewing details for a specific workflow run

To display details for a specific workflow run, use the `run view` subcommand. Replace `run-id` with the ID of the run that you want to view. If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent run.

```shell
gh run view <em>run-id</em>
```

To include job steps in the output, use the `-v` or `--verbose` flag.

```shell
gh run view <em>run-id</em> --verbose
```

To view details for a specific job in the run, use the `-j` or `--job` flag.  Replace `job-id` with the ID of the job that you want to view.

```shell
gh run view --job <em>job-id</em>
```

To view the full log for a job, use the `--log` flag.

```shell
gh run view --job <em>job-id</em> --log
```

Use the `--exit-status` flag to exit with a non-zero status if the run failed. For example:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
