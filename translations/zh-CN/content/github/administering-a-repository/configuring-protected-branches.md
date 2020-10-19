---
title: 配置受保护分支
intro: '如果您是仓库所有者或者拥有仓库管理员权限，您可以自定义仓库中的分支保护和实施某些工作流程，例如要求在合并拉取请求之前进行多次拉取请求审查或某些状态检查。'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% data reusables.repositories.branch-rules-example %}

您还可以使用通配符语法 `*` 为仓库中的所有分支设置自动分支保护。 由于 {% data variables.product.prodname_dotcom %} 对 `File.fnmatch` 语法使用 `File::FNM_PATHNAME` 标记，因此通配符与目录分隔符 (`/`) 不匹配。 例如，`qa/*` 将匹配以 `qa/` 开头并包含单个斜杠的所有分支。 您可以通过 `qa/**/*` 包含多个斜杠，也可以通过 `qa**/**/*` 扩展 `qa` 字符串，使其更具包容性。 有关分支规则语法选项的更多信息，请参阅 [fnmatch 文档](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)。

要创建对现有分支规则的例外，您可以创建优先级更高的新分支保护规则，例如针对特定分支名称的分支规则。 有关受保护分支规则的优先级顺序及其他设置的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。

{% note %}

**注：**创建分支规则时，指定的分支不必是仓库中现有的分支。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. （可选）您可以配置特定分支规则设置。 ![受保护分支规则设置](/assets/images/help/branches/branch-rule-settings.png)
7. 要确认分支保护规则，请单击 **Create（创建）**或 **Save changes（保存更改）**。

### 延伸阅读

- "[关于受保护分支](/github/administering-a-repository/about-protected-branches)"
- "[关于必需状态检查](/github/administering-a-repository/about-required-status-checks)"
- "[启用必需状态检查](/github/administering-a-repository/enabling-required-status-checks)"
- “[关于分支限制](/github/administering-a-repository/about-branch-restrictions)”
- “[启用分支限制](/github/administering-a-repository/enabling-branch-restrictions)”
- "[关于必需提交签名](/github/administering-a-repository/about-required-commit-signing)"
