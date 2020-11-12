---
title: Introdução ao GitHub Actions
shortTitle: Introdução ao GitHub Actions
intro: 'Aprenda sobre os conceitos principais e vários componentes de {% data variables.product.prodname_actions %} e veja um exemplo que mostre como adicionar automação ao seu repositório.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Visão Geral

{% data variables.product.prodname_actions %} ajuda você a automatizar tarefas dentro de seu ciclo de vida de desenvolvimento de software. {% data variables.product.prodname_actions %} são orientados por eventos, o que significa que você pode executar uma série de comandos após um evento especificado ocorrer. Por exemplo, cada vez que alguém cria um pull request para um repositório, você pode executar automaticamente um comando que executa um script de teste do software.

Este diagrama demonstra como você pode usar {% data variables.product.prodname_actions %} para executar automaticamente seus scripts de teste de software. Um evento aciona automaticamente o _fluxo de trabalho_, que contém um _trabalho_. Em seguida, o trabalho usa _etapas_ para controlar a ordem em que as _ações_ são executadas. Estas ações são os comandos que automatizam o teste do seu software.

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

### Componentes de {% data variables.product.prodname_actions %}

Abaixo está uma lista dos múltiplos componentes de {% data variables.product.prodname_actions %} que trabalham em conjunto para executar os trabalhos. Você pode ver como esses componentes interagem uns com os outros.

![Visão geral do componente e do serviço](/assets/images/help/images/overview-actions-design.png)

#### Fluxos de trabalho

O fluxo de trabalho é um procedimento automatizado que você adiciona ao seu repositório. Os fluxos de trabalho são constituídos por um ou mais trabalhos e podem ser programados ou ativados por um evento. O fluxo de trabalho pode ser usado para criar, testar, empacotar, publicar ou implantar um projeto em {% data variables.product.prodname_dotcom %}.

#### Eventos

Um evento é uma atividade específica que aciona um fluxo de trabalho. Por exemplo, uma atividade pode originar de {% data variables.product.prodname_dotcom %} quando alguém faz o push de um commit em um repositório ou quando são criados um problema ou um pull request. You can also use the [repository dispatch webhook](/rest/reference/repos#create-a-repository-dispatch-event) to trigger a workflow when an external event occurs. Para obter uma lista completa de eventos que podem ser usados para acionar fluxos de trabalho, consulte [Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows).

#### Trabalhos

Um trabalho é um conjunto de etapas executadas no mesmo executor. Por padrão, um fluxo de trabalho com vários trabalhos executará esses trabalhos em paralelo. Também é possível configurar um fluxo de trabalho para executar trabalhos sequencialmente. Por exemplo, um fluxo de trabalho pode ter dois trabalhos sequenciais que criam e testam códigos. em que o trabalho de teste depende do status do trabalho de criação. Se ocorrer uma falha no trabalho de criação, o trabalho de teste não será executado.

#### Etapas

Uma etapa é uma tarefa individual que pode executar comandos (conhecidos como _ações_). Cada etapa de um trabalho é executada no mesmo executor, permitindo que as ações naquele trabalho compartilhem dados entre si.

#### Ações

_Ações_ são comandos autônomos combinados em _etapas_ para criar um _trabalho_. As ações são o menor bloco de criação portátil de um fluxo de trabalho. Você pode criar as suas próprias ações ou usar ações criadas pela comunidade de {% data variables.product.prodname_dotcom %}. Para usar uma ação em um fluxo de trabalho, você deverá incluí-la como uma etapa.

#### Executores

Um executor é um servidor com a aplicação de executor de {% data variables.product.prodname_actions %} instalada. Você pode usar um executor hospedado em {% data variables.product.prodname_dotcom %} ou você pode hospedar seu próprio. Um executor escuta trabalhos disponíveis, executa um trabalho de cada vez e relata o progresso, os registros e os resultados de volta para {% data variables.product.prodname_dotcom %}. Para executores hospedados em {% data variables.product.prodname_dotcom %}, cada trabalho em um fluxo de trabalho é executado em um novo ambiente virtual.

Os executores hospedados em {% data variables.product.prodname_dotcom %}runners são baseados no Ubuntu Linux, Microsoft Windows e macOS. Para informações sobre executores hospedados em {% data variables.product.prodname_dotcom %}, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}-](/actions/reference/virtual-environments-for-github-hosted-runners)". Se você precisar de um sistema operacional diferente ou precisar de uma configuração de hardware específica, você poderá hospedar seus próprios executores. Para obter informações sobre executores auto-hospedados, consulte "[Hospedar seus próprios executores](/actions/hosting-your-own-runners)".

