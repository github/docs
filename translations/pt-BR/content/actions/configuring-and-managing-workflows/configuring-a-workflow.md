---
title: Configuração de um fluxo de trabalho
intro: Você pode criar fluxos de trabalho personalizados para automatizar os processos do ciclo de vida de desenvolvimento de software do seu projeto.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /artigos/criando-a-github-action/
  - /artigos/criando-um-fluxo de trabalho-com-github-actions/
  - /artigos/configuração-a-fluxo de trabalho
  - /github/automating-your-workflow-with-github-actions/configuring-a-workflow
  - /ações/automatizando-seu-fluxo de trabalho-com-github-actions/configurando-um-fluxo de trabalho
  - /ações/criação de fluxos de trabalho/opções de configuração de fluxo de trabalho
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

Pessoas com permissões de gravação ou administração para um repositório podem criar, editar ou visualizar fluxos de trabalho.

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre fluxos de trabalho

Fluxos de trabalho são processos automatizados personalizados que você pode configurar em seu repositório para construir, testar, empacotar, liberar ou implantar qualquer projeto em {% data variables.product.prodname_dotcom %}. Com fluxos de trabalho, você pode automatizar seu ciclo de vida de desenvolvimento de software com uma ampla gama de ferramentas e serviços. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/articles/about-github-actions).".

Você pode criar mais de um fluxo de trabalho em um repositório. Você deve armazenar fluxos de trabalho no `.github/fluxos de trabalho` diretório na raiz do seu repositório.

Os fluxos de trabalho devem ter pelo menos um trabalho, e os trabalhos contêm um conjunto de etapas que executam tarefas individuais. As etapas podem executar comandos ou usar uma ação. Você pode criar suas próprias ações ou usar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %} e personalizá-las conforme necessário.

Você pode configurar um fluxo de trabalho para iniciar quando um evento {% data variables.product.prodname_dotcom %} ocorre, em um cronograma ou a partir de um evento externo.

Você precisa configurar fluxos de trabalho usando a sintaxe YAML e salvá-los como arquivos de fluxo de trabalho em seu repositório. Depois de criar com sucesso um arquivo de fluxo de trabalho YAML e acionar o fluxo de trabalho, você verá os registros de compilação, resultados de testes, artefatos e status para cada etapa do seu fluxo de trabalho. Para obter mais informações, consulte "[Gerenciamento de um fluxo de trabalho](/articles/managing-a-workflow-run)."

 ![Imagem de execução do fluxo de trabalho anotado](/assets/images/help/repository/annotated-workflow.png)

Você também pode receber notificações para atualizações de status do fluxo de trabalho. Para obter mais informações sobre as opções de notificação, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options).".

Os limites de uso se aplicam a fluxos de trabalho individuais. Para obter mais informações, consulte "[Limites de uso para fluxos de trabalho](/articles/workflow-syntax-for-github-actions#usage-limits)."

### Criando um arquivo de fluxo de trabalho

Em um nível alto, essas são as etapas para adicionar um arquivo de fluxo de trabalho. Você pode encontrar exemplos de configuração específicos nas seções seguintes.

1. Na raiz do seu repositório, crie um diretório chamado `.github/fluxos de trabalho` para armazenar seus arquivos de fluxo de trabalho.

1. Em ``.github/fluxos de trabalho, adicione um `.yml` ou `arquivo` .yaml para o seu fluxo de trabalho. Por exemplo, `.github/fluxos de trabalho/continuous-integração-workflow.yml`.

1. Use a sintaxe de referência "[Workflow para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)" para escolher eventos para acionar uma ação, adicionar ações e personalizar seu fluxo de trabalho.

1. Comprometa suas alterações no arquivo de fluxo de trabalho para a filial onde deseja que seu fluxo de trabalho seja executado.

#### Exemplo de arquivo de fluxo de trabalho

