---
title: 为企业配置数据加密
shortTitle: 配置数据加密
intro: '对于休息时加密，您可以提供自己的加密密钥，以在加密策略下加密数据。'
versions:
  github-ae: '*'
---

{% note %}

**注：**在休息时使用客户管理的密钥配置加密当前处于测试阶段，可能会更改。

{% endnote %}

### 关于数据加密

为了提供高级别的安全性，{% data variables.product.product_name %} 在休息时对数据中心中的数据加密，以及在用户计算机与数据中心之间传输数据时对数据加密。

对于传输中的加密，{% data variables.product.product_name %} 使用传输层安全性 (TLS)。 对于休息时的加密， {% data variables.product.product_name %} 提供默认的 RSA 密钥。 在初始化企业后，您可以选择提供自己的密钥。 密钥应该是采用 PEM 格式的 2048 位 RSA 私钥。

您提供的密钥存储在 {% data variables.product.company_short %} 管理的密钥保管库的 FIPS 140-2 标准硬件安全模块 (HSM) 中。

要配置加密密钥，请使用 REST API。 有许多 API 端点，例如检查加密状态、更新加密密钥以及禁用加密密钥的端点。 请注意，禁用密钥将冻结企业。 有关 API 端点的详细信息，请参阅 REST API 文档中的“[休息时加密](/rest/reference/enterprise-admin#encryption-at-rest)”。

### 添加或更新加密密钥

您可以随时随地添加新的加密密钥。 添加新密钥时，旧密钥将被丢弃。 更新密钥时，您的企业不会遇到停机。

您的 2048 位 RSA 私钥应采用 PEM 格式，例如在名为 _private-key.pem_ 的文件中。

   ```
   -----BEGIN RSA PRIVATE KEY-----
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   -----END RSA PRIVATE KEY-----
   ```

1. 要添加密钥，请使用 `PATCH /enterprise/encryption` 端点，将 *~/private-key.pem* 替换为私钥的路径。

   ```shell
   curl -X PATCH http(s)://<em>hostname</em>/api/v3/enterprise/encryption \
     -d "{ \"key\": \"$(awk '{printf "%s\\n", $0}' ~/private-key.pem)\" }"
   ```

2. （可选）检查更新操作的状态。

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

### 禁用加密密钥

要冻结您的企业（例如在出现违规情况下），可以通过将加密密钥标记为禁用来禁用静态加密。

1. 要禁用密钥和静态加密，请使用 `DELETE /enterprise/encryption` 端点。 此操作不会永久删除密钥。

   ```shell
   curl -X DELETE http(s)://<em>hostname</em>/api/v3/enterprise/encryption
   ```

2. （可选）检查删除操作的状态。 禁用静态加密大约需要十分钟。

   ```shell
   curl -X GET http(s)://<em>hostname</em>/api/v3/enterprise/encryption/status/<em>request_id</em>
   ```

要在禁用加密密钥后解冻企业，请联系支持人员。 更多信息请参阅“[关于 {% data variables.contact.enterprise_support %}](/admin/enterprise-support/about-github-enterprise-support)”。

### 延伸阅读

- REST API 文档中的“[休息时加密](/rest/reference/enterprise-admin#encryption-at-rest)” 
