---
title: Criar contêineres de serviço Redis
shortTitle: Contêineres de serviço do Redis
intro: Você pode usar os contêineres de serviço para criar um cliente Redis no seu fluxo de trabalho. Este guia mostra exemplos de criação de serviço Redis para trabalhos executados em contêineres ou diretamente na máquina executora.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
  - /actions/configuring-and-managing-workflows/creating-redis-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Contêineres'
  - 'Docker'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

Este guia mostra os exemplos do seu fluxo de trabalho que configuram um contêiner de serviço usando a imagem `redis` do Docker Hub. O fluxo de trabalho executa um script para criar um cliente Redis e preencher os dados do cliente. Para testar se o fluxo de trabalho cria e preenche o cliente Redis, o script imprime os dados do cliente no console.

{% data reusables.github-actions.docker-container-os-support %}

### Pré-requisitos

{% data reusables.github-actions.service-container-prereqs %}

Também pode ser útil ter um entendimento básico de YAML, a sintaxe para {% data variables.product.prodname_actions %} e Redis. Para obter mais informações, consulte:

- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Introdução ao Redis](https://redislabs.com/get-started-with-redis/)" na documentação do Redis

### Executar trabalhos em contêineres

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
nome: exemplo do contêiner Redis
em: push

trabalhos:
  # Etiqueta do trabalho do contêiner
  container-job:
    # Os contêineres devem ser executados em sistemas operacionais baseados no Linux
    runs-on: ubuntu-latest
    # Imagem do Docker Hub em que o `container-job` é executado
    contêiner: node:10.18-jessie

    # Contêineres de serviço a serem executados com `container-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hub
        imagem: redis
        # Define verificações gerais até a inicialização do redis
        opções: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    etapas:
      # Faz o download de uma cópia do código no seu repositório antes de executar os testes de CI
      - nome: Verifica o código do repositório
        usa: actions/checkout@v2

      # Realiza uma instalação limpa de todas as dependências no arquivo `package.json`
      # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
      - nome: Instalar dependências
        executar: npm ci

      - nome: Conectar-se ao Redis
        # Executa um script que cria um cliente Redis, preenche
        # os dados do cliente e recupera dados
        executar: node client.js
        # Variável do ambiente usada pelo script `client.js` para criar um novo Redis.
        env:
          # O nome do host usado para comunicar-se com o contêiner de serviço do Redis
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```
{% endraw %}

#### Configurar o trabalho do contêiner

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.redis-label-description %}

```yaml{:copy}
trabalhos:
  # Etiqueta do trabalho do contêiner
  container-job:
    # Os contêineres devem ser executados em sistemas operacionais baseados no Linux
    runs-on: ubuntu-latest
    # Imagem do Docker Hub em que o `container-job` é executado
    contêiner: node:10.18-jessie

    # Contêineres de serviço a serem executados com `container-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hub
        imagem: redis
        # Define verificações gerais até a inicialização do redis
        opções: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### Configurar as etapas

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
etapas:
  # Faz o download de uma cópia do código no seu repositório antes de executar testes de CI
  - nome: Verifica o código do repositório
    usa: actions/checkout@v2

  # Realiza uma instalação limpa de todas as dependências do arquivo `package.json`
  # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
  - nome: Instalar dependências
    executar: npm ci

  - nome: Conectar-se ao Redis
    # Executa um script que cria um cliente Redis client, preenche
    # os dados do cliente e recupera dados
    executar: node client.js
    # Variável do ambiente usada pelo script `client.js` para criar um novo cliente Redis.
    env:
      # O nome do host usado para comunicar-se com o contêiner de serviço do Redis
      REDIS_HOST: redis
      # A porta-padrão do Redis
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

O nome do host do serviço Redis é a etiqueta que você configurou no seu fluxo de trabalho, nesse caso `redis`. Uma vez que os contêineres do Docker na mesma rede da ponte definida pelo usuário abrem todas as portas por padrão, você poderá acessar o contêiner de serviço na porta-padrão 6379 do Redis.

### Executar trabalhos diretamente na máquina executora

Ao executar um trabalho diretamente na máquina executora, você deverá mapear as portas no contêiner de serviço com as portas no host do Docker. Você pode acessar os contêineres de serviço do host do Docker usando `localhost` e o número da porta do host do Docker.

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml{:copy}
nome: Exemplo do executor do Redis
em: push

trabalhos:
  # Etiqueta do trabalho executor
  runner-job:
    # Você deve usar um ambiente do Linux ao usar contêineres de serviço ou trabalhos de contêiner
    runs-on: ubuntu-latest

    # Contêineres de serviço a serem executados com `runner-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hub
        imagem: redis
        # Define verificações gerais até a inicialização do redis
        opções: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        portas:
          # Mapeia a porta port 6379 no contêiner de serviço com o host
          - 6379:6379

    etapas:
      # Faz um download de uma cópia do código no seu repositório antes de executar testes de CI
      - nome: Verifica o código do repositório
        usa: actions/checkout@v2

      # Realiza uma instalação limpa de todas as dependências no arquivo `package.json`
      # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
      - nome: Instalar dependências
        executar: npm ci

      - nome: Conectar-se ao Redis
        # Executa um script que cria um cliente Redis, preenche
        # os dados do cliente e recupera dados
        executar: node client.js
        # Variável do ambiente usada pelo script `client.js` para criar
        # um novo cliente Redis.
        env:
          # O nome do host usado para comunicar-se com o contêiner de serviço Reds
          REDIS_HOST: localhost
          # A porta-padrão do Redis
          REDIS_PORT: 6379
```
{% endraw %}

#### Configurar o trabalho executor

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.redis-label-description %}

O fluxo de trabalho mapeia a porta 6379 no contêiner de serviço do Redis com o host do Docker. Para obter mais informações sobre a palavra-chave `portas`, consulte "[Sobre contêineres de serviço](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

```yaml{:copy}
trabalhos:
  # Etiqueta do trabalho executor
  runner-job:
    # Você deve usar um ambiente do Linux ao usar contêineres de serviço ou trabalhos de contêiner
    runs-on: ubuntu-latest

    # Contêineres de serviço a serem executados com `runner-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hub
        imagem: redis
        # Define as verificações gerais até a inicialização do redis
        opções: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        portas:
          # Mapeia a porta 6379 no contêiner de serviço com o host
          - 6379:6379
```

#### Configurar as etapas

{% data reusables.github-actions.service-template-steps %}

```yaml{:copy}
etapas:
  # Faz o download de uma cópia do código no seu repositório antes de executar os testes de CI
  - nome: Verifica o código do repositório
    usa: actions/checkout@v2

  # Realiza uma instalação limpa de todas as dependências no arquivo `package.json`
  # Para obter mais informações, consulte https://docs.npmjs.com/cli/ci.html
  - nome: Instalar dependências
    executar: npm ci

  - nome: Conectar-se ao Redis
    # Executa um script que cria um cliente Redis, preenche
    # os dados do cliente e recupera os dados
    executar: node client.js
    # Variável do ambiente usada pelo script `client.js` para criar
    # um novo cliente Redis.
    env:
      # O nome do host usado para comunicar-se com o contêiner de serviço Redis
      REDIS_HOST: localhost
      # A porta-padrão Redis
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### Testar o contêiner de serviço Redis

Você pode testar o seu fluxo de trabalho usando o script a seguir, que cria um cliente Redis e adiciona uma tabela com alguns dados com espaços reservados. Em seguida, o script imprime no terminal os valores armazenados no cliente Redis. O seu script pode usar qualquer linguagem que você desejar, mas este exemplo usa Node.js e o módulo npm `redis`. Para obter mais informações, consulte o [módulo redis npm](https://www.npmjs.com/package/redis).

Você pode modificar o *client.js* para incluir qualquer operação necessária para o seu fluxo de trabalho. Neste exemplo, o script cria a instância do cliente Redis, cria uma tabela, adiciona dados de espaços reservados e, em seguida, recupera os dados.

{% data reusables.github-actions.service-container-add-script %}

```javascript{:copy}
const redis = require("redis");

// Cria um novo cliente Redis
// Se REDIS_HOST não for definido, o host-padrão será localhost
// Se REDIS_PORT não for definido, a porta-padrão será 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Define a chave "octocat" como um valor de "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Define uma chave como "octocat", campo de "species", e "value" como "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Define uma chave como "octocat", campo de "species", e "value" como "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Define uma chave como "octocat", campo de "species", e "value" como "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Obtém todos os campos na chave "species"

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

O script cria um novo cliente Redis, usando o método `createClient`, que aceita um `host` e um parâmetro da `porta`. O script usa as variáveis do ambiente `REDIS_HOST` e `REDIS_PORT` para definir o endereço IP e a porta do cliente. Se o `host` e a `porta` não forem definidos, o host-padrão será `localhost` e a porta-padrão será 6379.

O script usa os métodos `set` e `hset` para preencher o banco de dados com algumas chaves, campos e valores. Para confirmar se o cliente Redis contém os dados, o script imprime o conteúdo do banco de dados no registro do console.

Ao executar este fluxo de trabalho, você deve ver a saída a seguir na etapa "Conectar-se ao Redis", confirmando que você criou o cliente Redis e adicionou os dados:

```
Resposta: OK
Resposta: 1
Resposta: 1
Resposta: 1  
3 respostas:
    0: octocat
    1: dinotocat
    2: robotocat
```
