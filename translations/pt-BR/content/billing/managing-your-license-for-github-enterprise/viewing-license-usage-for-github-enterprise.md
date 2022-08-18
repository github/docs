---
title: Visualizando o uso da licença para o GitHub Enterprise
intro: 'Você pode visualizar o uso da licença da sua empresa em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Visualizar o uso da licença
---

## Sobre o uso da licença para {% data variables.product.prodname_enterprise %}

Você pode visualizar o uso da licença para {% data variables.product.product_name %} em {% data variables.product.product_location %}.

Se você usar {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %} e sincronizar o uso da licença entre os produtos, você poderá ver o uso da licença para ambos em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre a sincronização de licença, consulte "[Sincronizar o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% ifversion ghes %}

Para obter mais informações sobre a visualização do uso da licença no {% data variables.product.prodname_dotcom_the_website %} e identificar quando ocorreu a última sincronização da licença, consulte "[Visualizando uso de licença para {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" na documentação de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

Você também pode usar a API REST para retornar dados de licenças consumidas e o status do trabalho de sincronização de licença. Para obter mais informações, consulte "[Administração do GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license)" na documentação da API REST.

Para saber mais sobre os dados da licença associados à conta corporativa e como o número de estações de usuário consumidos é calculado, consulte "[Solucionar problemas no uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".


## Visualizando uso da licença em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Você pode visualizar o uso da licença para a sua empresa e fazer o download de um arquivo com detalhes da licença. Se você não está vendo as contagens de licença esperadas neste relatório, é possível que o assinante tenha atribuído o endereço de e-mail da assinatura de {% data variables.product.prodname_vs %} e o endereço de e-mail de {% data variables.product.prodname_dotcom_the_website %} não seja exatamente igual. Para obter mais informações, consulte "[Solução de problemas de uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revise sua licença atual de {% data variables.product.prodname_enterprise %}, bem como licenças de usuário consumidas e disponíveis.
    - Para fazer o download do relatório de licença utilizadacomo um arquivo CSV, no canto superior direito, clique em {% octicon "download" aria-label="The download icon" %}. Para obter mais informações sobre a revisão dos dados neste relatório, consulte "[Problemas de uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revise a sua licença atual de {% data variables.product.prodname_enterprise %}, bem como as licenças de usuário usadas e disponíveis.{% ifversion ghes %}
    - Para fazer o download do relatório de licença usada como um arquivo JSON, na parte superior direita, em "Links rápidos", selecione **Exportar uso de licença**. Para obter mais informações sobre a revisão dos dados neste relatório, consulte "[Problemas de uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações, bem como o detalhamento por organização dos committers. Para obter mais informações, consulte "[Gerenciar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security)".{% endif %}

{% endif %}
{% ifversion ghec %}
## Visualizando a data da última sincronização da licença

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Para identificar quando a última sincronização ocorreu, em "Instâncias do Enterprise Server", procure registros de hora ao lado do uso de eventos enviados ou sincronizados.
   - "Upload do uso do serviço concluído" indica que o uso da licença entre os ambientes foi atualizado manualmente quando um arquivo de licença de {% data variables.product.prodname_ghe_server %} foi carregado.
   - "Uso sincronizado do servidor de {% data variables.product.prodname_github_connect %}" indica que o uso da licença entre os ambientes foi atualizado automaticamente.
   - "{% data variables.product.prodname_github_connect %} uso do servidor nunca sincronizado" indica que {% data variables.product.prodname_github_connect %} foi configurado, mas o uso de licença entre ambientes nunca foi atualizado com sucesso.

{% endif %}
