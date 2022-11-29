---
title: Sobre a configuração de alta disponibilidade
intro: 'Na configuração de alta disponibilidade, um appliance do {% data variables.product.prodname_ghe_server %} secundário totalmente redundante é mantido em sincronização com o appliance primário pela replicação de todos os principais armazenamentos de dados.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
  - /admin/enterprise-management/about-high-availability-configuration
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: About HA configuration
ms.openlocfilehash: b54ca60c6cf1d79b9435ca8deedebec09ed39396
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107835'
---
Quando você configura alta disponibilidade, há uma configuração automatizada de replicação assíncrona e unidirecional de todos os armazenamentos de dados (repositórios do Git, MySQL, Redis e Elasticsearch) do appliance primário para o appliance réplica. A maioria das configurações de {% data variables.product.prodname_ghe_server %} também são replicadas, incluindo a senha de {% data variables.enterprise.management_console %}. Para obter mais informações, confira "[Como acessar o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

O {% data variables.product.prodname_ghe_server %} dá suporte a uma configuração ativa/passiva, em que o appliance réplica é executado em espera com os serviços de banco de dados em execução no modo de replicação, mas os serviços de aplicativos são interrompidos.

Após a replicação ser estabelecida, o {% data variables.enterprise.management_console %} se torna inacessível nos dispositivos da réplica. Se você acessar o endereço IP da réplica ou nome do host na porta 8443, verá uma mensagem "Servidor no modo de replicação", o que indica que o dispositivo está atualmente configurado como uma réplica.
{% data reusables.enterprise_installation.replica-limit %}

## Cenários de falha

Use a configuração de alta disponibilidade para proteção contra:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

A configuração de alta disponibilidade não é uma boa solução para:

  - **Expansão**. Embora você possa distribuir o tráfego geograficamente usando a replicação geográfica, o desempenho das gravações fica limitado à velocidade e à disponibilidade do dispositivo primário. Para obter mais informações, consulte "[Sobre a replicação geográfica](/enterprise/admin/guides/installation/about-geo-replication/)".
  - **Carga de CI/CD**. Se você tiver um grande número de clientes de CI que estão geograficamente distantes da sua instância principal, você pode beneficiar-se de configurar um cache de repositório. Para obter mais informações, confira "[Sobre o cache do repositório](/admin/enterprise-management/caching-repositories/about-repository-caching)".
  - **Fazendo backup do seu dispositivo primário**. Uma réplica de alta disponibilidade não substitui os backups externos do seu plano de recuperação de desastres. Algumas formas de violação ou perda de dados podem ser replicadas de imediato do appliance primário para o de réplica. Para garantir a reversão segura a um estado anterior estável, você deve fazer backups regulares com instantâneos de histórico.
  - **Atualizações sem tempo de inatividade**. Para evitar a perda de dados e situações de split-brain em cenários de promoção controlados, deixe o appliance primário em modo de manutenção e aguarde a conclusão de todas as gravações antes de promover o de réplica.

## Estratégias de failover no tráfego de rede

Durante o failover, você deve configurar e gerenciar separadamente o redirecionamento do tráfego de rede do appliance primário para o de réplica.

### Failover DNS

Com o failover DNS, use valores curtos de TTL nos registros DNS que apontam para o appliance primário {% data variables.product.prodname_ghe_server %}. Recomenda-se um TTL entre 60 segundos e cinco minutos.

Durante o failover, você deve deixar o appliance primário no modo de manutenção e redirecionar seus registros DNS para o endereço IP do appliance réplica. O tempo para redirecionar o tráfego do appliance primário para o de réplica dependerá da configuração do TTL e do tempo necessário para atualizar os registros DNS.

Se estiver usando replicação geográfica, você deverá configurar o DNS de localização geográfica para direcionar o tráfego à réplica mais próxima. Para obter mais informações, consulte "[Sobre a replicação geográfica](/enterprise/admin/guides/installation/about-geo-replication/)".

### Balanceador de carga

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Durante o failover, você deve deixar o appliance principal em modo de manutenção. É possível configurar o balanceador de carga para detectar automaticamente quando o de réplica for promovido a primário, ou ele pode exigir uma alteração manual na configuração. Antes que o de réplica responda ao tráfego do usuário, você deve promovê-lo manualmente a primário. Para obter mais informações, confira "[Usando {% data variables.product.prodname_ghe_server %} com um balanceador de carga](/enterprise/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)".

