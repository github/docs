---
title: ワークフローを再実行する
intro: ワークフローのインスタンスを再実行できます。 ワークフローの再実行では、ワークフローの実行をトリガーした元のイベントと同じ 「GITHUB_SHA」（コミット SHA）と「GITHUB_REF」（Git ref）が使用されます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Re-run a workflow using the {% data variables.product.prodname_dotcom %} UI

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上隅にある [**Re-run jobs**] ドロップダウンメニューを使用して、[**Re-run all jobs**] を選択します。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

### Re-run a workflow using {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

To re-run a failed workflow run, use the `run rerun` subcommand. Replace `run-id` with the ID of the failed run that you want to re-run.  If you don't specify a `run-id`, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a recent failed run.

```shell
gh run rerun <em>run-id</em>
```

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```
