---
title: Administrar las direcciones IP permitidas en tu organización
intro: Puedes restringir el acceso a los activos privados de tu organización si configuras una lista de direcciones IP que se pueden conectar a ella.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184032'
---
## Acerca de las direcciones IP permitidas

Puedes restringir el acceso a los recursos privados de la organización configurando un listado de direcciones IP específicas permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**Nota**: Solo las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden usar listas de direcciones IP permitidas. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Si configuras una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que instales en tu organización. El creador de una {% data variables.product.prodname_github_app %} puede configurar una lista de direcciones permitidas para su aplicación, las cuales especifiquen las direcciones IP en las cuales se ejecuta esta. Al heredar la lista de direcciones permitidas en la tuya, estás evitando las solicitudes de conexión de la aplicación que se está rehusando. Para obtener más información, vea "[Habilitación del acceso por {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)".

También puedes configurar las direcciones IP permitidas en el nivel de cuenta empresarial y todas las organizaciones que pertenecen a la empresa heredan las entradas de la lista de permitidos de la cuenta de empresa. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Para más información, consulta "[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

## Agregar una dirección IP permitida

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Habilitar direcciones IP permitidas

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "IP allow list" (Lista de direcciones IP permitidas), seleccione **Enable IP allow list** (Habilitar lista de direcciones IP permitidas).
  ![Casilla para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Haga clic en **Save**(Guardar).

## Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

Si estás utilizando una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que instales en tu organización. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para más información sobre cómo crear una lista de permitidos para una {% data variables.product.prodname_github_app %} que ha creado, vea "[Administración de direcciones IP permitidas para una aplicación de GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "Lista de direcciones IP permitidas", seleccione **Habilitar la configuración de lista de direcciones IP permitidas para las aplicaciones de GitHub instaladas**.
  ![Casilla para permitir las direcciones IP de la aplicación de GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haga clic en **Save**(Guardar).

## Editar una dirección IP permitida

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Haga clic en **Update**(Actualizar).
{% data reusables.identity-and-permissions.check-ip-address %}

## Comprobación de permiso para una dirección IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Eliminar una dirección IP permitida

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
