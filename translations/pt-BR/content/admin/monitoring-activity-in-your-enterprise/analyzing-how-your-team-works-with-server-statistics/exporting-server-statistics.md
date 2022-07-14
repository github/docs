---
title: Exportando as estatísticas do servidor
shortTitle: Exportação das estatísticas do servidor
intro: 'Você pode usar suas próprias ferramentas para analisar seu uso de {% data variables.product.prodname_ghe_server %} ao longo do tempo, fazendo o download das suas métricas de {% data variables.product.prodname_server_statistics %} para um arquivo CSV ou JSON.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
---

{% data reusables.server-statistics.release-phase %}

Você pode fazer o download dos últimos 365 dias de dados de {% data variables.product.prodname_server_statistics %} para um arquivo CSV ou JSON. Estes dados, que incluem métricas agregadas em repositórios, problemas e pull requests, podem ajudar você a antecipar as necessidades da sua organização, entender como sua equipe funciona e mostrar o valor que você obtém de {% data variables.product.prodname_ghe_server %}.

Antes de poder fazer o download desses dados, você deverá habilitar {% data variables.product.prodname_server_statistics %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_server_statistics %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

Para visualizar as métricas disponíveis para fazer o download, consulte "[Sobre {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

Para fazer o download dessas métricas, você deve ser um proprietário de uma empresa ou de uma organização em {% data variables.product.prodname_ghe_cloud %}.
  - Se {% data variables.product.product_location %} estiver conectado a uma conta corporativa em {% data variables.product.prodname_ghe_cloud %}, consulte "[Fazendo o download das métricas da sua conta corporativa](#downloading-metrics-from-your-enterprise-account)".
  - Se {% data variables.product.product_location %} estiver conectado a uma organização em {% data variables.product.prodname_ghe_cloud %}, consulte "[Fazendo o download das métricas da sua organização](#downloading-metrics-from-your-organization)".

Para saber mais sobre {% data variables.product.prodname_github_connect %}, consulte "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)."

## Fazendo o download das métricas da sua conta corporativa

1. No canto superior direito de {% data variables.product.prodname_ghe_cloud %}, clique na sua foto de perfil e, em seguida, clique em **Suas empresas**. ![Menu suspenso com a opção "Suas empresas"](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Ao lado da conta corporativa desejada, clique em **Configurações**. ![Botão de configurações ao lado da conta do administrador da empresa](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. À esquerda, clique em **GitHub Connect**. ![Opção GitHub Connect na conta do administrador corporativo](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Fazendo o download das métricas da conta da sua organização

1. No canto superior direito do {% data variables.product.prodname_ghe_cloud %}, clique na sua foto do seu perfil e, em seguida, clique em **Suas organizações**. ![Menu suspenso com a opção "Suas organizações"](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. Na lista de organizações, ao lado da organização conectada ao {% data variables.product.product_location %}, clique em **Configurações**. ![Botão de configurações ao lado da organização de {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. À esquerda, clique em **GitHub Connect**. ![Opção do GitHub Connect em configurações de uma conta à esquerda da barra lateral](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
