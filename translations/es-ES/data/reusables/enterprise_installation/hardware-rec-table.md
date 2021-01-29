{% if currentVersion ver_gt "enterprise-server@2.21" %}

{% note %}

**Note**: If you enable {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %}, your instance requires additional hardware resources. Minimum requirements for an instance with {% if currentVersion == "enterprise-server@2.22" %}beta{% else %}optional{% endif %} features enabled are **bold** in the following table. For more information, see "{% if currentVersion == "enterprise-server@2.22" %}[Beta features in {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222){% else %}[Optional features](#optional-features){% endif %}."

{% endnote %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
| Licencias de usuario                     |                                        vCPU |                                             Memoria |                            Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | -------------------------------------------:| ---------------------------------------------------:| ---------------------------------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |   2<br/>o [**4**](#optional-features) |   16 GB<br/>o [**32 GB**](#optional-features) | 100 GB<br/>o [**150 GB**](#optional-features) |              200 GB |
| 10-3000                                  |   4<br/>o [**8**](#optional-features) |   32 GB<br/>o [**48 GB**](#optional-features) | 250 GB<br/>o [**300 GB**](#optional-features) |              200 GB |
| 3000-5000                                |  8<br/>o [**12**](#optional-features) |                                               64 GB |                                              500 GB |              200 GB |
| 5000-8000                                | 12<br/>o [**16**](#optional-features) |                                               96 GB |                                              750 GB |              200 GB |
| 8000-10000+                              | 16<br/>o [**20**](#optional-features) | 128 GB<br/>o [**160 GB**](#optional-features) |                                             1000 GB |              200 GB |

{% else %}

| Licencias de usuario                     |                                                                                                                                  vCPU |                                                                                                                                       Memoria |                                                                                                                      Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |              200 GB |
| 10-3000                                  |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |              200 GB |
| 3000-5000                                |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         64 GB |                                                                                                                                        500 GB |              200 GB |
| 5000-8000                                | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         96 GB |                                                                                                                                        750 GB |              200 GB |
| 8000-10000+                              | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                       1000 GB |              200 GB |

{% endif %}

Para obtener más información sobre el ajuste de recursos para una instancia existente, consulta las secciones "[Incrementar la capacidad de almacenamiento](/enterprise/admin/installation/increasing-storage-capacity)" e "[Incrementar los recursos de memoria o de CPU](/enterprise/admin/installation/increasing-cpu-or-memory-resources)".

{% if currentVersion == "enterprise-server@2.22" %}

#### Características beta en {% data variables.product.prodname_ghe_server %} 2.22

Puedes registrarte para las características del beta disponibles en {% data variables.product.prodname_ghe_server %} 2.22 tales como las {% data variables.product.prodname_actions %}, el {% data variables.product.prodname_registry %}, y el {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta las [notas de lanzamiento para la serie 2.22](https://enterprise.github.com/releases/series/2.22#release-2.22.0) en el sitio web de {% data variables.product.prodname_enterprise %}.

Si habilitas las características beta para {% data variables.product.prodname_ghe_server %} 2.22, tu instancia requerirá de recursos de hardware adicionales. Para obtener más información, consulta la sección "[Requisitos mínimos](#minimum-requirements)".

{% elsif currentVersion ver_gt "enterprise-server@2.22" %}

#### Optional features

You can enable optional features for {% data variables.product.prodname_ghe_server %}, such as {% data variables.product.prodname_actions %} and {% data variables.product.prodname_registry %}. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)" or "[Getting started with {% data variables.product.prodname_registry %} for your enterprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

If you enable optional features, your instance requires additional hardware resources. Para obtener más información, consulta la sección "[Requisitos mínimos](#minimum-requirements)".

{% endif %}