{% raw %}
```yaml
nome: Greet Everyone
# Este fluxo de trabalho é acionado em empurrões para o repositório.
on: [push]

jobs:
  build:
    # Nome do trabalho é Greeting
    nome: Greeting
    # This job runs on on Linux
    runs-on: ubuntu-latest
    steps:
      # This step uses GitHub's hello-world-javascript-action: https://github.com/actions/hello-world-javascript-action
      - nome: Olá mundo
        usa: actions/hello-world-javascript-action@v1.1
        com:
          quem cumprimentar: 'Mona, a Octocat'
        id: Olá
      # Esta etapa imprime uma saída (tempo) da ação da etapa anterior.
      - nome: Echo o tempo da saudação
        executado: eco 'A hora era ${{ steps.hello.outputs.time }}.'
```
{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}

### Desencadeando um fluxo de trabalho com eventos

Você pode configurar um fluxo de trabalho para iniciar uma vez:
- Um evento sobre {% data variables.product.prodname_dotcom %} ocorre, como quando alguém empurra um compromisso com um repositório ou quando um problema ou solicitação de puxar é criado.
- Um evento agendado começa.
- Ocorre um evento externo.

Para acionar um fluxo de trabalho após um evento acontecer em {% data variables.product.prodname_dotcom %}, adicione `em:` e um valor de evento após o nome do fluxo de trabalho. Por exemplo, esse fluxo de trabalho é acionado quando as alterações são empurradas para qualquer ramo no repositório.

```yaml
nome: descritivo-workflow-name
em: push
```

Para agendar um fluxo de trabalho, você pode usar a sintaxe de cron POSIX em seu arquivo de fluxo de trabalho. O intervalo mais curto que você pode executar fluxos de trabalho programados é uma vez a cada 5 minutos. Por exemplo, esse fluxo de trabalho é acionado a cada hora.

```yaml
em:
  horário:
    - cron: '0 * * * * * *
```

#### Executando manualmente um fluxo de trabalho

Para executar manualmente um fluxo de trabalho, você deve primeiro configurar seu fluxo de trabalho para usar o `workflow_dispatch` evento. Você pode configurar propriedades de entrada definidas por personalizadas, valores de entrada padrão e entradas necessárias diretamente no seu fluxo de trabalho. Quando o fluxo de trabalho é executado, você pode acessar os valores de entrada no `github.event.inputs` contexto. Para obter mais informações, consulte "[Eventos que desencadeiam fluxos de trabalho](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)" e "[Contexto e sintaxe de expressão para {% data variables.product.prodname_dotcom %} Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).".

Este exemplo define o nome `` e `entradas de` domésticas e as imprime usando os contextos `github.event.inputs.name` e `github.event.inputs.home` . Se um `nome` não for fornecido, o valor padrão 'Mona, o Octocat' será impresso.

{% raw %}
```yaml
nome: Fluxo de trabalho acionado manualmente
em:
  workflow_dispatch: entradas
    :
      nome:
        descrição: 'Pessoa para cumprimentar'
        necessário: verdadeiro
        padrão: 'Mona, o Octocat '
      casa:
        descrição: 'localização'
        necessário: falsos trabalhos de

:
  say_hello:
    run-on: ubuntu-mais recente
    passos:
    - executar: |
        eco "Olá ${{ github.event.inputs.name }}!"
        eco "- em ${{ github.event.inputs.home }}!"
```
{% endraw %}

Você pode acionar o `workflow_dispatch` evento a partir da guia Ações na {% data variables.product.prodname_dotcom %} ou usando a API REST. Para obter mais informações sobre como usar a API REST, consulte o "[Criar um evento de expedição de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)." Ao usar a API REST, você configura as entradas de `` e `ref` como parâmetros do corpo de solicitação. Se as entradas forem omitidas, os valores padrão definidos no arquivo de fluxo de trabalho ão usados.

