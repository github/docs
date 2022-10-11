{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### Sobre os requisitos mínimos para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior

Antes de atualizar para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior, revise os recursos de hardware que você forneceu para sua instância. {% data variables.product.prodname_ghe_server %} 3.0 introduz novas funcionalidades, como {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %}, e exige mais recursos do que as versões 2.22 e anteriores. Para obter mais informações, consulte as observações sobre a versão [{% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Os requisitos aumentados para {% data variables.product.prodname_ghe_server %} 3.0 e posterior estão em **negrito** na tabela a seguir.

| Licenças de usuário                      |                         vCPUs |                               Memória |                 Armazenamento anexado | Armazenamento raiz |
|:---------------------------------------- | -----------------------------:| -------------------------------------:| -------------------------------------:| ------------------:|
| Teste, demonstração ou 10 usuários leves | **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up de 16 GB_ | **150 GB**<br/>_Up de 100 GB_ |             200 GB |
| 10-3000                                  |   **8**<br/>_Up de 4_ |   **48 GB**<br/>_Up de 32 GB_ | **300 GB**<br/>_Up de 250 GB_ |             200 GB |
| 3000-5000                                |  **12**<br/>_Up de 8_ |                                 64 GB |                                500 GB |             200 GB |
| 5000-8000                                | **16**<br/>_Up de 12_ |                                 96 GB |                                750 GB |             200 GB |
| 8000-10000+                              | **20**<br/>_Up de 16_ | **160 GB**<br/>_Up de 128 GB_ |                               1000 GB |             200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

Para obter mais informações sobre requisitos de hardware para {% data variables.product.prodname_actions %}, consulte "[Introdução a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
