---
title: Início rápido para GitHub Actions
intro: 'Adicione um fluxo de trabalho do {% data variables.product.prodname_actions %} a um repositório existente em até 5 minutos ou menos.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Você só precisa de um repositório de {% data variables.product.prodname_dotcom %} existente para criar e executar um fluxo de trabalho de {% data variables.product.prodname_actions %}. Neste guia, você adicionará um fluxo de trabalho que cria várias linguagens de codificação usando a [Ação de Super-Linter de {% data variables.product.prodname_dotcom %}](https://github.com/github/super-linter). O fluxo de trabalho usa o Super-Linter para validar o seu código-fonte toda vez que um novo commit é subido para o seu repositório.

### Criar o seu primeiro fluxo de trabalho

1. Do seu repositório no {% data variables.product.prodname_dotcom %}, crie um novo arquivo no diretório `.github/workflows` denominado `superlinter.yml`. Para obter mais informações, consulte "[Criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
2. Copie o conteúdo de YAML a seguir para o arquivo `superlinter.yml`. **Observação:** Se seu branch-padrão não for `principal`, atualize o valor de `DEFAULT_BRANCH` para corresponder ao nome do branch-padrão do seu repositório.
    {% raw %}
    ```yaml
    name: Super-Linter

    # Run this workflow every time a new commit pushed to your repository
    on: push

    jobs:
      # Set the job key. The key is displayed as the job name
      # when a job name is not provided
      super-lint:
        # Name the Job
        name: Lint code base
        # Set the type of machine to run on
        runs-on: ubuntu-latest

        steps:
          # Checks out a copy of your repository on the ubuntu-latest machine
          - name: Checkout code
            uses: actions/checkout@v2

          # Runs the Super-Linter action
          - name: Run Super-Linter
            uses: github/super-linter@v3
            env:
              DEFAULT_BRANCH: main
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    {% endraw %}
3. Para executar seu fluxo de trabalho, desça a barra de rolagem da página e selecione **Criar um novo branch para este commit e iniciar um pull request**. Em seguida, para criar um pull request, clique em **Propor novo arquivo**. ![Arquivo do fluxo de trabalho do commit](/assets/images/commit-workflow-file.png)

Fazer commit do arquivo de fluxo de trabalho no repositório aciona o evento `push` e executa seu fluxo de trabalho.

### Visualizar seus resultados do fluxo de trabalho

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
1. Na barra lateral esquerda, clique no trabalho **Lint de código-bsee**. ![Lint do trabalho do código-base](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% data reusables.repositories.view-failed-job-results-superlinter %}

### Mais fluxos de trabalho iniciais

O {% data variables.product.prodname_dotcom %} fornece modelos de fluxo de trabalho pré-configurados com os quais você pode começar para automatizar ou criar fluxos de trabalho de integração contínua. Você pode pesquisar a lista completa de modelos de fluxo de trabalho no repositório de {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows) repository{% else %} `actions/starter-workflows` e no repositório {% data variables.product.product_location %}{% endif %}.

### Próximas etapas

O fluxo de trabalho do super-linter que você acabou de adicionar é executado sempre que o código é enviado para o seu repositório para ajudá-lo a detectar erros e inconsistências no seu código. Mas este é apenas o início do que você pode fazer com {% data variables.product.prodname_actions %}. O seu repositório pode conter vários fluxos de trabalho que ativam diferentes tarefas com base em diferentes eventos. O {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_actions %}:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obter um tutorial aprofundado
- "[Guias](/actions/guides)" para casos e exemplos específicos de uso
- [github/super-linter](https://github.com/github/super-linter) para obter mais informações sobre a configuração da ação de Super-Linter
