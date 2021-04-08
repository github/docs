---
title: Início rápido para GitHub Actions
intro: 'Adicione um fluxo de trabalho do {% data variables.product.prodname_actions %} a um repositório existente em até 5 minutos ou menos.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'quick_start'
topics:
  - 'Princípios básicos'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Você só precisa de um repositório de {% data variables.product.prodname_dotcom %} existente para criar e executar um fluxo de trabalho de {% data variables.product.prodname_actions %}. Neste guia, você adicionará um fluxo de trabalho que cria várias linguagens de codificação usando a [Ação de Super-Linter de {% data variables.product.prodname_dotcom %}](https://github.com/github/super-linter). O fluxo de trabalho usa o Super-Linter para validar o seu código-fonte toda vez que um novo commit é subido para o seu repositório.

### Criar o seu primeiro fluxo de trabalho

1. Do seu repositório no {% data variables.product.prodname_dotcom %}, crie um novo arquivo no diretório `.github/workflows` denominado `superlinter.yml`. Para obter mais informações, consulte "[Criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
2. Copie o conteúdo de YAML a seguir para o arquivo `superlinter.yml`. **Observação:** Se seu branch-padrão não for `principal`, atualize o valor de `DEFAULT_BRANCH` para corresponder ao nome do branch-padrão do seu repositório.
    {% raw %}
    ```yaml{:copy}
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
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
1. Em **Trabalhos** ou no gráfico de visualização, clique no trabalho de **base de código Lint**. ![Lint do trabalho do código-base](/assets/images/help/repository/superlinter-lint-code-base-job-updated.png)
{% else %}
1. Na barra lateral esquerda, clique no trabalho **Lint de código-bsee**. ![Lint do trabalho do código-base](/assets/images/help/repository/superlinter-lint-code-base-job.png)
{% endif %}
{% data reusables.repositories.view-failed-job-results-superlinter %}

### Mais modelos de fluxo de trabalho

{% data reusables.actions.workflow-template-overview %}

### Próximas etapas

O fluxo de trabalho do super-linter que você acabou de adicionar é executado sempre que o código é enviado para o seu repositório para ajudá-lo a detectar erros e inconsistências no seu código. Mas este é apenas o início do que você pode fazer com {% data variables.product.prodname_actions %}. O seu repositório pode conter vários fluxos de trabalho que ativam diferentes tarefas com base em diferentes eventos. O {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_actions %}:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obter um tutorial aprofundado
- "[Guias](/actions/guides)" para casos e exemplos específicos de uso
- [github/super-linter](https://github.com/github/super-linter) para obter mais informações sobre a configuração da ação de Super-Linter

<div id="quickstart-treatment" hidden>

### Introdução

Imprimir "Olá, mundo!" é uma ótima maneira de explorar a configuração e a sintaxe básicas de uma nova linguagem de programação. Neste guia, você usará o GitHub Actions para imprimir "Hello, World!" dentro dos registros do fluxo de trabalho do seu repositório de {% data variables.product.prodname_dotcom %}. Tudo o que você precisa para começar é um repositório de {% data variables.product.prodname_dotcom %} em que você se sente confortável para criar e executar um fluxo de trabalho de amostra de {% data variables.product.prodname_actions %}. Sinta-se à vontade para criar um novo repositório para este Início rápido testar esse e fluxos de trabalhos de {% data variables.product.prodname_actions %} futuros.

### Criar o seu primeiro fluxo de trabalho

1. Do seu repositório em {% data variables.product.prodname_dotcom %}, crie um novo arquivo no diretório `.github/workflows` denominado `hello-world.yml`. Para obter mais informações, consulte "[Criar novos arquivos](/github/managing-files-in-a-repository/creating-new-files)."
2. Copie o seguinte conteúdo YAML para o arquivo `hello-world.yml`.
    {% raw %}
    ```yaml{:copy}
    name: Say hello!

    # GitHub Actions Workflows are automatically triggered by GitHub events
    on:
      # For this workflow, we're using the workflow_dispatch event which is triggered when the user clicks Run workflow in the GitHub Actions UI
      workflow_dispatch:
        # The workflow_dispatch event accepts optional inputs so you can customize the behavior of the workflow
        inputs:
          name:
            description: 'Person to greet'
            required: true
            default: 'World'
    # When the event is triggered, GitHub Actions will run the jobs indicated
    jobs:
      say_hello:
        # Uses a ubuntu-latest runner to complete the requested steps
        runs-on: ubuntu-latest
        steps:
        - run: |
            echo "Hello ${{ github.event.inputs.name }}!"
    ```
    {% endraw %}
3. Vá até o final da página e selecione **Criar um novo branch para este commit e inicie um pull request**. Em seguida, para criar um pull request, clique em **Propor novo arquivo**.
    ![Commit workflow file](/assets/images/help/repository/commit-hello-world-file.png)
4. Assim que o merge do pull request for realizado, você estará pronto para "Acionar o seu fluxo de trabalho".

### Acionar o seu fluxo de trabalho

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar.
   ![Selecione o trabalho "say hello"](/assets/images/help/repository/say-hello-job.png)
1. À direita, clique no menu suspenso **Executar fluxo de trabalho** e clique em **Executar fluxo de trabalho**. Opcionalmente, você pode inserir uma mensagem personalizada na entrada "Pessoa a saudar" antes de executar o fluxo de trabalho.
   ![Acionar o fluxo de trabalho manual](/assets/images/help/repository/manual-workflow-trigger.png)
1. A execução do fluxo de trabalho irá aparecer na parte superior da lista de execuções de fluxos de trabalho "Say hello!". Clique em "Say hello!" para ver o resultado da execução do fluxo de trabalho.
   ![Lista de resultado da execução do fluxo de trabalho](/assets/images/help/repository/workflow-run-listing.png)
1. Na barra lateral esquerda, clique no trabalho "say_hello".
   ![Lista de trabalhos do fluxo de trabalho](/assets/images/help/repository/workflow-job-listing.png)
1. Nos registros do fluxo de trabalho, expanda a seção 'Run echo "Hello World!"'.
   ![Workflow detail](/assets/images/help/repository/workflow-log-listing.png)

### More workflow templates

{% data reusables.actions.workflow-template-overview %}

### Next steps

The hello-world workflow you just added is a minimal example of a manually triggered workflow. Esse é apenas o início do que você pode fazer com {% data variables.product.prodname_actions %}. O seu repositório pode conter vários fluxos de trabalho que ativam diferentes tarefas com base em diferentes eventos. O {% data variables.product.prodname_actions %} pode ajudá-lo a automatizar quase todos os aspectos dos processos de desenvolvimento do seu aplicativo. Pronto para começar? Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_actions %}:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para um tutorial detalhado
- "[Guides](/actions/guides)" para casos específicos de usos e exemplos

</div>
