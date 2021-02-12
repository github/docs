{% if currentVersion == "enterprise-server@2.22" %}

{% note %}

**Note**: If you enable beta features for {% data variables.product.prodname_ghe_server %} 2.22, your instance requires additional hardware resources. Os requisitos mínimos para uma instância com recursos beta habilitados estão em **negrito** na tabela a seguir. For more information about the features in beta, see "[Beta features in {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222)."

{% endnote %}
|
{% endif %}
| Licenças de usuário                      |                                                                                                                                  vCPUs |                                                                                                                                        Memória |                                                                                                                          Armazenamento anexado | Armazenamento raiz |
|:---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------:| ------------------:|
| Teste, demonstração ou 10 usuários leves |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |             200 GB |
| 10-3000                                  |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |             200 GB |
| 3000-5000                                |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                          64 GB |                                                                                                                                         500 GB |             200 GB |
| 5000-8000                                | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                          96 GB |                                                                                                                                         750 GB |             200 GB |
| 8000-10000+                              | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>ou [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                        1000 GB |             200 GB |

For more information about adjusting resources for an existing instance, see "[Increasing storage capacity](/enterprise/admin/installation/increasing-storage-capacity)" and "[Increasing CPU or memory resources](/enterprise/admin/installation/increasing-cpu-or-memory-resources)."

{% if currentVersion == "enterprise-server@2.22" %}

#### Recursos do beta em {% data variables.product.prodname_ghe_server %} 2.22

You can sign up for beta features available in {% data variables.product.prodname_ghe_server %} 2.22 such as {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, and {% data variables.product.prodname_code_scanning %}. For more information, see the [release notes for the 2.22 series](https://enterprise.github.com/releases/series/2.22#release-2.22.0) on the {% data variables.product.prodname_enterprise %} website.

If you enable beta features for {% data variables.product.prodname_ghe_server %} 2.22, your instance requires additional hardware resources. For more information, see "[Minimum requirements](#minimum-requirements)".

{% endif %}
