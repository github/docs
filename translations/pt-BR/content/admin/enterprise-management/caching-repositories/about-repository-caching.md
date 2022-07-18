---
title: Sobre o cache do repositório
intro: Você pode aumentar o desempenho de operações de leitura do Git para equipes distribuídas e farms de CI com cache de repositórios.
versions:
  ghes: '>=3.3'
type: overview
topics:
  - Enterprise
---

{% data reusables.enterprise.repository-caching-release-phase %}

Se você tiver equipes e farms de CI localizadas no mundo todo, você poderá ter um desempenho reduzido na instância primária de {% data variables.product.prodname_ghe_server %}. Embora georréplicas ativas podem melhorar o desempenho de solicitações de leitura, isso tem o custo de limitar o rendimento da gravação. Para reduzir a carga na instância primária e melhorar o desempenho da taxa de transferência, é possível configurar um cache de repositório, um espelho assíncrono de somente leitura de repositórios localizados perto desses clientes distribuídos geograficamente.

Um cache de repositório elimina a necessidade de {% data variables.product.product_name %} transmitir os mesmos dados do Git por meio de um link de rede de longo curso várias vezes para servir vários clientes, servindo seus dados do repositório perto de farms de CI e equipes distribuídas. Por exemplo, se a sua instância principal estiver na América do Norte e você também tiver uma forte presença na Ásia, você irá beneficiar-se da criação do cache de repositórios na Ásia para uso dos executores de CI.

O cache do repositório escuta a instância principal, seja uma instância única ou um conjunto de instâncias replicadas georreplicado, para alterações nos dados do Git. As farms de CI e outros consumidores muito pesados clonam e buscam do cache do repositório em vez da instância primária. As alterações são propagadas na rede, em intervalos periódicos, uma vez por instância de cache ao invés de uma vez por cliente. Os dados do Git normalmente serão visíveis no cache do repositório dentro de alguns minutos após os dados serem enviados para a instância primária.  {% ifversion ghes > 3.3 %}O webhook [`cache_sync` webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) pode ser usado por sistemas de CI para reagir a dados que estão disponíveis no cache.{% endif %}

Você tem controle refinado sobre quais repositórios estão autorizados a sincronizar com o cache do repositório. Os dados do Git só serão replicados nos locais que você especificar.

{% data reusables.enterprise.repository-caching-config-summary %} Para obter mais informações, consulte "[Configurando um cache do repositório](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)".
