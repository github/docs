---
title: 下载工作流程构件
intro: 您可以在存档的构件自动过期之前下载它们。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 下载工作流程构件
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

默认情况下，{% data variables.product.product_name %} 存储 90 天内的构建日志和构件，您可以根据仓库类型定制此存储期。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”。

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在**构件**下，单击您想要下载的构件。

    ![下载构件下拉菜单](/assets/images/help/repository/artifact-drop-down-updated.png)


{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} 将根据构件名称将每个构件下载到单独的目录中。 如果只指定了单个构件, 它将被提取到当前目录。

要下载工作流程运行产生的所有构件，请使用 `run download` 子命令。 将 `run-id` 替换为您想要从中下载构件的运行的 ID。 如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近的运行。

```shell
gh run download <em>run-id</em>
```

要从运行中下载特定的构件，请使用 `run download` 子命令。 将 `run-id` 替换为您想要从中下载构件的运行的 ID。 使用要下载的构件名称替换 `artifact-name`。

```shell
gh run download <em>run-id</em> -n <em>artifact-name</em>
```

您可以指定多个构件。

```shell
gh run download <em>run-id</em> -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

要从仓库的所有运行中下载特定的构件，请使用 `run download` 子命令。

```shell
gh run download -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

{% endcli %}
