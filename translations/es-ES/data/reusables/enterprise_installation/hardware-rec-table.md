{% ifversion ghes %}

| Licencias de usuario                     | vCPU | Memoria | Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | ----:| -------:| ------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |    4 |   32 GB |                   150 GB |              200 GB |
| 10-3000                                  |    8 |   48 GB |                   300 GB |              200 GB |
| 3000-5000                                |   12 |   64 GB |                   500 GB |              200 GB |
| 5000-8000                                |   16 |   96 GB |                   750 GB |              200 GB |
| 8000-10000+                              |   20 |  160 GB |                  1000 GB |              200 GB |

{% else %}

| Licencias de usuario                     | vCPU | Memoria | Almacenamiento conectado | Almacenamiento raíz |
|:---------------------------------------- | ----:| -------:| ------------------------:| -------------------:|
| Prueba, Demo o 10 usuarios no frecuentes |    2 |   16 GB |                   100 GB |              200 GB |
| 10-3000                                  |    4 |   32 GB |                   250 GB |              200 GB |
| 3000-5000                                |    8 |   64 GB |                   500 GB |              200 GB |
| 5000-8000                                |   12 |   96 GB |                   750 GB |              200 GB |
| 8000-10000+                              |   16 |  128 GB |                  1000 GB |              200 GB |

{% endif %}

{% ifversion ghes %}

Si planeas habilitar las {% data variables.product.prodname_actions %} para los usuarios de tu instancia, se necesitarán más recursos.


{%- ifversion ghes = 3.2 %}

{% data reusables.actions.hardware-requirements-3.2 %}

{%- endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{%- endif %}

Para obtener más información sobre estos requisitos, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}
