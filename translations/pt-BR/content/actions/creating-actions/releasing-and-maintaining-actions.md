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
  ghec: '*'
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

{% ifversion fpt or ghec %}

* As versões marcadas podem ser publicadas diretamente em {% data variables.product.prodname_marketplace %} e consumidas pelos fluxos de trabalho em {% data variables.product.prodname_dotcom %}.

{% endif %}

* Muitas ações fazem uso de APIs de {% data variables.product.prodname_dotcom %} e de terceiros, por isso incentivamos testes robustos de ponta a ponta.

### Configurando fluxos de trabalho de {% data variables.product.prodname_actions %}

Para apoiar o processo de desenvolvedor na próxima seção, adicione dois fluxos de trabalho de {% data variables.product.prodname_actions %} ao seu repositório:

1. Adicione um fluxo de trabalho que é acionado quando um commit é enviado por push para um branch de recurso ou para o `principal` ou quando um pull request é criado. Configure o fluxo de trabalho para executar seus testes de unidade e integração. Por exemplo, consulte [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Adicione um fluxo de trabalho que é acionado quando uma versão é publicada ou editada. Configure o fluxo de trabalho para garantir que as tags semânticas estejam prontas. Você pode usar uma ação como [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) para compilar e empacotar o arquivo de metadados e o JavaScript e fazer push forçado semântico maior, menor e tags de patch. Por exemplo, consulte [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Para obter mais informações sobre tags semânticas, consulte "[Sobre versão semântica](https://docs.npmjs.com/about-semantic-versioning)".

### Exemplo do processo de desenvolvedor

Aqui está um exemplo de processo que você pode seguir para executar os testes automaticamente, crie uma versão{% ifversion fpt or ghec%} e publique em {% data variables.product.prodname_marketplace %}{% endif %} e publique sua ação.

1. Faça o trabalho de recurso nos branches por fluxo do GitHub. Para obter mais informações, consulte "[fluxo do GitHub](/get-started/quickstart/github-flow)".
   * Sempre que um commit é enviado por push para o branch de recurso, seu fluxo de trabalho de teste irá executar os testes automaticamente.

2. Crie pull requests para o branch `principal` para iniciar a discussão e revisão, fazendo merge quando estiver pronto.

   * Quando um pull request é aberto, seja em um branch ou bifurcação, seu fluxo de trabalho de testes executará novamente os testes, desta vez com o commit do merge.

   * **Observação:** por razões de segurança, fluxos de trabalho acionados por `pull_request` apartir das bifurcações restringiram as permissões de `GITHUB_TOKEN` e não têm acesso a segredos. Se seus testes ou outros fluxos de trabalho acionados após o pull request solicitar acesso a segredos, considere o uso de um evento diferente como um manual [disparar](/actions/reference/events-that-trigger-workflows#manual-events) ou um [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). Leia mais [aqui](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Crie uma versão semântica marcada. {% ifversion fpt or ghec %} Você também pode publicar em {% data variables.product.prodname_marketplace %} com uma caixa de seleção simples. {% endif %} Para mais informações, consulte "[Gerenciando versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt or ghec %} e "[Publicando ações em {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   * Quando uma versão é publicada ou editada, seu fluxo de trabalho de versão cuidará automaticamente da compilação e ajuste das tags.

   * Recomendamos criar versões usando tags com versão semântica – por exemplo, `v1.1.3` – e mantendo tags maiores (`v1`) e menores (`v1.`) atuais para o último commit apropriado. Para obter mais informações, consulte "[Sobre ações personalizadas](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" e "[Sobre a versão semântica](https://docs.npmjs.com/about-semantic-versioning).

### Resultados

Diferentemente de outras estratégias automatizadas de gerenciamento de versão, este processo não faz, de modo intencional, commit de dependências para o branch `principal`, apenas para os commits de versão com tag. Ao fazer isso, você incentiva os usuários da sua ação a fazerem referência a tags nomeadas ou `sha`s, além de ajudar a garantir a segurança de pull requests de terceiros, fazendo a compilação você mesmo durante uma versão.

Usar versões semânticas significa que os usuários das suas ações podem fixar os seus fluxos de trabalho a uma versão e saber que podem continuar recebendo a última estabilidade recursos não relevantes, dependendo de seu nível de conforto:

## Trabalhando com a comunidade

{% data variables.product.product_name %} fornece ferramentas e guias para ajudar você a trabalhar com a comunidade de código aberto. Aqui estão algumas ferramentas que recomendamos a criação de uma comunicação bidirecional saudável. Ao fornecer os seguintes sinais à comunidade, você incentiva outras pessoas a usar, modificar e contribuir para sua ação:

* Mantenha um `README` com muitos exemplos de uso e orientação. Para obter mais informações, consulte "[Sobre README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".
* Inclua um selo de status de fluxo de trabalho no seu arquivo `README`. Para obter mais informações, consulte "[Adicionando um selo de status do fluxo de trabalho](/actions/managing-workflow-runs/adding-a-workflow-status-badge)". Visite também [shields.io](https://shields.io/) para aprender sobre outros selos que você pode adicionar.{% ifversion fpt or ghec %}
* Adicione arquivos de saúde da comunidade como `CODE_OF_CONDUCT`, `CONTRIBUTING` e `SEGURANÇA`. Para obter mais informações, consulte "[" Criando um arquivo padrão de saúde da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)."{% endif %}
* Mantenha os problemas atuais, utilizando as ações como [actions/stale](https://github.com/actions/stale).

## Leia mais

Os exemplos em que os padrões similares são empregados incluem:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
