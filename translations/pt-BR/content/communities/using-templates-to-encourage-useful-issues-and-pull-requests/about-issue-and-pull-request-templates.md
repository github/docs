---
title: Sobre modelos de problema e pull request
intro: 'Com modelos de problema e pull request, é possível personalizar e padronizar as informações que deseja que os contribuidores incluam quando abrem problemas e pull requests no seu repositório.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: About templates
ms.openlocfilehash: b95b31ae4171a54d9261fab6cbe93c43361296ab
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095196'
---
Depois que você cria modelos de problema e pull request no repositório, os contribuidores podem usá-los para abrir problemas ou descrever as alterações propostas nas respectivas pull requests, de acordo com as diretrizes de contribuição do repositório. Para obter mais informações sobre como adicionar diretrizes de contribuição a um repositório, confira "[Diretrizes de configuração para colaboradores do repositório](/articles/setting-guidelines-for-repository-contributors)".

{% ifversion fpt or ghes or ghec %}

Você pode criar problemas padrão e modelos de solicitação de pull para a sua organização ou conta pessoal. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Modelos de problema

Quando você cria modelos de problemas para seu repositório usando o construtor de modelos de problemas{% ifversion fpt or ghec %} ou com formulários de problemas{% endif %}, os colaboradores podem selecionar o modelo apropriado quando abrem novos problemas no repositório.

![Página de novo problema mostrando opções do modelo de problema](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Os modelos de problemas são úteis quando você deseja fornecer orientações para a abertura de problemas, permitindo que os contribuidores especifiquem o conteúdo do seus problemas. {% ifversion fpt or ghec %} Caso deseje que os colaboradores forneçam informações específicas e estruturadas ao abrir problemas, os formulários de problemas ajudam a garantir que você receba as informações desejadas.{% endif %}

Usando o construtor de modelo, você pode especificar um titulo e a descrição de cada modelo, adicionar o conteúdo do modelo e, ou fazer commit do modelo no branch padrão, ou abrir uma pull request no repositório. O construtor de modelo adiciona automaticamente a markup de página inicial YAML que é necessária para que o modelo apareça na página do novo problema. Para obter mais informações, confira "[Como configurar modelos de problemas para seu repositório](/articles/configuring-issue-templates-for-your-repository)".

{% ifversion fpt or ghec %} Com os formulários de problemas, você pode criar modelos que têm campos de formulário da Web usando o esquema de formulário do {% data variables.product.prodname_dotcom %}. Quando um contribuidor abre um problema usando um formulário de problema, as entradas de formulário são convertidas em um comentário de markdown padrão. É possível especificar diferentes tipos de entrada e definir as entradas necessárias para ajudar os colaboradores a abrir problemas acionáveis no seu repositório. Para obter mais informações, confira "[Como configurar modelos de problemas para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" e "[Sintaxe de formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
{% endif %}

{% data reusables.repositories.issue-template-config %} Para obter mais informações, confira "[Como configurar modelos de problemas em seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)".

Os modelos de problemas são armazenados no branch padrão do repositório, em um diretório `.github/ISSUE_TEMPLATE` oculto. Se você criar um modelo em outro branch, ele não estará disponível para uso dos colaboradores. Os nomes de arquivos do modelo de problema não diferenciam maiúsculas de minúsculas e precisam ter uma extensão *.md*.{% ifversion fpt or ghec %} Os modelos de problemas criados com formulários de problemas precisam ter uma extensão *.yml*.{% endif %} {% data reusables.repositories.valid-community-issues %}

É possível criar manualmente um único modelo de problema em markdown usando o fluxo de trabalho do modelo de problema e os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto do problema. No entanto, recomendamos usar o construtor de vários modelos de problemas atualizado{% ifversion fpt or ghec %} ou os formulários de problemas{% endif %} para criar modelos de problemas. Para obter mais informações sobre o fluxo de trabalho herdado, confira "[Como criar manualmente um modelo de problema individual para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

## Modelos de pull request

Quando você adicionar um modelo de pull request ao repositório, os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto da pull request.

![Exemplo de modelo de pull request](/assets/images/help/pull_requests/pr-template-sample.png)

É preciso criar modelos no branch padrão do repositório. Os modelos criados em outros branches não são disponibilizados para uso dos colaboradores. Você pode armazenar o modelo de solicitação de pull no diretório raiz visível do repositório, na pasta `docs` ou no diretório `.github` oculto. Os nomes de arquivos do modelo de solicitação de pull não diferenciam maiúsculas de minúsculas e podem ter uma extensão, como *.md* ou *.txt*.

Para obter mais informações, confira "[Como criar um modelo de solicitação de pull para seu repositório](/articles/creating-a-pull-request-template-for-your-repository)".
