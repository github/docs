---
title: 准备 GitHub Enterprise Server 源实例
intro: '在从 {% data variables.product.prodname_ghe_server %} 迁移数据之前，请确保您具有实例的适当身份验证和管理权限。'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
versions:
  enterprise-server: '*'
---

1. 验证您在 {% data variables.product.prodname_ghe_server %} 源上是站点管理员。 最好的方式是验证您可以[通过 SSH 访问实例](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)。

2. 在 {% data variables.product.prodname_ghe_server %} 源实例上{% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}
