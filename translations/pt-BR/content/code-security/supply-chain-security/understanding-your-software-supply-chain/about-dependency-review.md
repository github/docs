---
title: Sobre a análise de dependência
intro: 'A análise de dependências permite que você capture dependências não seguras antes que elas sejam introduzidas no ambiente e fornece informações sobre licença, dependências e idade das dependências.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164111'
---
## Sobre a análise de dependência

{% data reusables.dependency-review.feature-overview %}  

Se um pull request for direcionado ao branch padrão do seu repositório e contiver alterações em manifestos de pacote ou arquivos de bloqueio, você poderá exibir um comentário de dependência para ver o que foi alterado. A revisão de dependências inclui detalhes de alterações nas dependências indiretas nos arquivos de bloqueio, e informa a você se alguma das dependências adicionadas ou atualizadas contém vulnerabilidades conhecidas.

Às vezes, você pode apenas querer atualizar a versão de uma dependência em um manifesto e gerar um pull request. No entanto, se a versão atualizada desta dependência direta também atualizou as dependências, seu pull request pode ter mais alterações do que o esperado. A revisão de dependência para cada manifesto e arquivo de bloqueio fornece uma maneira fácil de ver o que foi alterado e se alguma das novas versões de dependências contém vulnerabilidades conhecidas.

Ao verificar as revisões de dependências em um pull request e alterar todas as dependências sinalizadas como vulneráveis, você pode evitar que vulnerabilidades sejam adicionadas ao seu projeto. Para obter mais informações sobre como funciona a revisão de dependência, confira "[Como revisar alterações de dependência em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

Para obter mais informações sobre como configurar a revisão de dependência, confira "[Configurando a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)".

{% data variables.product.prodname_dependabot_alerts %} encontrará vulnerabilidades que já estão nas suas dependências, mas é muito melhor evitar a introdução de possíveis problemas do que corrigir problemas em uma data posterior. Para obter mais informações sobre os {% data variables.product.prodname_dependabot_alerts %}, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

A revisão de dependências é compatível com as mesmas linguagens e os mesmos ecossistemas de gestão de pacotes do gráfico de dependência. Para obter mais informações, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Para obter mais informações sobre os recursos da cadeia de fornecedores disponíveis no {% data variables.product.product_name %}, confira "[Sobre a segurança da cadeia de fornecedores](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

{% ifversion ghec or ghes %}
## Habilitar revisão de dependências

O recurso de revisão de dependências é disponibilizado quando você habilitar o gráfico de dependências. Para obter mais informações, confira "{% ifversion ghec %}[Como habilitar o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## Imposição da revisão de dependência

A ação está disponível para todos os {% ifversion fpt or ghec %}repositórios públicos, bem como para repositórios privados{% endif %} que têm o {% data variables.product.prodname_GH_advanced_security %} habilitado.

{% data reusables.dependency-review.action-enterprise %}

Você pode usar o {% data variables.product.prodname_dependency_review_action %} para impor revisões de dependência em solicitações de pull no repositório. A ação examina versões vulneráveis de dependências introduzidas por alterações de versão do pacote em solicitações de pull e avisa você sobre as vulnerabilidades de segurança associadas. Isso oferece uma melhor visibilidade do que está mudando em uma solicitação de pull e ajuda a evitar que vulnerabilidades sejam adicionadas ao repositório. Para obter mais informações, confira [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Exemplo de ação de revisão de dependência](/assets/images/help/graphs/dependency-review-action.png)

Por padrão, a verificação do {% data variables.product.prodname_dependency_review_action %} falhará se descobrir pacotes vulneráveis. Uma verificação com falha impede que uma solicitação de pull seja mesclada quando o proprietário do repositório exigir que a verificação de análise de dependência seja aprovada. Para obter mais informações, confira "[Sobre os branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".

A ação usa a API REST de Revisão de Dependência para obter a comparação das alterações de dependência entre o commit base e o commit principal. Use a API de Revisão de Dependência para obter a comparação das alterações de dependência, incluindo dados de vulnerabilidade, entre os dois commits em um repositório. Para obter mais informações, confira "[Revisão de dependência](/rest/reference/dependency-graph#dependency-review)".

{% ifversion dependency-review-action-configuration %} Você pode configurar o {% data variables.product.prodname_dependency_review_action %} de acordo com suas necessidades. Por exemplo, você pode especificar o nível de severidade que fará a ação falhar{% ifversion dependency-review-action-licenses %} ou definir uma lista de permissões e negações para que as licenças sejam verificadas{% endif %}. Para obter mais informações, confira "[Como configurar a análise de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)". {% endif %}

{% endif %}

