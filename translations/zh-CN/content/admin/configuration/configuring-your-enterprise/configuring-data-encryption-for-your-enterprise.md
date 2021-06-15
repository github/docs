---
title: 为企业配置数据加密
shortTitle: 配置数据加密
intro: 对于休息时加密，您可以提供自己的加密密钥，以在加密策略下加密数据。
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Security
redirect_from:
  - /admin/configuration/configuring-data-encryption-for-your-enterprise
---

{% note %}

**注：**在休息时使用客户管理的密钥配置加密当前处于测试阶段，可能会更改。

{% endnote %}

### 关于数据加密

为了提供高级别的安全性，{% data variables.product.product_name %} 在休息时对数据中心中的数据加密，以及在用户计算机与数据中心之间传输数据时对数据加密。

对于传输中的加密，{% data variables.product.product_name %} 使用传输层安全性 (TLS)。 对于休息时的加密， {% data variables.product.product_name %} 提供默认的 RSA 密钥。
