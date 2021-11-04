---
title: Aprovando e mantendo ações
shortTitle: Aprovando e mantendo ações
intro: Você pode aproveitar a automação e as práticas recomendadas de código aberto para lançar e manter ações.
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Depois de criar uma ação, você irá continuar lançando novas funcionalidades enquanto trabalha com contribuições da comunidade. Este tutorial descreve um exemplo de processo que você pode seguir para lançar e manter as ações em código aberto. O exemplo:

* Aproveita {% data variables.product.prodname_actions %} para integração contínua, atualizações de dependência, gerenciamento de versões e automação de tarefas.
* Fornece confiança por meio de testes automatizados e cria selos.
* Indica como a ação pode ser usada, de preferência como parte de um fluxo de trabalho mais amplo.
* Sinaliza que tipo de contribuições da comunidade você recebe. (Por exemplo, problemas, pull requests ou relatórios de vulnerabilidade.)

Para um exemplo aplicado deste processo, consulte [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

## Desenvolver e lançar ações

Nesta seção, discutimos um processo exemplo para desenvolver e lançar ações e mostrar como usar {% data variables.product.prodname_actions %} para automatizar o processo.

### Sobre ações do JavaScript

As ações do JavaScript são repositórios do Node.js com metadados. No entanto, as ações do JavaScript têm propriedades adicionais comparadas aos projetos tradicionais do Node.js:

* Os pacotes dependentes recebem commit ao lado do código, normalmente em uma forma compilada e minificada. Isto significa que as criações automatizadas e as contribuições seguras da comunidade são importantes.

{% ifversion fpt %}

* As versões marcadas podem ser publicadas diretamente em {% data variables.product.prodname_marketplace %} e consumidas pelos fluxos de trabalho em {% data variables.product.prodname_dotcom %}.

{% endif %}

* Muitas ações fazem uso de APIs de {% data variables.product.prodname_dotcom %} e de terceiros, por isso incentivamos testes robustos de ponta a ponta.

### Configurando fluxos de trabalho de {% data variables.product.prodname_actions %}

Para apoiar o processo de desenvolvedor na próxima seção, adicione dois fluxos de trabalho de {% data variables.product.prodname_actions %} ao seu repositório:

1. Adicione um fluxo de trabalho que é acionado quando um commit é enviado por push para um branch de recurso ou para o `principal` ou quando um pull request é criado. Configure o fluxo de trabalho para executar seus testes de unidade e integração. Por exemplo, consulte [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Adicione um fluxo de trabalho que é acionado quando uma versão é publicada ou editada. Configure o fluxo de trabalho para garantir que as tags semânticas estejam prontas. You can use an action like [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) to compile and bundle the JavaScript and metadata file and force push semantic major, minor, and patch tags. Por exemplo, consulte [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Para obter mais informações sobre tags semânticas, consulte "[Sobre versão semântica](https://docs.npmjs.com/about-semantic-versioning)".

### Exemplo do processo de desenvolvedor

Aqui está um exemplo de processo que você pode seguir para executar os testes automaticamente, crie uma versão{% ifversion fpt%} e publique em {% data variables.product.prodname_marketplace %}{% endif %} e publique sua ação.

1. Faça o trabalho de recurso nos branches por fluxo do GitHub. Para obter mais informações, consulte "[fluxo do GitHub](/get-started/quickstart/github-flow)".
   * Sempre que um commit é enviado por push para o branch de recurso, seu fluxo de trabalho de teste irá executar os testes automaticamente.

2. Crie pull requests para o branch `principal` para iniciar a discussão e revisão, fazendo merge quando estiver pronto.

   * Quando um pull request é aberto, seja em um branch ou bifurcação, seu fluxo de trabalho de testes executará novamente os testes, desta vez com o commit do merge.

   * **Observação:** por razões de segurança, fluxos de trabalho acionados por `pull_request` apartir das bifurcações restringiram as permissões de `GITHUB_TOKEN` e não têm acesso a segredos. Se seus testes ou outros fluxos de trabalho acionados após o pull request solicitar acesso a segredos, considere o uso de um evento diferente como um manual [disparar](/actions/reference/events-that-trigger-workflows#manual-events) ou um [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). Leia mais [aqui](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Crie uma versão semântica marcada. {% ifversion fpt %} Você também pode publicar em {% data variables.product.prodname_marketplace %} com uma caixa de seleção simples. {% endif %} Para mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt %} e "[Publicando ações em {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   * Quando uma versão é publicada ou editada, seu fluxo de trabalho de versão cuidará automaticamente da compilação e ajuste das tags.

   * We recommend creating releases using semantically versioned tags – for example, `v1.1.3` – and keeping major (`v1`) and minor (`v1.1`) tags current to the latest appropriate commit. For more information, see "[About custom actions](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" and "[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

### Resultados

Unlike some other automated release management strategies, this process intentionally does not commit dependencies to the `main` branch, only to the tagged release commits. By doing so, you encourage users of your action to reference named tags or `sha`s, and you help ensure the security of third party pull requests by doing the build yourself during a release.

Using semantic releases means that the users of your actions can pin their workflows to a version and know that they might continue to receive the latest stable, non-breaking features, depending on their comfort level:

## Working with the community

{% data variables.product.product_name %} fornece ferramentas e guias para ajudar você a trabalhar com a comunidade de código aberto. Aqui estão algumas ferramentas que recomendamos a criação de uma comunicação bidirecional saudável. Ao fornecer os seguintes sinais à comunidade, você incentiva outras pessoas a usar, modificar e contribuir para sua ação:

* Mantenha um `README` com muitos exemplos de uso e orientação. Para obter mais informações, consulte "[Sobre README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".
* Inclua um selo de status de fluxo de trabalho no seu arquivo `README`. Para obter mais informações, consulte "[Adicionando um selo de status do fluxo de trabalho](/actions/managing-workflow-runs/adding-a-workflow-status-badge)". Visite também [shields.io](https://shields.io/) para aprender sobre outros selos que você pode adicionar.{% ifversion fpt %}
* Adicione arquivos de saúde da comunidade como `CODE_OF_CONDUCT`, `CONTRIBUTING` e `SEGURANÇA`. Para obter mais informações, consulte "[" Criando um arquivo padrão de saúde da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)."{% endif %}
* Mantenha os problemas atuais, utilizando as ações como [actions/stale](https://github.com/actions/stale).

## Leia mais

Os exemplos em que os padrões similares são empregados incluem:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
