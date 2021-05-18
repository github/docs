---
title: Sobre a configuração de alta disponibilidade
intro: 'Na configuração de alta disponibilidade, um appliance do {% data variables.product.prodname_ghe_server %} secundário totalmente redundante é mantido em sincronização com o appliance primário pela replicação de todos os principais armazenamentos de dados.'
redirect_from:
  - /enterprise/admin/installation/about-high-availability-configuration
  - /enterprise/admin/enterprise-management/about-high-availability-configuration
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
  - Infrastructure
---

Quando você configura alta disponibilidade, há uma configuração automatizada de replicação assíncrona e unidirecional de todos os armazenamentos de dados (repositórios do Git, MySQL, Redis e Elasticsearch) do appliance primário para o appliance réplica.

O {% data variables.product.prodname_ghe_server %} dá suporte a uma configuração ativa/passiva, em que o appliance réplica é executado em espera com os serviços de banco de dados em execução no modo de replicação, mas os serviços de aplicativos são interrompidos.

{% data reusables.enterprise_installation.replica-limit %}

### Cenários de falha

Use a configuração de alta disponibilidade para proteção contra:

{% data reusables.enterprise_installation.ha-and-clustering-failure-scenarios %}

A configuração de alta disponibilidade não é uma boa solução para:

  - **Dimensionamento**. Mesmo que você possa distribuir o tráfego geograficamente usando a replicação geográfica, o desempenho das gravações fica limitado à velocidade e à disponibilidade do appliance primário. Para obter mais informações, consulte "[Sobre a replicação geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)".
  - **Backup do appliance primário**. Uma réplica de alta disponibilidade não substitui os backups externos do seu plano de recuperação de desastres. Algumas formas de violação ou perda de dados podem ser replicadas de imediato do appliance primário para o de réplica. Para garantir a reversão segura a um estado anterior estável, você deve fazer backups regulares com instantâneos de histórico.
  - **Atualizações sem tempo de inatividade**. Para evitar a perda de dados e situações de split-brain em cenários de promoção controlados, deixe o appliance primário em modo de manutenção e aguarde a conclusão de todas as gravações antes de promover o de réplica.

### Estratégias de failover no tráfego de rede

Durante o failover, você deve configurar e gerenciar separadamente o redirecionamento do tráfego de rede do appliance primário para o de réplica.

#### Failover DNS

Com o failover DNS, use valores curtos de TTL nos registros DNS que apontam para o appliance primário {% data variables.product.prodname_ghe_server %}. Recomenda-se um TTL entre 60 segundos e cinco minutos.

Durante o failover, você deve deixar o appliance primário no modo de manutenção e redirecionar seus registros DNS para o endereço IP do appliance réplica. O tempo para redirecionar o tráfego do appliance primário para o de réplica dependerá da configuração do TTL e do tempo necessário para atualizar os registros DNS.

Se estiver usando replicação geográfica, você deverá configurar o DNS de localização geográfica para direcionar o tráfego à réplica mais próxima. Para obter mais informações, consulte "[Sobre a replicação geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)".

#### Balanceador de carga

{% data reusables.enterprise_clustering.load_balancer_intro %} {% data reusables.enterprise_clustering.load_balancer_dns %}

Durante o failover, você deve deixar o appliance principal em modo de manutenção. É possível configurar o balanceador de carga para detectar automaticamente quando o de réplica for promovido a primário, ou ele pode exigir uma alteração manual na configuração. Antes que o de réplica responda ao tráfego do usuário, você deve promovê-lo manualmente a primário. Para obter mais informações, consulte "[Usar o {% data variables.product.prodname_ghe_server %} com balanceador de carga](/enterprise/{{ currentVersion }}/admin/guides/installation/using-github-enterprise-server-with-a-load-balancer/)".

{% data reusables.enterprise_installation.monitoring-replicas %}

### Utilitários para o gerenciamento de replicações

Para gerenciar a replicação no {% data variables.product.prodname_ghe_server %}, use estes utilitários de linha de comando ao se conectar ao appliance réplica usando SSH.

#### ghe-repl-setup

O comando `ghe-repl-setup` deixa o appliance do {% data variables.product.prodname_ghe_server %} em modo de espera de réplica.

 - Um túnel VPN WireGuard criptografado é configurado para comunicação entre os dois aparelhos.
 - Os serviços de banco de dados são configurados para replicação e iniciados.
 - Os serviços de aplicativos ficam desabilitados. As tentativas de acessar o appliance réplica por HTTP, Git ou outros protocolos com suporte levarão a uma página de manutenção "appliance em modo de réplica" ou a uma mensagem de erro.

