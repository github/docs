---
title: 从 GitHub.com 导出迁移数据
intro: '您可以使用 API 选择要迁移的创建，然后生成可导入到 {% data variables.product.prodname_ghe_server %} 实例的迁移存档，从而从 {% data variables.product.prodname_dotcom_the_website %} 上的组织导出迁移数据。'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: 07c74c41312fe5818390bba206072bf95e5bc00c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717867'
---
## 在 {% data variables.product.prodname_dotcom %} 上准备源组织

1. 确保对源组织的存储库拥有[所有者权限](/articles/permission-levels-for-an-organization/)。

2. 在 {% data variables.product.prodname_dotcom_the_website %} 上{% data reusables.enterprise_migrations.token-generation %}

{% data reusables.enterprise_migrations.make-a-list %}

## 导出组织的仓库

{% data reusables.enterprise_migrations.fork-persistence %}

若要从 {% data variables.product.prodname_dotcom_the_website %} 导出存储库数据，请使用[迁移 API](/free-pro-team@latest/rest/migrations)。

Migrations API 目前正处于预览阶段，这意味着端点和参数未来可能发生变化。
## 生成迁移存档

{% data reusables.enterprise_migrations.locking-repositories %}

1. 向您的组织的成员发送通知，告诉他们您将执行迁移。 导出可能需要数分钟的时间，具体取决于要导出的仓库数量。 包括导入的完整迁移可能需要数小时的时间，因此我们建议执行试运行，以便确定完整过程所需的时间。 有关详细信息，请参阅“[关于迁移](/enterprise/admin/migrations/about-migrations#types-of-migrations)”。

2. 通过向[迁移终结点](/free-pro-team@latest/rest/migrations#start-an-organization-migration)发送 `POST` 请求来启动迁移。 需要：
    * 身份验证的访问令牌。
    * 要迁移的[存储库列表](/free-pro-team@latest/rest/repos#list-organization-repositories)
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  如果要在迁移存储库之前锁定存储库，请确保将 `lock_repositories` 设置为 `true`。 强烈建议执行此操作。
    * 可以通过将 `exclude_attachments: true` 传递给终结点来排除文件附件。 {% data reusables.enterprise_migrations.exclude-file-attachments %} 存档的最终大小必须小于 20 GB。

  此请求将返回唯一的 `id`，用于表示你的迁移。 后续调用 Migrations API 时需要使用此 id。

3. 将 `GET` 请求发送到[迁移状态终结点](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status)，以获取迁移状态。 需要：
    * 身份验证的访问令牌。
    * 迁移唯一的 `id`：
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  迁移可能处于以下状态之一：
    * `pending`，表示迁移尚未开始。
    * `exporting`，表示迁移正在进行中。
    * `exported`，表示迁移已成功完成。
    * `failed`，表示迁移失败。

4. 导出迁移后，通过向[迁移下载终结点](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive)发送 `GET` 请求来下载迁移存档。 需要：
    * 身份验证的访问令牌。
    * 迁移唯一的 `id`：
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. 迁移存档将在七天后自动删除。 如果希望更快地将其删除，可以向[迁移存档删除终结点](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive)发送 `DELETE` 请求。 需要：
    * 身份验证的访问令牌。
    * 迁移唯一的 `id`：
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
