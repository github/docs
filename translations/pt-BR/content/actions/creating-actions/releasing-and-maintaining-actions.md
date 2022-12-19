---
title: Aprovando e mantendo ações
shortTitle: Releasing and maintaining actions
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
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065614'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Depois de criar uma ação, você irá continuar lançando novas funcionalidades enquanto trabalha com contribuições da comunidade. Este tutorial descreve um exemplo de processo que você pode seguir para lançar e manter as ações em código aberto. O exemplo:

* Aproveita {% data variables.product.prodname_actions %} para integração contínua, atualizações de dependência, gerenciamento de versões e automação de tarefas.
* Fornece confiança por meio de testes automatizados e cria selos.
* Indica como a ação pode ser usada, de preferência como parte de um fluxo de trabalho mais amplo.
* Sinaliza que tipo de contribuições da comunidade você recebe. (Por exemplo, problemas, pull requests ou relatórios de vulnerabilidade.)

Para ver um exemplo aplicado desse processo, confira [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

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

1. Adicione um fluxo de trabalho que é disparado quando um commit é enviado por push para um branch de recursos ou para `main` ou quando uma solicitação de pull é criada. Configure o fluxo de trabalho para executar seus testes de unidade e integração. Para ver um exemplo, confira [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Adicione um fluxo de trabalho que é acionado quando uma versão é publicada ou editada. Configure o fluxo de trabalho para garantir que as tags semânticas estejam prontas. Use uma ação como [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) para compilar e empacotar o arquivo JavaScript e de metadados e forçar o push das tags semânticas principal, secundário e de patch. Para ver um exemplo, confira [este fluxo de trabalho](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Para obter mais informações sobre tags semânticas, confira "[Sobre o controle de versão semântico](https://docs.npmjs.com/about-semantic-versioning)".

### Exemplo do processo de desenvolvedor

Este é um exemplo de processo que você pode seguir para executar testes automaticamente, criar uma versão{% ifversion fpt or ghec%} e publicá-la no {% data variables.product.prodname_marketplace %}{% endif %} e publicar sua ação.

1. Faça o trabalho de recurso nos branches por fluxo do GitHub. Para obter mais informações, confira "[Fluxo do GitHub](/get-started/quickstart/github-flow)".
   * Sempre que um commit é enviado por push para o branch de recurso, seu fluxo de trabalho de teste irá executar os testes automaticamente.

2. Crie solicitações de pull para o branch `main` a fim de iniciar a discussão e a revisão, mesclando-as quando estiverem prontas.

   * Quando um pull request é aberto, seja em um branch ou bifurcação, seu fluxo de trabalho de testes executará novamente os testes, desta vez com o commit do merge.

   * **Observação:** por motivos de segurança, os fluxos de trabalho disparados por `pull_request` por meio de forks têm permissões `GITHUB_TOKEN` restritas e não têm acesso aos segredos. Se os testes ou outros fluxos de trabalho disparados após a solicitação de pull exigirem acesso aos segredos, considere o uso de outro evento, como um [gatilho manual](/actions/reference/events-that-trigger-workflows#manual-events) ou um [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). Leia mais [aqui](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Crie uma versão semântica marcada. {% ifversion fpt or ghec %} Você também pode publicá-los no {% data variables.product.prodname_marketplace %} com uma caixa de seleção simples. {% endif %} Para obter mais informações, confira "[Como gerenciar versões em um repositório](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)"{% ifversion fpt or ghec %} e "[Como publicar ações no {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)"{% endif %}.

   * Quando uma versão é publicada ou editada, seu fluxo de trabalho de versão cuidará automaticamente da compilação e ajuste das tags.

   * Recomendamos criar versões usando tags com controle de versão semântico (por exemplo, `v1.1.3`) e manter as tags de principal (`v1`) e secundário (`v1.1`) atuais com o último commit apropriado. Para obter mais informações, confira "[Sobre as ações personalizadas](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)" e "[Sobre o controle de versão semântico](https://docs.npmjs.com/about-semantic-versioning).

### Resultados

Ao contrário de algumas outras estratégias de gerenciamento de versão automatizadas, esse processo intencionalmente não faz commit das dependências no branch `main`, apenas para os commits de versão marcados. Ao fazer isso, você incentiva os usuários da sua ação a referenciar os `sha`s ou as tags nomeadas e ajuda a garantir a segurança das solicitações de pull de terceiros fazendo o build por conta própria durante uma versão.

Usar versões semânticas significa que os usuários das suas ações podem fixar os seus fluxos de trabalho a uma versão e saber que podem continuar recebendo a última estabilidade recursos não relevantes, dependendo de seu nível de conforto:

## Trabalhando com a comunidade

{% data variables.product.product_name %} fornece ferramentas e guias para ajudar você a trabalhar com a comunidade de código aberto. Aqui estão algumas ferramentas que recomendamos a criação de uma comunicação bidirecional saudável. Ao fornecer os seguintes sinais à comunidade, você incentiva outras pessoas a usar, modificar e contribuir para sua ação:

* Mantenha um `README` com muitos exemplos de uso e diretrizes. Para obter mais informações, confira "[Sobre os arquivos LEIAME](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".
* Inclua uma notificação de status do fluxo de trabalho no arquivo `README`. Para obter mais informações, confira "[Como adicionar uma notificação de status do fluxo de trabalho](/actions/managing-workflow-runs/adding-a-workflow-status-badge)". Acesse também [shields.io](https://shields.io/) para saber mais sobre outras notificações que podem ser adicionadas.{% ifversion fpt or ghec %}
* Adicione arquivos de integridade da comunidade, como `CODE_OF_CONDUCT`, `CONTRIBUTING` e `SECURITY`. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)".{% endif %}
* Mantenha os problemas atuais utilizando ações como [actions/stale](https://github.com/actions/stale).

## Leitura adicional

Os exemplos em que os padrões similares são empregados incluem:

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
