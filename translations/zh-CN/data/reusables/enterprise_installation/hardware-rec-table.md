{% ifversion ghes %}

| 用户许可              | vCPU |     内存 | 附加的存储容量 |  根存储容量 |
|:----------------- | ----:| ------:| -------:| ------:|
| 试用版、演示版或 10 个轻度用户 |    4 |  32 GB |  150 GB | 200 GB |
| 10-3000           |    8 |  48 GB |  300 GB | 200 GB |
| 3000-5000         |   12 |  64 GB |  500 GB | 200 GB |
| 5000-8000         |   16 |  96 GB |  750 GB | 200 GB |
| 8000-10000+       |   20 | 160 GB | 1000 GB | 200 GB |

{% else %}

| 用户许可              | vCPU |     内存 | 附加的存储容量 |  根存储容量 |
|:----------------- | ----:| ------:| -------:| ------:|
| 试用版、演示版或 10 个轻度用户 |    2 |  16 GB |  100 GB | 200 GB |
| 10-3000           |    4 |  32 GB |  250 GB | 200 GB |
| 3000-5000         |    8 |  64 GB |  500 GB | 200 GB |
| 5000-8000         |   12 |  96 GB |  750 GB | 200 GB |
| 8000-10000+       |   16 | 128 GB | 1000 GB | 200 GB |

{% endif %}

{% ifversion ghes %}

如果您计划为实例用户启用 {% data variables.product.prodname_actions %}，请在“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)”中查阅硬件、外部存储和运行器的要求。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}
