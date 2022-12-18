---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093658"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>Sobre os requisitos mínimos para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior

Antes de atualizar para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior, revise os recursos de hardware que você forneceu para sua instância. {% data variables.product.prodname_ghe_server %} 3.0 introduz novas funcionalidades, como {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %}, e exige mais recursos do que as versões 2.22 e anteriores. Para obter mais informações, confira as [notas sobre a versão do {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Os requisitos aumentados para o {% data variables.product.prodname_ghe_server %} 3.0 e posterior estão **em negrito** na tabela a seguir.

| Licenças de usuário | vCPUs | Memória | Armazenamento anexado | Armazenamento raiz |
| :- | -: | -: | -: | -: |
| Teste, demonstração ou 10 usuários leves | **4**<br/>_Aumentado de 2_ | **32 GB**<br/>_Aumentado de 16 GB_ | **150 GB**<br/>_Aumentado de 100 GB_ | 200 GB |
| 10-3000  | **8**<br/>_Aumentado de 4_ | **48 GB**<br/>_Aumentado de 32 GB_ | **300 GB**<br/>_Aumentado de 250 GB_ | 200 GB |
| 3000-5000 | **12**<br/>_Aumentado de 8_ | 64 GB | 500 GB | 200 GB |
| 5000-8000 | **16**<br/>_Aumentado de 12_ | 96 GB | 750 GB | 200 GB |
| 8000-10000+ | **20**<br/>_Aumentado de 16_ | **160 GB**<br/>_Aumentado de 128 GB_ | 1000 GB | 200 GB |

{% ifversion ghes %}

Para obter mais informações sobre os requisitos de hardware do {% data variables.product.prodname_actions %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)".

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
