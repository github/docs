---
title: Habilitando as estatísticas do servidor para a sua empresa
intro: 'Você pode analisar seus próprios dados agregados de {% data variables.product.prodname_ghe_server %} e nos ajudar a melhorar {% data variables.product.company_short %} produtos, habilitando {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Estatísticas do servidor
---

{% data reusables.server-statistics.release-phase %}

## Sobre {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} coleta os dados de uso agregados de {% data variables.product.product_location %}, os quais você pode usar para prever melhor as necessidades da sua organização, entender como a sua equipe funciona e mostrar o valor que você obtém de {% data variables.product.prodname_ghe_server %}.

{% data variables.product.prodname_server_statistics %} coleta apenas certas métricas agregadas em repositórios, problemas, pull requests e outras funcionalidades.{% data variables.product.prodname_dotcom %} conteúdo, como código, problemas, comentários ou conteúdo do pull request, não é coletado. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

Ao habilitar, {% data variables.product.prodname_server_statistics %}, você também está ajudando a melhorar {% data variables.product.company_short %}. Os dados agregados que você fornecerá nos ajuda a entender como nossos clientes estão usando {% data variables.product.prodname_dotcom %} e a tomar decisões melhores e mais informadas sobre o produto, o que beneficia você.

## Habilitar o {% data variables.product.prodname_server_statistics %}

Antes de poder habilitar {% data variables.product.prodname_server_statistics %}, primeiro você deve conectar sua instância do {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %} através de {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

Você pode desabilitar {% data variables.product.prodname_server_statistics %} de {% data variables.product.prodname_ghe_server %} a qualquer momento.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. Em "Compartilhar as estatísticas do servidor de GitHub.com", selecione o menu suspenso e clique em **Habilitado** ou **Desabilitado**. ![Captura de tela do menu suspenso de {% data variables.product.prodname_server_statistics %} com opções habilitadas ou desabilitadas](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
