---
title: OpenAPI 描述
intro: OpenAPI 3.0 标准文档中全面描述了 {% data variables.product.product_name %} REST API。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于 OpenAPI 描述

[OpenAPI](https://swagger.io/docs/specification/about/) 是描述 REST API 的标准规范。 OpenAPI 描述允许人类和计算机无需首先阅读文档或了解实现实现即可发现 API 的功能。 {% data variables.product.company_short %} 已经以 OpenAPI 3.0 标准文档的形式公开其 REST API。

### 获取 {% data variables.product.company_short %} OpenAPI 描述

您可以在开源[REST API OpenAPI 描述](https://github.com/github/rest-api-description)仓库中找到描述。

我们以两种格式提供描述。 The bundled version works for most cases, as it includes OpenAPI components for reuse and readability. If your tooling does not support inline references to components, we also provide a fully dereferenced version.

### Using the {% data variables.product.company_short %} OpenAPI description

There are many uses for an OpenAPI description. 例如，您可以：

* Generate your own API client.
* Validate and test a {% data variables.product.company_short %} REST API integration.
* Explore and interact with the {% data variables.product.product_name %} REST API using third-party tools, such as Insomnia or Postman.

For example, {% data variables.product.company_short %} uses the REST OpenAPI description to generate the {% data variables.product.product_name %} [REST API reference documentation](/rest/reference).
