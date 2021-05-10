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
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 在 {% data variables.product.prodname_dotcom %} 上准备源组织

1. 确保您在源组织的仓库上具有[所有者权限](/articles/permission-levels-for-an-organization/)。

2. 在 {% data variables.product.prodname_dotcom_the_website %} 上{% data reusables.enterprise_migrations.token-generation %}

{% data reusables.enterprise_migrations.make-a-list %}

### 导出组织的仓库

{% data reusables.enterprise_migrations.fork-persistence %}

要从 {% data variables.product.prodname_dotcom_the_website %} 导出仓库数据，请使用 <a href="/rest/reference/migrations" class="dotcom-only">Migrations API</a>。

Migrations API 目前正处于预览阶段，这意味着端点和参数未来可能发生变化。 要访问 Migrations API，您必须在 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)：`application/vnd.github.wyandotte-preview+json`。 以下示例包括自定义媒体类型。

### 生成迁移存档

{% data reusables.enterprise_migrations.locking-repositories %}

1. 向您的组织的成员发送通知，告诉他们您将执行迁移。 导出可能需要数分钟的时间，具体取决于要导出的仓库数量。 包括导入的完整迁移可能需要数小时的时间，因此我们建议执行试运行，以便确定完整过程所需的时间。 更多信息请参阅“[关于迁移](/enterprise/admin/migrations/about-migrations#types-of-migrations)”。

2. 向<a href="/rest/reference/migrations#start-an-organization-migration" class="dotcom-only">迁移端点</a>发送 `POST` 请求，开始迁移。 您需要：
    * 身份验证的访问令牌。
    * 想要迁移的[仓库列表](/rest/reference/repos#list-organization-repositories)：
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X POST \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  如果您想在迁移仓库之前先将其锁定，请确保 `lock_repositories` 设为 `true`。 强烈建议执行此操作。
    * 您可以向端点传递 `exclude_attachments: true`，排除文件附件。 {% data reusables.enterprise_migrations.exclude-file-attachments %}存档的最终大小必须小于 20 GB。

  此请求将返回一个独一无二的 `id`，用于表示您的迁移。 后续调用 Migrations API 时需要使用此 id。

3. 向<a href="/rest/reference/migrations#get-an-organization-migration-status" class="dotcom-only">迁移状态端点</a>发送 `GET` 请求以提取迁移的状态。 您需要：
    * 身份验证的访问令牌。
    * 迁移的唯一 `id`：
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  迁移可能处于以下状态之一：
    * `pending`，表示迁移尚未开始。
    * `exporting`，表示迁移正在进行。
    * `exported`，表示迁移已成功完成。
    * `failed`，表示迁移失败。

4. 在导出您的迁移后，请向<a href="/rest/reference/migrations#download-an-organization-migration-archive" class="dotcom-only">迁移下载端点</a>发送 `GET` 请求，下载迁移存档。 您需要：
    * 身份验证的访问令牌。
    * 迁移的唯一 `id`：
      ```shell
      curl -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -u <em>GITHUB_USERNAME</em>:<em>GITHUB_ACCESS_TOKEN</em> \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. 迁移存档将在七天后自动删除。 如果您更喜欢提前删除，可以向<a href="/rest/reference/migrations#delete-an-organization-migration-archive" class="dotcom-only">迁移存档删除端点</a>发送 `DELETE` 请求。 您需要：
    * 身份验证的访问令牌。
    * 迁移的唯一 `id`：
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
