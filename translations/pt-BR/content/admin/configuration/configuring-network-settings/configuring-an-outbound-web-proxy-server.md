---
title: Configurando um servidor proxy Web de saída
intro: 'Um servidor proxy fornece um nível adicional de segurança para o {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 4285f24dd45d127efec4ace66729bf6fd1f188c5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875481'
---
## Sobre proxies com {% data variables.product.product_name %}

Quando um servidor proxy está habilitado para o {% data variables.product.product_location %}, as mensagens de saída enviadas pelo {% data variables.product.prodname_ghe_server %} são enviadas pela primeira vez por meio do servidor proxy, a menos que o host de destino seja adicionado como uma exclusão de proxy HTTP. Os tipos de mensagens de saída incluem webhooks de saída, pacotes para upload e fetch de avatares herdados. A URL do servidor proxy é o protocolo, o domínio ou o endereço IP, além do número da porta, por exemplo, `http://127.0.0.1:8123`.

{% note %}

**Observação:** para conectar o {% data variables.product.product_location %} ao {% data variables.product.prodname_dotcom_the_website %}, a configuração de proxy precisa permitir a conectividade a `github.com` e a `api.github.com`. Para obter mais informações, confira "[Como conectar sua conta corporativa ao {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

{% endnote %}

{% data reusables.actions.proxy-considerations %} Para obter mais informações sobre como usar o {% data variables.product.prodname_actions %} com o {% data variables.product.prodname_ghe_server %}, confira "[Introdução ao {% data variables.product.prodname_actions %} para o {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

## Configurando um servidor proxy Web de saída

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. Em **Servidor Proxy HTTP**, digite a URL do servidor proxy.
  ![Campo usado para digitar a URL do Servidor Proxy HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. Opcionalmente, em **Exclusão de Proxy HTTP**, digite todos os hosts que não exigem acesso de proxy, separando os hosts com vírgulas. Para excluir todos os hosts em um domínio da exigência do acesso de proxy, use `.` como um prefixo curinga.  Por exemplo: `.octo-org.tentacle`
  ![campo para digitar as exclusões de proxy HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
