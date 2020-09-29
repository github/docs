---
title: Configuração de rede de cluster
intro: 'O funcionamento correto do clustering do {% data variables.product.prodname_ghe_server %} depende da resolução adequada de nome DNS, do balanceamento de carga e da comunicação entre os nós.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
versions:
  enterprise-server: '*'
---

### Considerações de rede

A composição de rede mais simples para o clustering é deixar os nós em uma única LAN. Se um cluster abranger sub-redes, não recomendamos configurar quaisquer regras de firewall entre as redes. A latência entre os nós deve ser inferior a 1 milissegundo.

{% if currentVersion ver_gt "enterprise-server@2.21" %}Para alta disponibilidade, a latência entre a rede com os nós ativos e a rede com os nós passivos deve ser inferior a 70 milissegundos. Não recomendamos configurar um firewall entre as duas redes.{% endif %}

#### Portas de aplicativo para usuários finais

As portas de aplicativo fornecem aplicativos da web e acesso dos usuários finais ao Git.

| Porta    | Descrição                                                                 | Criptografia                                                         |
|:-------- |:------------------------------------------------------------------------- |:-------------------------------------------------------------------- |
| 22/TCP   | Git em SSH                                                                | Sim                                                                  |
| 25/TCP   | SMTP                                                                      | Requer STARTTLS                                                      |
| 80/TCP   | HTTP                                                                      | Não<br>(com SSL habilitado, essa porta redireciona para HTTPS) |
| 443/TCP  | HTTPS                                                                     | Sim                                                                  |
| 9418/TCP | Porta de protocolo simples do Git<br>(desabilitada no modo privado) | Não                                                                  |

#### Portas administrativas

Não é preciso haver portas administrativas para os usuários finais aproveitarem os recursos básicos do aplicativo.

| Porta    | Descrição                         | Criptografia                                                         |
|:-------- |:--------------------------------- |:-------------------------------------------------------------------- |
| ICMP     | Ping ICMP                         | Não                                                                  |
| 122/TCP  | SSH administrativa                | Sim                                                                  |
| 161/UDP  | SNMP                              | Não                                                                  |
| 8080/TCP | HTTP de console de gerenciamento  | Não<br>(com SSL habilitado, essa porta redireciona para HTTPS) |
| 8443/TCP | HTTPS de console de gerenciamento | Sim                                                                  |

#### Portas de comunicação de cluster

Se houver um firewall no nível da rede entre os nós, essas portas terão que estar acessíveis. A comunicação entre os nós não é criptografada, e essas portas não devem ficar acessíveis externamente.

| Porta     | Descrição                             |
|:--------- |:------------------------------------- |
| 1336/TCP  | API interna                           |
| 3033/TCP  | Acesso SVN interno                    |
| 3037/TCP  | Acesso SVN interno                    |
| 3306/TCP  | MySQL                                 |
| 4486/TCP  | Acesso do controlador                 |
| 5115/TCP  | Backend de armazenamento              |
| 5208/TCP  | Acesso SVN interno                    |
| 6379/TCP  | Redis                                 |
| 8001/TCP  | Grafana                               |
| 8090/TCP  | Acesso GPG interno                    |
| 8149/TCP  | Acesso GitRPC ao servidor de arquivos |
| 8300/TCP  | Consul                                |
| 8301/TCP  | Consul                                |
| 8302/TCP  | Consul                                |
| 9000/TCP  | Git Daemon                            |
| 9102/TCP  | Servidor de arquivos do Pages         |
| 9105/TCP  | Servidor LFS                          |
| 9200/TCP  | ElasticSearch                         |
| 9203/TCP  | Serviço de código semântico           |
| 9300/TCP  | ElasticSearch                         |
| 11211/TCP | Memcache                              |
| 161/UDP   | SNMP                                  |
| 8125/UDP  | Statsd                                |
| 8301/UDP  | Consul                                |
| 8302/UDP  | Consul                                |
| 25827/UDP | Collectd                              |


### Configurar um balanceador de carga

 É recomendável usar um balanceador de carga baseado em TCP compatível com o protocolo PROXY para distribuir o tráfego entre os nós. Veja estas configurações de balanceador de carga:

 - Portas TCP (abaixo) devem ser encaminhadas para nós que executem o serviço `web-server`; são os únicos nós que funcionam com solicitações de clientes externos.
 - Sessões temporárias não devem ser habilitadas.

{% data reusables.enterprise_installation.terminating-tls %}

### Informações de conexão do cliente

Como as conexões do cliente com o cluster vêm do balanceador de carga, pode ocorrer a perda do endereço IP do cliente. Para captar as informações de conexão do cliente de maneira adequada, é preciso fazer considerações adicionais.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### Habilitar o suporte PROXY no {% data variables.product.prodname_ghe_server %}

É altamente recomendável ativar o suporte PROXY para sua instância e o balanceador de carga.

 - Na instância, use este comando:
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - No balanceador de carga, siga as instruções do seu fornecedor.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### Habilitar o suporte X-Forwarded-For no {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

Para habilitar o header `X-Fowarded-For`, use este comando:

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

#### Configurar verificações de integridade
As verificações de integridade permitem que um balanceador de carga pare de enviar tráfego para um nó que não responde em caso de falha na verificação pré-configurada do nó em questão. Em caso de falha em um nó do cluster, as verificações de integridade emparelhadas com nós redundantes fornecerão alta disponibilidade.

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

### Requisitos de DNS

{% data reusables.enterprise_clustering.load_balancer_dns %}
