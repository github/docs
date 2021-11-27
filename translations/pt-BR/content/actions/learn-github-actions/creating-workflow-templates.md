---
title: Criando modelos de fluxo de trabalho
shortTitle: Criando modelos
intro: Saiba como criar modelos de fluxo de trabalho para ajudar as pessoas na sua equipe a adicionar novos fluxos de trabalho com mais facilidade.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
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
{% data reusables.actions.ae-beta %}

## Visão Geral

{% data reusables.actions.workflow-organization-templates %}

## Criar um modelo do fluxo de trabalho

Os modelos do fluxo de trabalh podem ser criados por usuários com acesso de gravação ao repositório `.github` da organização. Em seguida, os modelos podem ser usados por integrantes da organização com permissão para criar fluxos de trabalho.

{% ifversion fpt %}
Your workflow templates can be used to create workflows in public repositories only. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use workflow templates to create workflows in private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/learn-github-actions/creating-workflow-templates).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Observação:** Para evitar duplicação em fluxos de trabalho criados a partir de um modelo você pode chamar fluxos de trabalho reutilizáveis a partir de um modelo de fluxo de trabalho. Isso pode ajudar a manter seus fluxos de trabalho de forma mais fácil. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".

{% endnote %}
{% endif %}

Este procedimento demonstra como criar um modelo de fluxo de trabalho e um arquivo de metadados. O arquivo de metadados descreve como o modelo é apresentado aos usuários quando estão criando um novo fluxo de trabalho.

1. Se já não existir, crie um novo repositório público denominado `.github` na sua organização.
2. Crie um diretório denominado `workflow-templates`.
3. Crie seu novo arquivo de fluxo de trabalho dentro do diretório `workflow-templates`.

   Se você precisar referir-se ao branch-padrão de um repositório, você poderá usar o espaço reservado `branch$default`. Quando um fluxo de trabalho é criado usando seu modelo, o espaço reservado será automaticamente substituído pelo nome do branch-padrão do repositório.

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
       "description": "Octo Organization CI workflow template.",
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
   * `nome` - **Obrigatório.** O nome do modelo de fluxo de trabalho. Isto é exibido na lista de modelos disponíveis.
   * `descrição` - **Obrigatória.** A descrição do modelo de fluxo de trabalho. Isto é exibido na lista de modelos disponíveis.
   * `iconName` - **Obrigatório.** Define um ícone para a entrada do fluxo de trabalho na lista de modelos. O `iconName` deve ser um ícone SVG com o mesmo nome e deve ser armazenado no diretório `workflow-templates`. Por exemplo, um arquivo SVG denominado `exemplo-icon.svg` é referenciado como `example-icon`.
   * `categorias` - **Opcional.** Define a categoria de idioma do fluxo de trabalho. Quando um usuário visualiza os modelos disponíveis, esses modelos que correspondem àao mesmo idioma terão mais destaque. Para obter informações sobre as categorias de idioma disponíveis, consulte https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite que o modelo seja usado se o repositório do usuário tiver um arquivo no diretório-raiz que corresponde a uma expressão regular definida.

Para adicionar outro modelo de fluxo de trabalho, adicione seus arquivos ao mesmo diretório `workflow-templates`. Por exemplo:

![Arquivos do modelo do fluxo de trabalho](/assets/images/help/images/workflow-template-files.png)

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Usando modelos de fluxo de trabalho](/actions/learn-github-actions/using-workflow-templates)".
