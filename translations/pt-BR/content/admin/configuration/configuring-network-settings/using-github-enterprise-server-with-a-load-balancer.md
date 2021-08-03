---
title: Usar o GitHub Enterprise Server com balanceador de carga
intro: 'Use um balanceador de carga na frente de um appliance ou de um par de appliances do {% data variables.product.prodname_ghe_server %} em uma configuração de alta disponibilidade.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
---
{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

### Informações de conexão do cliente

Como as conexões do cliente com o {% data variables.product.prodname_ghe_server %} vêm do balanceador de carga, pode ocorrer a perda do endereço IP do cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### Habilitar o suporte de protocolo PROXY na {% data variables.product.product_location %}

É altamente recomendável ativar o suporte de protocolo PROXY para o appliance e o balanceador de carga. Use as instruções do fornecedor para habilitar o protocolo PROXY no balanceador de carga. Para obter mais informações, consulte a [documentação do protocolo PROXY](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt).

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Em **External load balancers** (Balanceadores de carga externos), selecione **Enable support for PROXY protocol** (Habilitar suporte do protocolo PROXY). ![Caixa de seleção para habilitar o suporte do protocolo PROXY](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### Habilitar o suporte X-Forwarded-For na {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% data reusables.enterprise_installation.terminating-tls %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Em **External load balancers** (Balanceadores de carga externos), selecione **Allow HTTP X-Forwarded-For header** (Habilitar header HTTP X-Forwarded-For). ![Caixa de seleção para permitir o header HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

### Configurar verificações de integridade

As verificações de integridade permitem que um balanceador de carga pare de enviar tráfego para um nó que não responde em caso de falha na verificação pré-configurada do nó em questão. Se o appliance estiver offline devido a manutenção ou falha inesperada, o balanceador de carga poderá exibir uma página de status. Em configurações de alta disponibilidade (HA), é possível usar balanceadores de carga como parte da estratégia de failover. No entanto, não há suporte para failover automático de pares de HA. Promova manualmente o appliance réplica antes que ele comece a atender a solicitações. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}
