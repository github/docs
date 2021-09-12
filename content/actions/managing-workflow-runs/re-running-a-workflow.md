---
title: Re-running a workflow
intro: You can re-run an instance of a workflow up to 30 days after the initial run.
product: '{% data reusables.gated-features.actions %}'
permissions: People with write permissions to a repository can re-run workflows in the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Re-running a workflow uses the same `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) of the original event that triggered the workflow run. You can re-run a workflow up to 30 days after the initial run. 

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. In the upper-right corner of the workflow, use the **Re-run jobs** drop-down menu, and select **Re-run all jobs**.{% ifversion fpt or ghes > 3.0 or ghae %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To re-run a failed workflow run, use the `run rerun` subcommand. Replace `run-id` with the ID of the failed run that you want to re-run.  If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

```shell
gh run rerun <em>run-id</em>
```

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```

{% endcli %}
