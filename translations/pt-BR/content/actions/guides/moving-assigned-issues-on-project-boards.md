---
title: Transferir problemas atribuídos em quadros de projeto
intro: 'Você pode usar {% data variables.product.prodname_actions %} para transferir automaticamente um problema para uma coluna específica no quadro de um projeto quando o problema for atribuído.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Workflows
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introdução

Este tutorial demonstra como usar a ação [`alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation) para transferir automaticamente um problema para uma coluna específica em um quadro de projeto quando o problema for atribuído. Por exemplo, quando um problema é atribuído, você pode transferi-lo para a coluna `em andamento` do seu quadro de projeto.

No tutorial, primeiro você vai criar um arquivo de fluxo de trabalho que usa a ação [`alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

### Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. No seu repositório, escolha um quadro de projeto. Você pode usar um projeto existente ou criar um novo projeto. Para obter mais informações sobre como criar um projeto, consulte "[Criar um quadro de projeto](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    {% raw %}
    ```yaml{:copy}
    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@v0.3.0
            with:
              project: Docs Work
              column: In Progress
              repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    ```
    {% endraw %}
5. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor do `projeto` para o nome do seu quadro de projetos. Se você tiver vários projetos com o mesmo nome, a ação `alex-page/github-project-automation-plus` atuará em todos os projetos com o nome especificado.
   - Altere o valor da `coluna` para o nome da coluna onde você deseja que os problemas sejam transferidos quando forem atribuídos.
   - Altere o valor para `repo-token`:
     1. Crie um token de acesso pessoal com o escopo do </code>repositório`. Para mais informação, consulte "<a href="/github/authenticating-to-github/creating-a-personal-access-token">Criando um token de acesso pessoal</a>."</li>
<li>Armazene este token de acesso pessoal como um segredo no seu repositório. Para obter mais informações sobre o armazenamento de segredos, consulte "<a href="/actions/reference/encrypted-secrets">Segredos criptografados</a>".</li>
<li>No seu arquivo do fluxo de trabalho, substitua <code>PERSONAL_ACCESS_TOKEN` pelo nome do seu segredo.
6. {% data reusables.actions.commit-workflow %}

### Testar o fluxo de trabalho

Sempre que um problema no seu repositório for atribuído, o problema será transferido para a coluna do quadro de projeto especificado. Se o problema não estiver já no quadro de projeto, ele será adicionado ao quadro de projeto.

Se o repositório pertencer a um usuário, a ação `alex-page/github-project-automation-plus` atuará em todos os projetos no seu repositório ou conta de usuário que têm o nome e a coluna especificados. Da mesma forma, se o repositório pertencer a uma organização, a ação atuará sobre todos os projetos do seu repositório ou organização que têm o nome e a coluna especificados.

Teste seu fluxo de trabalho atribuindo um problema no seu repositório.

1. Abra um problema no seu repositório. Para obter mais informações, consulte "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Atribuir o problema. Para obter mais informações, consulte "[Atribuir problemas e pull requests a outros usuários do GitHub](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)".
3. Para ver a execução do fluxo de trabalho que atribui o problema acionado, visualize o histórico da execução do fluxo de trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Quando o fluxo de trabalho é concluído, o problema que você atribuiu deverá ser adicionado à coluna do quadro de projeto especificado.

### Próximas etapas

- Para saber outras coisas que você pode fazer com a ação `alex-page/github-project-automation-plus`, como excluir ou arquivar cartões do projeto, acesse a documentação da ação [`alex-page/github-project-automation-plus`](https://github.com/marketplace/actions/github-project-automation).
