---
title: Desenvolvendo uma ação de CLI de terceiros
shortTitle: CLI setup action
intro: 'Aprenda a desenvolver uma ação para configurar uma CLI em executores de {% data variables.product.prodname_actions %}.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084185'
---
## Introdução

Você pode escrever uma ação para fornecer uma maneira de os usuários acessarem seus servidores por meio de um ambiente de CLI configurado nos executores de {% data variables.product.prodname_actions %}.

Sua ação deve:

- Ser simples para os usuários especificarem a versão da CLI a ser instalada
- Ser compatível com vários sistemas operacionais
- Executar, de forma eficiente, para minimizar tempo de execução e custos associados
- Trabalhar nos executores hospedados em {% data variables.product.product_name %} e nos executores auto-hospedados
- Alavancar ferramentas da comunidade quando possível

Este artigo irá demonstrar como escrever uma ação que recupera uma versão específica da sua CLI, como instalá-la, adicioná-la ao caminho e (opcionalmente), armazená-la em cache. Em geral, esse tipo de ação (uma ação que configura uma ferramenta) é chamado `setup-$TOOL`. 

## Pré-requisitos

Você deve ter um entendimento de como escrever uma ação personalizada. Para obter mais informações, confira "[Sobre as ações personalizadas](/actions/creating-actions/about-custom-actions)". Para obter um guia mais detalhado sobre como escrever uma ação personalizada, confira "[Como criar uma ação JavaScript](/actions/creating-actions/creating-a-javascript-action)".

## Exemplo

O script a seguir demonstra como você pode obter uma versão especificada pelo usuário como entrada, fazer o download e extrair a versão específica da sua CLI e, em seguida, adicionar a CLI ao caminho.

O {% data variables.product.prodname_dotcom %} fornece [`actions/toolkit`](https://github.com/actions/toolkit), que é um conjunto de pacotes que ajuda você a criar ações. Este exemplo usa os pacotes [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) e [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache).

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

Para usar esse script, substitua `getDownloadURL` por uma função que baixa a CLI. Você também precisará criar um arquivo de metadados de ações (`action.yml`) que aceite uma entrada `version` e que execute esse script. Para obter detalhes completos sobre como criar uma ação, confira "[Como criar uma ação JavaScript](/actions/creating-actions/creating-a-javascript-action)".

Para ver um exemplo completo de como configurar essa ação, confira [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Leitura adicional

Este padrão é usado em várias ações. Para mais exemplos, consulte:

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

