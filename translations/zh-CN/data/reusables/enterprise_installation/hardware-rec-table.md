{% if currentVersion == "enterprise-server@2.22" %}

{% note %}

**Note**: If you joined the beta for {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %} and enabled the features, your instance requires additional hardware resources. 启用测试功能的实例的最低要求在下表中用**粗体**表示。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 2.22 中的测试功能](#beta-features-in-github-enterprise-server-222)”。

{% endnote %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
| 用户许可              | vCPU |     内存 | 附加的存储容量 |  根存储容量 |
|:----------------- | ----:| ------:| -------:| ------:|
| 试用版、演示版或 10 个轻度用户 |    4 |  32 GB |  150 GB | 200 GB |
| 10-3000           |    8 |  48 GB |  300 GB | 200 GB |
| 3000-5000         |   12 |  64 GB |  500 GB | 200 GB |
| 5000-8000         |   16 |  96 GB |  750 GB | 200 GB |
| 8000-10000+       |   20 | 160 GB | 1000 GB | 200 GB |

{% else %}

| 用户许可              |                                                                                                                                  vCPU |                                                                                                                                            内存 |                                                                                                                                       附加的存储容量 |  根存储容量 |
|:----------------- | -------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ------:|
| 试用版、演示版或 10 个轻度用户 |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 200 GB |
| 10-3000           |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 200 GB |
| 3000-5000         |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         64 GB |                                                                                                                                        500 GB | 200 GB |
| 5000-8000         | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         96 GB |                                                                                                                                        750 GB | 200 GB |
| 8000-10000+       | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>或 [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                       1000 GB | 200 GB |

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

If you plan to configure {% data variables.product.prodname_actions %} for your instance, you should provision additional resources. You must also configure at least one self-hosted runner to execute workflows. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}

#### {% data variables.product.prodname_ghe_server %} 2.22 中的测试功能

{% data variables.product.prodname_ghe_server %} 2.22 offered features in beta, such as {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, and {% data variables.product.prodname_code_scanning %}. For more information, see the [{% data variables.product.prodname_ghe_server %} 2.22 release notes](/enterprise-server@2.22/admin/release-notes#2.22.0).

If you enabled beta features for {% data variables.product.prodname_ghe_server %} 2.22, your instance requires additional hardware resources. 更多信息请参阅“[最低要求](#minimum-requirements)”。

{% endif %}
