---
title: OpenAPI 描述
intro: 'OpenAPI 3.0 标准文档中全面描述了 {% data variables.product.product_name %} REST API。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - api
---

### 关于 OpenAPI 描述

[OpenAPI](https://swagger.io/docs/specification/about/) 是描述 REST API 的标准规范。 OpenAPI 描述允许人类和计算机无需首先阅读文档或了解实现实现即可发现 API 的功能。 {% data variables.product.company_short %} 已经以 OpenAPI 3.0 标准文档的形式公开其 REST API。

### 获取 {% data variables.product.company_short %} OpenAPI 描述

您可以在开源[REST API OpenAPI 描述](https://github.com/github/rest-api-description)仓库中找到描述。

我们以两种格式提供描述。 捆绑版本适用于大多数情况，因为它包括可重用且可读的 OpenAPI 组件。 如果您的工具不支持对组件的内联引用，我们还提供完全取消引用的版本。

### 使用 {% data variables.product.company_short %} OpenAPI 描述

OpenAPI 描述有很多用途。 例如，您可以：

* 生成您自己的 API 客户端。
* 验证并测试 {% data variables.product.company_short %} REST API 集成。
* 使用第三方工具（如 Insomnia 或 Postman）探索 {% data variables.product.product_name %} REST API 并与之交互。

例如，{% data variables.product.company_short %} 使用 REST OpenAPI 描述生成 {% data variables.product.product_name %} [REST API 参考文档](/rest/reference)。
