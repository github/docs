---
title: Início rápido para GitHub Actions
intro: 'Experimente as funcionalidades de {% data variables.product.prodname_actions %} em 5 minutos ou menos.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: QuickStart
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Você precisa apenas de um repositório de {% data variables.product.prodname_dotcom %} para criar e executar um fluxo de trabalho de {% data variables.product.prodname_actions %}. Neste guia, você adicionará um fluxo de trabalho que demonstra algumas das funcionalidades essenciais de {% data variables.product.prodname_actions %}.

O exemplo a seguir mostra como os trabalhos de {% data variables.product.prodname_actions %} podem ser acionados automaticamente, onde são executados e como podem interagir com o código no seu repositório.

## Criar o seu primeiro fluxo de trabalho

1. Crie um diretório `.github/workflows` no repositório {% data variables.product.prodname_dotcom %} se este diretório não existir.
2. No diretório `.github/workflows`, crie um arquivo denominado `github-actions-demo.yml`. Para obter mais informações, consulte "[Criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
3. Copie o conteúdo de YAML a seguir para o arquivo `github-actions-demo.yml`:
    {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Vá até o final da página e selecione **Criar um novo branch para este commit e iniciar um pull request**. Em seguida, para criar um pull request, clique em **Propor novo arquivo**. ![Arquivo do fluxo de trabalho do commit](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Fazer commit do arquivo de fluxo de trabalho para um branch em seu repositório aciona o evento `push` e executa seu fluxo de trabalho.

## Visualizar os resultados do seu fluxo de trabalho

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja ver.

   ![Lista de fluxo de trabalho na barra lateral esquerda](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Na lista de execuções do fluxo de trabalho, clique no nome da execução que você deseja visualizar.

   ![Nome da execução do fluxo de trabalho](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Em **Trabalhos**, clique no trabalho **Explore-GitHub-Actions**.

   ![Localizar trabalho](/assets/images/help/repository/actions-quickstart-job.png)
1. O registro mostra como cada uma das etapas foi processada. Expanda qualquer um dos passos para ver seus detalhes.

   ![Exemplos de resultados do fluxo de trabalho](/assets/images/help/repository/actions-quickstart-logs.png)

   Por exemplo, você pode ver a lista de arquivos no seu repositório: ![Exemplo do detalhe da ação](/assets/images/help/repository/actions-quickstart-log-detail.png)

## Mais fluxos de trabalho iniciais

{% data reusables.actions.workflow-template-overview %}

## Exemplos mais complexos
{% data reusables.actions.link-to-example-library %}

## Próximas etapas

O exemplo do fluxo de trabalho que você acabou de adicionar é executado cada vez que o código for enviado para o branch e mostra como {% data variables.product.prodname_actions %} pode funcionar com o conteúdo do seu repositório. Mas este é apenas o início do que você pode fazer com {% data variables.product.prodname_actions %}:

- O seu repositório pode conter vários fluxos de trabalho que ativam diferentes tarefas com base em diferentes eventos.
- Você pode usar um fluxo de trabalho para instalar aplicativos de teste de software e fazer com que testem automaticamente seu código nos executores de {% data variables.product.prodname_dotcom %}.

O {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_actions %}:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obter um tutorial aprofundado.