Para acionar o `workflow_dispatch` evento em {% data variables.product.prodname_dotcom %}, seu fluxo de trabalho deve estar no ramo padrão. Siga estas etapas para acionar manualmente uma execução do fluxo de trabalho.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Na barra lateral esquerda, clique no fluxo de trabalho que deseja executar. ![ações selecionam fluxo de trabalho](/assets/images/actions-select-workflow.png)
1. Acima da lista de execuções de fluxo de trabalho, selecione **Executar**de fluxo de trabalho . ![expedição de fluxo de trabalho ações](/assets/images/actions-workflow-dispatch.png)
1. Selecione o ramo onde o fluxo de trabalho será executado e digite os parâmetros de entrada usados pelo fluxo de trabalho. Clique em **Executar**de fluxo de trabalho . ![ações executar manualmente fluxo de trabalho](/assets/images/actions-manually-run-workflow.png)

#### Desencadeando fluxos de trabalho de eventos externos

Para acionar um fluxo de trabalho após um evento externo ocorrer, você pode invocar um `repository_dispatch` evento webhook chamando o ponto final de API "Criar um evento de despacho de repositório" REST. Para obter mais informações, consulte "[Criar um evento de despacho de repositório](/v3/repos/#create-a-repository-dispatch-event)."

Para obter mais informações e exemplos, consulte "[Eventos que desencadeiam fluxos de trabalho](/articles/events-that-trigger-workflows#webhook-events)."

### Filtragem para ramos, etiquetas e caminhos específicos

Você pode configurar seu fluxo de trabalho para funcionar apenas em determinados ramos.

Por exemplo, esse fluxo de trabalho é executado quando um push que inclui arquivos no `teste` diretório é feito na filial</code> mestre `ou empurra para a tag` `v1.</p>

<pre><code class="yaml">em:
  push:
    filiais:
      - master
    tags:
      - v1
    # file paths a considerar no evento. Opcional; padrão para todos.
    caminhos:
      - 'teste/*'
`</pre>

Para obter mais informações sobre a sintaxe do filtro de ramificação, etiqueta e de caminho, consulte "[`on.<push|pull_request>.<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" e "[`.<push|pull_request>.caminhos`](/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths).".

### Escolhendo um corredor

Você pode executar fluxos de trabalho em corredores hospedados em {% data variables.product.prodname_dotcom %}ou corredores auto-hospedados. Os trabalhos podem ser executados diretamente na máquina ou em um contêiner Docker.

Você pode especificar o corredor para cada trabalho em um fluxo de trabalho usando ``de corridas . Para obter mais informações sobre ``de correções, consulte "[sintaxe do Workflow para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

{% data reusables.actions.enterprise-github-hosted-runners %}

#### Usando um corredor hospedado em {% data variables.product.prodname_dotcom %}

Você pode selecionar entre diferentes tipos e versões de máquinas virtuais de host, incluindo Linux, Windows e macOS. Cada trabalho em um fluxo de trabalho é executado em uma nova instância do ambiente virtual, e as etapas dentro de um trabalho podem compartilhar informações usando o sistema de arquivos. Para obter mais informações, consulte "[ambientes virtuais para corredores hospedados {% data variables.product.prodname_actions %}](/articles/virtual-environments-for-github-actions)."

Por exemplo, você pode usar  `` mais recente do ubuntu para especificar a versão mais recente de um corredor hospedado no Ubuntu {% data variables.product.prodname_dotcom %}.

```yaml
runs-on: ubuntu-latest
```

#### Usando um corredor auto-hospedado

Você pode usar rótulos para direcionar trabalhos para tipos específicos de corredores auto-hospedados. Todos os corredores auto-hospedados recebem o `rótulo de` auto-hospedado e cada corredor auto-hospedado tem rótulos para seu sistema operacional e arquitetura de sistema. Para obter mais informações, consulte "[Usando corredores auto-hospedados em um fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

Por exemplo, se você adicionou um corredor auto-hospedado com um sistema operacional Linux e arquitetura ARM32, você pode selecionar esse corredor usando o</code>auto-hospedado `, <code>`linux e `` rótulos.

```yaml
em funcionamento: [auto-hospedado, linux, ARM32]
```

### Configurando uma matriz de construção

Para testar em vários sistemas operacionais, plataformas e versões de idioma ao mesmo tempo, você pode configurar uma matriz de compilação.

