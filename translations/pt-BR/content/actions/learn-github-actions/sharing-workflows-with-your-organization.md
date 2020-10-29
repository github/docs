---
title: Compartilhar fluxos de trabalho com a sua organização
shortTitle: Compartilhar fluxos de trabalho com a sua organização
intro: 'Aprenda como usar recursos da organização para colaborar com a sua equipe, compartilhando modelos de fluxo de trabalho, segredos e executores auto-hospedados.'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Visão Geral

Se você precisar compartilhar fluxos de trabalho e outros recursos de {% data variables.product.prodname_actions %} com a sua equipe, considere colaborar dentro de uma organização de {% data variables.product.prodname_dotcom %}. Uma organização permite que você armazene e gerencie centralmente segredos, artefatos e executores auto-hospedados. Você também pode criar modelos de fluxo de trabalho no repositório `.github` e compartilhá-los com outros usuários na sua organização.

### Criar um modelo do fluxo de trabalho

Os modelos do fluxo de trabalh podem ser criados por usuários com acesso de gravação ao repositório `.github` da organização. Em seguida, os modelos podem ser usados por integrantes da organização com permissão para criar fluxos de trabalho. Os modelos do fluxo de trabalho podem ser usados para criar novos fluxos de trabalho nos repositórios públicos de uma organização; para usar modelos para criar fluxos de trabalho em repositórios privados, a organização deve fazer parte de um plano corporativo ou do GitHub One.

Este procedimento demonstra como criar um modelo de fluxo de trabalho e um arquivo de metadados. O arquivo de metadados descreve como o modelo é apresentado aos usuários quando estão criando um novo fluxo de trabalho.

1. Se já não existir, crie um novo repositório público denominado `.github` na sua organização.
1. Crie um diretório denominado `workflow-templates`.
1. Crie seu novo arquivo de fluxo de trabalho dentro do diretório `workflow-templates`.

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
1. Crie um arquivo de metadados dentro do diretório `workflow-templates`. O arquivo de metadados deve ter o mesmo nome do arquivo de fluxo de trabalho, mas em vez da extensão `.yml`, deve-se adicionar `.properties.json`. Por exemplo, este arquivo denominado `octo-organization-ci.properties.json` contém os metadados para um arquivo de fluxo de trabalho denominado `octo-organization-ci.yml`:
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

### Usar um modelo do fluxo de trabalho

Este procedimento demonstra como um membro da sua organização pode localizar e usar um modelo de fluxo de trabalho para criar um novo fluxo de trabalho. Os modelos de fluxo de trabalho de uma organização podem ser usados por qualquer pessoa que seja integrante da organização.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Caso o seu repositório tenha fluxos de trabalho existentes: No canto superior esquerdo, clique em **Novo fluxo de trabalho**. ![Criar um novo fluxo de trabalho](/assets/images/help/repository/actions-new-workflow.png)
1. Os modelos de fluxo de trabalho da sua organização estão localizados em sua própria seção intitulada "Fluxos de trabalho criados pelo _nome da organização_". Sob, nome do template que você gostaria de usar, clique em **Configurar este fluxo de trabalho**. ![Configurar este fluxo de trabalho](/assets/images/help/settings/actions-create-starter-workflow.png)


### Compartilhar segredos dentro de uma organização

Você pode gerenciar seus segredos centralmente dentro de uma organização e, em seguida, disponibilizá-los para repositórios selecionados. Isso também significa que você pode atualizar um segredo em um único local e fazer com que a alteração seja aplicada em todos os fluxos de trabalho do repositório que usam o segredo.

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Clique em **Novo segredo**.
1. Digite um nome para o seu segredo na caixa de entrada **Nome**.
1. Insira o **Valor** para o seu segredo.
1. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
1. Clique em **Add secret** (Adicionar segredo).

### Compartilhe executores auto-hospedados dentro de uma organização

Os administradores da organização podem adicionar seus executores auto-hospedados para grupos e, em seguida, criar políticas que controlam quais repositórios podem acessar o grupo.

Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


### Próximas etapas

Para continuar aprendendo mais sobre {% data variables.product.prodname_actions %}, consulte "[Aumento da segurança para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions).
