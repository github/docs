---
title: Sobre a replicação geográfica
intro: 'A replicação geográfica no {% data variables.product.prodname_ghe_server %} usa várias réplicas ativas para atender às solicitações de datacenters distribuídos geograficamente.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
  - /admin/enterprise-management/about-geo-replication
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
---

Usar várias réplicas ativas diminui a distância até a réplica mais próxima. Por exemplo, uma organização com escritórios em San Francisco, Nova York e Londres pode executar o appliance primário em um datacenter próximo a Nova York e duas réplicas em datacenters próximos a San Francisco e Londres. Ao usar um DNS compatível com localização geográfica, os usuários podem ser direcionados para o servidor mais próximo disponível e acessar os dados do repositório em menos tempo. Definir o appliance próximo a Nova York como o primário ajuda a reduzir a latência entre os hosts, em comparação a definir o appliance próximo a San Francisco como o principal, que tem maior latência para Londres.

Os proxies de réplica ativos informam que não podem processar a si mesmos para a instância principal. As réplicas funcionam como ponto de presença, encerrando todas as conexões SSL. O tráfego entre hosts é enviado por meio de uma conexão VPN criptografada, semelhante a uma configuração de alta disponibilidade de dois nós sem replicação geográfica.

As solicitações do Git e as solicitações específicas do servidor de arquivos, como LFS e uploads de arquivos, podem ser atendidas diretamente na réplica, sem carregar dados do servidor principal. As solicitações da web são sempre roteadas para o servidor principal. No entanto, se a réplica estiver mais próxima do usuário, as solicitações serão mais rápidas devido ao SSL mais próximo.

É necessário ter um DNS de localização geográfica, como o [Amazon Route 53](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo), para garantir o bom funcionamento da replicação geográfica. O nome de host da instância deve ser resolvido na réplica mais próxima do local do usuário.

### Limitações

As solicitações de gravação para a réplica exigem o envio dos dados para o servidor principal e todas as réplicas. Isso significa que o desempenho de todas as gravações é limitado pela réplica mais lenta, embora novas georréplicas possam semear a maioria de seus dados a partir de georréplicas colocalizadas existentes, ao invés das primárias. A replicação geográfica não aumentará a capacidade de uma instância do {% data variables.product.prodname_ghe_server %} nem resolverá problemas de desempenho relacionados a CPU ou recursos de memória insuficientes. Se o appliance primário estiver offline, as réplicas ativas não poderão atender a solicitações de leitura ou gravação.

{% data reusables.enterprise_installation.replica-limit %}

### Monitorar a configuração da replicação geográfica

{% data reusables.enterprise_installation.monitoring-replicas %}

### Leia mais
- [Criar réplicas de replicação geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)
