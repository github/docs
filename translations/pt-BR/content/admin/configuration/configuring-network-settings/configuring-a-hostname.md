---
title: Configurar nome de host
intro: 'Em vez de usar um endereço IP codificado, é recomendável definir um nome de host para o seu appliance.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 120827f8eca8061d90d397a7e2a21d46ae33f243
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '146681314'
---
Se você configurar um nome do host em vez de um endereço IP embutido em código, poderá alterar o hardware físico em que o {% data variables.product.product_location %} é executado sem afetar os usuários nem o software cliente.

A configuração do nome de host no {% data variables.enterprise.management_console %} deve ser definida como um nome de domínio totalmente qualificado (FQDN) que seja resolvido na internet ou dentro da sua rede interna. Por exemplo, sua configuração de nome do host pode ser `github.companyname.com.` na Web, e as solicitações de API redirecionarão automaticamente para o nome do host configurado no {% data variables.enterprise.management_console %}. Observe que `localhost` não é uma configuração de nome de host válida.

Depois de configurar um nome do host, você pode habilitar o isolamento de subdomínio para aumentar ainda mais a segurança do {% data variables.product.product_location %}. Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".

Para obter mais informações sobre os tipos de nomes do host compatíveis, confira a [Seção 2.1 do RFC HTTP](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Digite o nome do host que deseja definir para o {% data variables.product.product_location %}.
  ![Campo usado para definir um nome do host](/assets/images/enterprise/management-console/hostname-field.png)
5. Para testar as configurações de DNS e SSL para o novo nome do host, clique em **Testar configurações de domínio**.
  ![Botão Testar configurações de domínio](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

Para ajudar a atenuar várias vulnerabilidades de cross-site scripting, recomendamos que você habilite o isolamento de subdomínio para o {% data variables.product.product_location %} depois de configurar um nome do host. Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".
