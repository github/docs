---
title: Sobre revisão de dependências
intro: 'A revisão de dependências permite que você capture dependências vulneráveis antes de introduzi-las no seu ambiente e fornece informações sobre licença, dependências e idade das dependências.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Revisão de dependência
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
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

{% ifversion ghec or ghes %}
## Habilitar revisão de dependências

O recurso de revisão de dependências é disponibilizado quando você habilitar o gráfico de dependências. Para obter mais informações, consulte "{% ifversion ghec %}[Habilitando o gráfico de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Habilitando o gráfico de dependências para a sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}".
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## Execução de revisão de dependência

{% data reusables.dependency-review.dependency-review-action-beta-note %}

Você pode usar a Revisão de Dependência do GitHub Action no seu repositório para exigir revisões de dependências em seus pull requests. A ação verifica versões vulneráveis de dependências introduzidas por alterações na versão do pacote nos pull requests, e avisa você sobre as vulnerabilidades de segurança associadas. Isso permite uma melhor visibilidade do que está mudando em um pull request e ajuda a evitar que as vulnerabilidades sejam adicionadas ao seu repositório. Para obter mais informações, consulte [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Exemplo de ação de revisão de dependência](/assets/images/help/graphs/dependency-review-action.png)

A verificação da revisão de dependência do GitHub Action falhará se descobrir qualquer pacote vulnerável, mas só irá impedir que uma pull request seja mesclado se o proprietário do repositório tiver exigido que a verificação passe antes do merge. Para obter mais informações, consulte "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."

A ação usa a API REST de Revisão de Dependência para obter o diff das alterações de dependência entre o commit base e o commit principal. Você pode usar a API de Revisão de Dependência para obter o diff de alterações de dependência, incluindo dados de vulnerabilidade, entre quaisquer dois commits em um repositório. Para obter mais informações, consulte "[Revisão de dependência](/rest/reference/dependency-graph#dependency-review)".
{% endif %}
