---
title: Restricción del tráfico de red a la empresa con una lista de direcciones IP permitidas
shortTitle: Restricting network traffic
intro: Puedes restringir el acceso a tu empresa y permitir solo el acceso a los recursos desde direcciones IP especificadas mediante una lista de direcciones IP permitidas.
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 8511499e723fdeb4a2d24c2fce627bce56ad9777
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191898'
---
## Acerca de las restricciones de tráfico de red

Predeterminadamente, los usuarios autorizados pueden acceder a tu empresa desde cualquier dirección IP. Puedes restringir el acceso a los recursos {% ifversion ghec %}que pertenezcan a las organizaciones dentro de la cuenta empresarial {% endif %}mediante la configuración de una lista de direcciones IP permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

Si tu empresa usa {% data variables.product.prodname_emus %} con Azure AD y OIDC, puedes elegir si quieres usar la lista de direcciones IP permitidas de {% data variables.product.company_short %} o usar las restricciones de lista de permitidos para el proveedor de identidades (IdP). Si tu empresa no usa {% data variables.product.prodname_emus %} con Azure y OIDC, puedes usar la característica de lista de permitidos de {% data variables.product.company_short %}. 

{% elsif ghae %}

Predeterminadamente, las reglas del grupo de seguridad de redes (NSG) de Azure dejan todo el tráfico entrante abierto en los puertos 22, 80, 443 y 25. Puedes ponerte en contacto con {% data variables.contact.github_support %} para configurar restricciones de acceso para {% data variables.product.product_name %}.

Para las restricciones que utilizan los NSG de Azure, contacta a {% data variables.contact.github_support %} enviando las direcciones IP que deberán poder acceder a {% data variables.product.product_name %}. Especifica los rangos de direcciones utilizando el formato estándar de CIDR (Enrutamiento sin Clases entre Dominios, por sus siglas en inglés). {% data variables.contact.github_support %} configurará las reglas de cortafuegos adecuadas para restringir el acceso por HTTP, SSH, HTTPS, y SMTP. Para más información, vea "[Recepción de ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

{% endif %}

{% ifversion ghec %}

## Acerca de la lista de direcciones IP permitidas de {% data variables.product.company_short %}

Puedes usar la lista de direcciones IP permitidas de {% data variables.product.company_short %} para controlar el acceso a la empresa y a los recursos que pertenecen a las organizaciones de tu empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## Acerca de la lista de permitidos del proveedor de identidades

Si usas {% data variables.product.prodname_emus %} con Azure AD y OIDC, puedes usar la lista de permitidos del proveedor de identidades.

El uso de la lista de permitidos del proveedor de identidades desactiva las configuraciones de la lista de direcciones IP permitidas de {% data variables.product.company_short %} para todas las organizaciones de tu empresa y desactiva las API de GraphQL para habilitar y administrar listas de direcciones IP permitidas. 

De forma predeterminada, el proveedor de identidades ejecuta el CAP en el inicio de sesión interactivo de SAML o OIDC inicial a {% data variables.product.company_short %} para cualquier configuración de lista de direcciones IP permitidas que elijas.

El CAP de OIDC solo se aplica a las solicitudes a la API mediante un token de usuario a servidor, como un token para un {% data variables.product.prodname_oauth_app %} o un {% data variables.product.prodname_github_app %} que actúa en nombre de un usuario. El CAP de OIDC no se aplica cuando un {% data variables.product.prodname_github_app %} usa un token de servidor a servidor. Para obtener más información, consulta "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation)" y "[Acerca de la compatibilidad con la directiva de acceso condicional del proveedor de identidades](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)".

Para garantizar un uso sin problemas del CAP de OIDC mientras se sigue aplicando la directiva a los tokens de usuario a servidor, debes copiar todos los intervalos IP de cada {% data variables.product.prodname_github_app %} que la empresa usa en la directiva de proveedor de identidades. 

## Uso de la lista de direcciones IP permitidas de {% data variables.product.company_short %}

### Habilitación de la lista de direcciones IP permitidas de {% data variables.product.company_short %}
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "Lista de direcciones IP permitidas", habilita la lista de direcciones IP permitidas. 
   - Si usas {% data variables.product.prodname_emus %} con OIDC, selecciona el menú desplegable y haz clic en **GitHub**.
      ![Captura de pantalla del menú desplegable que muestra tres opciones de configuración de la lista de direcciones IP permitidas: Deshabilitada, Proveedor de identidades y GitHub](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      Selecciona **Habilitar lista de direcciones IP permitidas**.
      ![Captura de pantalla de la casilla para permitir direcciones IP](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - Si no usas {% data variables.product.prodname_emus %}con OIDC, selecciona **Habilitar lista de direcciones IP permitidas**.
     ![Captura de pantalla de la casilla para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. Haga clic en **Save**(Guardar).

### Agregar una dirección IP permitida

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Editar una dirección IP permitida

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Haga clic en **Update**(Actualizar).
{% data reusables.identity-and-permissions.check-ip-address %}

### Comprobación de permiso para una dirección IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Uso de la lista de permitidos del proveedor de identidades

{% note %}

**Nota:** El uso de la lista de permitidos de IdP solo se admite para {% data variables.product.prodname_emus %} con Azure AD y OIDC. 

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "Lista de direcciones IP permitidas", selecciona la lista desplegable y haz clic en **Proveedor de identidades**.

   ![Captura de pantalla del menú desplegable que muestra tres opciones de configuración de la lista de direcciones IP permitidas: Deshabilitada, Proveedor de identidades y GitHub](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. Opcionalmente, para permitir que los {% data variables.product.company_short %} y {% data variables.product.prodname_oauth_apps %} instalados accedan a la empresa desde cualquier dirección IP, selecciona **Omitir comprobación de proveedor de identidades para aplicaciones**.

   ![Casilla para permitir direcciones IP](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. Haga clic en **Save**(Guardar).

{% endif %}

{% ifversion ghae %}

## Habilitar direcciones IP permitidas

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "IP allow list", seleccione **Enable IP allow list**.
  ![Casilla para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Haga clic en **Save**(Guardar).

## Agregar una dirección IP permitida

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Editar una dirección IP permitida

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Haga clic en **Update**(Actualizar).
{% data reusables.identity-and-permissions.check-ip-address %}

## Comprobación de permiso para una dirección IP

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
