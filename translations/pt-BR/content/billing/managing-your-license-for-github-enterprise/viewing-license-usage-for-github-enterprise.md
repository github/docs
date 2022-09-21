---
title: Visualizando o uso da licença para o GitHub Enterprise
intro: 'Você pode ver o uso de licença na empresa no {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572613'
---
## Sobre o uso da licença para {% data variables.product.prodname_enterprise %}

Você pode visualizar o uso da licença para {% data variables.product.product_name %} em {% data variables.product.product_location %}.

Se você usar o {% data variables.product.prodname_ghe_cloud %} e o {% data variables.product.prodname_ghe_server %} e sincronizar o uso da licença entre os produtos, poderá ver o uso da licença dos dois no {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre sincronização de licenças, confira "[Sincronizando o uso de licenças entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% ifversion ghes %}

Para obter mais informações sobre a exibição do uso de licença no {% data variables.product.prodname_dotcom_the_website %} e identificar quando a ocorreu a última sincronização de licença, confira "[Como ver o uso de licença do {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" na documentação do {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

Você também pode usar a API REST para retornar dados de licenças consumidas e o status do trabalho de sincronização de licenças. Para obter mais informações, confira "[Administração do GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license)" na documentação da API REST.

Para saber mais sobre os dados de licença associados à conta empresarial e como o número de estações de usuário consumidas é calculado, confira "[Como solucionar problemas de uso de licença do GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".


## Como ver o uso da licença do {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Você pode visualizar o uso da licença para a sua empresa e fazer o download de um arquivo com detalhes da licença. Se você não estiver vendo as contagens de licença esperadas neste relatório, é possível que o endereço de email da assinatura do {% data variables.product.prodname_vs %} e o endereço de email do {% data variables.product.prodname_dotcom_the_website %} atribuído ao assinante não sejam exatamente iguais. Para obter mais informações, confira "[Como solucionar problemas de uso de licença do GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Licenciamento do Enterprise**.
  ![Guia "Licenciamento do Enterprise" na barra lateral das configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revise sua licença atual de {% data variables.product.prodname_enterprise %}, bem como licenças de usuário consumidas e disponíveis.
    - Para baixar o relatório de licença consumida como um arquivo CSV, no canto superior direito, clique em {% octicon "download" aria-label="The download icon" %}. Para obter mais informações de como examinar os dados nesse relatório, confira "[Como solucionar problemas de uso de licença do GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações. Para obter mais informações, confira "[Como ver seu uso do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Revise sua licença atual do {% data variables.product.prodname_enterprise %}, bem como as licenças de usuário consumidas e disponíveis.{% ifversion ghes %}
    - Para baixar o relatório de licença consumida como um arquivo JSON, no canto superior direito em "Links rápidos", clique em **Exportar o uso de licença**. Para obter mais informações de como examinar os dados nesse relatório, confira "[Como solucionar problemas de uso de licença do GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações, bem como o detalhamento por organização dos committers. Para obter mais informações, confira "[Como gerenciar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/advanced-security)".{% endif %}

{% endif %} {% ifversion ghec %}
## Como ver a última data de sincronização de licença

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Licenciamento do Enterprise**.
  ![Guia "Licenciamento do Enterprise" na barra lateral das configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Para identificar quando ocorreu a última sincronização de licença, em "Instâncias do Enterprise Server", procure carimbos de data/hora ao lado de eventos de uso carregados ou sincronizados.
   - "Uso do servidor carregado" indica que o uso de licença entre ambientes foi atualizado manualmente quando um arquivo de licença do {% data variables.product.prodname_ghe_server %} foi carregado.
   - "Uso do servidor {% data variables.product.prodname_github_connect %} sincronizado" indica que o uso de licença entre ambientes foi atualizado automaticamente.
   - "Uso do servidor {% data variables.product.prodname_github_connect %} nunca sincronizado" indica que o {% data variables.product.prodname_github_connect %} está configurado, mas o uso de licença entre ambientes nunca foi atualizado com êxito.

{% endif %}
