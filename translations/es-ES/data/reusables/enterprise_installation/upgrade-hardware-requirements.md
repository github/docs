{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### Acerca de los requisitos mínimos para {% data variables.product.prodname_ghe_server %} 3.0 y superior

Antes de actualizar a {% data variables.product.prodname_ghe_server %} 3.0 o superior, revisa los recursos de hardware que has aprovisionado para tu instancia. {% data variables.product.prodname_ghe_server %} 3.0 presenta características nuevas tales como {% data variables.product.prodname_actions %} y el {% data variables.product.prodname_registry %}, y requiere más recursos que la versión 2.22 y anteriores. Para obtener más información, consulta la sección de [notas de lanzamiento para {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Los requisitos que incrementan para {% data variables.product.prodname_ghe_server %} 3.0 y posterior se muestran en **negritas** en la siguiente tabla.

| Licencias de usuario                     |                                     vCPU |                                          Memoria |                         Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | ----------------------------------------:| ------------------------------------------------:| ------------------------------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |   **4**<br/>_Aumentando desde 2_ |   **32 GB**<br/>_Aumentando desde 16 GB_ | **150 GB**<br/>_Aumentando desde 100 GB_ |              200 GB |
| 10-3000                                  |   **8**<br/>_Aumentando desde 4_ |   **48 GB**<br/>_Aumentando desde 32 GB_ | **300 GB**<br/>_Aumentando desde 250 GB_ |              200 GB |
| 3000-5000                                |  **12**<br/>_Aumentando desde 8_ |                                            64 GB |                                           500 GB |              200 GB |
| 5000-8000                                | **16**<br/>_Aumentando desde 12_ |                                            96 GB |                                           750 GB |              200 GB |
| 8000-10000+                              | **20**<br/>_Aumentando desde 16_ | **160 GB**<br/>_Aumentando desde 128 GB_ |                                          1000 GB |              200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

Para obtener más información acerca de los requisitos de hardware para las {% data variables.product.prodname_actions %}, consulta la sección "[Comenzar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
