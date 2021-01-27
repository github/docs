{% if currentVersion ver_gt "enterprise-server@2.21" %}

{% note %}

**注**：如果您在 {% data variables.product.prodname_actions %} 或 {% data variables.product.prodname_registry %} 中启用测试功能，则您的实例需要额外的硬件资源。 {% if currentVersion == "enterprise-server@2.22" %}测试{% else %}可选{% endif %}功能启用的实例的最低要求在下表中**加粗**。 更多信息请参阅“{% if currentVersion == "enterprise-server@2.22" %}[{% data variables.product.prodname_ghe_server %} 2.22 中的测试功能](#beta-features-in-github-enterprise-server-222){% else %}[可选功能](#optional-features){% endif %}”。

{% endnote %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
| 用户许可              |                                        vCPU |                                                  内存 |                                             附加的存储容量 |  根存储容量 |
|:----------------- | -------------------------------------------:| ---------------------------------------------------:| ---------------------------------------------------:| ------:|
| 试用版、演示版或 10 个轻度用户 |   2<br/>或 [**4**](#optional-features) |   16 GB<br/>或 [**32 GB**](#optional-features) | 100 GB<br/>或 [**150 GB**](#optional-features) | 200 GB |
| 10-3000           |   4<br/>或 [**8**](#optional-features) |   32 GB<br/>或 [**48 GB**](#optional-features) | 250 GB<br/>或 [**300 GB**](#optional-features) | 200 GB |
| 3000-5000         |  8<br/>或 [**12**](#optional-features) |                                               64 GB |                                              500 GB | 200 GB |
| 5000-8000         | 12<br/>或 [**16**](#optional-features) |                                               96 GB |                                              750 GB | 200 GB |
| 8000-10000+       | 16<br/>或 [**20**](#optional-features) | 128 GB<br/>或 [**160 GB**](#optional-features) |                                             1000 GB | 200 GB |

{% else %}

| 用户许可              |                                                                                                                                  vCPU |                                                                                                                                            内存 |                                                                                                                                       附加的存储容量 |  根存储容量 |
|:----------------- | -------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ------:|
| 试用版、演示版或 10 个轻度用户 |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 200 GB |
| 10-3000           |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 200 GB |
| 3000-5000         |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         64 GB |                                                                                                                                        500 GB | 200 GB |
| 5000-8000         | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         96 GB |                                                                                                                                        750 GB | 200 GB |
| 8000-10000+       | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                       1000 GB | 200 GB |

{% endif %}

有关为现有实例调整资源的更多信息，请参阅“[增加存储容量](/enterprise/admin/installation/increasing-storage-capacity)”和“[增加 CPU 或内存资源](/enterprise/admin/installation/increasing-cpu-or-memory-resources)”。

{% if currentVersion == "enterprise-server@2.22" %}

#### {% data variables.product.prodname_ghe_server %} 2.22 中的测试功能

您可以注册 {% data variables.product.prodname_ghe_server %} 2.22 中可用的试用功能，例如 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅 {% data variables.product.prodname_enterprise %} 网站上的 [2.22 系列发行说明](https://enterprise.github.com/releases/series/2.22#release-2.22.0)。

如果您为 {% data variables.product.prodname_ghe_server %} 2.22 启用测试功能，则您的实例需要额外的硬件资源。 更多信息请参阅“[最低要求](#minimum-requirements)”。

{% elsif currentVersion ver_gt "enterprise-server@2.22" %}

#### 可选功能

您可以启用 {% data variables.product.prodname_ghe_server %} 的可选功能，如 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %}。 更多信息请参阅“[对 {% data variables.product.prodname_ghe_server %} 开始使用 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)”或“[对企业开始使用 {% data variables.product.prodname_registry %}](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”。

如果启用可选功能，则实例需要额外的硬件资源。 更多信息请参阅“[最低要求](#minimum-requirements)”。

{% endif %}
