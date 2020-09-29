---
title: 创建 Redis 服务容器
intro: 您可以使用服务容器在工作流程中创建 Redis 客户端。 本指南举例说明如何为容器中运行或直接在运行器机器上运行的作业创建 Redis 服务。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/creating-redis-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

本指南演示了使用 Docker Hub `redis` 映像配置服务容器的工作流程示例。 工作流程运行脚本来创建 Redis 客户端并使用数据填充客户端。 要测试工作流程是否创建并填充 Redis 客户端，脚本会将客户端数据打印到控制台。

{% data reusables.github-actions.docker-container-os-support %}

### 基本要求

{% data reusables.github-actions.service-container-prereqs %}

你可能还会发现它也有助于基本了解 YAML、{% data variables.product.prodname_actions %} 的语法和 Redis。 更多信息请参阅：

- "[配置工作流程](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)"
- Redis 文档中的“[Redis 使用入门](https://redislabs.com/get-started-with-redis/)”
- "[{% data variables.product.prodname_actions %} 的核心概念](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)"
- "[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"

### 在容器中运行作业

{% data reusables.github-actions.container-jobs-intro %}

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml
name: Redis container example
on: push

jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: redis
          # The default Redis port
          REDIS_PORT: 6379
```
{% endraw %}

#### 配置容器作业

{% data reusables.github-actions.service-container-host %}

{% data reusables.github-actions.redis-label-description %}

```yaml
jobs:
  # Label of the container job
  container-job:
    # Containers must run in Linux based operating systems
    runs-on: ubuntu-latest
    # Docker Hub image that `container-job` executes in
    container: node:10.18-jessie

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
```

#### 配置步骤

{% data reusables.github-actions.service-template-steps %}

```yaml
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: redis
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

Redis 服务的主机名是您在工作流程中配置的标签，本例中为 `redis`。 由于同一用户定义的网桥网络上的 Docker 容器默认打开所有端口，因此您将能够访问默认 Redis 端口 6379 上的服务容器。

### 直接在运行器机器上运行作业

直接在运行器机器上运行作业时，需要将服务容器上的端口映射到 Docker 主机上的端口。 您可以使用 `localhost` 和 Docker 主机端口号从 Docker 主机访问服务容器。

{% data reusables.github-actions.copy-workflow-file %}

{% raw %}
```yaml
name: Redis runner example
on: push

jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379

    steps:
      # Downloads a copy of the code in your repository before running CI tests
      - name: Check out repository code
        uses: actions/checkout@v2

      # Performs a clean installation of all dependencies in the `package.json` file
      # For more information, see https://docs.npmjs.com/cli/ci.html
      - name: Install dependencies
        run: npm ci

      - name: Connect to Redis
        # Runs a script that creates a Redis client, populates
        # the client with data, and retrieves data
        run: node client.js
        # Environment variable used by the `client.js` script to create
        # a new Redis client.
        env:
          # The hostname used to communicate with the Redis service container
          REDIS_HOST: localhost
          # The default Redis port
          REDIS_PORT: 6379
```
{% endraw %}

#### 配置运行器作业

{% data reusables.github-actions.service-container-host-runner %}

{% data reusables.github-actions.redis-label-description %}

工作流程将 Redis 服务容器上的端口 6379 映射到 Docker 主机。 有关 `ports` 关键字的更多信息，请参阅“[关于服务容器](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)”。

```yaml
jobs:
  # Label of the runner job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        # Set health checks to wait until redis has started
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          # Maps port 6379 on service container to the host
          - 6379:6379
```

#### 配置步骤

{% data reusables.github-actions.service-template-steps %}

```yaml
steps:
  # Downloads a copy of the code in your repository before running CI tests
  - name: Check out repository code
    uses: actions/checkout@v2

  # Performs a clean installation of all dependencies in the `package.json` file
  # For more information, see https://docs.npmjs.com/cli/ci.html
  - name: Install dependencies
    run: npm ci

  - name: Connect to Redis
    # Runs a script that creates a Redis client, populates
    # the client with data, and retrieves data
    run: node client.js
    # Environment variable used by the `client.js` script to create
    # a new Redis client.
    env:
      # The hostname used to communicate with the Redis service container
      REDIS_HOST: localhost
      # The default Redis port
      REDIS_PORT: 6379
```

{% data reusables.github-actions.redis-environment-variables %}

{% data reusables.github-actions.service-container-localhost %}

### 测试 Redis 服务容器

您可以使用以下脚本测试工作流程，该脚本将创建 Redis 客户端，并使用某些占位符数据填充客户端。 然后，脚本将存储在 Redis 客户端中的值打印到终端。 您的脚本可以使用任何您喜欢的语言，但此示例使用 Node.js 和 `redis` npm 模块。 更多信息请参阅 [npm redis 模块](https://www.npmjs.com/package/redis)。

您可以修改 *client.js* 以包含工作流程需要的任何 Redis 操作。 在此示例中，脚本创建 Redis 客户端实例、添加占位符数据，然后检索数据。

{% data reusables.github-actions.service-container-add-script %}

```javascript
const redis = require("redis");

// Creates a new Redis client
// If REDIS_HOST is not set, the default host is localhost
// If REDIS_PORT is not set, the default port is 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Sets the key "octocat" to a value of "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Octopus"
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Dinosaur and Octopus"
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// Sets a key to "octocat", field to "species", and "value" to "Cat and Robot"
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// Gets all fields in "species" key

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
```

该脚本使用 `createClient` 方法创建新的 Redis 客户端，接受 `host` 和 `port` 参数。 该脚本使用 `REDIS_HOST` 和 `REDIS_PORT` 环境变量来设置客户端的 IP 地址和端口。 如果未定义 `host` 和 `port`，则默认主机为 `localhost`，默认端口为 6379。

该脚本使用 `set` 和 `hset` 方法，以一些键值、字段和值来填充数据库。 要确认 Redis 客户端是否包含数据，脚本会将数据库的内容打印到控制台日志。

运行此工作流程时，应会在“连接到 Redis”步骤中看到以下输出，确认您创建了 Redis 客户端并添加了数据：

```
Reply: OK
Reply: 1
Reply: 1
Reply: 1  
3 replies:
    0: octocat
    1: dinotocat
    2: robotocat
```
