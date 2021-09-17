---
title: Revendo alterações de dependência em um pull request
intro: 'Se um pull request tiver alterações nas dependências, você poderá ver um resumo do que alterou e se há vulnerabilidades conhecidas em qualquer uma das dependências.'
versions:
  free-pro-team: '*'
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
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% note %}

**Observação:** A revisão de dependências está atualmente em fase beta e sujeita a alterações.

{% endnote %}

### Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

Revisão de dependência permite a você "desloque para a esquerda". Você pode usar as informações preditivas fornecidas para capturar dependências vulneráveis antes que elas cheguem à produção. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".

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
