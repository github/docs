## Criar um exemplo de fluxo de trabalho

{% data variables.product.prodname_actions %} usa a sintaxe do YAML para definir o fluxo de trabalho.  Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

Você pode criar um exemplo de fluxo de trabalho no repositório que aciona automaticamente uma série de comandos sempre que o código for carregado. In this workflow, {% data variables.product.prodname_actions %} checks out the pushed code, installs the [bats](https://www.npmjs.com/package/bats) testing framework, and runs a basic command to output the bats version: `bats -v`.

1. No seu repositório, crie o diretório `.github/workflows/` para armazenar seus arquivos do fluxo de trabalho.
1. No diretório `.github/workflows/`, crie um novo arquivo denominado `learn-github-actions.yml` e adicione o código a seguir.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Faça commit dessas alterações e faça push para o seu repositório do {% data variables.product.prodname_dotcom %}.

Seu novo arquivo de fluxo de trabalho de {% data variables.product.prodname_actions %} agora está instalado no seu repositório e será executado automaticamente toda vez que alguém fizer push de uma alteração no repositório. To see the details about a workflow's execution history, see "[Viewing the activity for a workflow run](#viewing-the-activity-for-a-workflow-run)."

## Entender o arquivo de fluxo de trabalho

Para ajudar você a entender como a sintaxe de YAML é usada para criar um arquivo de fluxo de trabalho, esta seção explica cada linha do exemplo Introdução:

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Opcional</em> - Como o nome do fluxo de trabalho irá aparecer na aba Ações do repositório de {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Especifica o gatilho para este fluxo de trabalho. Este exemplo usa o evento <code>push</code> para que a execução de um fluxo de trabalho seja acionada toda vez que alguém fizer push de uma alteração no repositório ou merge de um pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Agrupa todos os trabalhos executados no fluxo de trabalho <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Define uma tarefa chamada <code>check-bats-version</code>. As chaves secundaárias definirão as propriedades do trabalho.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configura o trabalho a ser executado na versão mais recente de um executor do Linux do Ubuntu. Isto significa que o trabalho será executado em uma nova máquina virtual hospedada pelo GitHub. For syntax examples using other runners, see "<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Agrupa todos os passos são executados no trabalho <code>check-bats-version</code>. Cada item aninhado nesta seção é uma ação separada ou script do shell.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
A palavra-chave <code>usa</code> especifica que esta etapa irá executar <code>v3</code> da ação <code>actions/checkout</code>. Esta é uma ação que faz o check-out do seu repositório para o executor, permitindo que você execute scripts ou outras ações com base no seu código (como ferramentas de compilação e teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
  Essa etapa usa a <code>ação de {% data reusables.actions.action-setup-node %}</code> para instalar a versão especificada do Node.js (este exemplo usa v14). Isso coloca os dois comandos <code>nó</code> e <code>npm</code> no seu <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  A palavra-chave <code>executar</code> diz ao trabalho para executar um comando no executor. Neste caso, você está usando o <code>npm</code> para instalar o pacote de teste do software <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  Por fim, você executará o comando <code>bats</code> com um parâmetro que produz a versão do software.
</td>
</tr>
</table>

### Visualizar o arquivo de fluxo de trabalho

Neste diagrama, você pode ver o arquivo de fluxo de trabalho que acabou de criar e como os componentes de {% data variables.product.prodname_actions %} estão organizados em uma hierarquia. Cada etapa executa uma única ação ou script do shell. As etapas 1 e 2 executam ações, enquanto as etapas 3 e 4 executam scripts de shell. Para encontrar mais ações pré-criadas para seus fluxos de trabalho, consulte "[Encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-event.png)

## Viewing the activity for a workflow run

When your workflow is triggered, a _workflow run_ is created that executes the workflow. After a workflow run has started, you can see a visualization graph of the run's progress and view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. No nome do seu repositório, clique em **Ações**.

   ![Acesse o repositório](/assets/images/help/images/learn-github-actions-repository.png)
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja ver.

   ![Captura de tela dos resultados do fluxo de trabalho](/assets/images/help/images/learn-github-actions-workflow.png)
1. Em "Execuções do fluxo de trabalho", clique no nome da execução que você deseja ver.

   ![Captura de tela das execuções do fluxo de trabalho](/assets/images/help/images/learn-github-actions-run.png)
1. Em **Trabalhos** ou no gráfico de visualização, clique no trabalho que você deseja ver.

   ![Selecionar trabalho](/assets/images/help/images/overview-actions-result-navigate.png)
1. Visualizar os resultados de cada etapa.

   ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result-updated-2.png)
