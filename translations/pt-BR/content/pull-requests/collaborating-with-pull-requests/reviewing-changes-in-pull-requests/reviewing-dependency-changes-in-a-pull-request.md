---
title: Revendo alterações de dependência em um pull request
intro: 'Se um pull request tiver alterações nas dependências, você poderá ver um resumo do que alterou e se há vulnerabilidades conhecidas em qualquer uma das dependências.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Revisar alterações de dependência
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% data reusables.dependency-review.beta %}

## Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}Antes de usar a revisão de dependências em um repositório privado, você deve habilitar o gráfico de dependências. Para obter mais informações, consulte "[Explorando as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)"{% endif %}

{% ifversion ghes > 3.1 %} Antes de você poder usar a revisão de dependências, você deverá habilitar o gráfico de dependências e conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

Revisão de dependência permite a você "desloque para a esquerda". Você pode usar as informações preditivas fornecidas para capturar dependências vulneráveis antes que elas cheguem à produção. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
You can use the Dependency Review GitHub Action to help enforce dependency reviews on pull requests in your repository. For more information, see "[Dependency review enforcement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)."
{% endif %}

## Revisar as dependências em um pull request

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. Se o pull request contiver muitos arquivos, use o menu suspenso **Filtro de arquivo** para recolher todos os arquivos que não registram dependências. Isso fará com que seja mais fácil focar a sua revisão nas alterações de dependência.

   ![Menu de filtro de arquivos](/assets/images/help/pull_requests/file-filter-menu-json.png) A revisão sobre dependências fornece uma visão mais clara do que mudou nos grandes arquivos de bloqueio, em que o diff de origem não é representado por padrão.

  {% note %}

   **Observação:** Revisões de Dependência de diffs avançados não estão disponíveis para arquivos estáticos do JavaScript que passaram por commit como, por exemplo, `jquery.js`.

   {% endnote %}

1. À direita do cabeçalho de um manifesto ou arquivo de bloqueio, exiba a revisão de dependências clicando no botão de diff avançado**{% octicon "file" aria-label="The rich diff icon" %}**.

   ![Botão de diff avançado](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Verifique as dependências listadas na revisão sobre dependências.

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
