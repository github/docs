---
title: Solicitando as estatísticas do servidor usando a API REST
shortTitle: Estatísticas do servidor e API REST
intro: 'Você pode usar suas próprias ferramentas para analisar seu uso de {% data variables.product.prodname_ghe_server %} ao longo do tempo, solicitando as métricas de {% data variables.product.prodname_server_statistics %} coletadas usando a API REST.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api
---

{% data reusables.server-statistics.release-phase %}

Você pode solicitar até 365 dias de métricas em um único pedido da API REST de {% data variables.product.prodname_server_statistics %}. Estes dados, que incluem métricas agregadas em repositórios, problemas e pull requests, podem ajudar você a antecipar as necessidades da sua organização, entender como sua equipe funciona e mostrar o valor que você obtém de {% data variables.product.prodname_ghe_server %}. Para ver uma lista das métricas coletadas, consulte "[ dados coletdos de {% data variables.product.prodname_server_statistics %}"](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)".

Antes de poder usar a API REST {% data variables.product.prodname_server_statistics %}, você deve habilitar {% data variables.product.prodname_server_statistics %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_server_statistics %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

Para obter mais informações sobre o uso da API REST para solicitar estatísticas do servidor, consulte "[Obter estatísticas de {% data variables.product.prodname_ghe_server %}](/enterprise-cloud@latest/rest/enterprise-admin/admin-stats#get-github-enterprise-server-statistics)" na documentação da API REST de {% data variables.product.prodname_ghe_cloud %}.
