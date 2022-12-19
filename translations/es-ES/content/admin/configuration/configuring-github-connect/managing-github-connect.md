---
title: Administrar GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'Puedes habilitar {% data variables.product.prodname_github_connect %} para que acceda a las características y flujos de trabajo adicionales para {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160658'
---
{% data reusables.github-connect.beta %}

## Acerca de {% data variables.product.prodname_github_connect %}

Puedes acceder a las características y flujos de trabajo adicionales de {% data variables.location.product_location %} si habilitas {% data variables.product.prodname_github_connect %}. Para más información, vea "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

Cuando habilitas {% data variables.product.prodname_github_connect %}, configuras una conexión entre {% data variables.location.product_location %} y una organización o cuenta empresarial en {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

El Habilitar {% data variables.product.prodname_github_connect %} crea una {% data variables.product.prodname_github_app %} que pertenece a la cuenta de organización o de empresa de {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} usa las credenciales de {% data variables.product.prodname_github_app %} para realizar solicitudes a {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} almacena las credenciales de {% data variables.product.prodname_github_app %}. Las siguientes credenciales se replicarán en todos los nodos en un ambiente de clúster o de disponibilidad alta y se almacenarán en cualquier respaldo, incluyendo las capturas de pantalla que crea {% data variables.product.prodname_enterprise_backup_utilities %}.
- Un token de autenticación, que es válido durante una hora
- Una clave privada, que se usa para generar un nuevo token de autenticación {% endif %}

## Prerrequisitos

Para utilizar {% data variables.product.prodname_github_connect %}, debes tener una cuenta de organización o de empresa en {% data variables.product.prodname_dotcom_the_website %} que utilice {% data variables.product.prodname_ghe_cloud %}. Puede que ya hayas incluido a {% data variables.product.prodname_ghe_cloud %} en tu plan,. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} Si su cuenta de organización o empresa de {% data variables.product.prodname_dotcom_the_website %} usa listas de direcciones IP permitidas, debe agregar la dirección IP o la red de {% data variables.location.product_location %} a su lista de IP permitidas en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Administración de direcciones IP permitidas para la organización](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" y "[Aplicación de directivas para la configuración de seguridad en la empresa
](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.

Para configurar una conexión, la configuración de proxy debe permitir la conectividad a `github.com`, `api.github.com` y `uploads.github.com`. Para obtener más información, consulte "[Configuración de un servidor proxy web de salida](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)".
{% endif %}

## Habilitar {% data variables.product.prodname_github_connect %}

Los propietarios de empresa que también son propietarios de una cuenta de empresa u organización que utiliza {% data variables.product.prodname_ghe_cloud %} pueden habilitar {% data variables.product.prodname_github_connect %}.

Si estás conectando a {% data variables.location.product_location %} a una organización en {% data variables.product.prodname_ghe_cloud %} que no le pertenezca a una cuenta empresarial, debes iniciar sesión en {% data variables.product.prodname_dotcom_the_website %} como propietario de organización.

Si estás conectando {% data variables.location.product_location %} a una organización de {% data variables.product.prodname_ghe_cloud %} que le pertenezca a una cuenta empresarial o si la conectas a la cuenta empresarial misma, deberás iniciar sesión en {% data variables.product.prodname_dotcom_the_website %} como propietario de empresa.

{% ifversion ghes %}
1. Inicia sesión en {% data variables.location.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Inicia sesión en {% data variables.location.product_location %} y {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. En "{% data variables.product.prodname_github_connect %} aún no está habilitado", haga clic en **Habilitar {% data variables.product.prodname_github_connect %}** . Al hacer clic en **Habilitar datos {% data variables.product.prodname_github_connect %}** , acepta los <a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">términos "{% data variables.product.prodname_dotcom %} términos para productos y características adicionales</a>".
{% ifversion ghes %} ![Botón Enable GitHub Connect (Habilitar GitHub Connect)](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![Botón Enable GitHub Connect (Habilitar GitHub Connect)](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. Junto a la cuenta de empresa u organización a la que quiere conectarse, haga clic en **Connect** (Conectar).
  ![Botón Connect (Conectar) junto a una cuenta de empresa o un negocio](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Deshabilitación de {% data variables.product.prodname_github_connect %}

Los propietarios de empresas pueden inhabilitar {% data variables.product.prodname_github_connect %}.

Cuando te desconectas de {% data variables.product.prodname_ghe_cloud %}, la {% data variables.product.prodname_github_app %} de {% data variables.product.prodname_github_connect %} se borra de tu cuenta empresarial u organización, así como las credenciales almacenadas en {% data variables.location.product_location %}.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Junto a la cuenta de empresa u organización a la que quiere desconectar, haga clic en **Deshabilitar {% data variables.product.prodname_github_connect %}** .
{% ifversion ghes %} ![Botón Disable GitHub Connect (Deshabilitar GitHub Connect) junto al nombre de la organización o de la cuenta de empresa](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lee la información sobre la desconexión y haga clic en **Deshabilitar {% data variables.product.prodname_github_connect %}** .
  ![Ventana modal con información de advertencia sobre la desconexión y con el botón de confirmación](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Botón Disable GitHub Connect (Deshabilitar GitHub Connect) junto al nombre de la organización o de la cuenta de empresa](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lee la información sobre la desconexión y haga clic en **Deshabilitar {% data variables.product.prodname_github_connect %}** .
  ![Ventana modal con información de advertencia sobre la desconexión y con el botón de confirmación](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
