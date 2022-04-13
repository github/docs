---
title: Streaming the audit log for your enterprise
intro: '您可以将审核和 Git 事件数据从 {% data variables.product.prodname_dotcom %} 流式传输到外部数据管理系统。'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
---

## 关于审核日志流

为了帮助保护您的知识产权并保持组织的合规性，您可以使用流式处理来保留审核日志数据的副本并监控：
{% data reusables.audit_log.audited-data-list %}

流式传输审计数据的好处包括：

* **数据探索**。 您可以使用首选工具检查流事件，以查询大量数据。 流包含整个企业帐户中的审核事件和 Git 事件。
* **数据连续性**。 您可以暂停流长达七天，而不会丢失任何审核数据。
* **数据保留**。 You can keep your exported audit logs and Git events data as long as you need to.

企业所有者可以随时设置、暂停或删除流。 流导出企业中所有组织的审核数据。

## 设置审核日志流

您可以按照提供程序的说明在 {% data variables.product.product_name %} 上设置审核日志流。

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs)
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### 设置流式传输到 Amazon S3

要将审核日志流式传输到 Amazon 的 S3 终端节点，您必须拥有存储桶和访问密钥。 更多信息请参阅 AWS 文档中的[创建、配置和使用 Amazon S3 存储桶](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)。 请务必阻止对存储桶的公共访问，以保护您的审核日志信息。

要设置来自 {% data variables.product.prodname_dotcom %} 审核日志流式处理，您需要：
* Amazon S3 存储桶的名称
* AWS 访问密钥 ID
* AWS 密钥

有关创建或访问访问密钥 ID 和密钥的信息，请参阅 AWS 文档中的[了解和获取您的 AWS 凭据](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)。

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Configure stream（配置流）**，然后选择 **Amazon S3**。

   ![从下拉菜单中选择 Amazon S3](/assets/images/help/enterprises/audit-stream-choice-s3.png)

1. 在配置页面上，输入：
   * 要流式传输到的存储桶的名称。 例如，`auditlog-streaming-test`。
   * 您的访问密钥 ID。 例如，`ABCAIOSFODNN7EXAMPLE1`。
   * 您的密钥。 例如，`aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`。

   ![输入流设置](/assets/images/help/enterprises/audit-stream-add-s3.png)

