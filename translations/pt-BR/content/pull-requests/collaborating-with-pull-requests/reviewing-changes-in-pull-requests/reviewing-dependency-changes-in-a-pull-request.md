---
title: Revendo alterações de dependência em um pull request
intro: 'Se um pull request tiver alterações nas dependências, você poderá ver um resumo do que alterou e se há vulnerabilidades conhecidas em qualquer uma das dependências.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
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
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106602'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## Sobre a análise de dependência

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}Antes de usar a revisão de dependências em um repositório privado, você deve habilitar o gráfico de dependências. Para obter mais informações, confira "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".{% endif %}

{% ifversion ghes %} Para usar a revisão de dependência, você precisará habilitar o grafo de dependência e conectar {% data variables.location.product_location %} ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como habilitar alertas para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

Revisão de dependência permite a você "desloque para a esquerda". Você pode usar as informações preditivas fornecidas para capturar dependências vulneráveis antes que elas cheguem à produção. Para obter mais informações, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

Você pode usar o {% data variables.product.prodname_dependency_review_action %} para impor revisões de dependência em solicitações de pull no repositório. {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} Você pode configurar o {% data variables.product.prodname_dependency_review_action %} de acordo com suas necessidades especificando o tipo de vulnerabilidade de dependência que deseja capturar. Para obter mais informações, confira "[Como configurar a análise de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)". {% endif %}

{% endif %}
## Revisar as dependências em um pull request

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. Se a solicitação de pull contiver muitos arquivos, use o menu suspenso **Filtro de arquivo** para recolher todos os arquivos que não registram dependências. Isso fará com que seja mais fácil focar a sua revisão nas alterações de dependência.

   ![O menu Filtro de arquivo](/assets/images/help/pull_requests/file-filter-menu-json.png) A revisão de dependência fornece uma visão mais clara do que mudou nos arquivos de bloqueio grandes, em que a comparação de origem não é renderizada por padrão.

  {% note %}

   **Observação:** as comparações avançadas de revisão de dependência não estão disponíveis para arquivos JavaScript estáticos confirmados, como `jquery.js`.

   {% endnote %}

1. À direita do cabeçalho de um arquivo de manifesto ou de bloqueio, veja a revisão de dependências clicando no botão de comparação avançada **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Botão de diff avançado](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Verifique as dependências listadas na revisão sobre dependências.

   ![Alertas de vulnerabilidade em revisão de dependências](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Quaisquer dependências adicionadas ou alteradas com vulnerabilidades são listadas primeiro, ordenadas por gravidade e, posteriormente, pelo nome da dependência. Isso significa que as dependências de severidade mais elevadas estão sempre na parte superior de uma revisão de dependência. Outras dependências estão listadas em ordem alfabética pelo nome das dependências.

   O ícone ao lado de cada dependência indica se a dependência foi adicionada (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), atualizada (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) ou removida (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) nesta solicitação de pull.

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
