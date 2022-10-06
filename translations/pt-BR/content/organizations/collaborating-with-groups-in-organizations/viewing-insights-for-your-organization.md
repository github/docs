---
title: Exibir informações da organização
intro: 'As informações da organização fornecem dados sobre a atividade, as contribuições e as dependências dela.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126532'
---
## Sobre insights da organização

Você pode usar informações de atividade da organização para entender melhor como os integrantes da sua organização estão usando o {% data variables.product.product_name %} para colaborar e trabalhar no código. As informações de dependência podem ajudar você a monitorar, reportar e agir de acordo com o uso de código aberto da organização.

{% note %}

**Observação:** para visualizar os insights da organização, sua organização precisa usar o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Exibir informações de atividade da organização

{% note %}

**Observação:** atualmente, os insights de atividades da organização estão em versão beta pública e sujeitos a alterações.

{% endnote %}

Com as informações de atividade da organização, é possível exibir visualizações de dados semanais, mensais e anuais de toda a organização ou de repositórios específicos, como atividade de pull requests e problemas, principais linguagens usadas e dados cumulativos sobre onde os integrantes da organização passam o tempo.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Abaixo do nome da sua organização, clique em {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Clique na guia Insights da organização](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Opcionalmente, no canto superior direito da página, opte por visualizar os dados da última **semana**, do último **mês** ou do último **ano**.
  ![Escolha do período para visualizar os insights da organização](/assets/images/help/organizations/org-insights-time-period.png)
5. Opcionalmente, no canto superior direito da página, opte por visualizar os dados de até três repositórios e clique em **Aplicar**.
  ![Escolha dos repositórios para visualizar os insights da organização](/assets/images/help/organizations/org-insights-repos.png)

## Exibir informações de dependência da organização

{% note %}

**Observação:** verifique se você habilitou o [grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph). 

{% endnote %}

Com as informações de dependência, é possível visualizar vulnerabilidades, licenças e outras informações importantes dos projetos de código aberto dos quais a sua organização depende.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Abaixo do nome da sua organização, clique em {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Guia Insights na barra de navegação principal da organização](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Para ver as dependências dessa organização, clique em **Dependências**.
  ![Guia Dependências na barra de navegação principal da organização](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Para ver os insights de dependência de todas as suas organizações do {% data variables.product.prodname_ghe_cloud %}, clique em **Minhas organizações**.
  ![Botão Minhas organizações na guia Dependências](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Clique nos resultados nos grafos **Abrir avisos de segurança** e **Licenças** para filtrar por um status de vulnerabilidade, uma licença ou uma combinação dos dois.
  ![Grafos de vulnerabilidades e licenças em Minhas organizações](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Clique em {% octicon "package" aria-label="The package icon" %} **Dependentes** ao lado de cada vulnerabilidade para ver os dependentes na organização que usam cada biblioteca.
  ![Dependentes vulneráveis em Minhas organizações](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Leitura adicional
 - "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
 - "[Como explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
 - "[Como alterar a visibilidade dos insights de dependência da sua organização](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)"{% ifversion ghec %}
- "[Como impor políticas para insights de dependência na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)"{% endif %}
