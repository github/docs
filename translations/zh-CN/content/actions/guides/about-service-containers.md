---
title: 关于服务容器
intro: 您可以使用服务容器将数据库、网络服务、内存缓存及其他工具连接到您的工作流程。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - Containers
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于服务容器

服务容器是 Docker 容器，以简便、可携带的方式托管您可能需要在工作流程中测试或操作应用程序的服务。 例如，您的工作流程可能必须运行需要访问数据库和内存缓存的集成测试。

您可以为工作流程中的每个作业配置服务容器。 {% data variables.product.prodname_dotcom %} 为工作流中配置的每个服务创建一个新的 Docker 容器，并在作业完成后销毁该服务容器。 作业中的步骤可与属于同一作业的所有服务容器通信。

{% data reusables.github-actions.docker-container-os-support %}

### 与服务容器通信

您可以在工作流程中配置作业直接在运行器机器或 Docker 容器上运行。 作业与其服务容器之间的通信根据作业是直接在运行器上运行还是在容器中运行而有所不同。

#### 在容器中运行作业

在容器中运行作业时，{% data variables.product.prodname_dotcom %} 使用 Docker 的用户定义桥接网络将服务容器连接到作业。 更多信息请参阅 Docker 文档中的“[使用桥接网络](https://docs.docker.com/network/bridge/)”。

在容器中运行作业和服务可简化网络访问。 您可以使用工作流程中配置的标签访问服务容器。 服务容器的主机名自动映射到标签名称。 例如，如果您创建带有标签 `redis` 的服务容器 ，则该服务容器的主机名是 `redis`。

您无需为服务容器配置任何端口。 默认情况下，属于同一 Docker 网络的所有容器会相互显示所有端口，但在 Docker 网络外部不会显示任何端口。

#### 在运行器机器上运行作业

直接在运行器机器上运行作业时，您可以使用 `localhost:<port>` 或 `127.0.0.1:<port>` 访问服务容器。 {% data variables.product.prodname_dotcom %} 配置容器网络以启用从服务容器到 Docker 主机的通信。

当作业直接在运行器机器上运行时， Docker 容器中运行的服务默认情况下不会向运行器上的作业显示其端口。 您需要将服务容器上的端口映射到 Docker 主机。 更多信息请参阅“[映射 Docker 主机和服务容器端口](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)”。

### 创建服务容器

您可以使用 `services` 关键字创建服务容器作为工作流程中作业的一部分。 更多信息请参阅 [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)。

本例在作业 `container-job` 中创建一个名为 `redis` 的服务。 本例中的 Docker 主机是 `node:10.18-jessie` 容器。

{% raw %}
```yaml{:copy}
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
```
{% endraw %}

### 映射 Docker 主机和服务容器端口

如果作业在 Docker 容器中运行，则不需要映射主机或服务容器上的端口。 如果作业直接在运行器机器上运行，则需要将任何必需的服务容器端口映射到主机运行器机器上的端口。

您可以使用 `ports` 关键字将服务容器端口映射到 Docker 主机。 更多信息请参阅 [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)。

| `ports` 的值    | 描述                                           |
| ------------- | -------------------------------------------- |
| `8080:80`     | 将容器中的 TCP 端口 80 映射到 Docker 主机上的端口 8080。      |
| `8080:80/udp` | 将容器中的 UDP 端口 80 映射到 Docker 主机上的端口 8080。      |
| `8080/udp`    | 将容器中随机选择的 UDP 端口映射到 Docker 主机上的 UDP 端口 8080。 |

使用 `ports` 关键字映射端口时，{% data variables.product.prodname_dotcom %} 使用 `--publish` 命令将容器的端口发布到 Docker 主机。 更多信息请参阅 Docker 文档中的“[Docker 容器网络](https://docs.docker.com/config/containers/container-networking/)”。

指定 Docker 主机端口但不指定容器端口时，容器端口将随机分配给空闲端口。 {% data variables.product.prodname_dotcom %} 在服务容器上下文中设置分配的容器端口。 例如，对于 `redis` 服务容器，如果您配置了 Docker 主机端口 5432，则您可以使用 `job.services.redis.ports[5432]` 上下文访问对应的容器端口。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#job-context)”。

#### 映射 Redis 端口的示例

此示例映射服务容器 `redis` 端口 6379 到 Docker 主机端口 6379。

{% raw %}
```yaml{:copy}
name: Redis Service Example
on: push

jobs:
  # Label of the container job
  runner-job:
    # You must use a Linux environment when using service containers or container jobs
    runs-on: ubuntu-latest

    # Service containers to run with `runner-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
        #
        ports:
          # Opens tcp port 6379 on the host and service container
          - 6379:6379
```
{% endraw %}

### 延伸阅读

- "[创建 Redis 服务容器](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- "[创建 PostgreSQL 服务容器](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
