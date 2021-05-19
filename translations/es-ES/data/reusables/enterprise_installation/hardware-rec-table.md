{% if currentVersion == "enterprise-server@2.22" %}

{% note %}

**Nota**: Si te uniste al beta para las {% data variables.product.prodname_actions %} o el {% data variables.product.prodname_registry %} y habilitaste las características, tu instancia requiere recursos adicionales de hardware. Los requisitos mínimos para una instancia con características beta habilitadas se muestran en **negritas** en la siguiente tabla. Para obtener más informaci´n, consulta la sección "[Características beta en {% data variables.product.prodname_ghe_server %} 2.22](#beta-features-in-github-enterprise-server-222)".

{% endnote %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
| Licencias de usuario                     | vCPU | Memoria | Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | ----:| -------:| ------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |    4 |   32 GB |                   150 GB |              200 GB |
| 10-3000                                  |    8 |   48 GB |                   300 GB |              200 GB |
| 3000-5000                                |   12 |   64 GB |                   500 GB |              200 GB |
| 5000-8000                                |   16 |   96 GB |                   750 GB |              200 GB |
| 8000-10000+                              |   20 |  160 GB |                  1000 GB |              200 GB |

{% else %}

| Licencias de usuario                     |                                                                                                                                  vCPU |                                                                                                                                       Memoria |                                                                                                                      Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |              200 GB |
| 10-3000                                  |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |              200 GB |
| 3000-5000                                |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         64 GB |                                                                                                                                        500 GB |              200 GB |
| 5000-8000                                | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                         96 GB |                                                                                                                                        750 GB |              200 GB |
| 8000-10000+                              | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>o [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                       1000 GB |              200 GB |

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de tu instancia, revisa los requisitos de hardware, almacenamiento externo y ejecutores que se encuentran en "[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Características beta en {% data variables.product.prodname_ghe_server %} 2.22

{% data variables.product.prodname_ghe_server %} 2.22 ofreció cracterísticas beta, tales como las {% data variables.product.prodname_actions %}, el {% data variables.product.prodname_registry %}, y el {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta las [notas de lanzamiento de {% data variables.product.prodname_ghe_server %} 2.22](/enterprise-server@2.22/admin/release-notes#2.22.0).

Si habilitas las características beta de {% data variables.product.prodname_ghe_server %} 2.22, tu instancia requiere recursos de hardware adicionales. Para obtener más información sobre los requisitos mínimos, consulta la sección "[Requisitos mínimos](#minimum-requirements)".

Para obtener más información acerca de los requisitos de hardware para las {% data variables.product.prodname_actions %}, consulta la sección "[Comenzar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}
