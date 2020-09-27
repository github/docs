---
title: 管理 GitHub Insights 中的权限
intro: '您可以在 {{ site.data.variables.product.prodname_insights }} 中更新用户的权限。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: '对 {{ site.data.variables.product.prodname_insights }} 具有管理员权限的人可管理权限。'
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.github-insights.permissions-levels }}

如果要向 {{ site.data.variables.product.prodname_enterprise }} 中不是站点管理员的人授予管理员权限，请联系 {{ site.data.variables.contact.github_support }}。 更多信息请参阅 {% if currentVersion == "free-pro-team@latest" %}“[提交事件单](/github/working-with-github-support/submitting-a-ticket)”。{% else %}“[连接 {{ site.data.variables.contact.github_support }}](/enterprise/{{ currentVersion }}/admin/enterprise-support/reaching-github-support)”。{% endif %}

要从 {{ site.data.variables.product.prodname_insights }} 删除用户的访问权限，您必须从 {{ site.data.variables.product.prodname_enterprise }} 删除该用户。
