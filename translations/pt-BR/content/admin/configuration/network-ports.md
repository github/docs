---
title: Portas de rede
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
intro: 'Abra as portas de rede seletivamente com base nos serviços que você precisa expor para administradores, usuários finais e suporte por e-mail.'
versions:
  enterprise-server: '*'
---

### Portas administrativas

Certas portas administrativas são obrigatórias para configurar a {% data variables.product.product_location_enterprise %} e executar determinados recursos. Não é preciso haver portas administrativas para os usuários finais aproveitarem os recursos básicos do aplicativo.

| Porta    | Serviço | Descrição                                                                                                                                                                                                                                                                               |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8443     | HTTPS   | {% data variables.enterprise.management_console %} seguro na web. Obrigatória para instalação e configuração básicas.                                                                                                                                                              |
| 8080     | HTTP    | {% data variables.enterprise.management_console %} de texto simples na web. Não é obrigatória, a menos que o SSL seja desativado manualmente.                                                                                                                                      |
| 122      | SSH     | Acesso de shell à {% data variables.product.product_location_enterprise %}. É obrigatório ficar aberta para conexões de entrada de todos os outros nós em configurações de Alta Disponibilidade. A porta SSH padrão (22) é dedicada ao tráfego de rede de aplicativos Git e SSH. |
| 1194/UDP | VPN     | Túnel de rede de replicação segura em configurações de Alta Disponibilidade. É obrigatório ficar aberta para todos os outros nós na configuração.                                                                                                                                       |
| 123/UDP  | NTP     | Obrigatória para operações de protocolo de tempo.                                                                                                                                                                                                                                       |
| 161/UDP  | SNMP    | Obrigatória para operações de protocolo de monitoramento de rede.                                                                                                                                                                                                                       |

### Portas de aplicativo para usuários finais

As portas de aplicativo fornecem aplicativos da web e acesso dos usuários finais ao Git.

| Porta | Serviço | Descrição                                                                                                                                   |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 443   | HTTPS   | Acesso ao aplicativo da web e ao Git por HTTPS.                                                                                             |
| 80    | HTTP    | Acesso ao aplicativo da web. Todas as solicitações são redirecionadas para a porta HTTPS quando o SSL está ativado.                         |
| 22    | SSH     | Acesso ao Git por SSH. Compatível com operações de clonagem, fetch e push em repositórios públicos e privados.                              |
| 9418  | Git     | A porta do protocolo Git é compatível com operações de clonagem e fetch em repositórios públicos com comunicação de rede não criptografada. |

{% data reusables.enterprise_installation.terminating-tls %}

### Portas de e-mail

As portas de e-mail devem estar acessíveis diretamente ou via retransmissão para oferecer suporte de e-mail aos usuários finais.

| Porta | Serviço | Descrição                                   |
| ----- | ------- | ------------------------------------------- |
| 25    | SMTP    | Suporte a SMTP com criptografia (STARTTLS). |
