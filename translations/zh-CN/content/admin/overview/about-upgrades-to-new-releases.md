---
title: 关于升级到新版本
shortTitle: 关于升级
intro: '{% if currentVersion == "github-ae@latest" %}您的 {% data variables.product.product_name %} 企业定期由 {% data variables.product.company_short %} 使用最新功能和漏洞补丁更新。{% else %}您可以通过将企业升级到新版本以获得 {% data variables.product.product_name %} 的新功能和漏洞补丁。{% endif %}'
versions:
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---

{% data variables.product.product_name %} 正在不断改进，通过主要和次要版本引入新功能和漏洞补丁。 {% if currentversion == "github-ae@latest" %}{% data variables.product.prodname_ghe_managed %} 是一项完全管理的服务，因此 {% data variables.product.company_short %} 可完成企业的升级过程。{% endif %}

主要版本包括新功能和功能升级，通常{% if currentVersion == "github-ae@latest" %}每几个星期或几个月{% else %}每季度{% endif %}进行一次。 {% if currentversion == "github-ae@latest" %}{% data variables.product.company_short %} 会将您的企业升级到最新的主要版本。 您的企业如有任何计划内的停机，都会提前通知您。{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

从 {% data variables.product.prodname_ghe_server %} 3.0 开始，所有主要版本开始都至少有一个候选版本。 候选版本是提议的主要版本，具有完整的功能集。 候选版本中可能存在错误或问题，只能通过实际使用 {% data variables.product.product_name %} 的客户反馈来找到。

只要候选版本可用，您便可通过测试候选版本来提早访问最新功能。 您可以从支持的版本升级到候选版本，并在发布时从版本候选版本升级到更新版本。 只要版本发布，您便应该升级运行候选版本的任何环境。 更多信息请参阅“[升级要求](/admin/enterprise-management/upgrade-requirements)”。

候选版本应部署在测试或暂存环境中。 在测试候选版本时，请通过联系支持提供反馈。 更多信息请参阅“[使用 {% data variables.contact.github_support %}](/admin/enterprise-support)”。

我们将使用您的反馈应用漏洞补丁及任何其他必要的更改来创建稳定的生产版本。 每个新的候选版本都会为以前版本中发现的问题添加漏洞补丁。 当版本可供广泛采用时，{% data variables.product.company_short %} 将发布稳定的生产版本。

{% endif %}

{% warning %}

**警告**：升级到新的主要版本将导致几个小时的停机，在此期间，您的用户将无法使用企业。 您可以使用您的企业设置或 REST API 发布全球公告横幅，告知用户停机。 更多信息请参阅“[自定义您的实例上的用户消息](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)”和“[{% data variables.product.prodname_enterprise %} 管理员](/rest/reference/enterprise-admin#announcements)”。

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}

只包含热补丁和漏洞补丁的次要版本会更频繁地发布。 首次发布时通常提供次要版本，没有候选版本。 升级到次要版本通常需要不到五分钟的停机时间。

要将您的企业升级到新版本，请参阅“[发行说明](/enterprise-server/admin/release-notes)”和“[升级 {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)”。

{% endif %}

### 延伸阅读

- `github/roadmap` 仓库中的 [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %})
{% if currentVersion == "github-ae@latest" %}
- [ {% data variables.product.prodname_ghe_managed %} 发行说明](/admin/release-notes)
{% endif %}
