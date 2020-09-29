---
title: 在 GitHub Enterprise Server 上完成导入
intro: 在迁移应用到目标实例并且您已审查迁移后，您需要解锁仓库并将其从源中删除。 我们建议等待两周再删除您的源数据，以便确保所有数据都能按预期运行。
redirect_from:
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### 在目标实例上解锁仓库

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### 在源上解锁仓库

#### 从 {% data variables.product.prodname_dotcom_the_website %} 组织解锁仓库

要在 {% data variables.product.prodname_dotcom_the_website %} 组织中解锁仓库，您需要向<a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">迁移解锁端点</a>发送 `DELETE` 请求。 您需要：
  * 身份验证的访问令牌
  * 迁移的唯一 `id`
  * 要解锁的仓库的名称
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### 从 {% data variables.product.prodname_dotcom_the_website %} 组织删除仓库

After unlocking the {% data variables.product.prodname_dotcom_the_website %} organization's repositories, you should delete every repository you previously migrated using [the repository delete endpoint](/enterprise/{{ currentVersion }}/v3/repos/#delete-a-repository). 您需要身份验证的访问令牌：
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### 从 {% data variables.product.prodname_ghe_server %} 实例解锁仓库

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
