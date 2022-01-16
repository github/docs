---
title: Entendendo o GitHub Actions
shortTitle: Entendendo o GitHub Actions
intro: 'Aprenda o básico de {% data variables.product.prodname_actions %}, incluindo conceitos fundamentais e terminologia essencial.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

{% data reusables.actions.about-actions %}  É possível criar fluxos de trabalho que criam e testam cada pull request no seu repositório, ou implantar pull requests mesclados em produção.

{% data variables.product.prodname_actions %} vai além de apenas DevOps e permite que você execute fluxos de trabalho quando outros eventos ocorrerem no seu repositório. Por exemplo, você pode executar um fluxo de trabalho para adicionar automaticamente as etiquetas apropriadas sempre que alguém cria um novo problema no repositório.

{% data variables.product.prodname_dotcom %} fornece máquinas virtuais do Linux, Windows e macOS para executar seus fluxos de trabalho, ou você pode hospedar seus próprios executores auto-hospedados na sua própria infraestrutura de dados ou na nuvem.

## Componentes de {% data variables.product.prodname_actions %}

É possível configurar um {% data variables.product.prodname_actions %} _fluxo de trabalho_ para ser acionado quando um _evento_ ocorre no repositório como, por exemplo, um pull request sendo aberto ou um problema sendo criado.  O seu fluxo de trabalho contém um ou mais _trabalhos_ que podem ser executados em ordem sequencial ou em paralelo.  Cada trabalho será executado dentro do _executor_ da sua própria máquina virtual ou dentro de um contêiner, e conta com uma mais _etapas_ que executa um script que você define ou executa uma ação __, que é uma extensão reutilizável que pode simplificar o seu fluxo de trabalho.

![Visão geral do fluxo de trabalho](/assets/images/help/images/overview-actions-simple.png)

### Fluxos de trabalho

Um fluxo de trabalho é um processo automatizado configurável que executa um ou mais trabalhos.  Os fluxos de trabalho são definidos por um arquivo YAML verificado no seu repositório e será executado quando acionado por um evento no repositório, ou eles podem ser acionados manualmente ou de acordo com um cronograma definido.

O seu repositório pode ter vários fluxos de trabalho em um repositório, cada um dos quais pode executar um conjunto diferente de etapas.  Por exemplo, você pode ter um fluxo de trabalho para criar e testar pull requests, outro fluxo de trabalho para implantar seu aplicativo toda vez que uma versão for criada, e outro fluxo de trabalho que adiciona uma etiqueta toda vez que alguém abre um novo problema.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Você pode consultar um fluxo de trabalho dentro de outro fluxo de trabalho. Consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)"{% endif %}

### Eventos

Um evento é uma atividade específica em um repositório que aciona a execução de um fluxo de trabalho. Por exemplo, a atividade pode originar-se de {% data variables.product.prodname_dotcom %} quando alguém cria uma solicitação de pull request, abre um problema ou faz envio por push de um commit para um repositório.  Você também pode acionar a execução de um fluxo de trabalho em um cronograma, em [postando em uma API REST](/rest/reference/repos#create-a-repository-dispatch-event), ou manualmente.

Para obter uma lista completa de eventos que podem ser usados para acionar fluxos de trabalho, consulte [Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows).

### Trabalhos

Um trabalho é um conjunto de _etapas_ em um fluxo de trabalho que é executado no mesmo executor.  Cada etapa é um script do shell que será executado, ou uma _ação_ que será executada.  As etapas são executadas em ordem e dependem uma da outra.  Uma vez que cada etapa é executada no mesmo executor, você pode compartilhar dados de um passo para outro.  Por exemplo, você pode ter uma etapa que compila a sua aplicação seguida de uma etapa que testa ao aplicativo criado.

Você pode configurar as dependências de um trabalho com outros trabalhos; por padrão, os trabalhos não têm dependências e são executados em paralelo um com o outro.  Quando um trabalho leva uma dependência de outro trabalho, ele irá aguardar que o trabalho depeendente seja concluído antes que possa executar.  Por exemplo, você pode ter vários trabalhos de criação para diferentes arquiteturas que não têm dependências, e um trabalho de pacotes que depende desses trabalhos.  Os trabalhos de criação serão executados em paralelo e, quando todos forem concluídos com sucesso, o trabalho de empacotamento será executado.

### Ações

Uma _ação_ é uma aplicativo personalizado para a plataforma de {% data variables.product.prodname_actions %} que executa uma tarefa complexa, mas frequentemente repetida.  Use uma ação para ajudar a reduzir a quantidade de código repetitivo que você grava nos seus arquivos de fluxo de trabalho.  Uma ação pode extrair o seu repositório git de {% data variables.product.prodname_dotcom %}, configurar a cadeia de ferramentas correta para seu ambiente de criação ou configurar a autenticação para seu provedor de nuvem.

Você pode gravar suas próprias ações, ou você pode encontrar ações para usar nos seus fluxos de trabalho em {% data variables.product.prodname_marketplace %}.

### Executores

{% data reusables.actions.about-runners %} Cada executor pode executar uma tarefa por vez. {% ifversion ghes or ghae %} Você deve hospedar seus próprios executores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} fornece executores para Ubuntu Linux, Microsoft Windows e macOS para executar seus fluxos de trabalho. Cada fluxo de trabalho é executado em uma nova máquina virtual provisionada. Se você precisar de um sistema operacional diferente ou precisar de uma configuração de hardware específica, você poderá hospedar seus próprios executores.{% endif %} Para mais informações{% ifversion fpt or ghec %} sobre executores auto-hospedados{% endif %}, consulte "[Hospedando os seus próprios executores](/actions/hosting-your-own-runners)"