1. 单击 **Check endpoint（检查端点）**以验证 {% data variables.product.prodname_dotcom %} 是否可以连接并写入 Amazon S3 端点。

   ![检查端点](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### 设置流式传输到 Azure Blob Storage

在 {% data variables.product.prodname_dotcom %} 中设置流之前，必须先在 Microsoft Azure 中创建存储帐户和容器。 有关详细信息，请参阅 Microsoft 文档中的“[Azure Blob Storage 简介](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)”。

要在 {% data variables.product.prodname_dotcom %} 配置流，需要 SAS 令牌的 URL。

**在 Microsoft Azure 门户中**：
1. 在主页上，单击 **Storage Accounts（存储帐户）**。
2. 单击要使用的存储帐户的名称，然后单击 **Containers（容器）**。

   ![Azure 中的容器链接](/assets/images/azure/azure-storage-containers.png)

1. 单击要使用的容器的名称。
1. 单击 **Shared access tokens（共享访问令牌）**。

   ![Azure 中的共享访问令牌链接](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. 在 **Permissions（权限）**下拉菜单中，将权限更改为仅允许`创建`和`写入`。

   ![权限下拉菜单](/assets/images/azure/azure-storage-permissions.png)

1. 设置符合机密轮换策略的到期日期。
1. 单击 **Generate SAS token and URL（生成 SAS 令牌和 URL）**。
1. 复制显示的 **Blob SAS URL** 字段的值。 您将在 {% data variables.product.prodname_dotcom %} 中使用此 URL。

**在 {% data variables.product.prodname_dotcom %} 上**：
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Configure stream（配置流）**，然后选择 **Azure Blob Storage**。

   ![从下拉菜单中选择 Azure Blob Storage](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. 在配置页上，输入在 Azure 中复制的 blob SAS URL。 **Container（容器）**字段将根据 URL 自动填充。

   ![输入流设置](/assets/images/help/enterprises/audit-stream-add-azureblob.png)

1. 单击 **Check endpoint（检查端点）**以验证 {% data variables.product.prodname_dotcom %} 是否可以连接并写入 Azure Blob Storage 端点。

   ![检查端点](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### 设置流式传输到 Azure Event Hub

在 {% data variables.product.prodname_dotcom %} 中设置流之前，必须先在 Microsoft Azure 中具有事件中心命名空间。 接下来，必须在命名空间中创建事件中心实例。 设置流时，需要此事件中心实例的详细信息。 有关详细信息，请参阅 Microsoft 文档“[快速入门：使用 Azure 门户创建事件中心](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)”。

需要有关事件中心的两条信息：其实例名称和连接字符串。

**在 Microsoft Azure 门户中**：
1. 搜索“事件中心”。

   ![Azure 门户搜索框](/assets/images/azure/azure-resources-search.png)

1. 选择 **Event Hubs（事件中心）**。 将列出事件中心的名称。

   ![事件中心列表](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. 记下要流式传输到的事件中心的名称。
1. 单击所需的事件中心。 然后，在左侧菜单中，选择 **Shared Access Policies（共享访问策略）**。
1. 在策略列表中选择共享访问策略，或创建新策略。

   ![共享访问策略列表](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. 单击 **Connection string-primary key（连接字符串 - 主键）**字段右侧的按钮以复制连接字符串。

   ![事件中心连接字符串](/assets/images/help/enterprises/azure-connection-string.png)

**在 {% data variables.product.prodname_dotcom %} 上**：
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Configure stream（配置流）**，然后选择 **Azure Event Hubs**。

   ![从下拉菜单中选择 Azure Events Hub](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. 在配置页面上，输入：
   * Azure Event Hubs 实例的名称。
   * 连接字符串。

   ![输入流设置](/assets/images/help/enterprises/audit-stream-add-azure.png)

1. 单击 **Check endpoint（检查端点）**以验证 {% data variables.product.prodname_dotcom %} 是否可以连接并写入 Azure Event Hubs 端点。

   ![检查端点](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### 设置流式传输到 Google Cloud Storage

要设置流式传输到 Google Cloud Storage，您必须在 Google Cloud 中使用适当的凭据和权限创建一个服务帐户，然后使用服务帐户的凭据在 {% data variables.product.product_name %} 中配置审核日志流以进行身份验证。

1. 为 Google Cloud 创建一个服务帐户。 您无需为服务帐户设置访问控制或 IAM 角色。 更多信息请参阅 Google Cloud 文档中的[创建和管理服务帐户](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating)。
1. 创建服务帐户的 JSON 密钥，并安全地存储该密钥。 更多信息请参阅 Google Cloud 文档中的[创建和管理服务帐户密钥](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating)。
1. 如果您尚未创建存储桶，请创建存储桶。 更多信息请参阅 Google Cloud 文档中的[创建存储桶](https://cloud.google.com/storage/docs/creating-buckets)。
1. 为服务帐户分配存储桶的存储对象创建者角色。 更多信息请参阅 Google Cloud 文档中和[使用 Cloud IAM 权限](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add)。
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 选择配置流下拉菜单，然后单击 **Google Cloud Storage**。

   !["配置流"下拉菜单的屏幕截图](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. 在“Bucket（存储桶）”下，键入 Google Cloud Storage 存储桶的名称。

   !["存储桶"文本字段的屏幕截图](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. 在“JSON Credentials（JSON 凭据）”下，粘贴服务帐户的 JSON 密钥文件的全部内容。

   !["JSON 凭据"文本字段的屏幕截图](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. 要验证 {% data variables.product.prodname_dotcom %} 是否可以连接并写入 Google Cloud Storage 存储桶，请单击 **Check endpoint（检查端点）**。

   !["检查端点"按钮的屏幕截图](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### 设置流式传输到 Splunk

要将审核日志流式传输到 Splunk 的 HTTP 事件收集器 (HEC) 端点，必须确保将终端节点配置为接受 HTTPS 连接。 更多信息请参阅 Splunk 文档中的[在 Splunk Web 中设置和使用 HTTP 事件收集器](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)。

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Configure stream（配置流）**，然后选择 **Splunk**。

   ![从下拉菜单中选择 Splunk](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. 在配置页面上，输入：
   * 要流式传输到的应用程序所在的域。

     如果您使用的是 Splunk Cloud，`Domain` 应为 `http-inputs-<host>`，其中 `host` 是您在 Splunk Cloud 中使用的域。 例如：`http-inputs-mycompany.splunkcloud.com`。

   * 应用程序接受数据的端口。<br>

     如果您使用的是 Splunk Cloud，`Port` 应为 `443`（如果您尚未更改端口配置）。 如果您使用的是 Splunk Cloud 的免费试用版，`Port` 应为 `8088`。

   * {% data variables.product.prodname_dotcom %} 可用来验证第三方应用程序的令牌。

   ![输入流设置](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. 选中 **Enable SSL verification（启用 SSL 验证）**复选框。

    审核日志始终作为加密数据进行流式传输，但是，如果选择此选项， {% data variables.product.prodname_dotcom %} 在传递事件时会验证 Splunk 实例的 SSL 证书。 SSL 验证有助于确保将事件安全地传递到 URL 端点。 您可以清除此选项的选择，但我们建议您将 SSL 验证保留为启用状态。
1. 单击 **Check endpoint（检查端点）**以验证 {% data variables.product.prodname_dotcom %} 是否可以连接并写入 Splunk 端点。 ![检查端点](/assets/images/help/enterprises/audit-stream-check-splunk.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

## 暂停审核日志流

暂停流允许您对接收应用程序执行维护，而不会丢失审核数据。 审核日志在 {% data variables.product.product_location %} 上最多存储七天，然后在取消暂停流时导出。

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Pause stream（暂停流）**。

   ![暂停流](/assets/images/help/enterprises/audit-stream-pause.png)

1. 将显示一条确认消息。 单击 **Pause stream（暂停流）**以确认。

当应用程序准备好再次接收审核日志时，单击 **Resume stream（恢复流）**以重新启动流式处理审核日志。

## 删除审核日志流

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. 单击 **Delete stream（删除流）**。

   ![删除流](/assets/images/help/enterprises/audit-stream-delete.png)

1. 将显示一条确认消息。 单击 **Delete stream（删除流）**以确认。
