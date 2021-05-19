---
title: 使用暂存环境
intro: '了解在 {% data variables.product.prodname_ghe_server %} 暂存环境中使用 {% data variables.product.prodname_actions %}。'
versions:
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
---

为 {% data variables.product.product_location %} 提供临时或测试环境会有用，这样您就可以在生产环境中实施更新或新功能之前进行测试。

创建暂存环境的常见方法是使用生产实例的备份并将其恢复到暂存环境。

在设置启用 {% data variables.product.prodname_actions %} 的 {% data variables.product.prodname_ghe_server %} 暂存环境时，您必须对 {% data variables.product.prodname_actions %} 存储使用与生产环境所用不同的外部存储配置。 否则，您的暂存环境将写入与生产相同的外部存储。

在尝试从现有的 {% data variables.product.prodname_actions %} 工作流程查看日志或工件时，预期会看到 `404` 错误， 因为暂存位置中缺少该数据。

虽然这不是 {% data variables.product.prodname_actions %} 在暂存环境中运行所必需的，但您可以选择性地将文件从生产存储位置复制到暂存位置。

* 对于 Azure 存储帐户，您可以使用 [`azcop`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account)。 例如：

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* 对于 Amazon S3 存储桶，您可以使用 [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)。 例如：

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
