---
title: 使用 Google Cloud Storage 启用 GitHub Actions
intro: '可以在 {% data variables.product.prodname_ghe_server %} 上启用 {% data variables.product.prodname_actions %}，并使用 Google Cloud Storage 来存储工作流运行生成的数据。'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: 33ecb0adfb0786a4308bba80ecc6467fc7adb4e5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192951'
---
{% note %}

注意：{% data variables.product.prodname_actions %} 对 Google Cloud Storage 的支持目前处于 beta 版，可能会更改。

{% endnote %}

{% data reusables.actions.enterprise-storage-about %}

## 先决条件

在启用 {% data variables.product.prodname_actions %} 之前，请确保您已完成以下步骤：

* 创建 Google Cloud Storage 存储桶，用于存储工作流运行生成的数据。
* 创建可访问存储桶的 Google Cloud 服务帐户，并为服务帐户创建基于哈希的消息身份验证码 (HMAC) 密钥。 有关详细信息，请参阅 Google Cloud 文档中的“[管理服务帐户的 HMAC 密钥](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)”。

  服务帐户必须具有以下对存储桶的[身份验证和访问控制管理 (IAM) 权限](https://cloud.google.com/storage/docs/access-control/iam-permissions)：

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## 使用 Google Cloud Storage 启用 {% data variables.product.prodname_actions %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. 在“项目和日志存储”下，选择“Google Cloud Storage”，然后输入存储桶的详细信息：

   * **服务 URL**：存储桶的服务 URL。 通常为 `https://storage.googleapis.com`。
   * **存储桶名称**：存储桶的名称。
   * **HMAC 访问 ID** 和 **HMAC 机密**：存储帐户的 Google Cloud 访问 ID 和机密。 有关详细信息，请参阅 Google Cloud 文档中的“[管理服务帐户的 HMAC 密钥](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)”。

   ![用于选择 Google Cloud Storage 和配置字段的单选按钮](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