Uma matriz de compilação permite testar seu código com diferentes configurações de software e sistema operacional. Por exemplo, um fluxo de trabalho pode executar um trabalho para mais de uma versão suportada de um idioma, sistema operacional ou ferramenta. Para cada configuração, uma cópia do trabalho é executada e relata um status.

Você pode especificar uma matriz de compilação em seu arquivo de fluxo de trabalho com um array que lista as opções de configuração em `estratégia:`. Por exemplo, esta matriz de compilação executará um trabalho com diferentes versões do Node.js e do Ubuntu, um sistema operacional Linux.

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
estratégia:
  matricial:
    os: [ubuntu-16.04, ubuntu-18.04]
    nó: [6, 8, 10]
```
{% endraw %}

Para obter mais informações, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)."

### Usando a ação de checkout

Existem várias ações padrão que você pode usar em seu fluxo de trabalho. A ação de checkout é uma ação padrão que você deve incluir em seu fluxo de trabalho antes de outras ações quando:
- Seu fluxo de trabalho requer uma cópia do código do seu repositório, como quando você está construindo e testando seu repositório ou usando integração contínua.
- Há pelo menos uma ação em seu fluxo de trabalho que é definida no mesmo repositório. Para obter mais informações, consulte "[Referenciando ações em seu fluxo de trabalho](#referencing-actions-in-your-workflow)."

Para usar a ação padrão de checkout sem especificações adicionais, inclua esta etapa:
```yaml
- usos: ações/checkout@v2
```
O uso `` v2 neste exemplo garante que você esteja usando uma versão estável da ação de checkout. Para obter mais informações, consulte [a ação de checkout](https://github.com/actions/checkout).

### Escolher o tipo de ações para o seu fluxo de trabalho

Existem diferentes tipos de ações que você pode usar em seu fluxo de trabalho para atender às necessidades do seu projeto:
- Ações de contêiner docker
- Ações JavaScript
- Ações de etapas de execução composta

Para obter mais informações, consulte "[Sobre ações](/articles/about-actions#types-of-actions).".

Ao escolher o tipo de ações para usar em seu fluxo de trabalho, recomendamos explorar ações existentes em repositórios públicos ou no hub Docker e potencialmente personalizar essas ações para o seu projeto.

Você pode navegar e usar ações construídas por {% data variables.product.prodname_dotcom %} na organização [github.com/actions](https://github.com/actions) . Para visitar o Docker Hub, consulte "[Docker Hub](https://www.docker.com/products/docker-hub)" no site do Docker.

### Referenciando ações em seu fluxo de trabalho

Para referenciar ações em seu arquivo de fluxo de trabalho com a sintaxe correta, você deve considerar onde a ação é definida.

Os fluxos de trabalho podem usar ações definidas em:
- Um repositório público
- O mesmo repositório onde seu arquivo de fluxo de trabalho faz referência às ações
- Uma imagem publicada do contêiner Docker no Docker Hub

Para usar uma ação definida em um repositório privado, tanto o arquivo de fluxo de trabalho quanto a ação devem estar no mesmo repositório. Seu fluxo de trabalho não pode usar ações definidas em outros repositórios privados, mesmo que o outro repositório privado esteja na mesma organização.

Para manter seu fluxo de trabalho estável mesmo quando as atualizações são feitas em uma ação, você pode fazer referência à versão da ação que está usando especificando um ref Git ou número de tag Docker em seu arquivo de fluxo de trabalho. Por exemplo, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.dependabot.version-updates-for-actions %}
{% endif %}

Para obter opções de configuração mais detalhadas, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

#### Referenciando uma ação de um repositório público

Se uma ação for definida em um repositório público, você deve fazer referência à ação usando a sintaxe `{owner}/{repo}@{ref}` ou `{owner}/{repo}/{path}@{ref}`.

```yaml

  my_first_job: nome
    : Meu Nome do Trabalho
      etapas:
        - usos: ações/node@v1
          de configuração com:
            versão de nó: 10.x
