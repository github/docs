---
title: Criar uma ação de contêiner Docker
intro: 'Este guia apresenta as etapas mínimas exigidas para criar uma ação de contêiner Docker.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'Desenvolvimento da ação'
  - 'Docker'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Neste guia, você aprenderá os componentes básicos necessários para criar e usar uma ação do contêiner Docker empacotado. Para manter o foco deste guia nos componentes necessários para empacotar a ação, a funcionalidade do código da ação é mínima. A ação imprime "Olá, mundo" nos registros ou "Olá, [who-to-greet]", se você fornecer um nome personalizado.

Ao terminar esse projeto, você entenderá como criar sua própria ação de contêiner Docker e poderá testá-la em um fluxo de trabalho.

{% data reusables.github-actions.self-hosted-runner-reqs-docker %}

### Pré-requisitos

Pode ser útil ter um entendimento básico das variáveis do ambiente {% data variables.product.prodname_actions %} e do sistema de arquivo do contêiner Docker:

- "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
- [Ambientes virtuais para o {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners#docker-container-filesystem)

Antes de começar, você precisa criar um repositório GitHub.

1. Crie um repositório novo no {% data variables.product.product_location %}. Você pode escolher qualquer nome para o repositório ou usar "hello-world-docker-action", como nesse exemplo. Para obter mais informações, consulte "[Criar um repositório novo](/articles/creating-a-new-repository)".

1. Clone o repositório para seu computador. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

1. No seu terminal, mude os diretórios para seu novo repositório.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

### Criar um arquivo Docker

Em seu novo diretório `hello-world-docker-action`, crie um arquivo `Dockerfile`. Para obter mais informações, consulte "[Suporte do arquivo Docker para {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions)".

**arquivo Docker**
```dockerfile{:copy}
# Imagem de contêiner que executa seu código
FROM alpine:3.10

# Copia o arquivo de código do repositório de ação para o caminho do sistema de arquivos `/` do contêiner
COPY entrypoint.sh /entrypoint.sh

# Arquivo de código a ser executado quando o contêiner do docker é iniciado (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

### Criar um arquivo de metadados de ação

Crie um novo arquivo `action.yml` no diretório `hello-world-docker-action` que você criou acima. Para obter mais informações, consulte "[Sintaxe dos metadados para {% data variables.product.prodname_actions %}}](/actions/creating-actions/metadata-syntax-for-github-actions)."

{% raw %}
**action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Esses metadados definem uma entrada `who-to-greet` e um parâmetro de saída `time`. Para introduzir as entradas no contêiner Docker, você deve declarar a entrada usando `inputs` (entradas) e introduzir a entrada na palavra-chave `args`.

O {% data variables.product.prodname_dotcom %} criará uma imagem a partir do seu `Dockerfile` e executará os comandos em um novo contêiner usando essa imagem.

### Gravar um código de ação

Você pode escolher qualquer imagem Docker de base e, portanto, qualquer linguagem para sua ação. O exemplo de script de shell a seguir usa a variável de entrada `who-to-greet` para imprimir "Hello [who-to-greet]" no arquivo de log.

Na sequência, o script obtém a hora atual e a configura como uma variável de saída que pode ser usada pelas ações executadas posteriormente em um trabalho. Para que {% data variables.product.prodname_dotcom %} reconheça as variáveis de saída, você deverá usar um comando do fluxo de trabalho em uma sintaxe específica: `echo "::set-output name=<output name>::<value>"`. Para obter mais informações, consulte "[Comandos do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)".

1. Crie um novo arquivo `entrypoint.sh` no diretório `hello-world-docker-action`.

1. Adicione o código a seguir ao arquivo `entrypoint.sh`.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Se `entrypoint.sh` for executado sem qualquer erro, o status da ação será definido como `success`. Você também pode definir explicitamente códigos de saída no código de ação para fornecer o status de uma ação. Para obter mais informações, consulte "[Definindo os códigos de saída para as ações](/actions/creating-actions/setting-exit-codes-for-actions)".

1. Torne seu arquivo executável `entrypoint.sh` executando o seguinte comando no seu sistema.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

### Criar LEIAME

Para que as pessoas saibam como usar sua ação, você pode criar um arquivo LEIAME. Um arquivo LEIAME é útil quando você planeja compartilhar publicamente sua ação, mas também é uma ótima maneira de lembrá-lo ou sua equipe sobre como usar a ação.

No diretório `hello-world-docker-action`, crie um arquivo `README.md` que especifica as seguintes informações:

- Descrição detalhada do que a ação faz;
- Argumentos obrigatórios de entrada e saída;
- Argumentos opcionais de entrada e saída;
- Segredos usados pela ação;
- Variáveis de ambiente usadas pela ação;
- Um exemplo de uso da ação no fluxo de trabalho.

**README.md**
```markdown{:copy}
# Hello world docker action

Esta ação imprime "Hello World" ou "Hello" + o nome de uma pessoa a ser cumprimentada no log.

## Inputs

### `who-to-greet`

**Obrigatório** O nome da pessoa a quem cumprimentar. Padrão `"World"`.

## Outputs

### `time`

Horário que cumprimentamos você.

## Exemplo de uso

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

### Commit, tag e push de ação para o GitHub

A partir do seu terminal, faça commit dos arquivos `action.yml`, `entrypoint.sh`, `Dockerfile` e `README.md`.

Adicionar uma tag da versão para versões da sua ação é considerada uma prática recomendada. Para obter mais informações sobre versões da sua ação, consulte "[Sobre ações](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)".

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "Minha primeira ação está pronta"
git tag -a -m "Versão da minha primeira ação" v1
git push --follow-tags
```

### Testar sua ação em um fluxo de trabalho

Agora você está pronto para testar sua ação em um fluxo de trabalho. Quando uma ação está em um repositório privado, a ação somente pode ser usada em fluxos de trabalho no mesmo repositório. Ações públicas podem ser usadas por fluxos de trabalho em qualquer repositório.

{% data reusables.actions.enterprise-marketplace-actions %}

#### Exemplo usando uma ação pública

O código do fluxo de trabalho a seguir usa a ação completa _hello world_ no repositório público [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Copie o exemplo de código de fluxo de trabalho a seguir em um arquivo `.github/workflows/main.yml`, mas substitua `actions/hello-world-docker-action` pelo nome de seu repositório e ação. Você também pode substituir a entrada `who-to-greet` pelo seu nome. {% if currentVersion == "free-pro-team@latest" %}As ações públicas podem ser usadas mesmo se não forem publicadas em {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "[Publicar uma ação](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)". {% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
    - name: Hello world action step
      id: hello
      uses: actions/hello-world-docker-action@v1
      with:
        who-to-greet: 'Mona the Octocat'
    # Use the output from the `hello` step
    - name: Get the output time
      run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

#### Exemplo usando uma ação privada

Copie o seguinte exemplo de código de fluxo de trabalho em um arquivo `.github/workflows/main.yml` no repositório da ação. Você também pode substituir a entrada `who-to-greet` pelo seu nome. {% if currentVersion == "free-pro-team@latest" %}Esta ação privada não pode ser publicada em {% data variables.product.prodname_marketplace %}, e só pode ser usada neste repositório.{% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
em: [push]

trabalhos:
  hello_world_job:
    runs-on: ubuntu-latest
    nome: Um trabalho para dizer "Olá"
    etapas:
      # Para usar a ação privada desse repositório,
      # você deve verificar o repositório
      - nome: Checkout
        usa: actions/checkout@v2
      - nome: Etapa da ação "Olá, mundo"
        usa: ./ # Usa uma ação no diretório-raiz
        id: olá
        com:
          who-to-greet: 'Mona the Octocat'
      # Usa a saída da etapa `hello`
      - nome: Obtém o tempo de saída
        executar: echo "O tempo foi ${{ steps.hello.outputs.time }}"
```
{% endraw %}

No seu repositório, clique na aba **Ações** e selecione a última execução do fluxo de trabalho. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Em **Trabalhos** ou no gráfico de visualização, clique em **A job to say hello**. {% endif %}Você deverá ver "Hello Mona the Octocat" ou o nome que você usou como entrada em `who-to-greet` e o horário impresso no log.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![Uma captura de tela de sua ação em um fluxo de trabalho](/assets/images/help/repository/docker-action-workflow-run-updated.png)
{% else %}
![Uma captura de tela de sua ação em um fluxo de trabalho](/assets/images/help/repository/docker-action-workflow-run.png)
{% endif %}
