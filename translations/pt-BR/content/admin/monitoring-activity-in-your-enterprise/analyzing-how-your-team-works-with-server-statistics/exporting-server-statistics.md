---
title: Exportar estatísticas do servidor
shortTitle: Export Server Statistics
intro: 'Você pode usar suas próprias ferramentas para analisar o uso do seu {% data variables.product.prodname_ghe_server %} ao longo do tempo baixando as métricas do {% data variables.product.prodname_server_statistics %} em um arquivo CSV ou JSON.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718162'
---
Você pode baixar até os últimos 365 dias de dados de {% data variables.product.prodname_server_statistics %} em um arquivo CSV ou JSON. Esses dados, que incluem métricas de agregação em repositórios, problemas e solicitações de pull, podem ajudá-lo a antecipar as necessidades de sua organização, entender como sua equipe trabalha e mostrar o valor obtido do {% data variables.product.prodname_ghe_server %}. 

Antes de baixar esses dados, você precisa habilitar {% data variables.product.prodname_server_statistics %}. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_server_statistics %} em sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)". 

Para visualizar as métricas disponíveis para download, confira "[Sobre {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

Para baixar essas métricas, você deve ser proprietário de uma empresa ou proprietário de organização em {% data variables.product.prodname_ghe_cloud %}.
  - Se {% data variables.product.product_location %} estiver conectado a uma conta corporativa em {% data variables.product.prodname_ghe_cloud %}, confira "[ Baixar métricas de sua conta corporativa](#downloading-metrics-from-your-enterprise-account)".
  - Se {% data variables.product.product_location %} estiver conectado a uma organização em {% data variables.product.prodname_ghe_cloud %}, confira "[Baixar métricas de sua organização](#downloading-metrics-from-your-organization)".

Para saber mais sobre {% data variables.product.prodname_github_connect %}, confira "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)."

## Baixar métricas de sua conta corporativa

1. No canto superior direito do {% data variables.product.prodname_ghe_cloud %} clique na foto do seu perfil e clique em **Suas empresas**.
  ![Menu suspenso com a opção "Suas empresas"](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Ao lado da conta corporativa desejada, clique **em Configurações**.
  ![Botão Configurações ao lado da conta de administrador da empresa](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. À esquerda, clique em **GitHub Connect**.
  ![Opção GitHub Connect na conta de administrador da empresa](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Baixar métricas de sua organização

1. No canto superior direito do {% data variables.product.prodname_ghe_cloud %} clique na foto do seu perfil e clique em **Suas organizações**.
  ![Menu suspenso com a opção "Suas organizações"](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. Na lista de organizações, ao lado da organização que está conectada a {% data variables.product.product_location %}, clique em **Configurações**.
  ![Botão Configurações ao lado da organização {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. À esquerda, clique em **GitHub Connect**.
  ![Opção GitHub Connect na barra lateral esquerda das configurações da conta da organização](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
