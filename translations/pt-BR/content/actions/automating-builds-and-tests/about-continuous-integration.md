---
title: Sobre integração contínua
intro: 'Você pode criar fluxos de trabalho de integração contínua (CI) personalizados diretamente no repositório do {% data variables.product.prodname_dotcom %} com o {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: 26b9088133ad561900d06a0c885d6b06b9b55861
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880658'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre integração contínua

A integração contínua (CI, Continuous Integration) é uma prática de software que exige commits frequentes de códigos para um repositório compartilhado. Fazer commits de códigos com frequência detecta erros com mais antecedência e reduz a quantidade de código necessária para depuração quando os desenvolvedores chegam à origem de um erro. As atualizações frequentes de código também facilitam o merge de alterações dos integrantes de uma equipe de desenvolvimento de software. Assim, os desenvolvedores podem se dedicar mais à gravação de códigos e se preocupar menos com erros de depuração ou conflitos de merge.

Ao fazer commit do seu repositório, você pode continuamente compilar e testar o código para garantir que o commit não insira erros. Seus testes podem incluir linters de código (que verificam formatação de estilo), verificações de segurança, cobertura de código, testes funcionais e outras verificações personalizadas.

Para compilar e testar seu código, é necessário usar um servidor. Você pode criar e testar atualizações no local antes de fazer push do código para um repositório, ou pode usar um servidor de CI que verifica os novos commits de código em um repositório.

## Sobre integração contínua usando {% data variables.product.prodname_actions %}

{% ifversion ghae %}A CI que usa o {% data variables.product.prodname_actions %} oferece fluxos de trabalho que podem compilar o código no repositório e executar os testes. Os fluxos de trabalho podem ser executados em sistemas de executores que você hospeda. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".
{% else %} CI que usa {% data variables.product.prodname_actions %} oferece fluxos de trabalho que podem criar o código no seu repositório e executar seus testes. Os fluxos de trabalho podem ser executados em máquinas virtuais hospedadas em {% data variables.product.prodname_dotcom %} ou em máquinas que você mesmo pode hospedar. Para obter mais informações, confira "[Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" e "[Sobre os executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".
{% endif %}

Você pode configurar seu fluxo de trabalho de CI para ser executado quando ocorrer um evento do {% data variables.product.prodname_dotcom %} (por exemplo, quando o novo código é enviado por push para o repositório), de acordo com um agendamento definido ou quando um evento externo ocorre usando o webhook de expedição do repositório.

{% data variables.product.product_name %} executa seus testes de CI e fornece os resultados de cada teste no pull request para que você possa ver se a mudança no seu branch introduz um erro. Quando todos os testes de CI em um fluxo de trabalho forem aprovados, as alterações que passaram por push estarão prontas para a revisão de um integrante da equipe ou para o merge. Se algum teste falhar, uma de suas alterações pode ter causado a falha.

Ao configurar o CI no seu repositório, {% data variables.product.product_name %} analisa o código no seu repositório e recomenda fluxos de trabalho CI baseados no idioma e na estrutura do seu repositório. Por exemplo, se você usar o [Node.js](https://nodejs.org/en/), o {% data variables.product.product_name %} vai sugerir um fluxo de trabalho inicial que instala os pacotes do Node.js e executa os testes. Você pode usar o fluxo de trabalho inicial de CI sugerido por {% data variables.product.product_name %}, personalizar o fluxo de trabalho inicial sugerido ou criar o seu próprio arquivo de fluxo de trabalho personalizado para executar seus testes de CI.

![Captura de tela de fluxos de trabalho iniciais de integração contínua sugeridos](/assets/images/help/repository/ci-with-actions-template-picker.png)

Além de ajudá-lo a configurar fluxos de trabalho de CI para seu projeto, você pode usar {% data variables.product.prodname_actions %} para criar fluxos de trabalho ao longo de todo o ciclo de vida de desenvolvimento do software. Por exemplo, você pode usar ações para implantar, criar pacotes ou lançar uma versão do seu projeto. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Para obter uma definição de termos comuns, confira "[Conceitos principais do {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)".

## Fluxo de trabalho inicial

{% data variables.product.product_name %} oferece fluxo de trabalho inicial de CI para uma série de linguagens e estruturas.

Navegue pela lista completa de fluxos de trabalho iniciais de CI oferecida pelo {% data variables.product.company_short %} no {% ifversion fpt or ghec %}repositório [actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci){% else %} repositório `actions/starter-workflows` do {% data variables.product.product_location %}{% endif %}.

## Leitura adicional

{% ifversion fpt or ghec %}
- "[Como gerenciar a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)" {% endif %}