```

Para ver um exemplo completo de fluxo de trabalho, consulte o [doído de configuração](https://github.com/actions/setup-node) repositório de modelo.

#### Referenciando uma ação no mesmo repositório onde um arquivo de fluxo de trabalho usa a ação

Se uma ação for definida no mesmo repositório onde seu arquivo de fluxo de trabalho usa a ação, você pode referenciar a ação com o`{owner}/{repo}@{ref}` ou `./path/to/dir` sintaxe no seu arquivo de fluxo de trabalho.

Estrutura de arquivos do repositório de exemplo:

```
|-- Hello-world (repositório)
|   |__ .github
|       fluxos de trabalho └sadessa
|           └➤➤ my-first-workflow.yml
|       ações └➤➤
|           |__ Hello-world-action
|               └➤➤ ação.yml
```

Arquivo de fluxo de trabalho de exemplo:

```yaml
empregos:
  construir:
    runs-on: ubuntu-latest
    passos:
      # Esta etapa confere uma cópia do seu repositório.
      - usa: ações/checkout@v2
      # Esta etapa faz referência ao diretório que contém a ação.
      - usa: ./.github/actions/hello-world-action
```

#### Referenciando um contêiner no Docker Hub

Se uma ação for definida em uma imagem de contêiner Docker publicada no Docker Hub, você deve fazer referência à ação com o `docker://{image}:{tag}` sintaxe em seu arquivo de fluxo de trabalho. Para proteger seu código e dados, recomendamos fortemente que verifique a integridade da imagem do contêiner Docker do Docker Hub antes de usá-la em seu fluxo de trabalho.

```yaml
empregos:
  my_first_job:
    passos:
      - nome: Meu primeiro passo
        usa: docker://alpine:3.8
```

Para alguns exemplos de ações do Docker, consulte o fluxo de trabalho [Docker-image.yml](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml) e "[Criando uma ação de contêiner Docker](/articles/creating-a-docker-container-action)."

Para obter mais informações, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)."

### Adicionando um crachá de status do fluxo de trabalho ao seu repositório

{% data reusables.repositories.actions-workflow-status-badge-into %}

Se o seu fluxo de trabalho usar o nome `` palavra-chave, você deve fazer referência ao fluxo de trabalho pelo nome. Se o nome do seu fluxo de trabalho contiver espaço branco, você precisará substituir o espaço pela sequência codificada por URL `%20`. Para obter mais informações sobre o nome `` palavra-chave, consulte "[sintaxe do Fluxo de Trabalho para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)."

```
https://github.com/<OWNER>/<REPOSITORY>/fluxos de trabalho/<WORKFLOW_NAME>/badge.svg
```

Alternativamente, se o seu fluxo de trabalho não tiver um nome ``, você deve fazer referência ao arquivo de fluxo de trabalho usando o caminho do arquivo em relação ao diretório raiz do repositório.

{% note %}

**Nota:** Fazer referência ao arquivo de fluxo de trabalho usando o caminho do arquivo não funciona se o fluxo de trabalho tiver um nome ``.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/fluxos de trabalho/<WORKFLOW_FILE_PATH>/badge.svg
```

#### Exemplo usando um nome de fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o nome "Cumprimente a Todos". O</code> proprietário `do repositório é a <code>ações` organização e o nome</code> repositório `é <code>`hello-world .

```
! [nome do fluxo de trabalho de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

#### Exemplo usando um caminho de arquivo de fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O</code> proprietário `do repositório é a <code>ações` organização e o nome</code> repositório `é <code>`hello-world .

```
! [exemplo caminho do arquivo de fluxo de trabalho] (https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

#### Exemplo usando o parâmetro</code> do ramo `</h4>

<p spaces-before="0">Este exemplo de Markdown adiciona um crachá de status para uma filial com o nome <code>recurso-1`.</p>

```
! [parâmetro de ramo de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

#### Exemplo usando o parâmetro `` de eventos

Este exemplo de Markdown adiciona um crachá que exibe o status das corridas de fluxo de trabalho desencadeadas pelo `pull_request` evento.

```
! [parâmetro de evento de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[gestão de faturamento para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
