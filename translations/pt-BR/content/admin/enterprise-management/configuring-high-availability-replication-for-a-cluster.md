---
title: Configurar alta disponibilidade de replicação de um cluster
intro: 'Você pode configurar uma réplica passiva de todo o seu cluster de {% data variables.product.prodname_ghe_server %} em um local diferente, permitindo que o seu cluster falhe em nós redundantes.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster
versions:
  enterprise-server: '>2.21'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### Sobre a alta disponibilidade de replicação de clusters

Você pode configurar uma implantação de cluster de {% data variables.product.prodname_ghe_server %} para alta disponibilidade, em que um conjunto idêntico de nós passivos estejam sincronizados com os nós no seu cluster ativo. Se falhas no hardware ou software afetarem o centro de dados com o seu cluster ativo, você poderá transferir a falha manualmente para os nós da réplica e continuar processando as solicitações do usuário, minimizando o impacto da interrupção.

Em modo de alta disponibilidade, cada nó ativo é sincronizado regularmente com um nó passivo correspondente. O nó passivo é executado em modo de espera e não atende a aplicativos nem processa solicitações de usuário.

Recomendamos configurar uma alta disponibilidade como parte de um plano de recuperação de desastres abrangente para {% data variables.product.prodname_ghe_server %}. Também recomendamos realizar backups regulares. Para obter mais informações, consulte "[Configurar backups no appliance](/enterprise/admin/configuration/configuring-backups-on-your-appliance)".

### Pré-requisitos

#### Hardware e software

Para cada nó existente no seu cluster ativo, você precisará fornecer uma segunda máquina virtual com recursos de hardware idênticos. Por exemplo, se seu cluster tiver 11 nós e cada nó tem 12 vCPUs, 96 GB de RAM e 750 GB de armazenamento anexado, você deverá fornecer 11 novas máquinas virtuais, tendo cada uma 12 vCPUs, 96 GB de RAM e 750 GB de armazenamento anexado.

Em cada nova máquina virtual, instale a mesma versão do {% data variables.product.prodname_ghe_server %} que é executada nos nós do seu cluster ativo. Você não precisa fazer o upload de uma licença ou executar qualquer configuração adicional. Para obter mais informações, consulte "[Configurar instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)".

{% note %}

**Observação**: Os nós que você pretende usar para alta disponibilidade devem ser instâncias independentes de {% data variables.product.prodname_ghe_server %}. Não inicialize os nós passivos como um segundo cluster.

{% endnote %}

#### Rede

Você deve atribuir um endereço IP estático a cada novo nó que você fornecer e você deve configurar um balanceador de carga para aceitar conexões e direcioná-las para os nós na sua camada frontal do cluster.

Não recomendamos configurar um firewall entre a rede com o seu cluster ativo e a rede com o seu cluster passivo. A latência entre a rede com os nós ativos e a rede com os nós passivos deve ser inferior a 70 milissegundos. Para obter mais informações sobre conectividade de rede entre os nós no cluster passivo, consulte "[Configuração da rede do cluster](/enterprise/admin/enterprise-management/cluster-network-configuration)".

### Criar uma alta réplica de disponibilidade para um cluster