{% data reusables.enterprise_installation.monitoring-replicas %}

## Utilitários para o gerenciamento de replicações

Para gerenciar a replicação no {% data variables.product.prodname_ghe_server %}, use estes utilitários de linha de comando ao se conectar ao appliance réplica usando SSH.

### ghe-repl-setup

O comando `ghe-repl-setup` coloca um dispositivo do {% data variables.product.prodname_ghe_server %} em modo de espera de réplica.

 - Um túnel VPN WireGuard criptografado é configurado para comunicação entre os dois aparelhos.
 - Os serviços de banco de dados são configurados para replicação e iniciados.
 - Os serviços de aplicativos ficam desabilitados. As tentativas de acessar o appliance réplica por HTTP, Git ou outros protocolos com suporte levarão a uma página de manutenção "appliance em modo de réplica" ou a uma mensagem de erro.

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verifying ssh connectivity with 169.254.1.1 ...
Connection check succeeded.
Configuring database replication against primary ...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Run `ghe-repl-start' to start replicating against the newly configured primary.
```

### ghe-repl-start

O comando `ghe-repl-start` ativa a replicação ativa de todos os armazenamentos de dados.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Starting Redis replication ...
Starting Elasticsearch replication ...
Starting Pages replication ...
Starting Git replication ...
Success: replication is running for all services.
Use `ghe-repl-status' to monitor replication health and progress.
```

### ghe-repl-status

O comando `ghe-repl-status` retorna um status `OK`, `WARNING` ou `CRITICAL` para cada fluxo de replicação do armazenamento de dados. Quando qualquer um dos canais de replicação estiver em um estado `WARNING`, o comando será encerrado com o código `1`. Da mesma forma, quando qualquer um dos canais estiver em um estado `CRITICAL`, o comando será encerrado com o código `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: mysql replication in sync
OK: redis replication is in sync
OK: elasticsearch cluster is in sync
OK: git data is in sync (10 repos, 2 wikis, 5 gists)
OK: pages data is in sync
```

As opções `-v` e `-vv` fornecem detalhes sobre o estado de replicação de cada repositório de dados:

```shell
$ ghe-repl-status -v
OK: mysql replication in sync
  | IO running: Yes, SQL running: Yes, Delay: 0

OK: redis replication is in sync
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: elasticsearch cluster is in sync
  | {
  |   "cluster_name" : "github-enterprise",
  |   "status" : "green",
  |   "timed_out" : false,
  |   "number_of_nodes" : 2,
  |   "number_of_data_nodes" : 2,
  |   "active_primary_shards" : 12,
  |   "active_shards" : 24,
  |   "relocating_shards" : 0,
  |   "initializing_shards" : 0,
  |   "unassigned_shards" : 0
  | }

OK: git data is in sync (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      FAULT    PENDING      DELAY
  | repositories        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: pages data is in sync
  | Pages are in sync
```

### ghe-repl-stop

O comando `ghe-repl-stop` desabilita temporariamente a replicação para todos os armazenamentos de dados e interrompe os serviços de replicação. Para retomar a replicação, use o comando [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Stopping Pages replication ...
Stopping Git replication ...
Stopping MySQL replication ...
Stopping Redis replication ...
Stopping Elasticsearch replication ...
Success: replication was stopped for all services.
```

### ghe-repl-promote

O comando `ghe-repl-promote` desabilita a replicação e converte o dispositivo de réplica em um primário. O appliance é configurado com as mesmas configurações do primário original, e todos os serviços ficam ativados.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Enabling maintenance mode on the primary to prevent writes ...
Stopping replication ...
  | Stopping Pages replication ...
  | Stopping Git replication ...
  | Stopping MySQL replication ...
  | Stopping Redis replication ...
  | Stopping Elasticsearch replication ...
  | Success: replication was stopped for all services.
Switching out of replica mode ...
  | Success: Replication configuration has been removed.
  | Run `ghe-repl-setup' to re-enable replica mode.
Applying configuration and starting services ...
Success: Replica has been promoted to primary and is now accepting requests.
```

### ghe-repl-teardown

O comando `ghe-repl-teardown` desabilita completamente o modo de replicação, removendo a configuração da réplica.

## Leitura adicional

- "[Criar uma réplica de alta disponibilidade](/enterprise/admin/guides/installation/creating-a-high-availability-replica)"
- "[Portas de rede](/admin/configuration/configuring-network-settings/network-ports)"
