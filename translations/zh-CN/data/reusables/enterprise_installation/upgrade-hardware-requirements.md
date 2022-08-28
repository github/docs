{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### 关于 {% data variables.product.prodname_ghe_server %} 3.0 及更高版本的最低要求

升级到 {% data variables.product.prodname_ghe_server %} 3.0 或更高版本之前，请检查您为实例预配的硬件资源。 {% data variables.product.prodname_ghe_server %} 3.0 引入了 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 等新功能，比 2.22 和更早版本需要更多的资源。 更多信息请参阅 [{% data variables.product.prodname_ghe_server %} 3.0 发行说明](/enterprise-server@3.0/admin/release-notes)。

{% data variables.product.prodname_ghe_server %} 3.0 及更高版本的增加要求在下表中以**粗体**表示。

| 用户许可              |                            vCPU |                                      内存 |                                 附加的存储容量 |  根存储容量 |
|:----------------- | -------------------------------:| ---------------------------------------:| ---------------------------------------:| ------:|
| 试用版、演示版或 10 个轻度用户 |   **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up from 16 GB_ | **150 GB**<br/>_Up from 100 GB_ | 200 GB |
| 10-3000           |   **8**<br/>_Up from 4_ |   **48 GB**<br/>_Up from 32 GB_ | **300 GB**<br/>_Up from 250 GB_ | 200 GB |
| 3000-5000         |  **12**<br/>_Up from 8_ |                                   64 GB |                                  500 GB | 200 GB |
| 5000-8000         | **16**<br/>_Up from 12_ |                                   96 GB |                                  750 GB | 200 GB |
| 8000-10000+       | **20**<br/>_Up from 16_ | **160 GB**<br/>_Up from 128 GB_ |                                 1000 GB | 200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

有关 {% data variables.product.prodname_actions %} 硬件要求的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
