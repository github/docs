---
title: Revendo alterações de dependência em um pull request
intro: 'Se um pull request tiver alterações nas dependências, você poderá ver um resumo do que alterou e se há vulnerabilidades conhecidas em qualquer uma das dependências.'
versions:
  free-pro-team: '*'
---

{% note %}

**Observação:** A revisão de dependências está atualmente em fase beta e sujeita a alterações.

{% endnote %}

### Sobre revisão de dependências

Se um pull request for direcionado ao branch padrão do seu repositório e contiver alterações em manifestos de pacote ou arquivos de bloqueio, você poderá exibir um comentário de dependência para ver o que foi alterado. A revisão de dependências inclui detalhes de alterações nas dependências indiretas nos arquivos de bloqueio, e informa a você se alguma das dependências adicionadas ou atualizadas contém vulnerabilidades conhecidas.

Revisão de dependência está disponível em:

* Todos os repositórios públicos.
* Repositórios privados pertencentes a organizações com uma licença de {% data variables.product.prodname_advanced_security %} com o gráfico de dependências habilitado. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

Às vezes, você pode apenas querer atualizar a versão de uma dependência em um manifesto e gerar um pull request. No entanto, se a versão atualizada desta dependência direta também atualizou as dependências, seu pull request pode ter mais alterações do que o esperado. A revisão de dependência para cada manifesto e arquivo de bloqueio fornece uma maneira fácil de ver o que foi alterado e se alguma das novas versões de dependências contém vulnerabilidades conhecidas.

Ao verificar as revisões de dependências em um pull request e alterar todas as dependências sinalizadas como vulneráveis, você pode evitar que vulnerabilidades sejam adicionadas ao seu projeto. {% data variables.product.prodname_dependabot_alerts %} encontrará vulnerabilidades que já estão em suas dependências, mas é muito melhor evitar a introdução de possíveis problemas do que corrigi-los posteriormente. Para obter mais informações sobre {% data variables.product.prodname_dependabot_alerts %}, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".

A revisão de dependências é compatível com as mesmas linguagens e os mesmos ecossistemas de gestão de pacotes do gráfico de dependência. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

### Revisar as dependências em um pull request

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. Se o pull request contiver muitos arquivos, use o menu suspenso **Filtro de arquivo** para recolher todos os arquivos que não registram dependências. Isso fará com que seja mais fácil focar a sua revisão nas alterações de dependência.

   ![Menu de filtro de arquivos](/assets/images/help/pull_requests/file-filter-menu-json.png)

1. À direita do cabeçalho de um manifesto ou arquivo de bloqueio, exiba a revisão de dependências clicando no botão de diff avançado**{% octicon "file" aria-label="The rich diff icon" %}**.

   ![Botão de diff avançado](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

  {% note %}

   **Observação:** A revisão de dependências fornece uma visão mais clara do que foi alterado em arquivos de bloqueio grandes, em que o diff de origem não é renderizado por padrão.

   {% endnote %}

1. Verifique as dependências listadas na revisão sobre dependências.

   ![Alertas de vulnerabilidade em revisão de dependências](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Quaisquer dependências adicionadas ou alteradas com vulnerabilidades são listadas primeiro, ordenadas por gravidade e, posteriormente, pelo nome da dependência. Isso significa que as dependências de severidade mais elevadas estão sempre na parte superior de uma revisão de dependência. Outras dependências estão listadas em ordem alfabética pelo nome das dependências.

   O ícone ao lado de cada dependência indica se a dependência foi adicionada (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), atualizada (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) ou removida (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) neste pull request.

   Outras informações incluem:

   * A versão, ou intervalo de versão, da nova dependência, atualizada ou excluída.
   * Para uma versão específica de uma dependência:
      * A idade daquela versão da dependência.
      * O número de projetos que são dependentes deste software. Essa informação é tirada do gráfico de dependências. Verificar o número de dependentes pode ajudar você a evitar adicionar acidentalmente a dependência incorreta.
      * A licença usada por esta dependência, se estas informações estiverem disponíveis. Isso é útil se você desejar evitar o código com certas licenças usadas no seu projeto.

   Quando uma dependência tem uma vulnerabilidade conhecida, a mensagem de aviso inclui:

   * Uma breve descrição da vulnerabilidade.
   * Vvulnerabilidades e Exposições Comuns (CVE) ou um número de identificação de {% data variables.product.prodname_security_advisories %} (GHSA). Você pode clicar nesse ID para saber mais sobre a vulnerabilidade.
   * A gravidade da vulnerabilidade.
   * A versão da dependência na qual a vulnerabilidade foi corrigida. Se você estiver revisando um pull request para alguém, você pode pedir ao contribuidor para atualizar a dependência para a versão corrigida ou para uma versão posterior.

{% data reusables.repositories.return-to-source-diff %}
