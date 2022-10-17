---
title: Sobre os contêineres de serviço
intro: 'Você pode usar contêineres de serviço para conectar bancos de dados, serviços web, memória cache e outras ferramentas ao seu fluxo de trabalho.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-service-containers
  - /actions/configuring-and-managing-workflows/about-service-containers
  - /actions/guides/about-service-containers
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Containers
  - Docker
ms.openlocfilehash: 67bfb403bb18f7364e000170ce71f9387d4ada69
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145096079'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os contêineres de serviço

Os contêineres de serviço são contêineres Docker que fornecem uma forma simples e portátil para os seus serviços de hospedagem que você pode precisar testar ou operar a sua aplicação em um fluxo de trabalho. Por exemplo, o seu fluxo de trabalho pode precisar executar testes de integração que necessitem de acesso a um banco de dados e a uma memória cache.

Você pode configurar os contêineres de serviço para cada trabalho em um fluxo de trabalho. {% data variables.product.prodname_dotcom %} cria um novo contêiner Docker para cada serviço configurado no fluxo de trabalho e destrói o contêiner de serviço quando o trabalho é concluído. As etapas em um trabalho podem comunicar-se com todos os contêineres de serviço que fazem parte do mesmo trabalho. No entanto, não é possível criar nem usar contêineres de serviço em uma ação composta. 

{% data reusables.actions.docker-container-os-support %}

## Comunicar-se com os contêineres de serviço

Você pode configurar trabalhos em um fluxo de trabalho para ser executados diretamente em uma máquina executora ou em um contêiner Docker. A comunicação entre o trabalho e seus contêineres de serviço é diferente, dependendo se um trabalho é executado diretamente na máquina executora ou em um contêiner.

### Executar trabalhos em um contêiner

Ao executar trabalhos em um contêiner, {% data variables.product.prodname_dotcom %} conecta os contêineres de serviço ao trabalho suando as redes de ponte definidas pelo usuário do Docker. Para obter mais informações, confira "[Usar redes de ponte](https://docs.docker.com/network/bridge/)" na documentação do Docker.

Executar o trabalho e os serviços em um contêiner simplifica o acesso à rede. Você pode acessar um contêiner de serviço usando a etiqueta que você configurar no fluxo de trabalho. O nome de host do contêiner do serviço é mapeado automaticamente de acordo com o nome da etiqueta. Por exemplo, se você criar um contêiner de serviço com o rótulo `redis`, o nome do host do contêiner de serviço será `redis`.

Você não precisa configurar nenhuma porta para os contêineres de serviço. Por padrão, todos os contêineres que fazem parte da mesma rede do Docker expõem todas as portas entre si e nenhuma porta é exposta fora da rede do Docker.

### Executar trabalhos na máquina executora

Ao executar trabalhos diretamente no computador do executor, você pode acessar os contêineres de serviço usando `localhost:<port>` ou `127.0.0.1:<port>`. {% data variables.product.prodname_dotcom %} configura a rede do contêiner para habilitar a comunicação a partir do contêiner de serviço com o host do Docker.

Quando um trabalho é executado diretamente em uma máquina executora, o serviço executado no contêiner do Docker não expõe suas portas ao trabalho no executor por padrão. Você deve mapear as portas no contêiner de serviço com o host do Docker. Para obter mais informações, confira "[Como mapear portas do host e do contêiner de serviço do Docker](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

## Criar contêineres de serviço

Use a palavra-chave `services` para criar contêineres de serviço que fazem parte de um trabalho no fluxo de trabalho. Para obter mais informações, confira [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

Este exemplo cria um serviço chamado `redis` em um trabalho chamado `container-job`. O host do Docker neste exemplo é o contêiner `node:16-bullseye`.

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
    container: node:16-bullseye

    # Service containers to run with `container-job`
    services:
      # Label used to access the service container
      redis:
        # Docker Hub image
        image: redis
```
{% endraw %}

## Mapear o host do Docker e as portas do contêiner de serviço

Se o seu trabalho for executado em um contêiner do Docker, você não precisará mapear as portas no host ou no contêiner de serviço. Se o seu trabalho for executado diretamente na máquina executora, você precisará mapear todas as portas do contêiner de serviço necessárias com as portas na máquina executora do host.

Você pode mapear portas de contêineres de serviço para o host do Docker usando a palavra-chave `ports`. Para obter mais informações, confira [`jobs.<job_id>.services`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Valor de `ports` |    Descrição |
|------------------|--------------|
| `8080:80` |   Mapeia a porta 80 TCP no contêiner com a porta 8080 no host do Docker. |
| `8080:80/udp` |   Mapeia a porta 80 UDP no contêiner com a porta 8080 no host do Docker. |
| `8080/udp`    | Mapeia a porta UDP escolhida aleatoriamente no contêiner com a porta 8080 UDP no host do Docker. |

Quando você mapeia portas usando a palavra-chave `ports`, o {% data variables.product.prodname_dotcom %} usa o comando `--publish` para publicar as portas do contêiner no host do Docker. Para obter mais informações, confira "[Rede de contêineres do Docker](https://docs.docker.com/config/containers/container-networking/)" na documentação do Docker.

Ao especificar a porta do host do Docker mas não a porta do contêiner, a porta do contêiner será atribuída aleatoriamente a uma porta grátis. {% data variables.product.prodname_dotcom %} define a porta do contêiner atribuída no contexto do contêiner de serviço. Por exemplo, para um contêiner de serviço `redis`, se você tiver configurado a porta de host do Docker 5432, poderá acessar a porta de contêiner correspondente usando o contexto `job.services.redis.ports[5432]`. Para obter mais informações, confira "[Contextos](/actions/learn-github-actions/contexts#job-context)".

### Exemplo de mapeamento de portas Redis

Este exemplo mapeia a porta `redis` do contêiner de serviço 6379 para a porta 6379 do host do Docker.

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

## Leitura adicional

- "[Como criar contêineres de serviço do Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- "[Como criar contêineres de serviço do PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
