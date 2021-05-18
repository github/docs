---
title: 删除工作流程构件
intro: '您可以在构件于 {% data variables.product.product_name %} 上过期之前删除它们，回收已经使用的 {% data variables.product.prodname_actions %} 存储。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 删除构件

{% warning %}

**警告：** 构件一旦删除，便无法恢复。

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在 **Artifacts（构件）**下，单击
您要删除的构件旁边的 {% octicon "trash" aria-label="The trash icon" %}。
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![删除构件下拉菜单](/assets/images/help/repository/actions-delete-artifact-updated.png)
    {% else %}
    ![删除构件下拉菜单](/assets/images/help/repository/actions-delete-artifact.png)
    {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 设置构件的保留期

可在仓库、组织和企业级配置构件和日志的保留期。 更多信息请参阅“[使用限制、计费和管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”。

您也可以在工作流程中使用 `actions/upload-artifact` 操作自定义个别构件的保留期。 更多信息请参阅“[将工作流程存储为构件](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)”。

### 查找构件的到期日期

您可以使用 API 确认构件计划删除的日期。 更多信息请参阅“[列出仓库的构件](/rest/reference/actions#artifacts)”返回的 `expires_at` 值。
{% endif %}
