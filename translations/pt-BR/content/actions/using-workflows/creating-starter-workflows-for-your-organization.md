---
title: Criando fluxos de trabalho iniciais para sua organização
shortTitle: Creating starter workflows
intro: Aprenda como criar fluxos de trabalho iniciais para ajudar as pessoas na sua equipe a adicionar novos fluxos de trabalho de forma mais fácil.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
ms.openlocfilehash: cbaecefc90f3593b8883c7ccad5256b4addf972c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884186'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Criando um fluxo de trabalho inicial

Os fluxos de trabalho iniciais podem ser criados por usuários com acesso de gravação no repositório `.github` da organização. Eles poderão ser usados pelos integrantes da organização com permissão para criar fluxos de trabalho.

{% ifversion fpt %} Os fluxos de trabalho iniciais criados por usuários só podem ser usados para criar fluxos de trabalho em repositórios públicos. As organizações que usam {% data variables.product.prodname_ghe_cloud %} também podem usar fluxos de trabalho iniciais para criar fluxos de trabalho em repositórios privados. Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**Observação:** para evitar a duplicação entre os fluxos de trabalho iniciais, você pode chamar fluxos de trabalho reutilizáveis em um fluxo de trabalho. Isso pode ajudar a manter seus fluxos de trabalho de forma mais fácil. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

{% endnote %} {% endif %}

Este procedimento demonstra como criar um arquivo de metadados e fluxo de trabalho inicial. O arquivo de metadados descreve como os fluxos de trabalho iniciais serão apresentados aos usuários quando estiverem criando um novo fluxo de trabalho.

1. Se ele ainda não existir, crie um repositório público chamado `.github` na sua organização.
2. Crie um diretório com o nome `workflow-templates`.
3. Crie o arquivo de fluxo de trabalho no diretório `workflow-templates`.

   Caso precise se referir ao branch padrão de um repositório, use o espaço reservado `$default-branch`. Quando um fluxo de trabalho é criado, o espaço reservado será automaticamente substituído pelo nome do branch padrão do repositório.

   Por exemplo, este arquivo chamado `octo-organization-ci.yml` demonstra um fluxo de trabalho básico.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Crie um arquivo de metadados no diretório `workflow-templates`. O arquivo de metadados precisa ter o mesmo nome do arquivo de fluxo de trabalho, mas, em vez da extensão `.yml`, é preciso acrescentar `.properties.json` a ele. Por exemplo, este arquivo chamado `octo-organization-ci.properties.json` contém os metadados para o arquivo de fluxo de trabalho chamado `octo-organization-ci.yml`:
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Obrigatório.** Nome do fluxo de trabalho. É exibido na lista de fluxos de trabalho disponíveis.
   * `description` - **Obrigatório.** Descrição do fluxo de trabalho. É exibido na lista de fluxos de trabalho disponíveis.
   * `iconName` - **Opcional.** Especifica um ícone para o fluxo de trabalho exibido na lista de fluxos de trabalho. O `iconName` precisa ser o nome de um arquivo SVG, sem a extensão de nome de arquivo, armazenada no diretório `workflow-templates`. Por exemplo, um arquivo SVG chamado `example-icon.svg` é referenciado como `example-icon`.
   * `categories` - **Opcional.** Define a categoria de linguagem do fluxo de trabalho. Quando um usuário visualiza os fluxos de trabalho iniciais disponíveis para um repositório, os fluxos de trabalho que correspondem à linguagem identificada para o projeto são apresentados de forma mais proeminente. Para obter informações sobre as categorias de linguagens disponíveis, confira https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que o modelo seja usado caso o repositório do usuário tenha um arquivo no diretório raiz que corresponda a uma expressão regular definida.

Para adicionar outro fluxo de trabalho inicial, adicione seus arquivos ao mesmo diretório `workflow-templates`. Por exemplo:

![Arquivos de fluxo de trabalho](/assets/images/help/images/workflow-template-files.png)

## Próximas etapas

Para continuar aprendendo sobre o {% data variables.product.prodname_actions %}, confira "[Como usar fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows)".