### Criar um exemplo de fluxo de trabalho

{% data variables.product.prodname_actions %} usa sintaxe de YAML para definir os eventos, trabalhos e etapas. Esses arquivos de YAML são armazenados no seu repositório de código em um diretório denominado `.github/workflows`.

Você pode criar um exemplo de fluxo de trabalho no repositório que aciona automaticamente uma série de comandos sempre que o código for carregado. Neste fluxo de trabalho, {% data variables.product.prodname_actions %} verifica o código enviado, instala as dependências do software e executa `bats -v`.

1. No seu repositório, crie o diretório `.github/workflows/` para armazenar seus arquivos do fluxo de trabalho.
1. No diretório `.github/workflows/`, crie um novo arquivo denominado `learn-github-actions.yml` e adicione o código a seguir.
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
          - run: npm install -g bats
          - run: bats -v
    ```
1. Faça commit dessas alterações e faça push para o seu repositório do {% data variables.product.prodname_dotcom %}.

Seu novo arquivo de fluxo de trabalho de {% data variables.product.prodname_actions %} agora está instalado no seu repositório e será executado automaticamente toda vez que alguém fizer push de uma alteração no repositório. Para obter detalhes sobre o histórico de execução de um trabalho, consulte "[Visualizar a atividade do fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)".

### Entender o arquivo de fluxo de trabalho

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
  Especifica o evento que aciona automaticamente o arquivo do fluxo de trabalho. Este exemplo usa o evento <code>push</code> para que os trabalhos sejam executados toda vez que alguém fizer uma alteração no repositório. É possível definir o fluxo de trabalho para ser executado somente em determinados branches, caminhos ou tags. Para obter exemplos de sintaxe, incluindo ou excluindo branches, caminhos ou tags, consulte <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}"</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Agrupa todos os trabalhos executados no arquivo de fluxo de trabalho <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
  Define o nome do trabalho <code>check-bats-version</code> armazenado na seção <code>trabalhos</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configura o trabalho a ser executado em um executor do Ubuntu Linux. Isto significa que o trabalho será executado em uma nova máquina virtual hospedada pelo GitHub. Para obter exemplos de sintaxe usando outros executores, consulte <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  Agrupa todos os passos são executados no trabalho <code>check-bats-version</code>. Cada linha aninhada nesta seção é uma ação separada.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
  A palavra-chave <code>usa</code> diz ao trabalho para recuperar <code>v2</code> da ação da comunidade com o nome <code>actions/checkout@v2</code>. Esta é uma ação que verifica seu repositório e o faz o download do runner, permitindo que você execute ações contra seu código (como, por exemplo, ferramentas de teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório ou você estiver usando uma ação definida no repositório.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v1
  ```
</td>
<td>
  Esta ação instala o pacote do software <code>nó</code> no executor, dando acesso ao comando <code>npm</code>.
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

#### Visualizar o arquivo de fluxo de trabalho

Neste diagrama, você pode ver o arquivo de fluxo de trabalho que acabou de criar e como os componentes de {% data variables.product.prodname_actions %} estão organizados em uma hierarquia. Cada etapa executa uma única ação. As etapas 1 e 2 usam ações de comunidade pré-criadas. Para encontrar mais ações pré-criadas para seus fluxos de trabalho, consulte "[Encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-event.png)


### Visualizar a atividade do trabalho

Assim que seu trabalho começar a funcionar, você pode ver as atividades de cada etapa em {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. No nome do seu repositório, clique em **Ações**. ![Acesse o repositório](/assets/images/help/images/learn-github-actions-repository.png)
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja ver. ![Captura de tela dos resultados do fluxo de trabalho](/assets/images/help/images/learn-github-actions-workflow.png)
1. Em "Execuções do fluxo de trabalho", clique no nome da execução que você deseja ver. ![Captura de tela das execuções do fluxo de trabalho](/assets/images/help/images/learn-github-actions-run.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Clique no nome do trabalho para ver os resultados de cada etapa. ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Clique no nome do trabalho para ver os resultados de cada etapa. ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result.png)
{% endif %}

### Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

### Entrar em contato com o suporte

{% data reusables.github-actions.contacting-support %}
