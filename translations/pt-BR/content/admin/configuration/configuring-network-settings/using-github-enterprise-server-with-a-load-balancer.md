---
title: Usar o GitHub Enterprise Server com balanceador de carga
intro: 'Use um balanceador de carga na frente de uma única instância de {% data variables.product.prodname_ghe_server %} ou um par de instâncias em uma configuração de alta disponibilidade.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use um balanceador de carga
---

## Sobre balanceadores de carga

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Informações de conexão do cliente

Como as conexões do cliente com o {% data variables.product.prodname_ghe_server %} vêm do balanceador de carga, pode ocorrer a perda do endereço IP do cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Habilitar o suporte de protocolo PROXY na {% data variables.product.product_location %}

É altamente recomendável habilitar o suporte ao protocolo PROXY tanto para sua instância quanto para o balanceamento de carga. Use as instruções do fornecedor para habilitar o protocolo PROXY no balanceador de carga. Para obter mais informações, consulte a [documentação do protocolo PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Em **External load balancers** (Balanceadores de carga externos), selecione **Enable support for PROXY protocol** (Habilitar suporte do protocolo PROXY). ![Caixa de seleção para habilitar o suporte do protocolo PROXY](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Habilitar o suporte X-Forwarded-For na {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Aviso**: Se você configurar o suporte de `X-Forwarded-For` no balanceador de carga de {% data variables.product.product_location %}, talvez você não consiga se conectar ao {% data variables.enterprise.management_console %}. Para obter mais informações, consulte "[Erro: "Sua sessão venceu" para conexões com o {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Em **External load balancers** (Balanceadores de carga externos), selecione **Allow HTTP X-Forwarded-For header** (Habilitar header HTTP X-Forwarded-For). ![Caixa de seleção para permitir o header HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configurar verificações de integridade

As verificações de integridade permitem que um balanceador de carga pare de enviar tráfego para um nó que não responde em caso de falha na verificação pré-configurada do nó em questão. Se a instância estiver off-line devido a manutenção ou falha inesperada, o balanceador de carga poderá exibir uma página de status. Em configurações de alta disponibilidade (HA), é possível usar balanceadores de carga como parte da estratégia de failover. No entanto, não há suporte para failover automático de pares de HA. Você deve promover manualmente a instância da réplica antes que ela comece a atender a pedidos. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Solucionando problemas de conectividade através de um balanceador de carga

Se você não puder se conectar aos serviços em {% data variables.product.product_location %} através de um balanceador de carga, você poderá revisar as seguintes informações para solucionar o problema.

{% note %}

**Observação**: Sempre teste alterações na sua infraestrutura de rede e configuração de instância em um ambiente de preparo. Para obter mais informações, consulte "[Configurar instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

{% endnote %}

### Erro: "Sua sessão venceu" para conexões com o {% data variables.enterprise.management_console %}

Se você habilitar o suporte para o header `X-Forwarded-For` na sua instância no balanceamento de carga, talvez você não consiga acessar sua instância de {% data variables.enterprise.management_console %}. Para obter mais informações sobre o {% data variables.enterprise.management_console %} e as portas necessárias para conexões, consulte "[Acessando o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" e "[Portas de rede](/admin/configuration/configuring-network-settings/network-ports)".

Se {% data variables.product.product_location %} indica que a sua sessão venceu quando você se conectou ao {% data variables.enterprise.management_console %} através de um balanceador de carga, experimente uma das seguintes configurações no seu balanceador de carga.

- Desabilite os headers `X-Forwarded-For` para conexões para sua instância nas portas 8080 e 8443.
- Configure o seu balanceador de carga para ser operado no Layer 4 e use o protocolo PROXY em vez de `X-Forwarded-For` para passagem de endereços IP do cliente. Para obter mais informações, consulte "[Habilitando o suporte ao protocolo PROXY em {% data variables.product.product_location %} ](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)."

Para obter mais informações, consulte a documentação do seu balanceador de carga.

### Live updates to issues and check runs not working

When {% data variables.product.product_location %} is accessed via a load balancer or reverse proxy, expected live updates, such as new comments on issues and changes in notification badges or check run output, may not display until the page is refreshed. This is most common when the reverse proxy or load balancer is running in a layer 7 mode or does not support the required [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) protocol.

To enable live updates, you may need to reconfigure the load balancer or proxy. Para obter mais informações, consulte a documentação do seu balanceador de carga.
