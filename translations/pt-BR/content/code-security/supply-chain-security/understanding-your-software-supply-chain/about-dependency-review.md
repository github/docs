---
title: Sobre revisão de dependências
intro: 'A revisão de dependências permite que você capture dependências vulneráveis antes de introduzi-las no seu ambiente e fornece informações sobre licença, dependências e idade das dependências.'
versions:
  free-pro-team: '*'
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

{% note %}

**Observação:** A revisão de dependências está atualmente em fase beta e sujeita a alterações.

{% endnote %}

### Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

Se um pull request for direcionado ao branch padrão do seu repositório e contiver alterações em manifestos de pacote ou arquivos de bloqueio, você poderá exibir um comentário de dependência para ver o que foi alterado. A revisão de dependências inclui detalhes de alterações nas dependências indiretas nos arquivos de bloqueio, e informa a você se alguma das dependências adicionadas ou atualizadas contém vulnerabilidades conhecidas.

Revisão de dependência está disponível em:

* Todos os repositórios públicos.
* Repositórios privados pertencentes a organizações com uma licença de {% data variables.product.prodname_advanced_security %} com o gráfico de dependências habilitado. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

Às vezes, você pode apenas querer atualizar a versão de uma dependência em um manifesto e gerar um pull request. No entanto, se a versão atualizada desta dependência direta também atualizou as dependências, seu pull request pode ter mais alterações do que o esperado. A revisão de dependência para cada manifesto e arquivo de bloqueio fornece uma maneira fácil de ver o que foi alterado e se alguma das novas versões de dependências contém vulnerabilidades conhecidas.

Ao verificar as revisões de dependências em um pull request e alterar todas as dependências sinalizadas como vulneráveis, você pode evitar que vulnerabilidades sejam adicionadas ao seu projeto. Para obter mais informações sobre como funciona a revisão de dependências, consulte "[Revisar as alterações de dependência em um pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

{% data variables.product.prodname_dependabot_alerts %} encontrará vulnerabilidades que já estão nas suas dependências, mas é muito melhor evitar a introdução de possíveis problemas do que corrigir problemas em uma data posterior. Para obter mais informações sobre {% data variables.product.prodname_dependabot_alerts %}, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

A revisão de dependências é compatível com as mesmas linguagens e os mesmos ecossistemas de gestão de pacotes do gráfico de dependência. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".