- [Atribuindo nós ativos ao centro de dados primário](#assigning-active-nodes-to-the-primary-datacenter)
- [Adicionar nós passivos ao arquivo de configuração do cluster](#adding-passive-nodes-to-the-cluster-configuration-file)
- [Exemplo de configuração](#example-configuration)

#### Atribuindo nós ativos ao centro de dados primário

Antes de definir um centro de dados secundário para seus nós passivos, certifique-se de atribuir seus nós ativos para o centro de dados primário.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Observe o nome do centro de dados primário do seu cluster. A seção `[cluster]` na parte superior do arquivo de configuração do cluster define o nome do centro de dados primário, usando o par de chave-valor `primary-datacenter`. Por padrão, o centro de dados primário para o seu cluster é denominado `padrão`.

    ```shell
    [cluster]
      mysql-master = <em>HOSTNAME</em>
      redis-master = <em>HOSTNAME</em>
      <strong>primary-datacenter = default</strong>
    ```

    - Opcionalmente, altere o nome do centro de dados primário para algo mais descritivo ou preciso, editando o valor do `primary-datacenter`.

4. {% data reusables.enterprise_clustering.configuration-file-heading %} Embaixo do cabeçalho de cada nó, adicione um novo par chave-valor para atribuir o nó a um centro de dados. Use o mesmo valor do `primary-datacenter` da etapa 3 acima. Por exemplo, se você quiser usar o nome-padrão (`padrão`) adicionar o seguinte par de chave-valor à seção para cada nó.

    ```
    centro de dados = padrão
    ```

    Ao concluir, a seção para cada nó no arquivo de configuração de cluster deve parecer-se com o exemplo a seguir. {% data reusables.enterprise_clustering.key-value-pair-order-irrelevant %}

    ```shell
    [cluster "<em>HOSTNAME</em>"]
      <strong>datacenter = default</strong>
      hostname = <em>HOSTNAME</em>
      ipv4 = <em>IP ADDRESS</em>
      ...
    ...
    ```

    {% note %}

    **Observação**: Se você alterou o nome do centro de dados primário no passo 3, encontre o par chave-valor `consul-datacenter` chave-valor na seção para cada nó e altere o valor para o centro de dados primário renomeado. Por exemplo, se você nomeou o centro de dados `primário`, use o seguinte par de chave-valor para cada nó.

    ```
    consul-datacenter = primary
    ```

    {% endnote %}

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

Após {% data variables.product.prodname_ghe_server %} encaminhar você para a instrução, isso significa que você terminou de atribuir seus nós para o centro de dados primário do cluster.

#### Adicionar nós passivos ao arquivo de configuração do cluster

Para configurar a alta disponibilidade, você deve definir um nó passivo correspondente para cada nó ativo no seu cluster. As instruções a seguir criam uma nova configuração de cluster que define tanto nós ativos quanto passivos. Você irá:

- Criar uma cópia do arquivo de configuração do cluster ativo.
- Editar a cópia para definir nós passivos que correspondem aos nós ativos, adicionando os endereços IP das novas máquinas virtuais que você forneceu.
- Mescle a cópia modificada da configuração do cluster de volta à sua configuração ativa.
- Aplique a nova configuração para iniciar a replicação.

Para uma exemplo de configuração, consulte "[Exemplo de Configuração'](#example-configuration)'.

1. Para cada nó no seu cluster, forneça uma máquina virtual correspondente com especificações idênticas, executando a mesma versão do  {% data variables.product.prodname_ghe_server %}. Observe o endereço de host e endereço IPv4 para cada novo nó de cluster. Para obter mais informações, consulte "[Pré-requisitos](#prerequisites)".

    {% note %}

    **Observação**: Se você estiver reconfigurando alta disponibilidade após um failover, você poderá usar os nós antigos do centro de dados principal.

    {% endnote %}

{% data reusables.enterprise_clustering.ssh-to-a-node %}

3. Faça o backup da sua configuração de cluster existente.

    ```
    cp /data/user/common/cluster.conf ~/$(date +%Y-%m-%d)-cluster.conf.backup
    ```

4. Crie uma cópia do seu arquivo de configuração de cluster existente em um local temporário, como _/home/admin/cluster-passive.conf_. Excluir pares de chave-valor únicos para endereços IP (`ipv*`), UUIDs (`uid`) e chaves públicas para WireGuard (`wireguard-pubkey`).

    ```
    grep -Ev "(?:|ipv|uuid|vpn|wireguard\-pubkey)" /data/user/common/cluster.conf > ~/cluster-passive.conf
    ```

5. Remova a seção `[cluster]` do arquivo de configuração temporário do cluster que você copiou na etapa anterior.

    ```
    git config -f ~/cluster-passive.conf --remove-section cluster
    ```

6. Defina um nome para o centro de dados secundário onde você forneceu seus nós passivos e, em seguida, atualize o arquivo de configuração temporário do cluster com o novo nome do centro de dados. Substitua `SEGUNDÁRIO` pelo nome escolhido.

    ```shell
    sed -i 's/datacenter = default/datacenter = <em>SECONDARY</em>/g' ~/cluster-passive.conf
    ```

7. Defina um padrão para os nomes de host dos nós passivos.

    {% warning %}

    **Aviso**: Os nomes de host para nós passivos devem ser únicos e devem diferir do nome de host para o nó ativo correspondente.

    {% endwarning %}

8. Abra o arquivo de configuração temporário do cluster da etapa 3 em um editor de texto. Por exemplo, você pode usar o Vim.

    ```shell
    sudo vim ~/cluster-passive.conf
    ```

9. Em cada seção dentro do arquivo de configuração temporária, atualize as configurações do nó. {% data reusables.enterprise_clustering.configuration-file-heading %}

    - Altere o nome de host citado no cabeçalho da seção e o valor para `hostname` dentro da seção para o nome do host do nó passivo pelo padrão escolhido na etapa 7 acima.
    - Adicione uma nova chave denominada `ipv4` e defina o valor para o endereço IPv4 estático do nó passivo.
    - Adicione um novo par de chave-valor, `réplica = habilitado`.

    ```shell
    [cluster "<em>NEW PASSIVE NODE HOSTNAME</em>"]
      ...
      hostname = <em>NEW PASSIVE NODE HOSTNAME</em>
      ipv4 = <em>NEW PASSIVE NODE IPV4 ADDRESS</em>
      <strong>replica = enabled</strong>
      ...
    ...
    ```

10. Adicione o conteúdo do arquivo de configuração de cluster temporário que você criou na etapa 4 ao arquivo de configuração ativo.

    ```shell
    cat ~/cluster-passive.conf >> /data/user/common/cluster.conf
    ```

11. Nomeie os nós primários do MySQL e Redis no centro de dados secundário. Substitua `MYSQL REPLICA PRIMARY HOSTNAME` e `REPLICA REDIS PRIMARY HOSTNAME` pelos nomes de host do nó passivo que você forneceu para corresponder aos seus MySQL e Redis primários.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-master-replica <em>REPLICA MYSQL PRIMARY HOSTNAME</em>
    git config -f /data/user/common/cluster.conf cluster.redis-master-replica <em>REPLICA REDIS PRIMARY HOSTNAME</em>
    ```

12. Habilite o MySQL para falhar automaticamente quando você gerar uma falha para os nós de réplica passiva.

    ```shell
    git config -f /data/user/common/cluster.conf cluster.mysql-auto-failover true
    ```

    {% warning %}

    **Aviso**: Revise seu arquivo de configuração de cluster antes de prosseguir.

    - Na seção de nível superior `[cluster]`, certifique-se de que os valores para `mysql-master-replica` e `redis-master-replica` são os nomes corretos para os nós passivos no centro de dados secundário que servirão como MySQL e Redis primários após um failover.
    - Em cada seção para um nó ativo denominado `[cluster "<em>ACTIVE NODE HOSTNAME</em>"]`, verifique novamente os seguintes pares de chave-valor.
      - O `centro de dados` deve corresponder ao valor de `primary-datacenter` na seção de nível superior `[cluster]`.
      - `consul-datacenter` deve corresponder ao valor de `centro de dados`, que deve ser o mesmo que o valor para `primary-datacenter` na seção de nível superior `[cluster]`.
    - Certifique-se de que para cada nó ativo, a configuração tem **uma** seção correspondente para **um** nó passivo com as mesmas funções. Em cada seção para um nó passivo, verifique novamente cada par de chave-valor.
      - O `centro de dados` deve corresponder a todos os outros nós passivos.
      - `consul-datacenter` deve corresponder a todos os outros nós passivos.
      - O `hostname` deve coincidir com o nome de host no cabeçalho da seção.
      - `ipv4` deve corresponder ao endereço IPv4 único e estático do nó.
      - A `réplica` deve ser configurada como `habilitada`.
    - Aproveite a oportunidade para remover seções para nós off-line que não estão mais sendo usados.

    Para revisar uma configuração de exemplo, consulte "[Exemplo de confoguração](#example-configuration)".

    {% endwarning %}

13. Inicializar a nova configuração de cluster. {% data reusables.enterprise.use-a-multiplexer %}

    ```shell
    ghe-cluster-config-init
    ```

14. Após a conclusão da inicialização , {% data variables.product.prodname_ghe_server %} exibirá a seguinte mensagem.

    ```shell
    Inicialização de cluster concluída
    ```

{% data reusables.enterprise_clustering.apply-configuration %}

{% data reusables.enterprise_clustering.configuration-finished %}

17. Configure um balanceador de carga que aceitará conexões de usuários se você gerar uma falha para os nós passivos. Para obter mais informações, consulte "[Configuração de rede de cluster](/enterprise/admin/enterprise-management/cluster-network-configuration#configuring-a-load-balancer)".

Você terminou de configurar uma replicação de alta disponibilidade para os nós do seu cluster. Cada nó ativo começa a replicar a configuração e os dados para o seu nó passivo correspondente e você pode direcionar o tráfego para o balanceador de carga para o centro de dados secundário em caso de falha. Para obter mais informações sobre como gerar falha, consulte "[Iniciar um failover no seu cluster de réplica](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)".

#### Exemplo de configuração

A configuração de nível `[cluster]` deve parecer-se com o exemplo a seguir.

```shell
[cluster]
  mysql-master = <em>HOSTNAME OF ACTIVE MYSQL MASTER</em>
  redis-master = <em>HOSTNAME OF ACTIVE REDIS MASTER</em>
  primary-datacenter = <em>PRIMARY DATACENTER NAME</em>
  mysql-master-replica = <em>HOSTNAME OF PASSIVE MYSQL MASTER</em>
  redis-master-replica = <em>HOSTNAME OF PASSIVE REDIS MASTER</em>
  mysql-auto-failover = true
...
```

A configuração para um nó ativo no nível de armazenamento do seu grupo deve parecer o seguinte exemplo.

```shell
...
[cluster "<em>UNIQUE ACTIVE NODE HOSTNAME</em>"]
  datacenter = default
  hostname = <em>UNIQUE ACTIVE NODE HOSTNAME</em>
  ipv4 = <em>IPV4 ADDRESS</em>
  consul-datacenter = default
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  vpn = <em>IPV4 ADDRESS SET AUTOMATICALLY</em>
  uuid = <em>UUID SET AUTOMATICALLY</em>
  wireguard-pubkey = <em>PUBLIC KEY SET AUTOMATICALLY</em>
...
```

A configuração para o nó passivo correspondente no nível de armazenamento deve parecer-se com o seguinte exemplo.

- Diferenças importantes do nó ativo correspondente estão em **negrito**.
- {% data variables.product.prodname_ghe_server %} atribui valores para `vpn`, `uuid` e `wireguard-pubkey` automaticamente. Portanto, você não deve definir os valores para nós passivos que você inicializar.
- As funções do servidor, definidas pelas chaves `*-server`, correspondem ao nó ativo correspondente.

```shell
...
<strong>[cluster "<em>UNIQUE PASSIVE NODE HOSTNAME</em>"]</strong>
  <strong>replica = enabled</strong>
  <strong>ipv4 = <em>IPV4 ADDRESS OF NEW VM WITH IDENTICAL RESOURCES</em></strong>
  <strong>datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  <strong>hostname = <em>UNIQUE PASSIVE NODE HOSTNAME</em></strong>
  <strong>consul-datacenter = <em>SECONDARY DATACENTER NAME</em></strong>
  consul-server = true
  git-server = true
  pages-server = true
  mysql-server = true
  elasticsearch-server = true
  redis-server = true
  memcache-server = true
  metrics-server = true
  storage-server = true
  <strong>vpn = <em>DO NOT DEFINE</em></strong>
  <strong>uuid = <em>DO NOT DEFINE</em></strong>
  <strong>wireguard-pubkey = <em>DO NOT DEFINE</em></strong>
...
```

### Monitoramento de replicação entre nós de cluster ativos e passivos

A replicação inicial entre os nós ativos e passivos do seu cluster leva tempo. A quantidade de tempo depende da quantidade de dados para a replicação e dos níveis de atividade para {% data variables.product.prodname_ghe_server %}.

Você pode monitorar o progresso em qualquer nó do cluster, usando ferramentas de linha de comando disponíveis através do shell administrativo do {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre o shell administrativa, consulte "[Acessar o shell administrativo (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)".

- Monitorar replicação dos bancos de dados:

  ```
  /usr/local/share/enterprise/ghe-cluster-status-mysql
  ```

- Monitorar replicação do repositório e dos dados do Gist:

  ```
  ghe-spokes status
  ```

- Monitorar replicação dos anexo e dos dados de LFS:

  ```
  ghe-storage replication-status
  ```

- Monitorar replicação dos dados das páginas:

  ```
  ghe-dpages replication-status
  ```

Você pode usar `ghe-cluster-status` para revisar a saúde geral do seu cluster. Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-cluster-status)".

### Reconfigurar a replicação de alta disponibilidade após um failover

Após gerar um failover dos nós ativos do cluster para os nós passivos do cluster, você pode reconfigurar a replicação de alta disponibilidade de duas maneiras.

#### Provisionamento e configuração de novos nós passivos

Após um failover, você pode reconfigurar alta disponibilidade de duas maneiras. O método escolhido dependerá da razão pela qual você gerou o failover e do estado dos nós ativos originais.

1. Forneça e configure um novo conjunto de nós passivos para cada um dos novos nós ativos no seu centro de dados secundário.

2. Use os antigos nós ativos como os novos nós passivos.

O processo de reconfiguração de alta disponibilidade é idêntico à configuração inicial de alta disponibilidade. Para obter mais informações, consulte "[Criar uma réplica de alta disponibilidade para um cluster](#creating-a-high-availability-replica-for-a-cluster)".


### Desabilitar a replicação de alta disponibilidade para um cluster

Você pode parar a replicação nos nós passivos para a sua implantação de cluster de {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_clustering.ssh-to-a-node %}

{% data reusables.enterprise_clustering.open-configuration-file %}

3. Na seção de nível superior `[cluster]`, exclua os pares de chave-valor `mysql-auto-failover`, `redis-master-replica` e `mysql-master-replica`.

4. Exclua cada seção para um nó passivo. Para nódulos passivos, a `réplica` é configurada como </code>habilitada.</p></li>
</ol>

<p spaces-before="0">{% data reusables.enterprise_clustering.apply-configuration %}</p>

<p spaces-before="0">{% data reusables.enterprise_clustering.configuration-finished %}</p>

<p spaces-before="0">Após {% data variables.product.prodname_ghe_server %} encaminhar você para a instrução, isso significa que você terminou de desabilitar a replicação de alta disponibilidade.</p>
