---
title: Sobre nós de cluster
intro: '*Nós* são instâncias do {% data variables.product.prodname_ghe_server %} que operam em um cluster. Cada nó executa um conjunto de serviços fornecidos para o cluster e, consequentemente, para os usuários.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### Recomendações básicas de hardware
Cada nó deve ter um volume raiz e um volume de dados separado. Essas são as recomendações básicas de hardware. Podem ser necessários mais recursos dependendo do uso, como atividade do usuário e integrações selecionadas.

|                                            Serviços                                            | Requisito mínimo de memória | Requisito mínimo de espaço livre para volume de dados |
|:----------------------------------------------------------------------------------------------:|:---------------------------:|:-----------------------------------------------------:|
|               `job-server`,<br/>`memcache-server`,<br/>`web-server`                |            14 GB            |                         1 GB                          |
|              `consul-server`,<br/>`mysql-server`,<br/>`redis-server`               |            14 GB            |                         10 GB                         |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` |            7 GB             |                         10 GB                         |
|                                     `elasticsearch-server`                                     |            14 GB            |                         10 GB                         |

### Requisito de serviços para clustering
Para manter a redundância adequada, use esses nós mínimos ao operar cada serviço.

{% tip %}

**Observação:** as demandas de dimensionamento da sua organização dependerão de vários fatores, como tamanho e número de repositórios, número de usuários e uso geral.

{% endtip %}

|                                           Serviços                                            | Requisito mínimo de nós |
|:---------------------------------------------------------------------------------------------:|:-----------------------:|
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` |            2            |
|                           `mysql-server`,<br/>`redis-server`                            |            2            |
|                                        `consul-server`                                        |            3            |
|              `git-server`,<br/>`pages-server`,<br/>`storage-server`               |            3            |
|                                    `elasticsearch-server`                                     |            3            |

### Recomendações de criação de cluster

O clustering permite que os serviços que compõem o {% data variables.product.prodname_ghe_server %} sejam dimensionados de maneira independente. Essa flexibilidade pode ser usada para projetar e implementar um cluster que se adapte a organizações com diferentes requisitos de dimensionamento. Por exemplo, talvez algumas organizações precisem de mais taxa de transferência de armazenamento para fetches grandes ou frequentes, mas o uso do servidor da web pode ser relativamente baixo. Outras organizações podem ter bom desempenho com menos recursos de armazenamento, mas precisar de vários nós `pages-server` ou `elasticsearch-server` em execução. Muitas combinações são possíveis. Converse com seu representante de conta para determinar a configuração de cluster ideal para o seu caso.

- Use nós redundantes em todo o hardware independente. Compartilhar dispositivos de armazenamento, memória ou CPU reduz o desempenho e aumenta as chances de pontos únicos de falha. Componentes de rede compartilhada também podem reduzir o rendimento e aumentar o risco de perda de conectividade em caso de interrupção.
- Use o armazenamento rápido. As redes de área de armazenamento (SAN) costumam ser otimizadas para explorar ao máximo o espaço, a disponibilidade e a tolerância a falhas, mas não o rendimento. Além de oferecer redundância e disponibilidade, o clustering do {% data variables.product.prodname_ghe_server %} terá melhor desempenho no armazenamento mais rápido disponível. Recomenda-se fazer o armazenamento local em SSD.
- Estabeleça camadas de nós relevantes para a sua organização. Veja esta configuração de exemplo:
  - Camada de front-end com dois nós e os seguintes serviços:
    - `web-server`
    - `jobs-server`
    - `memcache-server`
  - Camada de banco de dados com dois nós e os seguintes serviços:
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - Camada de busca com três nós e o seguinte serviço:
    - `elasticsearch-server`
  - Camada de armazenamento com três nós e os seguintes serviços:
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

#### Diagrama de cluster de exemplo
{% note %}

**Observação: isto é apenas um exemplo.** O cluster ideal dependerá das demandas exclusivas de cada organização. Converse com seu representante exclusivo ou com {% data variables.contact.contact_enterprise_sales %} para que possamos ajudá-lo a determinar a melhor configuração de cluster.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Cluster de exemplo" style="width: 800px;border:0" />
