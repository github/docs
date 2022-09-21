---
title: 手动从 GitHub.com 同步操作
intro: '对于需要访问 {% data variables.product.prodname_dotcom_the_website %} 上操作的用户，您可以将特定操作同步到企业。'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4116663e510da9b7551e4a9050dd4ba838ed7c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099988'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

推荐的允许从 {% data variables.product.prodname_dotcom_the_website %} 访问操作的方法是启用自动访问所有操作。 为此，可使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)。”

但是，如果想更严格地控制企业中允许的操作，{% else %}你{% endif %}可以按照本指南使用 {% data variables.product.company_short %} 的开源 [`actions-sync`](https://github.com/actions/actions-sync) 工具将各个操作存储库从 {% data variables.product.prodname_dotcom_the_website %} 同步到企业。

## 关于 `actions-sync` 工具

`actions-sync` 工具必须在可以访问 {% data variables.product.prodname_dotcom_the_website %} API 和 {% data variables.product.product_name %} 实例的 API 的计算机上运行。 计算机不需要同时连接到两者。

如果计算机可以同时访问这两个系统，则可以使用单一 `actions-sync sync` 命令进行同步。 如果一次只能访问一个系统，可以使用 `actions-sync pull` 和 `push` 命令。

`actions-sync` 工具只能从存储在公共存储库中的 {% data variables.product.prodname_dotcom_the_website %} 下载操作。

{% ifversion ghes > 3.2 or ghae %} {% note %}

注意：`actions-sync` 工具适用于未启用 {% data variables.product.prodname_github_connect %} 的系统。 如果在启用了 {% data variables.product.prodname_github_connect %} 的系统上运行该工具，则可能会看到错误 `The repository <repo_name> has been retired and cannot be reused`。 这表示工作流程已直接在 {% data variables.product.prodname_dotcom_the_website %} 上使用了该操作，并且命名空间已在 {% data variables.product.product_location %} 上停用。 有关详细信息，请参阅“[自动停用在 {% data variables.product.prodname_dotcom_the_website%} 上访问的操作的命名空间](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)”。 

{% endnote %} {% endif %}

## 先决条件

* 在使用 `actions-sync` 工具之前，必须确保所有目标组织已经存在于企业中。 以下示例演示如何将操作同步到名为 `synced-actions` 的组织。 有关详细信息，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。
* 您必须在企业上创建可以创建并写入目标组织中的仓库的个人访问令牌 (PAT)。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。{% ifversion ghes %}
* 如果想同步 {% data variables.product.product_location %} 上 `actions` 组织中的捆绑操作，你必须是 `actions` 组织的所有者。

  {% note %}
  
  注意：默认情况下，即使站点管理员也不是捆绑的 `actions` 组织的所有者。
  
  {% endnote %}

  站点管理员可以在管理 shell 中使用 `ghe-org-admin-promote` 命令将用户升级为捆绑的 `actions` 组织的所有者。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)”。

  ```shell
  ghe-org-admin-promote -u <em>USERNAME</em> -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   上述命令使用以下参数：

   * `--cache-dir`：运行命令的计算机上的缓存目录。
   * `--destination-token`：目标企业实例的个人访问令牌。
   * `--destination-url`：目标企业实例的 URL。
   * `--repo-name`：要同步的操作存储库。其采用格式 `owner/repository:destination_owner/destination_repository`。
     
     * 上面的示例将 [`actions/stale`](https://github.com/actions/stale) 存储库同步到目标企业实例上的 `synced-actions/actions-stale` 存储库。 在运行上述命令之前，必须在企业中创建名为 `synced-actions` 的组织。
     * 如果省略 `:destination_owner/destination_repository`，工具将使用企业的原始所有者和存储库名称。 在运行命令之前，必须在企业中创建一个与操作的所有者名称匹配的新组织。 考虑使用一个中心组织来存储企业中同步的操作，因为这样在同步来自不同所有者的操作时，将无需创建多个新的组织。
     * 可以通过将 `--repo-name` 参数替换为 `--repo-name-list` 或 `--repo-name-list-file` 来同步多个操作。 有关详细信息，请参阅 [`actions-sync` README](https://github.com/actions/actions-sync#actions-sync)。
1. 在企业中创建操作仓库后，企业中的人员可以使用目标仓库在其工作流程中引用操作。 对于上面显示的示例操作：
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses)”。
