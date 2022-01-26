---
title: Criando fluxos de trabalho iniciais para sua organização
shortTitle: Criando fluxos de trabalho iniciais
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

{% data reusables.actions.workflow-organization-templates %}

## Criando um fluxo de trabalho inicial

Os fluxos de trabalho iniciantes podem ser criados pelos usuários com acesso de gravação ao repositório `.github` da organização. Eles poderão ser usados pelos integrantes da organização com permissão para criar fluxos de trabalho.

{% ifversion fpt %}
Os fluxos de trabalho iniciantes criados por usuários só podem ser usados para criar fluxos de trabalho em repositórios públicos. As organizações que usam {% data variables.product.prodname_ghe_cloud %} também podem usar fluxos de trabalho iniciais para criar fluxos de trabalho em repositórios privados. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Observação:** Para evitar duplicação entre os fluxos de trabalho iniciais você pode chamar fluxos de trabalho reutilizáveis de dentro de um fluxo de trabalho. Isso pode ajudar a manter seus fluxos de trabalho de forma mais fácil. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

{% endnote %}
{% endif %}

Este procedimento demonstra como criar um arquivo de metadados e fluxo de trabalho inicial. O arquivo de metadados descreve como os fluxos de trabalho iniciais serão apresentados aos usuários quando estiverem criando um novo fluxo de trabalho.

1. Se já não existir, crie um novo repositório público denominado `.github` na sua organização.
2. Crie um diretório denominado `workflow-templates`.
3. Crie seu novo arquivo de fluxo de trabalho dentro do diretório `workflow-templates`.

   Se você precisar referir-se ao branch-padrão de um repositório, você poderá usar o espaço reservado `branch$default`. Quando um fluxo de trabalho é criado, o espaço reservado será automaticamente substituído pelo nome do branch padrão do repositório.

   Por exemplo, este arquivo denominado `octo-organization-ci.yml` demonstra um fluxo de trabalho básico.

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
         - uses: actions/checkout@v2

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Crie um arquivo de metadados dentro do diretório `workflow-templates`. O arquivo de metadados deve ter o mesmo nome do arquivo de fluxo de trabalho, mas em vez da extensão `.yml`, deve-se adicionar `.properties.json`. Por exemplo, este arquivo denominado `octo-organization-ci.properties.json` contém os metadados para um arquivo de fluxo de trabalho denominado `octo-organization-ci.yml`:
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
   * `name` - **Obrigatório.** O nome do fluxo de trabalho. É exibido na lista de fluxos de trabalho disponíveis.
   * `description` - **Obrigatório.** A descrição do fluxo de trabalho. É exibido na lista de fluxos de trabalho disponíveis.
   * `iconName` - **Opcional.** Especifica um íncone para o fluxo de trabalho exibido na lista de fluxos de trabalho. O `iconName` deve ser o nome de um arquivo SVG, sem a extensão de nome do arquivo, armazenado no diretório `workflow-templates`. Por exemplo, um arquivo SVG denominado `exemplo-icon.svg` é referenciado como `example-icon`.
   * `categorias` - **Opcional.** Define a categoria de idioma do fluxo de trabalho. Quando um usuário visualiza os fluxos de trabalho iniciais disponíveis para um repositório, os fluxos de trabalho que correspondem à linguagem identificada para o projeto são apresentados de forma mais proeminente. Para obter informações sobre as categorias de idioma disponíveis, consulte https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que o fluxo de trabalho seja usado se o repositório do usuário tiver um arquivo no diretório-raiz que corresponde a uma expressão regular definida.

Para adicionar outro fluxo de trabalho inicial, adicione seus arquivos ao mesmo diretório `workflow-templates`. Por exemplo:

![Arquivos de fluxo de trabalho](/assets/images/help/images/workflow-template-files.png)

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Usando fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows)."
