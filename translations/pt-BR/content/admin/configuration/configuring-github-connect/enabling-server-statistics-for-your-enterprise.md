---
title: Habilitar estatísticas de servidor para sua empresa
intro: 'Você pode analisar os seus dados de agregação do {% data variables.product.prodname_ghe_server %} e nos ajudar a aprimorar os produtos {% data variables.product.company_short %} habilitando o {% data variables.product.prodname_server_statistics %}.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191867'
---
## Sobre {% data variables.product.prodname_server_statistics %}

O {% data variables.product.prodname_server_statistics %} coleta dados de uso agregados do {% data variables.location.product_location %}, que você pode usar para antecipar melhor as necessidades de sua organização, entender como sua equipe funciona e mostrar o valor obtido do {% data variables.product.prodname_ghe_server %}. 

O {% data variables.product.prodname_server_statistics %} coleta apenas determinadas métricas agregadas em repositórios, problemas, solicitações de pull e outros recursos. Conteúdo do {% data variables.product.prodname_dotcom %}, como código, problemas, comentários ou conteúdo de solicitação de pull, não é coletado. Para obter mais informações, confira "[Sobre {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)".

Ao habilitar {% data variables.product.prodname_server_statistics %}, você também está ajudando a melhorar o {% data variables.product.company_short %}. Os dados agregados que você fornecerá nos ajudam a entender como nossos clientes estão usando o {% data variables.product.prodname_dotcom %}e tomar decisões de produto melhores e mais informadas, beneficiando você.

## Habilitar {% data variables.product.prodname_server_statistics %}

Antes de habilitar {% data variables.product.prodname_server_statistics %}, você deve primeiro conectar sua instância do {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_dotcom_the_website %} por meio do {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)".

Você pode desabilitar {% data variables.product.prodname_server_statistics %} do {% data variables.product.prodname_ghe_server %} a qualquer momento.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. Em "Compartilhar estatísticas do servidor com GitHub.com", selecione o menu suspenso e clique em **Habilitado** ou **Desabilitado**.
  ![Captura de tela do menu suspenso de {% data variables.product.prodname_server_statistics %} com opções desabilitadas ou habilitadas](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
