{% if currentVersion ver_gt "enterprise-server@2.21" %}

{% note %}

**Nota**: Si habilitas las {% data variables.product.prodname_actions %} o el {% data variables.product.prodname_registry %}, tu instancia requerirá de recursos de hardware adicionales. Los requisitos mínimos para una instancia con características {% if currentVersion == "enterprise-server@2.22" %}beta{% else %}opcionales{% endif %} habilitadas se encuentran en **negritas** en la siguiente tabla. Para obtener más información, consulta la sección "{% if currentVersion == "enterprise-server@2.22" %}[Características beta en {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222){% else %}[Características opcionales](#optional-features){% endif %}".

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

#### Características opcionales

Puedes habilitar las características opcionales para {% data variables.product.prodname_ghe_server %}, tales como las {% data variables.product.prodname_actions %} y el {% data variables.product.prodname_registry %}. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)" o "[Iniciar con el {% data variables.product.prodname_registry %} para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

Si habilitas las características opcionales, tu instancia requerirá recursos de hardware adicionales. Para obtener más información, consulta la sección "[Requisitos mínimos](#minimum-requirements)".

{% endif %}
