---
title: 手动从 GitHub.com 同步操作
intro: '对于需要访问 {% data variables.product.prodname_dotcom_the_website %} 上操作的用户，您可以将特定操作同步到 {% data variables.product.prodname_ghe_server %} 实例。'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

The recommended approach of enabling access to actions from {% data variables.product.prodname_dotcom_the_website %} is to enable automatic access to all actions. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %} . 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

However, if you want stricter control over which actions are allowed in your enterprise, you can follow this guide to use {% data variables.product.company_short %}'s open source [`actions-sync`](https://github.com/actions/actions-sync) tool to sync individual action repositories from {% data variables.product.prodname_dotcom_the_website %} to your enterprise instance.

### 关于 `actions-sync` 工具

`actions-sync` 工具必须在可以访问 {% data variables.product.prodname_dotcom_the_website %} API 和 {% data variables.product.prodname_ghe_server %} 实例的 API 的计算机上运行。 计算机不需要同时连接到两者。

如果计算机可以同时访问这两个系统，您可以使用单一 `actions-sync sync` 命令进行同步。 如果您一次只能访问一个系统，您可以使用 `actions-sync pull` 和 `push` 命令。

`actions-sync` 工具只能从存储在公有仓库中的 {% data variables.product.prodname_dotcom_the_website %} 下载操作。

### 基本要求

* 在使用 `actions-sync` 工具之前，您必须确保所有目标组织已经存在于您的企业实例中。 以下示例演示如何将操作同步到企业实例上名为 `synced-actions` 的组织。 更多信息请参阅“[从头开始创建新组织](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)”。
* 您必须在企业实例上创建可以创建并写入目标组织中的仓库的个人访问令牌 (PAT)。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 示例：使用 `actions-sync` 工具

此示例演示使用 `actions-sync` 工具将个别操作从 {% data variables.product.prodname_dotcom_the_website %} 同步到企业实例。

{% note %}

**注：**此示例使用 `actions-sync sync` 命令 它要求从您的计算机同时访问 {% data variables.product.prodname_dotcom_the_website %} API 和 {% data variables.product.prodname_ghe_server %} 实例的 API。 如果您一次只能访问一个系统，您可以使用 `actions-sync pull` 和 `push` 命令。 更多信息请参阅 [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances)。

{% endnote %}

1. 为您计算机的操作系统下载并解压缩最新的 [`actions-sync` 版本](https://github.com/actions/actions-sync/releases)。
1. 创建一个目录来存储工具的缓存文件。
1. 运行 `actions-sync sync` 命令：

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "docker/build-push-action:synced-actions/docker-build-push-action"
   ```

   上述命令使用以下参数：

   * `--cache-dir`：运行命令的计算机上的缓存目录。
   * `--destination-toke`：目标企业实例的个人访问令牌。
   * `--destination-url`：目标企业实例的 URL。
   * `--repo-name`：要同步的操作仓库。 这将使用格式 `owner/repository:destination_owner/destination_repository`。

     * 上面的示例将 [`docker/build-push-action`](https://github.com/docker/build-push-action) 仓库同步到目标 {% data variables.product.prodname_ghe_server %} 实例上的 `synced-actions/docker-build-push-action` 仓库。 在运行上述命令之前，您必须在企业实例上创建名为 `synced-actions` 的组织。
     * 如果您省略 `:destination_owners/destination_repost`，工具将使用企业实例的原始所有者和仓库名称。 在运行命令之前，必须在实例上创建一个与操作的所有者名称匹配的新组织。 考虑使用一个中心组织来存储实例上同步的操作，因为这样在同步来自不同所有者的操作时，将无需创建多个新的组织。
     * 将 `--repo-name` 参数替换为 `--repo-name-list` 或 `--repo-name-list-file` 便可同步多个操作。 更多信息请参阅 [`actions-sync` README](https://github.com/actions/actions-sync#actions-sync)。
1. 在企业实例上创建操作仓库后，企业中的人员可以使用目标仓库在其工作流程中引用操作。 对于上面显示的示例操作：

   ```
   uses: synced-actions/docker-build-push-action@v1
   ```

   更多信息请参阅“[GitHub 操作的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)”。
