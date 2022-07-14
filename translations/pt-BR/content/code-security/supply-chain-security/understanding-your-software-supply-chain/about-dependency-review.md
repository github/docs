---
title: Sobre revisão de dependências
intro: 'A revisão de dependências permite que você capture dependências insegurasantes de introduzi-las no seu ambiente e fornece informações sobre licença, dependências e idade das dependências.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Revisão de dependência
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
---

{% data reusables.dependency-review.beta %}

## Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

Se um pull request for direcionado ao branch padrão do seu repositório e contiver alterações em manifestos de pacote ou arquivos de bloqueio, você poderá exibir um comentário de dependência para ver o que foi alterado. A revisão de dependências inclui detalhes de alterações nas dependências indiretas nos arquivos de bloqueio, e informa a você se alguma das dependências adicionadas ou atualizadas contém vulnerabilidades conhecidas.

Às vezes, você pode apenas querer atualizar a versão de uma dependência em um manifesto e gerar um pull request. No entanto, se a versão atualizada desta dependência direta também atualizou as dependências, seu pull request pode ter mais alterações do que o esperado. A revisão de dependência para cada manifesto e arquivo de bloqueio fornece uma maneira fácil de ver o que foi alterado e se alguma das novas versões de dependências contém vulnerabilidades conhecidas.

Ao verificar as revisões de dependências em um pull request e alterar todas as dependências sinalizadas como vulneráveis, você pode evitar que vulnerabilidades sejam adicionadas ao seu projeto. Para obter mais informações sobre como funciona a revisão de dependências, consulte "[Revisar as alterações de dependência em um pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

Para obter mais informações sobre como configurar uma revisão de dependência, consulte "[Configurando a análise de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)".

{% data variables.product.prodname_dependabot_alerts %} encontrará vulnerabilidades que já estão nas suas dependências, mas é muito melhor evitar a introdução de possíveis problemas do que corrigir problemas em uma data posterior. Para obter mais informações sobre {% data variables.product.prodname_dependabot_alerts %}, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."

A revisão de dependências é compatível com as mesmas linguagens e os mesmos ecossistemas de gestão de pacotes do gráfico de dependência. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Para obter mais informações sobre as funcionalidades da cadeia de suprimentos disponíveis em {% data variables.product.product_name %}, consulte "[Sobre a segurança da cadeia de suprimentos](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)."

{% ifversion ghec or ghes %}
## Habilitar revisão de dependências

O recurso de revisão de dependências é disponibilizado quando você habilitar o gráfico de dependências. Para obter mais informações, consulte "{% ifversion ghec %}[Habilitando o gráfico de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Habilitando o gráfico de dependências para a sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## Execução de revisão de dependência

{% data reusables.dependency-review.dependency-review-action-beta-note %}

A ação está disponível para todos os repositórios públicos {% ifversion fpt or ghec %}, bem como repositórios privados {% endif %}que habilitaram {% data variables.product.prodname_GH_advanced_security %}.

Você pode usar o {% data variables.product.prodname_dependency_review_action %} em seu repositório para impor revisões de dependência nos seus pull requests A ação verifica versões vulneráveis de dependências introduzidas por alterações na versão do pacote nos pull requests, e avisa você sobre as vulnerabilidades de segurança associadas. Isso permite uma melhor visibilidade do que está mudando em um pull request e ajuda a evitar que as vulnerabilidades sejam adicionadas ao seu repositório. Para obter mais informações, consulte [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Exemplo de ação de revisão de dependência](/assets/images/help/graphs/dependency-review-action.png)

Por padrão, a verificação {% data variables.product.prodname_dependency_review_action %} falhará se descobrir algum pacote vulnerável. A falha em uma verificação bloqueia impede o merge de um pull request quando o proprietário do repositório exigir que a verificação de revisão de dependência seja aprovada. Para obter mais informações, consulte "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."

A ação usa a API REST de Revisão de Dependência para obter o diff das alterações de dependência entre o commit base e o commit principal. Você pode usar a API de Revisão de Dependência para obter o diff de alterações de dependência, incluindo dados de vulnerabilidade, entre quaisquer dois commits em um repositório. Para obter mais informações, consulte "[Revisão de dependência](/rest/reference/dependency-graph#dependency-review)".

{% ifversion dependency-review-action-configuration %}
Você pode configurar a {% data variables.product.prodname_dependency_review_action %} para melhor atender às suas necessidades. Por exemplo, você pode especificar o nível de gravidade que fará a ação falhar ou definir uma lista de permissão ou proibição para que as licenças digitalizem. Para obter mais informações, consulte [Configurando revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)".
{% endif %}

{% endif %}

