---
title: Sobre os contêineres de serviço
intro: 'Você pode usar contêineres de serviço para conectar bancos de dados, serviços web, memória cache e outras ferramentas ao seu fluxo de trabalho.'
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
  - Contêineres
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Sobre os contêineres de serviço

Os contêineres de serviço são contêineres Docker que fornecem uma forma simples e portátil para os seus serviços de hospedagem que você pode precisar testar ou operar a sua aplicação em um fluxo de trabalho. Por exemplo, o seu fluxo de trabalho pode precisar executar testes de integração que necessitem de acesso a um banco de dados e a uma memória cache.

Você pode configurar os contêineres de serviço para cada trabalho em um fluxo de trabalho. {% data variables.product.prodname_dotcom %} cria um novo contêiner Docker para cada serviço configurado no fluxo de trabalho e destrói o contêiner de serviço quando o trabalho é concluído. As etapas em um trabalho podem comunicar-se com todos os contêineres de serviço que fazem parte do mesmo trabalho.

{% data reusables.github-actions.docker-container-os-support %}

### Comunicar-se com os contêineres de serviço

Você pode configurar trabalhos em um fluxo de trabalho para ser executados diretamente em uma máquina executora ou em um contêiner Docker. A comunicação entre o trabalho e seus contêineres de serviço é diferente, dependendo se um trabalho é executado diretamente na máquina executora ou em um contêiner.

#### Executar trabalhos em um contêiner

Ao executar trabalhos em um contêiner, {% data variables.product.prodname_dotcom %} conecta os contêineres de serviço ao trabalho suando as redes de ponte definidas pelo usuário do Docker. Para obter mais informações, consulte "["Usar redes de ponte](https://docs.docker.com/network/bridge/)" na documentação do Docker.

Executar o trabalho e os serviços em um contêiner simplifica o acesso à rede. Você pode acessar um contêiner de serviço usando a etiqueta que você configurar no fluxo de trabalho. O nome de host do contêiner do serviço é mapeado automaticamente de acordo com o nome da etiqueta. Por exemplo, se você criar um contêiner de serviço com a etiqueta `redis`, o nome de host do contêiner de serviço será `redis`.

Você não precisa configurar nenhuma porta para os contêineres de serviço. Por padrão, todos os contêineres que fazem parte da mesma rede do Docker expõem todas as portas entre si e nenhuma porta é exposta fora da rede do Docker.

#### Executar trabalhos na máquina executora

Ao executar trabalhos diretamente na máquina executora, você poderá acessar os contêineres de serviço usando `localhost:<port>` ou `127.0.0.1:<port>`. {% data variables.product.prodname_dotcom %} configura a rede do contêiner para habilitar a comunicação a partir do contêiner de serviço com o host do Docker.

Quando um trabalho é executado diretamente em uma máquina executora, o serviço executado no contêiner do Docker não expõe suas portas ao trabalho no executor por padrão. Você deve mapear as portas no contêiner de serviço com o host do Docker. Para obter mais informações, consulte "[Mapeando o host do Docker e as portas do contêiner de serviço](/actions/automating-your-workflow-with-github-actions/about-service-containers#mapping-docker-host-and-service-container-ports)".

### Criar contêineres de serviço

Você pode usar a palavra-chave `serviços` para criar contêineres de serviço que fazem parte de um trabalho no seu fluxo de trabalho. Para obter mais informações, consulte [`trabalhos.<job_id>.serviços`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

Este exemplo cria um serviço denominado `redis` em um trabalho denominado `container-job`. O host do Docker, neste exemplo, é o contêiner `node:10.18-jessie`.

{% raw %}
```yaml{:copy}
nome: Exemplo de contêiner Redis
em: push

trabalhos:
  # Etiqueta do trabalho do contêiner
  container-job:
    # Os contêineres devem ser executados em sistemas operacionais baseados no Linux
    runs-on: ubuntu-latest
    # Imagem do Docker Hub em que o `container-job` é executado
    container: node:10.18-jessie

    # Contêineres de serviço a serem executados com `container-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hub
        imagem: redis
```
{% endraw %}

### Mapear o host do Docker e as portas do contêiner de serviço

Se o seu trabalho for executado em um contêiner do Docker, você não precisará mapear as portas no host ou no contêiner de serviço. Se o seu trabalho for executado diretamente na máquina executora, você precisará mapear todas as portas do contêiner de serviço necessárias com as portas na máquina executora do host.

Você pode mapear as portas dos contêineres de serviço com o host do Docker usando a palavra-chave `portas`. Para obter mais informações, consulte [`trabalhos.<job_id>.serviços`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices).

| Valor das `portas` | Descrição                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `8080:80`          | Mapeia a porta 80 TCP no contêiner com a porta 8080 no host do Docker.                           |
| `8080:80/udp`      | Mapeia a porta 80 UDP no contêiner com a porta 8080 no host do Docker.                           |
| `8080/udp`         | Mapeia a porta UDP escolhida aleatoriamente no contêiner com a porta 8080 UDP no host do Docker. |

Ao mapear portas usando a palavra-chave `portas`, {% data variables.product.prodname_dotcom %}usa o comando `--publicar` para publicar as portas do contêiner no host do Docker. Para obter mais informações, consulte "[Rede do contêiner do Docker](https://docs.docker.com/config/containers/container-networking/)" na documentação do Docker.

Ao especificar a porta do host do Docker mas não a porta do contêiner, a porta do contêiner será atribuída aleatoriamente a uma porta livre. {% data variables.product.prodname_dotcom %} define a porta do contêiner atribuída no contexto do contêiner de serviço. Por exemplo, para um contêiner de serviço `redis`, se você configurou a porta 5432 do host do Docker, você poderá acessar a porta do contêiner correspondente usando o contexto `job.services.redis.ports[5432]`. Para obter mais informações, consulte "[Contexto e sintaxe de expressão para {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-context)".

#### Exemplo de mapeamento de portas Redis

Este exemplo mapeia a porta 6379 do contêiner de serviço `redis` com a porta 6379 do host do Docker.

{% raw %}
```yaml{:copy}
nome: Exemplo de serviço Redis
em: push

trabalhos:
  # Etiqueta do trabalho do contêiner
  runner-job:
    # YoVocê deve usar um ambiente Linux ao usar os contêineres de serviço ou os trabalhos do contêiner
    runs-on: ubuntu-latest

    # Contêineres de serviço a ser executados com `runner-job`
    serviços:
      # Etiqueta usada para acessar o contêiner de serviço
      redis:
        # Imagem do Docker Hubm
        image: redis
        #
        portas:
          # Abre a porta 6379 tcp no host e no contêiner de serviço
          - 6379:6379
```
{% endraw %}

### Leia mais

- [Criando contêineres de serviço Redis](/actions/automating-your-workflow-with-github-actions/creating-redis-service-containers)"
- [Criando contêineres de serviço PostgreSQL](/actions/automating-your-workflow-with-github-actions/creating-postgresql-service-containers)"
