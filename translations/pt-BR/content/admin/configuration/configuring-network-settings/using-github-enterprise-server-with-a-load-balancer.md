---
title: Usar o GitHub Enterprise Server com balanceador de carga
intro: 'Use um balanceador de carga na frente de uma única instância {% data variables.product.prodname_ghe_server %} ou um par de instâncias em uma configuração de alta disponibilidade.'
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
shortTitle: Use a load balancer
ms.openlocfilehash: dcbd1261d127e48140f6b6843ef4ec3c35fb84f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167312'
---
## Sobre balanceadores de carga

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Informações de conexão do cliente

Como as conexões do cliente com o {% data variables.product.prodname_ghe_server %} vêm do balanceador de carga, pode ocorrer a perda do endereço IP do cliente.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Como habilitar o suporte ao protocolo PROXY no {% data variables.product.product_location %}

É altamente recomendável ativar o suporte ao protocolo PROXY para sua instância e o balanceador de carga. Use as instruções do fornecedor para habilitar o protocolo PROXY no balanceador de carga. Para obter mais informações, confira a [documentação do protocolo PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Em **Balanceadores de carga externos**, selecione **Habilitar suporte para o protocolo PROXY**.
![Caixa de seleção usada para habilitar o suporte para o protocolo PROXY](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Como habilitar o suporte a X-Forwarded-For no {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Aviso**: se você configurar o suporte do `X-Forwarded-For` no {% data variables.product.product_location %} e balanceador de carga, talvez não consiga se conectar ao {% data variables.enterprise.management_console %}. Para ver mais informações, confira "[Erro: "Sua sessão expirou" para conexões com os dados {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)".

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Em **Balanceadores de carga externos**, selecione **Permitir cabeçalho HTTP X-Forwarded-For**.
![Caixa de seleção usada para permitir o cabeçalho HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configurar verificações de integridade

As verificações de integridade permitem que um balanceador de carga pare de enviar tráfego para um nó que não responde em caso de falha na verificação pré-configurada do nó em questão. Se a instância estiver offline devido a manutenção ou falha inesperada, o balanceador de carga poderá exibir uma página de status. Em configurações de alta disponibilidade (HA), é possível usar balanceadores de carga como parte da estratégia de failover. No entanto, não há suporte para failover automático de pares de HA. Você deve promover manualmente a instância de réplica antes que ela comece a atender às solicitações. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Solução de problemas de conectividade por meio de um balanceador de carga

Se você não conseguiu se conectar aos serviços do {% data variables.product.product_location %} por meio de um balanceador de carga, examine as informações a seguir para solucionar o problema.

{% note %}

**Observação**: sempre teste as alterações na sua infraestrutura de rede e na configuração da instância em um ambiente de preparo. Para obter mais informações, confira "[Como configurar uma instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

{% endnote %}

### Erro: "Sua sessão expirou" para conexões com {% data variables.enterprise.management_console %}

Se você habilitar o suporte para o cabeçalho `X-Forwarded-For` em sua instância e balanceador de carga, talvez não consiga acessar o {% data variables.enterprise.management_console %} de sua instância. Para ver mais informações sobre o {% data variables.enterprise.management_console %} e portas exigidas nas conexões, confira "[Como acessar o console de gerenciamento](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" e "[Portas de rede](/admin/configuration/configuring-network-settings/network-ports)".

Se {% data variables.product.product_location %} indicar que sua sessão expirou quando você se conectar a {% data variables.enterprise.management_console %} por meio de um balanceador de carga, tente uma das seguintes configurações em seu balanceador de carga.

- Desabilite os cabeçalhos de `X-Forwarded-For` para conexões com sua instância nas portas 8080 e 8443.
- Configure o balanceador de carga para operar na Camada 4 e use o protocolo PROXY em vez de `X-Forwarded-For` para passagem de endereços IP do cliente. Para saber mais, confira "[Habilitar o suporte ao protocolo PROXY no {% data variables.product.product_location %}](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)".

Para ver mais informações, confira a documentação do balanceador de carga.

### Atualizações dinâmicas de problemas e verificações que não funcionam

Quando {% data variables.product.product_location %} é acessado por meio de um balanceador de carga ou proxy reverso, as atualizações dinâmicas esperadas, como novos comentários sobre problemas e alterações nos selos de notificação ou saída de execução de verificação, podem não ser exibidas até que a página seja atualizada. Isso é mais comum quando o proxy reverso ou o balanceador de carga está sendo executado em um modo de camada 7 ou não oferece suporte ao protocolo [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) necessário. 

Para habilitar atualizações dinâmicas, talvez seja necessário reconfigurar o balanceador de carga ou o proxy. Para ver mais informações, confira a documentação do balanceador de carga.
