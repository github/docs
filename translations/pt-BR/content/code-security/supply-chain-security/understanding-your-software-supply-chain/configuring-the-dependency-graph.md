---
title: Configurando o grafo de dependência
intro: Você pode permitir que os usuários identifiquem as dependências dos seus projetos habilitando o gráfico de dependências.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684074'
---
## Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %}  

Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec %}
## Sobre a configuração do grafo de dependência 
Para gerar um grafo de dependência, o {% data variables.product.product_name %} precisa ter acesso somente leitura ao manifesto de dependência e aos arquivos de bloqueio de um repositório. O gráfico de dependências é gerado automaticamente para todos os repositórios públicos e você pode optar por habilitá-lo para repositórios privados. Para obter mais informações sobre a exibição do grafo de dependência, confira "[Como explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)".

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## Habilitando o grafo de dependência {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Habilitar e desabilitar o gráfico de dependências para um repositório privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

Quando o gráfico de dependências é ativado pela primeira vez, todos manifesto e arquivos de bloqueio para ecossistemas suportados são analisados imediatamente. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Depois de habilitado, o gráfico é atualizado automaticamente a cada push no repositório{% ifversion fpt or ghec %} e a cada push para outros repositórios no grafo{% endif %}.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## Leitura adicional

{% ifversion ghec %}–"[Como ver os insights da sua organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Como ver e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solução de problemas de detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
