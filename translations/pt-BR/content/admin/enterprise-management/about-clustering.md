---
title: Sobre clustering
intro: 'Com o clustering do {% data variables.product.prodname_ghe_server %}, os serviços que compõem o {% data variables.product.prodname_ghe_server %} podem ser dimensionados em vários nós.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/enterprise-management/about-clustering
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Arquitetura de clustering

O {% data variables.product.prodname_ghe_server %} é formado por um conjunto de serviços. Em um cluster, esses serviços são executados em vários nós e as solicitações são balanceadas por carga entre eles. As alterações são armazenadas automaticamente com cópias redundantes em nós separados. A maioria dos serviços são pares iguais com outras instâncias do mesmo serviço. As exceções são os serviços `mysql-server` e `redis-server`, que operam em um único nó _primário_ com um ou mais nós _réplica_.

Saiba mais sobre os [serviços necessários para os agrupamentos](/enterprise/{{ currentVersion }}/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

### Clustering é a opção ideal para a minha organização?

{% data reusables.enterprise_clustering.clustering-scalability %} No entanto, configurar um cluster redundante e dimensionável pode ser uma tarefa complexa e requer planejamento cuidadoso. A complexidade adicional deve ser planejada para a instalação, os cenários de recuperação de desastre e as atualizações.

O {% data variables.product.prodname_ghe_server %} requer baixa latência entre os nós e não foi feito para a redundância entre locais geográficos.

O clustering fornece redundância, mas não foi feito para substituir uma configuração de alta disponibilidade. Para obter mais informações, consulte [Configuração de alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). A configuração de um failover primário/secundário é muito mais simples do que o clustering e funcionará perfeitamente para várias organizações. Para obter mais informações, consulte [Diferenças entre clustering e alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

{% data reusables.package_registry.packages-cluster-support %}

### Como faço para obter acesso ao clustering?

O clustering foi feito para situações específicas de dimensionamento e não se aplica a todas as organizações. Se você está pensando em usar o clustering, converse com seu representante exclusivo ou {% data variables.contact.contact_enterprise_sales %}.
