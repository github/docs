---
title: Configuración de un servidor proxy web de salida
intro: 'Un servidor proxy proporciona otro nivel de seguridad para {% data variables.product.product_location %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878388'
---
## Acerca de los proxies con {% data variables.product.product_name %}

Cuando se habilita un servidor proxy para {% data variables.product.product_location %}, primero {% data variables.product.prodname_ghe_server %} envía mensajes fuera de banda a través del servidor proxy, a menos que el host de destino se agregue como una exclusión de servidor proxy HTTP. Los tipos de mensajes fuera de banda incluyen webhooks salientes, carga de paquetes y extracción de avatares heredados. La URL del servidor proxy es el protocolo, dominio o dirección
IP más el número de puerto, por ejemplo, `http://127.0.0.1:8123`.

{% note %}

**Nota:**  Para conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}, la configuración del proxy debe permitir la conectividad con `github.com` y `api.github.com`. Para obtener más información, consulte "[Conexión de la cuenta empresarial con {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

{% endnote %}

{% data reusables.actions.proxy-considerations %} Para obtener más información sobre el uso de {% data variables.product.prodname_actions %} con {% data variables.product.prodname_ghe_server %}, consulte "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

## Configuración de un servidor proxy web de salida

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. En **HTTP Proxy Server**, escriba la dirección URL del servidor proxy.
  ![Campo para escribir la URL del servidor proxy HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. De manera opcional, en **HTTP Proxy Exclusion**, escriba cualquier host que no exija acceso al proxy, separando los hosts con comas. Para excluir a todos los hosts en un dominio de que requieran acceso al proxy, puede utilizar `.` como prefijo de comodín.  Por ejemplo: `.octo-org.tentacle`
  ![Campo para escribir exclusiones de proxy HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