## Criar um exemplo de fluxo de trabalho

{% data variables.product.prodname_actions %} usa a sintaxe do YAML para definir o fluxo de trabalho.  Cada fluxo de trabalho é armazenado como um arquivo YAML separado no seu repositório de código, em um diretório denominado `.github/workflows`.

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
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. Faça commit dessas alterações e faça push para o seu repositório do {% data variables.product.prodname_dotcom %}.

Seu novo arquivo de fluxo de trabalho de {% data variables.product.prodname_actions %} agora está instalado no seu repositório e será executado automaticamente toda vez que alguém fizer push de uma alteração no repositório. Para obter detalhes sobre o histórico de execução de um trabalho, consulte "[Visualizar a atividade do fluxo de trabalho](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)".

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
Especifica o gatilho para este fluxo de trabalho. Este exemplo usa o evento <code>push</code> para que a execução de um fluxo de trabalho seja acionada toda vez que alguém fizer push de uma alteração no repositório ou merge de um pull request.  Isso é acionado por um push para cada branch. Para obter exemplos de sintaxe executados apenas em pushes para branches, caminhos ou tags específicos, consulte <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">"Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}.</a>
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
  Configura o trabalho a ser executado na versão mais recente de um executor do Linux do Ubuntu. Isto significa que o trabalho será executado em uma nova máquina virtual hospedada pelo GitHub. Para obter exemplos de sintaxe usando outros executores, consulte <a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">"Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}."</a>
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
      - uses: actions/checkout@v2
  ```
</td>
<td>
A palavra-chave <code>usa</code> especifica que esta etapa irá executar <code>v2</code> da ação <code>actions/checkout</code>.  Esta é uma ação que faz o check-out do seu repositório para o executor, permitindo que você execute scripts ou outras ações com base no seu código (como ferramentas de compilação e teste). Você deve usar a ação de checkout sempre que o fluxo de trabalho for executado no código do repositório.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  Essa etapa usa a ação <code>actions/setup-node@v2</code> para instalar a versão especificada do Node.js (esse exemplo usa a v14). Isso coloca os dois comandos <code>nó</code> e <code>npm</code> no seu <code>PATH</code>.
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

## Visualizando a atividade do fluxo de trabalho

Assim que o seu fluxo de trabalhocomeçar a ser executado, você poderá {% ifversion fpt or ghes > 3.0 or ghae or ghec %}visualizar um gráfico de visualização do progresso da execução e {% endif %}visualizar a atividade de cada etapa em {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. No nome do seu repositório, clique em **Ações**. ![Acesse o repositório](/assets/images/help/images/learn-github-actions-repository.png)
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja ver. ![Captura de tela dos resultados do fluxo de trabalho](/assets/images/help/images/learn-github-actions-workflow.png)
1. Em "Execuções do fluxo de trabalho", clique no nome da execução que você deseja ver. ![Captura de tela das execuções do fluxo de trabalho](/assets/images/help/images/learn-github-actions-run.png)
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. Em **Trabalhos** ou no gráfico de visualização, clique no trabalho que você deseja ver. ![Selecionar trabalho](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. Visualizar os resultados de cada etapa. ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif ghes %}
1. Clique no nome do trabalho para ver os resultados de cada etapa. ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. Clique no nome do trabalho para ver os resultados de cada etapa. ![Captura de tela dos detalhes de execução do fluxo de trabalho](/assets/images/help/images/overview-actions-result.png)
{% endif %}

## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Encontrar e personalizar ações](/actions/learn-github-actions/finding-and-customizing-actions)".

{% ifversion fpt or ghec or ghes %}

Para entender como a cobrança funciona para {% data variables.product.prodname_actions %}, consulte "[Sobre cobrança para {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## Entrar em contato com o suporte

{% data reusables.github-actions.contacting-support %}