```shell
admin@169-254-1-2:~$ ghe-repl-setup 169.254.1.1
Verificando conectividade ssh com 169.254.1.1 ...
Verificação de conexão com êxito.
Configurando replicação de banco de em relação ao primário...
Success: Replica mode is configured against 169.254.1.1.
To disable replica mode and undo these changes, run `ghe-repl-teardown'.
Execute `ghe-repl-start' para começar a replicar em relação ao primário recém-configurado.
```

#### ghe-repl-start

O comando `ghe-repl-start` habilita a replicação ativa de todos os armazenamentos de dados.

```shell
admin@169-254-1-2:~$ ghe-repl-start
Starting MySQL replication ...
Iniciando replicação Redis...
Iniciando replicação Elasticsearch...
Iniciando replicação Pages...
Iniciando replicação Git...
Sucesso: replicação em execução em todos os serviços.
Use 'ghe-repl-status' para monitorar a integridade e o andamento da replicação.
```

#### ghe-repl-status

O comando `ghe-repl-status` retorna um status `OK`, `WARNING` ou `CRITICAL` para cada fluxo de replicação de armazenamento de dados. Quando qualquer um dos canais de replicação estiver em estado `WARNING`, o comando sairá com código `1`. Quando qualquer um dos canais de replicação estiver em estado `CRITICAL`, o comando sairá com código  `2`.

```shell
admin@169-254-1-2:~$ ghe-repl-status
OK: replicação mysql em sincronização
OK: replicação redis em sincronização
OK: replicação cluster elasticsearch em sincronização
OK: dados do git em sincronização (10 repos, 2 wikis, 5 gists)
OK: dados do pages em sincronização
```

As opções `-v` e `-vv` mostram detalhes sobre o estado da replicação de cada armazenamento de dados:

```shell
$ ghe-repl-status -v
OK: replicação mysql em sincronização
  | IO em execução: Sim, SQL em execução: Sim, atraso: 0

OK: replicação redis em sincronização
  | master_host:169.254.1.1
  | master_port:6379
  | master_link_status:up
  | master_last_io_seconds_ago:3
  | master_sync_in_progress:0

OK: cluster elasticsearch em sincronização
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

OK: dados do git em sincronização (366 repos, 31 wikis, 851 gists)
  |                   TOTAL         OK      AUSENTE    PENDENTE      ATRASO
  | repositórios        366        366          0          0        0.0
  |        wikis         31         31          0          0        0.0
  |        gists        851        851          0          0        0.0
  |        total       1248       1248          0          0        0.0

OK: dados do pages em sincronização
  | Pages em sincronização
```

#### ghe-repl-stop

O comando `ghe-repl-stop` desativa temporariamente a replicação para todos os armazenamentos de dados e interrompe os serviços de replicação. Para retomar a replicação, use o comando [ghe-repl-start](#ghe-repl-start).

```shell
admin@168-254-1-2:~$ ghe-repl-stop
Parando replicação Pages...
Parando replicação Git...
Parando replicação MySQL...
Parando replicação Redis...
Parando replicação Elasticsearch...
Sucesso: replicação parada em todos os serviços.
```

#### ghe-repl-promote

O comando `ghe-repl-promote` desativa a replicação e converte o appliance réplica em appliance primário. O appliance é configurado com as mesmas configurações do primário original, e todos os serviços ficam ativados.

{% data reusables.enterprise_installation.promoting-a-replica %}

```shell
admin@168-254-1-2:~$ ghe-repl-promote
Habilitando modo de manutenção em primário para evitar gravações...
Parando replicação...
  Parando replicação Pages...
  | Parando replicação Git...
  | Parando replicação MySQL...
  | Parando replicação Redis...
  | Parando replicação Elasticsearch...
  | Sucesso: replicação parada em todos os serviços.
Alternando modo réplica...
  | Sucesso: configuração de replicação removida.
  | Execute `ghe-repl-setup' para habilitar novamente o modo réplica.
Aplicando configuração e iniciando serviços...
Sucesso: a réplica foi promovida para primária e agora aceita solicitações.
```

#### ghe-repl-teardown

O comando `ghe-repl-teardown` desativa por completo o modo de replicação, removendo a configuração da réplica.

### Leia mais

- [Criar réplica de alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica)
