---
title: Portas de rede
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Abra as portas de rede seletivamente com base nos serviços que você precisa expor para administradores, usuários finais e suporte por e-mail.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160647'
---
## Portas administrativas

Algumas portas administrativas precisam configurar o {% data variables.location.product_location %} e executar determinados recursos. Não é preciso haver portas administrativas para os usuários finais aproveitarem os recursos básicos do aplicativo.

| Porta | Serviço | Descrição |
|---|---|---|
| 8443 | HTTPS | {% data variables.enterprise.management_console %} seguro na web. Obrigatória para instalação e configuração básicas. |
| 8080 | HTTP | {% data variables.enterprise.management_console %} de texto simples na web. Não é obrigatória, a menos que o TSL seja desabilitado manualmente. |
| 122 | SSH | Acesso de shell ao {% data variables.location.product_location %}. Obrigatório para estar aberto a conexões de entrada entre todos os nós em uma configuração de alta disponibilidade. A porta SSH padrão (22) é dedicada ao tráfego de rede de aplicativos Git e SSH. |
| 1194/UDP | VPN | Túnel de rede de réplica segura na configuração de alta disponibilidade. Obrigatório estar aberto para a comunicação entre todos os nós da configuração.|
| 123/UDP| NTP | Obrigatória para operações de protocolo de tempo. |
| 161/UDP | SNMP | Obrigatória para operações de protocolo de monitoramento de rede. |

## Portas de aplicativo para usuários finais

As portas de aplicativo fornecem aplicativos da web e acesso dos usuários finais ao Git.

| Porta | Serviço | Descrição |
|---|---|---|
| 443 | HTTPS | Acesso ao aplicativo da web e ao Git por HTTPS. |
| 80 | HTTP | Acesso ao aplicativo da web. Todas as solicitações são redirecionadas para a porta HTTPS se o TLS estiver configurado. |
| 22 | SSH | Acesso ao Git por SSH. Compatível com operações de clonagem, fetch e push em repositórios públicos e privados. |
| 9418 | Git | A porta do protocolo Git é compatível com operações de clonagem e fetch em repositórios públicos com comunicação de rede não criptografada. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## Portas de e-mail

As portas de e-mail devem estar acessíveis diretamente ou via retransmissão para oferecer suporte de e-mail aos usuários finais.

| Porta | Serviço | Descrição |
|---|---|---|
| 25 | SMTP | Suporte a SMTP com criptografia (STARTTLS). |

## Portas de {% data variables.product.prodname_actions %}

As portas do {% data variables.product.prodname_actions %} precisam estar acessíveis para os executores auto-hospedados se conectarem ao {% data variables.location.product_location %}. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)".

| Porta | Serviço | Descrição |
|---|---|---|
| 443 | HTTPS | Os executores auto-hospedados se conectam ao {% data variables.location.product_location %} para receber atribuições de trabalho e baixar as novas versões do aplicativo do executor. Obrigatório se TLS estiver configurado.
| 80 | HTTP | Os executores auto-hospedados se conectam ao {% data variables.location.product_location %} para receber atribuições de trabalho e baixar as novas versões do aplicativo do executor. Obrigatório se TLS não estiver configurado.

Se você habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %}, o {% data variables.product.prodname_actions %} sempre pesquisará uma ação no {% data variables.location.product_location %} primeiro, por meio dessas portas, antes de verificar o {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)".

## Portas do {% data variables.product.prodname_github_connect %}

Se você habilitar o {% data variables.product.prodname_github_connect %}, a conexão entre o {% data variables.product.product_name %} e o {% data variables.product.prodname_dotcom_the_website %} usará HTTPS nas portas 443 ou 80 e o TLS será necessário. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

## Leitura adicional

- "[Como configurar o TLS](/admin/configuration/configuring-network-settings/configuring-tls)"
