---
title: 定义密钥扫描的自定义模式
shortTitle: 定义自定义模式
intro: '您可以在组织和私有仓库中定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.2'
  ghae: next
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**注意：**{% data variables.product.prodname_secret_scanning %} 的自定义模式目前处于测试阶段，可能会更改。

{% endnote %}
{% endif %}

## 关于 {% data variables.product.prodname_secret_scanning %} 的自定义模式

{% data variables.product.company_short %} 在 {% ifversion fpt %}公共和私有{% endif %} 仓库中执行performs {% data variables.product.prodname_secret_scanning %}，以用于 {% data variables.product.company_short %} 和 {% data variables.product.company_short %} 模式提供的密钥模式。 有关 {% data variables.product.prodname_secret_scanning %} 合作伙伴计划的更多信息，请参阅“<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">密码扫描合作伙伴计划</a>”。

但是，在某些情况下，您需要扫描 {% ifversion fpt %}私有{% endif %} 仓库中的其他密钥模式。 例如，您可能有一个属于您组织内部的密钥模式。 For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in your enterprise, organization, or {% ifversion fpt %}private{% endif %} repository on {% data variables.product.product_name %}. You can define up to 20 custom patterns for each {% ifversion fpt %}private{% endif %} repository, organization, or enterprise account.

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**注意：** 在测试版中，对 {% data variables.product.prodname_secret_scanning %} 使用自定义模式时存在一些限制：

* 没有干运行功能。
* 创建自定义模式后，您无法对其进行编辑。 要更改模式，您必须将其删除并重新创建。
* 没有用于创建、编辑或删除自定义模式的 API。 但是，自定义模式的结果在[密钥扫描警报 API](/rest/reference/secret-scanning) 中返回。

{% endnote %}
{% endif %}

## 自定义模式的正则表达式语法

{% data variables.product.prodname_secret_scanning %} 的自定义模式被指定为正则表达式。 {% data variables.product.prodname_secret_scanning_caps %} 使用 [Hyperscan 库](https://github.com/intel/hyperscan)，只支持 Hyperscan regex 结构（PCRE 语法的子集）。 不支持 Hyperscan 选项修饰符。  有关 Hyperscan 模式构造的更多信息，请参阅 Hyperscan 文档中的“[模式支持](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)”。

## 定义仓库的自定义模式

在定义自定义模式之前，您必须确保仓库上启用了 {% data variables.product.prodname_secret_scanning %}。 更多信息请参阅“[为仓库配置 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

在模式创建后，{% data reusables.secret-scanning.secret-scanning-process %}有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

## 定义组织的自定义模式

在定义自定义模式之前，您必须确保在组织中为要扫描的 {% ifversion fpt %}私有{% endif %} 仓库启用 {% data variables.product.prodname_secret_scanning %}。 要在您的组织中启用 {% data variables.product.prodname_secret_scanning %} 所有 {% ifversion fpt %}私有{% endif %} 仓库，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描组织中的{% ifversion fpt %}私有{% endif %} 仓库中的任何密钥，包括其所有分支的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Under "Secret scanning custom patterns", click {% ifversion fpt or ghes > 3.2 or ghae-next %}**New pattern**{% elsif ghes = 3.2 %}**New custom pattern**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt %}private{% endif %} repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% ifversion fpt or ghes > 3.2 %}
## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.product.prodname_secret_scanning %} alerts that were created using the previous version of the pattern.
1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. 更多信息请参阅“[定义仓库的自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[定义组织的自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**. For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
2. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
3. When you have reviewed and tested your changes, click **Save changes**.
{% endif %}

## 删除自定义模式

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.

   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. 更多信息请参阅“[定义仓库的自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[定义组织的自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**.  For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="The trash icon" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

   ![Confirming deletion of a custom {% data variables.product.prodname_secret_scanning %} pattern ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. To the right of the custom pattern you want to remove, click **Remove**.
1. Review the confirmation, and click **Remove custom pattern**.
{%- endif %}
