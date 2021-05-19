---
title: 使用 Azure Blob 存储启用 GitHub Actions
intro: '您可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 Azure Blob 存储来存储工作流程运行生成的构件。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
---
### 基本要求

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建用于存储工作流程构件的 Azure 存储帐户。 {% data variables.product.prodname_actions %} 将其数据存储为块 Blob，支持两种类型的存储帐户：
  * 使用**标准**性能等级的**通用**存储帐户（也称为`通用的 v1` 或`通用 v2`）。

    {% warning %}

    **警告：**不支持对通用存储帐户使用**高级**性能等级。 在创建存储帐户时必须选择**标准**性能等级，并且以后不能更改。

    {% endwarning %}
  * **BlockBlobStorage** 存储帐户，使用**高级**性能等级。

  有关 Azure 存储帐户类型和性能等级的更多信息，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts)。
{% data reusables.actions.enterprise-common-prereqs %}

### 使用 Azure Blob 存储启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. 在“Artifact & Log Storage（构件与日志存储）”下，选择 **Azure Blob Storage（Azure Blob 存储）**，然后输入 Azure 存储帐户的连接字符串。 有关获取存储帐户的连接字符串的更多信息，请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys)。 ![用于选择 Azure Blob 存储和连接字符串字段的单选按钮](/assets/images/enterprise/management-console/actions-azure-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
