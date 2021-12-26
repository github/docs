---
title: Restringir el tráfico de red en tu empresa
shortTitle: Restringir el tráfico de red
intro: Puedes utilizar una lista de IP permitidas para restringir el acceso de conexiones de IP específicas a tu empresa.
versions:
  github-ae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
---

### Acerca de las listas de IP permitidas

Predeterminadamente, los usuarios autorizados pueden acceder a tu empresa desde cualquier dirección IP. Los propietarios de empresa pueden restringir el acceso a los activos que pertenezcan a las organizaciones dentro de la cuenta empresarial mediante la configuración de una lista de direcciones IP permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

También puedes configurar las direcciones IP permitidas para una organización individual. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

Predeterminadamente, las reglas del grupo de seguridad de redes (NSG) de Azure dejan todo el tráfico entrante abierto en los puertos 22, 80, 443 y 25. Los propietarios de las empresas pueden contactar a {% data variables.contact.github_support %} para configurar las restricciones de acceso para tu instancia.

Para las restricciones a nivel de instancia que utilizan los NSG de Azure, contacta a {% data variables.contact.github_support %} enviando las direcciones IP que deberán poder acceder a tu instancia empresarial. Especifica los rangos de direcciones utilizando el formato estándar de CIDR (Enrutamiento sin Clases entre Dominios, por sus siglas en inglés). {% data variables.contact.github_support %} configurará las reglas de cortafuegos adecuadas para que tu empresa restrinja el acceso por HTTP, SSH, HTTPS, y SMTP. Para obtener más información, consulta la sección "[Recibir ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

### Agregar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Habilitar direcciones IP permitidas

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Haz clic en **Save ** (guardar).

### Editar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Da clic en **Actualizar**.

### Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.github-actions.ip-allow-list-hosted-runners %}
